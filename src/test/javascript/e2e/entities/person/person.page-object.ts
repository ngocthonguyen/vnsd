import { browser, ExpectedConditions, element, by, ElementFinder } from 'protractor';

export class PersonComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-person div table .btn-danger'));
  title = element.all(by.css('jhi-person div h2#page-heading span')).first();

  async clickOnCreateButton(timeout?: number) {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(timeout?: number) {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons() {
    return this.deleteButtons.count();
  }

  async getTitle() {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class PersonUpdatePage {
  pageTitle = element(by.id('jhi-person-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  uuidInput = element(by.id('field_uuid'));
  permalinkInput = element(by.id('field_permalink'));
  firstnameInput = element(by.id('field_firstname'));
  lastnameInput = element(by.id('field_lastname'));
  alsoknownasInput = element(by.id('field_alsoknownas'));
  bioInput = element(by.id('field_bio'));
  profileimageidInput = element(by.id('field_profileimageid'));
  roleinvestorInput = element(by.id('field_roleinvestor'));
  bornonInput = element(by.id('field_bornon'));
  bornontrustcodeInput = element(by.id('field_bornontrustcode'));
  diedonInput = element(by.id('field_diedon'));
  diedontrustcodeInput = element(by.id('field_diedontrustcode'));
  createdatInput = element(by.id('field_createdat'));
  updatedatInput = element(by.id('field_updatedat'));
  permalinkaliasesInput = element(by.id('field_permalinkaliases'));
  genderInput = element(by.id('field_gender'));
  rankInput = element(by.id('field_rank'));
  primaryaffiliationidInput = element(by.id('field_primaryaffiliationid'));
  primarylocationidInput = element(by.id('field_primarylocationid'));
  primaryimageidInput = element(by.id('field_primaryimageid'));
  titleInput = element(by.id('field_title'));
  homepageurlInput = element(by.id('field_homepageurl'));
  facebookurlInput = element(by.id('field_facebookurl'));
  twitterurlInput = element(by.id('field_twitterurl'));
  linkedinurlInput = element(by.id('field_linkedinurl'));
  citynameInput = element(by.id('field_cityname'));
  regionnameInput = element(by.id('field_regionname'));
  countrycodeInput = element(by.id('field_countrycode'));
  organizationSelect = element(by.id('field_organization'));
  organizationEmployeeSelect = element(by.id('field_organizationEmployee'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setUuidInput(uuid) {
    await this.uuidInput.sendKeys(uuid);
  }

  async getUuidInput() {
    return await this.uuidInput.getAttribute('value');
  }

  async setPermalinkInput(permalink) {
    await this.permalinkInput.sendKeys(permalink);
  }

  async getPermalinkInput() {
    return await this.permalinkInput.getAttribute('value');
  }

  async setFirstnameInput(firstname) {
    await this.firstnameInput.sendKeys(firstname);
  }

  async getFirstnameInput() {
    return await this.firstnameInput.getAttribute('value');
  }

  async setLastnameInput(lastname) {
    await this.lastnameInput.sendKeys(lastname);
  }

  async getLastnameInput() {
    return await this.lastnameInput.getAttribute('value');
  }

  async setAlsoknownasInput(alsoknownas) {
    await this.alsoknownasInput.sendKeys(alsoknownas);
  }

  async getAlsoknownasInput() {
    return await this.alsoknownasInput.getAttribute('value');
  }

  async setBioInput(bio) {
    await this.bioInput.sendKeys(bio);
  }

  async getBioInput() {
    return await this.bioInput.getAttribute('value');
  }

  async setProfileimageidInput(profileimageid) {
    await this.profileimageidInput.sendKeys(profileimageid);
  }

  async getProfileimageidInput() {
    return await this.profileimageidInput.getAttribute('value');
  }

  getRoleinvestorInput(timeout?: number) {
    return this.roleinvestorInput;
  }
  async setBornonInput(bornon) {
    await this.bornonInput.sendKeys(bornon);
  }

  async getBornonInput() {
    return await this.bornonInput.getAttribute('value');
  }

  async setBornontrustcodeInput(bornontrustcode) {
    await this.bornontrustcodeInput.sendKeys(bornontrustcode);
  }

  async getBornontrustcodeInput() {
    return await this.bornontrustcodeInput.getAttribute('value');
  }

  async setDiedonInput(diedon) {
    await this.diedonInput.sendKeys(diedon);
  }

  async getDiedonInput() {
    return await this.diedonInput.getAttribute('value');
  }

  async setDiedontrustcodeInput(diedontrustcode) {
    await this.diedontrustcodeInput.sendKeys(diedontrustcode);
  }

  async getDiedontrustcodeInput() {
    return await this.diedontrustcodeInput.getAttribute('value');
  }

  async setCreatedatInput(createdat) {
    await this.createdatInput.sendKeys(createdat);
  }

  async getCreatedatInput() {
    return await this.createdatInput.getAttribute('value');
  }

  async setUpdatedatInput(updatedat) {
    await this.updatedatInput.sendKeys(updatedat);
  }

  async getUpdatedatInput() {
    return await this.updatedatInput.getAttribute('value');
  }

  async setPermalinkaliasesInput(permalinkaliases) {
    await this.permalinkaliasesInput.sendKeys(permalinkaliases);
  }

  async getPermalinkaliasesInput() {
    return await this.permalinkaliasesInput.getAttribute('value');
  }

  async setGenderInput(gender) {
    await this.genderInput.sendKeys(gender);
  }

  async getGenderInput() {
    return await this.genderInput.getAttribute('value');
  }

  async setRankInput(rank) {
    await this.rankInput.sendKeys(rank);
  }

  async getRankInput() {
    return await this.rankInput.getAttribute('value');
  }

  async setPrimaryaffiliationidInput(primaryaffiliationid) {
    await this.primaryaffiliationidInput.sendKeys(primaryaffiliationid);
  }

  async getPrimaryaffiliationidInput() {
    return await this.primaryaffiliationidInput.getAttribute('value');
  }

  async setPrimarylocationidInput(primarylocationid) {
    await this.primarylocationidInput.sendKeys(primarylocationid);
  }

  async getPrimarylocationidInput() {
    return await this.primarylocationidInput.getAttribute('value');
  }

  async setPrimaryimageidInput(primaryimageid) {
    await this.primaryimageidInput.sendKeys(primaryimageid);
  }

  async getPrimaryimageidInput() {
    return await this.primaryimageidInput.getAttribute('value');
  }

  async setTitleInput(title) {
    await this.titleInput.sendKeys(title);
  }

  async getTitleInput() {
    return await this.titleInput.getAttribute('value');
  }

  async setHomepageurlInput(homepageurl) {
    await this.homepageurlInput.sendKeys(homepageurl);
  }

  async getHomepageurlInput() {
    return await this.homepageurlInput.getAttribute('value');
  }

  async setFacebookurlInput(facebookurl) {
    await this.facebookurlInput.sendKeys(facebookurl);
  }

  async getFacebookurlInput() {
    return await this.facebookurlInput.getAttribute('value');
  }

  async setTwitterurlInput(twitterurl) {
    await this.twitterurlInput.sendKeys(twitterurl);
  }

  async getTwitterurlInput() {
    return await this.twitterurlInput.getAttribute('value');
  }

  async setLinkedinurlInput(linkedinurl) {
    await this.linkedinurlInput.sendKeys(linkedinurl);
  }

  async getLinkedinurlInput() {
    return await this.linkedinurlInput.getAttribute('value');
  }

  async setCitynameInput(cityname) {
    await this.citynameInput.sendKeys(cityname);
  }

  async getCitynameInput() {
    return await this.citynameInput.getAttribute('value');
  }

  async setRegionnameInput(regionname) {
    await this.regionnameInput.sendKeys(regionname);
  }

  async getRegionnameInput() {
    return await this.regionnameInput.getAttribute('value');
  }

  async setCountrycodeInput(countrycode) {
    await this.countrycodeInput.sendKeys(countrycode);
  }

  async getCountrycodeInput() {
    return await this.countrycodeInput.getAttribute('value');
  }

  async organizationSelectLastOption(timeout?: number) {
    await this.organizationSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async organizationSelectOption(option) {
    await this.organizationSelect.sendKeys(option);
  }

  getOrganizationSelect(): ElementFinder {
    return this.organizationSelect;
  }

  async getOrganizationSelectedOption() {
    return await this.organizationSelect.element(by.css('option:checked')).getText();
  }

  async organizationEmployeeSelectLastOption(timeout?: number) {
    await this.organizationEmployeeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async organizationEmployeeSelectOption(option) {
    await this.organizationEmployeeSelect.sendKeys(option);
  }

  getOrganizationEmployeeSelect(): ElementFinder {
    return this.organizationEmployeeSelect;
  }

  async getOrganizationEmployeeSelectedOption() {
    return await this.organizationEmployeeSelect.element(by.css('option:checked')).getText();
  }

  async save(timeout?: number) {
    await this.saveButton.click();
  }

  async cancel(timeout?: number) {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class PersonDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-person-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-person'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
