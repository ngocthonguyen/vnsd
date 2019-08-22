import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'organization',
        loadChildren: () => import('./organization/organization.module').then(m => m.VnsdOrganizationModule)
      },
      {
        path: 'person',
        loadChildren: () => import('./person/person.module').then(m => m.VnsdPersonModule)
      },
      {
        path: 'organization-employee',
        loadChildren: () => import('./organization-employee/organization-employee.module').then(m => m.VnsdOrganizationEmployeeModule)
      },
      {
        path: 'region',
        loadChildren: () => import('./region/region.module').then(m => m.VnsdRegionModule)
      },
      {
        path: 'country',
        loadChildren: () => import('./country/country.module').then(m => m.VnsdCountryModule)
      },
      {
        path: 'location',
        loadChildren: () => import('./location/location.module').then(m => m.VnsdLocationModule)
      },
      {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.VnsdDepartmentModule)
      },
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then(m => m.VnsdTaskModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./employee/employee.module').then(m => m.VnsdEmployeeModule)
      },
      {
        path: 'job',
        loadChildren: () => import('./job/job.module').then(m => m.VnsdJobModule)
      },
      {
        path: 'job-history',
        loadChildren: () => import('./job-history/job-history.module').then(m => m.VnsdJobHistoryModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VnsdEntityModule {}
