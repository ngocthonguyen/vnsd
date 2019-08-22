/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { OrganizationComponentsPage, OrganizationDeleteDialog, OrganizationUpdatePage } from './organization.page-object';

const expect = chai.expect;

describe('Organization e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let organizationUpdatePage: OrganizationUpdatePage;
  let organizationComponentsPage: OrganizationComponentsPage;
  let organizationDeleteDialog: OrganizationDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Organizations', async () => {
    await navBarPage.goToEntity('organization');
    organizationComponentsPage = new OrganizationComponentsPage();
    await browser.wait(ec.visibilityOf(organizationComponentsPage.title), 5000);
    expect(await organizationComponentsPage.getTitle()).to.eq('vnsdApp.organization.home.title');
  });

  it('should load create Organization page', async () => {
    await organizationComponentsPage.clickOnCreateButton();
    organizationUpdatePage = new OrganizationUpdatePage();
    expect(await organizationUpdatePage.getPageTitle()).to.eq('vnsdApp.organization.home.createOrEditLabel');
    await organizationUpdatePage.cancel();
  });

  it('should create and save Organizations', async () => {
    const nbButtonsBeforeCreate = await organizationComponentsPage.countDeleteButtons();

    await organizationComponentsPage.clickOnCreateButton();
    await promise.all([
      organizationUpdatePage.setUuidInput('64c99148-3908-465d-8c4a-e510e3ade974'),
      organizationUpdatePage.setPermalinkInput('permalink'),
      organizationUpdatePage.setNameInput('name'),
      organizationUpdatePage.setAlsoknownasInput('alsoknownas'),
      organizationUpdatePage.setShortdescriptionInput('shortdescription'),
      organizationUpdatePage.setDescriptionInput('description'),
      organizationUpdatePage.setProfileimageidInput('5'),
      organizationUpdatePage.setPrimaryroleInput('primaryrole'),
      organizationUpdatePage.setFoundedonInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      organizationUpdatePage.setFoundedontrustcodeInput('5'),
      organizationUpdatePage.setClosedonInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      organizationUpdatePage.setClosedontrustcodeInput('5'),
      organizationUpdatePage.setNumemployeesminInput('5'),
      organizationUpdatePage.setNumemployeesmaxInput('5'),
      organizationUpdatePage.setTotalfundingusdInput('5'),
      organizationUpdatePage.setTotalfundingvndInput('5'),
      organizationUpdatePage.setStockexchangeInput('stockexchange'),
      organizationUpdatePage.setStocksymbolInput('stocksymbol'),
      organizationUpdatePage.setNumberofinvestmentsInput('5'),
      organizationUpdatePage.setCreatedatInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      organizationUpdatePage.setUpdatedatInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      organizationUpdatePage.setPermalinkaliasesInput('permalinkaliases'),
      organizationUpdatePage.setInvestortypeInput('investortype'),
      organizationUpdatePage.setContactemailInput('contactemail'),
      organizationUpdatePage.setPhonenumberInput('phonenumber'),
      organizationUpdatePage.setRankInput('5'),
      organizationUpdatePage.setPrimaryimageidInput('5'),
      organizationUpdatePage.setOwnedbyidInput('5'),
      organizationUpdatePage.setHeadquartersidInput('5'),
      organizationUpdatePage.setAcquiredbyidInput('5'),
      organizationUpdatePage.setIpoidInput('5'),
      organizationUpdatePage.setDomainInput('domain'),
      organizationUpdatePage.setHomepageurlInput('homepageurl'),
      organizationUpdatePage.setFacebookurlInput('facebookurl'),
      organizationUpdatePage.setTwitterurlInput('twitterurl'),
      organizationUpdatePage.setLinkedinurlInput('linkedinurl'),
      organizationUpdatePage.setCitynameInput('cityname'),
      organizationUpdatePage.setRegionnameInput('regionname'),
      organizationUpdatePage.setCountrycodeInput('countrycode'),
      organizationUpdatePage.organizationEmployeeSelectLastOption()
    ]);
    expect(await organizationUpdatePage.getUuidInput()).to.eq(
      '64c99148-3908-465d-8c4a-e510e3ade974',
      'Expected Uuid value to be equals to 64c99148-3908-465d-8c4a-e510e3ade974'
    );
    expect(await organizationUpdatePage.getPermalinkInput()).to.eq('permalink', 'Expected Permalink value to be equals to permalink');
    expect(await organizationUpdatePage.getNameInput()).to.eq('name', 'Expected Name value to be equals to name');
    expect(await organizationUpdatePage.getAlsoknownasInput()).to.eq(
      'alsoknownas',
      'Expected Alsoknownas value to be equals to alsoknownas'
    );
    expect(await organizationUpdatePage.getShortdescriptionInput()).to.eq(
      'shortdescription',
      'Expected Shortdescription value to be equals to shortdescription'
    );
    expect(await organizationUpdatePage.getDescriptionInput()).to.eq(
      'description',
      'Expected Description value to be equals to description'
    );
    expect(await organizationUpdatePage.getProfileimageidInput()).to.eq('5', 'Expected profileimageid value to be equals to 5');
    expect(await organizationUpdatePage.getPrimaryroleInput()).to.eq(
      'primaryrole',
      'Expected Primaryrole value to be equals to primaryrole'
    );
    const selectedRolecompany = organizationUpdatePage.getRolecompanyInput();
    if (await selectedRolecompany.isSelected()) {
      await organizationUpdatePage.getRolecompanyInput().click();
      expect(await organizationUpdatePage.getRolecompanyInput().isSelected(), 'Expected rolecompany not to be selected').to.be.false;
    } else {
      await organizationUpdatePage.getRolecompanyInput().click();
      expect(await organizationUpdatePage.getRolecompanyInput().isSelected(), 'Expected rolecompany to be selected').to.be.true;
    }
    const selectedRoleinvestor = organizationUpdatePage.getRoleinvestorInput();
    if (await selectedRoleinvestor.isSelected()) {
      await organizationUpdatePage.getRoleinvestorInput().click();
      expect(await organizationUpdatePage.getRoleinvestorInput().isSelected(), 'Expected roleinvestor not to be selected').to.be.false;
    } else {
      await organizationUpdatePage.getRoleinvestorInput().click();
      expect(await organizationUpdatePage.getRoleinvestorInput().isSelected(), 'Expected roleinvestor to be selected').to.be.true;
    }
    const selectedRolegroup = organizationUpdatePage.getRolegroupInput();
    if (await selectedRolegroup.isSelected()) {
      await organizationUpdatePage.getRolegroupInput().click();
      expect(await organizationUpdatePage.getRolegroupInput().isSelected(), 'Expected rolegroup not to be selected').to.be.false;
    } else {
      await organizationUpdatePage.getRolegroupInput().click();
      expect(await organizationUpdatePage.getRolegroupInput().isSelected(), 'Expected rolegroup to be selected').to.be.true;
    }
    const selectedRoleschool = organizationUpdatePage.getRoleschoolInput();
    if (await selectedRoleschool.isSelected()) {
      await organizationUpdatePage.getRoleschoolInput().click();
      expect(await organizationUpdatePage.getRoleschoolInput().isSelected(), 'Expected roleschool not to be selected').to.be.false;
    } else {
      await organizationUpdatePage.getRoleschoolInput().click();
      expect(await organizationUpdatePage.getRoleschoolInput().isSelected(), 'Expected roleschool to be selected').to.be.true;
    }
    expect(await organizationUpdatePage.getFoundedonInput()).to.contain(
      '2001-01-01T02:30',
      'Expected foundedon value to be equals to 2000-12-31'
    );
    expect(await organizationUpdatePage.getFoundedontrustcodeInput()).to.eq('5', 'Expected foundedontrustcode value to be equals to 5');
    expect(await organizationUpdatePage.getClosedonInput()).to.contain(
      '2001-01-01T02:30',
      'Expected closedon value to be equals to 2000-12-31'
    );
    expect(await organizationUpdatePage.getClosedontrustcodeInput()).to.eq('5', 'Expected closedontrustcode value to be equals to 5');
    expect(await organizationUpdatePage.getNumemployeesminInput()).to.eq('5', 'Expected numemployeesmin value to be equals to 5');
    expect(await organizationUpdatePage.getNumemployeesmaxInput()).to.eq('5', 'Expected numemployeesmax value to be equals to 5');
    expect(await organizationUpdatePage.getTotalfundingusdInput()).to.eq('5', 'Expected totalfundingusd value to be equals to 5');
    expect(await organizationUpdatePage.getTotalfundingvndInput()).to.eq('5', 'Expected totalfundingvnd value to be equals to 5');
    expect(await organizationUpdatePage.getStockexchangeInput()).to.eq(
      'stockexchange',
      'Expected Stockexchange value to be equals to stockexchange'
    );
    expect(await organizationUpdatePage.getStocksymbolInput()).to.eq(
      'stocksymbol',
      'Expected Stocksymbol value to be equals to stocksymbol'
    );
    expect(await organizationUpdatePage.getNumberofinvestmentsInput()).to.eq('5', 'Expected numberofinvestments value to be equals to 5');
    expect(await organizationUpdatePage.getCreatedatInput()).to.contain(
      '2001-01-01T02:30',
      'Expected createdat value to be equals to 2000-12-31'
    );
    expect(await organizationUpdatePage.getUpdatedatInput()).to.contain(
      '2001-01-01T02:30',
      'Expected updatedat value to be equals to 2000-12-31'
    );
    expect(await organizationUpdatePage.getPermalinkaliasesInput()).to.eq(
      'permalinkaliases',
      'Expected Permalinkaliases value to be equals to permalinkaliases'
    );
    expect(await organizationUpdatePage.getInvestortypeInput()).to.eq(
      'investortype',
      'Expected Investortype value to be equals to investortype'
    );
    expect(await organizationUpdatePage.getContactemailInput()).to.eq(
      'contactemail',
      'Expected Contactemail value to be equals to contactemail'
    );
    expect(await organizationUpdatePage.getPhonenumberInput()).to.eq(
      'phonenumber',
      'Expected Phonenumber value to be equals to phonenumber'
    );
    expect(await organizationUpdatePage.getRankInput()).to.eq('5', 'Expected rank value to be equals to 5');
    expect(await organizationUpdatePage.getPrimaryimageidInput()).to.eq('5', 'Expected primaryimageid value to be equals to 5');
    expect(await organizationUpdatePage.getOwnedbyidInput()).to.eq('5', 'Expected ownedbyid value to be equals to 5');
    expect(await organizationUpdatePage.getHeadquartersidInput()).to.eq('5', 'Expected headquartersid value to be equals to 5');
    expect(await organizationUpdatePage.getAcquiredbyidInput()).to.eq('5', 'Expected acquiredbyid value to be equals to 5');
    expect(await organizationUpdatePage.getIpoidInput()).to.eq('5', 'Expected ipoid value to be equals to 5');
    expect(await organizationUpdatePage.getDomainInput()).to.eq('domain', 'Expected Domain value to be equals to domain');
    expect(await organizationUpdatePage.getHomepageurlInput()).to.eq(
      'homepageurl',
      'Expected Homepageurl value to be equals to homepageurl'
    );
    expect(await organizationUpdatePage.getFacebookurlInput()).to.eq(
      'facebookurl',
      'Expected Facebookurl value to be equals to facebookurl'
    );
    expect(await organizationUpdatePage.getTwitterurlInput()).to.eq('twitterurl', 'Expected Twitterurl value to be equals to twitterurl');
    expect(await organizationUpdatePage.getLinkedinurlInput()).to.eq(
      'linkedinurl',
      'Expected Linkedinurl value to be equals to linkedinurl'
    );
    expect(await organizationUpdatePage.getCitynameInput()).to.eq('cityname', 'Expected Cityname value to be equals to cityname');
    expect(await organizationUpdatePage.getRegionnameInput()).to.eq('regionname', 'Expected Regionname value to be equals to regionname');
    expect(await organizationUpdatePage.getCountrycodeInput()).to.eq(
      'countrycode',
      'Expected Countrycode value to be equals to countrycode'
    );
    await organizationUpdatePage.save();
    expect(await organizationUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await organizationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Organization', async () => {
    const nbButtonsBeforeDelete = await organizationComponentsPage.countDeleteButtons();
    await organizationComponentsPage.clickOnLastDeleteButton();

    organizationDeleteDialog = new OrganizationDeleteDialog();
    expect(await organizationDeleteDialog.getDialogTitle()).to.eq('vnsdApp.organization.delete.question');
    await organizationDeleteDialog.clickOnConfirmButton();

    expect(await organizationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
