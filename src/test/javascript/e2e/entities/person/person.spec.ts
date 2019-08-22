/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { PersonComponentsPage, PersonDeleteDialog, PersonUpdatePage } from './person.page-object';

const expect = chai.expect;

describe('Person e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let personUpdatePage: PersonUpdatePage;
  let personComponentsPage: PersonComponentsPage;
  let personDeleteDialog: PersonDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load People', async () => {
    await navBarPage.goToEntity('person');
    personComponentsPage = new PersonComponentsPage();
    await browser.wait(ec.visibilityOf(personComponentsPage.title), 5000);
    expect(await personComponentsPage.getTitle()).to.eq('vnsdApp.person.home.title');
  });

  it('should load create Person page', async () => {
    await personComponentsPage.clickOnCreateButton();
    personUpdatePage = new PersonUpdatePage();
    expect(await personUpdatePage.getPageTitle()).to.eq('vnsdApp.person.home.createOrEditLabel');
    await personUpdatePage.cancel();
  });

  it('should create and save People', async () => {
    const nbButtonsBeforeCreate = await personComponentsPage.countDeleteButtons();

    await personComponentsPage.clickOnCreateButton();
    await promise.all([
      personUpdatePage.setUuidInput('64c99148-3908-465d-8c4a-e510e3ade974'),
      personUpdatePage.setPermalinkInput('permalink'),
      personUpdatePage.setFirstnameInput('firstname'),
      personUpdatePage.setLastnameInput('lastname'),
      personUpdatePage.setAlsoknownasInput('alsoknownas'),
      personUpdatePage.setBioInput('bio'),
      personUpdatePage.setProfileimageidInput('5'),
      personUpdatePage.setBornonInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      personUpdatePage.setBornontrustcodeInput('5'),
      personUpdatePage.setDiedonInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      personUpdatePage.setDiedontrustcodeInput('5'),
      personUpdatePage.setCreatedatInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      personUpdatePage.setUpdatedatInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      personUpdatePage.setPermalinkaliasesInput('permalinkaliases'),
      personUpdatePage.setGenderInput('gender'),
      personUpdatePage.setRankInput('5'),
      personUpdatePage.setPrimaryaffiliationidInput('5'),
      personUpdatePage.setPrimarylocationidInput('5'),
      personUpdatePage.setPrimaryimageidInput('5'),
      personUpdatePage.setTitleInput('title'),
      personUpdatePage.setHomepageurlInput('homepageurl'),
      personUpdatePage.setFacebookurlInput('facebookurl'),
      personUpdatePage.setTwitterurlInput('twitterurl'),
      personUpdatePage.setLinkedinurlInput('linkedinurl'),
      personUpdatePage.setCitynameInput('cityname'),
      personUpdatePage.setRegionnameInput('regionname'),
      personUpdatePage.setCountrycodeInput('countrycode'),
      personUpdatePage.organizationSelectLastOption(),
      personUpdatePage.organizationEmployeeSelectLastOption()
    ]);
    expect(await personUpdatePage.getUuidInput()).to.eq(
      '64c99148-3908-465d-8c4a-e510e3ade974',
      'Expected Uuid value to be equals to 64c99148-3908-465d-8c4a-e510e3ade974'
    );
    expect(await personUpdatePage.getPermalinkInput()).to.eq('permalink', 'Expected Permalink value to be equals to permalink');
    expect(await personUpdatePage.getFirstnameInput()).to.eq('firstname', 'Expected Firstname value to be equals to firstname');
    expect(await personUpdatePage.getLastnameInput()).to.eq('lastname', 'Expected Lastname value to be equals to lastname');
    expect(await personUpdatePage.getAlsoknownasInput()).to.eq('alsoknownas', 'Expected Alsoknownas value to be equals to alsoknownas');
    expect(await personUpdatePage.getBioInput()).to.eq('bio', 'Expected Bio value to be equals to bio');
    expect(await personUpdatePage.getProfileimageidInput()).to.eq('5', 'Expected profileimageid value to be equals to 5');
    const selectedRoleinvestor = personUpdatePage.getRoleinvestorInput();
    if (await selectedRoleinvestor.isSelected()) {
      await personUpdatePage.getRoleinvestorInput().click();
      expect(await personUpdatePage.getRoleinvestorInput().isSelected(), 'Expected roleinvestor not to be selected').to.be.false;
    } else {
      await personUpdatePage.getRoleinvestorInput().click();
      expect(await personUpdatePage.getRoleinvestorInput().isSelected(), 'Expected roleinvestor to be selected').to.be.true;
    }
    expect(await personUpdatePage.getBornonInput()).to.contain('2001-01-01T02:30', 'Expected bornon value to be equals to 2000-12-31');
    expect(await personUpdatePage.getBornontrustcodeInput()).to.eq('5', 'Expected bornontrustcode value to be equals to 5');
    expect(await personUpdatePage.getDiedonInput()).to.contain('2001-01-01T02:30', 'Expected diedon value to be equals to 2000-12-31');
    expect(await personUpdatePage.getDiedontrustcodeInput()).to.eq('5', 'Expected diedontrustcode value to be equals to 5');
    expect(await personUpdatePage.getCreatedatInput()).to.contain(
      '2001-01-01T02:30',
      'Expected createdat value to be equals to 2000-12-31'
    );
    expect(await personUpdatePage.getUpdatedatInput()).to.contain(
      '2001-01-01T02:30',
      'Expected updatedat value to be equals to 2000-12-31'
    );
    expect(await personUpdatePage.getPermalinkaliasesInput()).to.eq(
      'permalinkaliases',
      'Expected Permalinkaliases value to be equals to permalinkaliases'
    );
    expect(await personUpdatePage.getGenderInput()).to.eq('gender', 'Expected Gender value to be equals to gender');
    expect(await personUpdatePage.getRankInput()).to.eq('5', 'Expected rank value to be equals to 5');
    expect(await personUpdatePage.getPrimaryaffiliationidInput()).to.eq('5', 'Expected primaryaffiliationid value to be equals to 5');
    expect(await personUpdatePage.getPrimarylocationidInput()).to.eq('5', 'Expected primarylocationid value to be equals to 5');
    expect(await personUpdatePage.getPrimaryimageidInput()).to.eq('5', 'Expected primaryimageid value to be equals to 5');
    expect(await personUpdatePage.getTitleInput()).to.eq('title', 'Expected Title value to be equals to title');
    expect(await personUpdatePage.getHomepageurlInput()).to.eq('homepageurl', 'Expected Homepageurl value to be equals to homepageurl');
    expect(await personUpdatePage.getFacebookurlInput()).to.eq('facebookurl', 'Expected Facebookurl value to be equals to facebookurl');
    expect(await personUpdatePage.getTwitterurlInput()).to.eq('twitterurl', 'Expected Twitterurl value to be equals to twitterurl');
    expect(await personUpdatePage.getLinkedinurlInput()).to.eq('linkedinurl', 'Expected Linkedinurl value to be equals to linkedinurl');
    expect(await personUpdatePage.getCitynameInput()).to.eq('cityname', 'Expected Cityname value to be equals to cityname');
    expect(await personUpdatePage.getRegionnameInput()).to.eq('regionname', 'Expected Regionname value to be equals to regionname');
    expect(await personUpdatePage.getCountrycodeInput()).to.eq('countrycode', 'Expected Countrycode value to be equals to countrycode');
    await personUpdatePage.save();
    expect(await personUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await personComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Person', async () => {
    const nbButtonsBeforeDelete = await personComponentsPage.countDeleteButtons();
    await personComponentsPage.clickOnLastDeleteButton();

    personDeleteDialog = new PersonDeleteDialog();
    expect(await personDeleteDialog.getDialogTitle()).to.eq('vnsdApp.person.delete.question');
    await personDeleteDialog.clickOnConfirmButton();

    expect(await personComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
