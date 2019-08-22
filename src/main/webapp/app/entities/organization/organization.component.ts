import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IOrganization } from 'app/shared/model/organization.model';
import { AccountService } from 'app/core';
import { OrganizationService } from './organization.service';

@Component({
  selector: 'jhi-organization',
  templateUrl: './organization.component.html'
})
export class OrganizationComponent implements OnInit, OnDestroy {
  organizations: IOrganization[];
  currentAccount: any;
  eventSubscriber: Subscription;
  currentSearch: string;

  constructor(
    protected organizationService: OrganizationService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected activatedRoute: ActivatedRoute,
    protected accountService: AccountService
  ) {
    this.currentSearch =
      this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search'] ? this.activatedRoute.snapshot.params['search'] : '';
  }

  loadAll() {
    if (this.currentSearch) {
      this.organizationService
        .search({
          query: this.currentSearch
        })
        .pipe(
          filter((res: HttpResponse<IOrganization[]>) => res.ok),
          map((res: HttpResponse<IOrganization[]>) => res.body)
        )
        .subscribe((res: IOrganization[]) => (this.organizations = res), (res: HttpErrorResponse) => this.onError(res.message));
      return;
    }
    this.organizationService
      .query()
      .pipe(
        filter((res: HttpResponse<IOrganization[]>) => res.ok),
        map((res: HttpResponse<IOrganization[]>) => res.body)
      )
      .subscribe(
        (res: IOrganization[]) => {
          this.organizations = res;
          this.currentSearch = '';
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  search(query) {
    if (!query) {
      return this.clear();
    }
    this.currentSearch = query;
    this.loadAll();
  }

  clear() {
    this.currentSearch = '';
    this.loadAll();
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInOrganizations();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IOrganization) {
    return item.id;
  }

  registerChangeInOrganizations() {
    this.eventSubscriber = this.eventManager.subscribe('organizationListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
