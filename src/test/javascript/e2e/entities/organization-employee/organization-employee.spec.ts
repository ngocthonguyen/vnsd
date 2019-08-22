/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
  OrganizationEmployeeComponentsPage,
  OrganizationEmployeeDeleteDialog,
  OrganizationEmployeeUpdatePage
} from './organization-employee.page-object';

const expect = chai.expect;

describe('OrganizationEmployee e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let organizationEmployeeUpdatePage: OrganizationEmployeeUpdatePage;
  let organizationEmployeeComponentsPage: OrganizationEmployeeComponentsPage;
  let organizationEmployeeDeleteDialog: OrganizationEmployeeDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load OrganizationEmployees', async () => {
    await navBarPage.goToEntity('organization-employee');
    organizationEmployeeComponentsPage = new OrganizationEmployeeComponentsPage();
    await browser.wait(ec.visibilityOf(organizationEmployeeComponentsPage.title), 5000);
    expect(await organizationEmployeeComponentsPage.getTitle()).to.eq('vnsdApp.organizationEmployee.home.title');
  });

  it('should load create OrganizationEmployee page', async () => {
    await organizationEmployeeComponentsPage.clickOnCreateButton();
    organizationEmployeeUpdatePage = new OrganizationEmployeeUpdatePage();
    expect(await organizationEmployeeUpdatePage.getPageTitle()).to.eq('vnsdApp.organizationEmployee.home.createOrEditLabel');
    await organizationEmployeeUpdatePage.cancel();
  });

  it('should create and save OrganizationEmployees', async () => {
    const nbButtonsBeforeCreate = await organizationEmployeeComponentsPage.countDeleteButtons();

    await organizationEmployeeComponentsPage.clickOnCreateButton();
    await promise.all([organizationEmployeeUpdatePage.setRoleInput('role')]);
    expect(await organizationEmployeeUpdatePage.getRoleInput()).to.eq('role', 'Expected Role value to be equals to role');
    await organizationEmployeeUpdatePage.save();
    expect(await organizationEmployeeUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await organizationEmployeeComponentsPage.countDeleteButtons()).to.eq(
      nbButtonsBeforeCreate + 1,
      'Expected one more entry in the table'
    );
  });

  it('should delete last OrganizationEmployee', async () => {
    const nbButtonsBeforeDelete = await organizationEmployeeComponentsPage.countDeleteButtons();
    await organizationEmployeeComponentsPage.clickOnLastDeleteButton();

    organizationEmployeeDeleteDialog = new OrganizationEmployeeDeleteDialog();
    expect(await organizationEmployeeDeleteDialog.getDialogTitle()).to.eq('vnsdApp.organizationEmployee.delete.question');
    await organizationEmployeeDeleteDialog.clickOnConfirmButton();

    expect(await organizationEmployeeComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
