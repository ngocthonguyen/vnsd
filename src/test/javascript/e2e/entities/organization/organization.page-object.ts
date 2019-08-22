import { browser, ExpectedConditions, element, by, ElementFinder } from 'protractor';

export class OrganizationComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-organization div table .btn-danger'));
  title = element.all(by.css('jhi-organization div h2#page-heading span')).first();

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

export class OrganizationUpdatePage {
  pageTitle = element(by.id('jhi-organization-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  uuidInput = element(by.id('field_uuid'));
  permalinkInput = element(by.id('field_permalink'));
  nameInput = element(by.id('field_name'));
  alsoknownasInput = element(by.id('field_alsoknownas'));
  shortdescriptionInput = element(by.id('field_shortdescription'));
  descriptionInput = element(by.id('field_description'));
  profileimageidInput = element(by.id('field_profileimageid'));
  primaryroleInput = element(by.id('field_primaryrole'));
  rolecompanyInput = element(by.id('field_rolecompany'));
  roleinvestorInput = element(by.id('field_roleinvestor'));
  rolegroupInput = element(by.id('field_rolegroup'));
  roleschoolInput = element(by.id('field_roleschool'));
  foundedonInput = element(by.id('field_foundedon'));
  foundedontrustcodeInput = element(by.id('field_foundedontrustcode'));
  closedonInput = element(by.id('field_closedon'));
  closedontrustcodeInput = element(by.id('field_closedontrustcode'));
  numemployeesminInput = element(by.id('field_numemployeesmin'));
  numemployeesmaxInput = element(by.id('field_numemployeesmax'));
  totalfundingusdInput = element(by.id('field_totalfundingusd'));
  totalfundingvndInput = element(by.id('field_totalfundingvnd'));
  stockexchangeInput = element(by.id('field_stockexchange'));
  stocksymbolInput = element(by.id('field_stocksymbol'));
  numberofinvestmentsInput = element(by.id('field_numberofinvestments'));
  createdatInput = element(by.id('field_createdat'));
  updatedatInput = element(by.id('field_updatedat'));
  permalinkaliasesInput = element(by.id('field_permalinkaliases'));
  investortypeInput = element(by.id('field_investortype'));
  contactemailInput = element(by.id('field_contactemail'));
  phonenumberInput = element(by.id('field_phonenumber'));
  rankInput = element(by.id('field_rank'));
  primaryimageidInput = element(by.id('field_primaryimageid'));
  ownedbyidInput = element(by.id('field_ownedbyid'));
  headquartersidInput = element(by.id('field_headquartersid'));
  acquiredbyidInput = element(by.id('field_acquiredbyid'));
  ipoidInput = element(by.id('field_ipoid'));
  domainInput = element(by.id('field_domain'));
  homepageurlInput = element(by.id('field_homepageurl'));
  facebookurlInput = element(by.id('field_facebookurl'));
  twitterurlInput = element(by.id('field_twitterurl'));
  linkedinurlInput = element(by.id('field_linkedinurl'));
  citynameInput = element(by.id('field_cityname'));
  regionnameInput = element(by.id('field_regionname'));
  countrycodeInput = element(by.id('field_countrycode'));
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

  async setNameInput(name) {
    await this.nameInput.sendKeys(name);
  }

  async getNameInput() {
    return await this.nameInput.getAttribute('value');
  }

  async setAlsoknownasInput(alsoknownas) {
    await this.alsoknownasInput.sendKeys(alsoknownas);
  }

  async getAlsoknownasInput() {
    return await this.alsoknownasInput.getAttribute('value');
  }

  async setShortdescriptionInput(shortdescription) {
    await this.shortdescriptionInput.sendKeys(shortdescription);
  }

  async getShortdescriptionInput() {
    return await this.shortdescriptionInput.getAttribute('value');
  }

  async setDescriptionInput(description) {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput() {
    return await this.descriptionInput.getAttribute('value');
  }

  async setProfileimageidInput(profileimageid) {
    await this.profileimageidInput.sendKeys(profileimageid);
  }

  async getProfileimageidInput() {
    return await this.profileimageidInput.getAttribute('value');
  }

  async setPrimaryroleInput(primaryrole) {
    await this.primaryroleInput.sendKeys(primaryrole);
  }

  async getPrimaryroleInput() {
    return await this.primaryroleInput.getAttribute('value');
  }

  getRolecompanyInput(timeout?: number) {
    return this.rolecompanyInput;
  }
  getRoleinvestorInput(timeout?: number) {
    return this.roleinvestorInput;
  }
  getRolegroupInput(timeout?: number) {
    return this.rolegroupInput;
  }
  getRoleschoolInput(timeout?: number) {
    return this.roleschoolInput;
  }
  async setFoundedonInput(foundedon) {
    await this.foundedonInput.sendKeys(foundedon);
  }

  async getFoundedonInput() {
    return await this.foundedonInput.getAttribute('value');
  }

  async setFoundedontrustcodeInput(foundedontrustcode) {
    await this.foundedontrustcodeInput.sendKeys(foundedontrustcode);
  }

  async getFoundedontrustcodeInput() {
    return await this.foundedontrustcodeInput.getAttribute('value');
  }

  async setClosedonInput(closedon) {
    await this.closedonInput.sendKeys(closedon);
  }

  async getClosedonInput() {
    return await this.closedonInput.getAttribute('value');
  }

  async setClosedontrustcodeInput(closedontrustcode) {
    await this.closedontrustcodeInput.sendKeys(closedontrustcode);
  }

  async getClosedontrustcodeInput() {
    return await this.closedontrustcodeInput.getAttribute('value');
  }

  async setNumemployeesminInput(numemployeesmin) {
    await this.numemployeesminInput.sendKeys(numemployeesmin);
  }

  async getNumemployeesminInput() {
    return await this.numemployeesminInput.getAttribute('value');
  }

  async setNumemployeesmaxInput(numemployeesmax) {
    await this.numemployeesmaxInput.sendKeys(numemployeesmax);
  }

  async getNumemployeesmaxInput() {
    return await this.numemployeesmaxInput.getAttribute('value');
  }

  async setTotalfundingusdInput(totalfundingusd) {
    await this.totalfundingusdInput.sendKeys(totalfundingusd);
  }

  async getTotalfundingusdInput() {
    return await this.totalfundingusdInput.getAttribute('value');
  }

  async setTotalfundingvndInput(totalfundingvnd) {
    await this.totalfundingvndInput.sendKeys(totalfundingvnd);
  }

  async getTotalfundingvndInput() {
    return await this.totalfundingvndInput.getAttribute('value');
  }

  async setStockexchangeInput(stockexchange) {
    await this.stockexchangeInput.sendKeys(stockexchange);
  }

  async getStockexchangeInput() {
    return await this.stockexchangeInput.getAttribute('value');
  }

  async setStocksymbolInput(stocksymbol) {
    await this.stocksymbolInput.sendKeys(stocksymbol);
  }

  async getStocksymbolInput() {
    return await this.stocksymbolInput.getAttribute('value');
  }

  async setNumberofinvestmentsInput(numberofinvestments) {
    await this.numberofinvestmentsInput.sendKeys(numberofinvestments);
  }

  async getNumberofinvestmentsInput() {
    return await this.numberofinvestmentsInput.getAttribute('value');
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

  async setInvestortypeInput(investortype) {
    await this.investortypeInput.sendKeys(investortype);
  }

  async getInvestortypeInput() {
    return await this.investortypeInput.getAttribute('value');
  }

  async setContactemailInput(contactemail) {
    await this.contactemailInput.sendKeys(contactemail);
  }

  async getContactemailInput() {
    return await this.contactemailInput.getAttribute('value');
  }

  async setPhonenumberInput(phonenumber) {
    await this.phonenumberInput.sendKeys(phonenumber);
  }

  async getPhonenumberInput() {
    return await this.phonenumberInput.getAttribute('value');
  }

  async setRankInput(rank) {
    await this.rankInput.sendKeys(rank);
  }

  async getRankInput() {
    return await this.rankInput.getAttribute('value');
  }

  async setPrimaryimageidInput(primaryimageid) {
    await this.primaryimageidInput.sendKeys(primaryimageid);
  }

  async getPrimaryimageidInput() {
    return await this.primaryimageidInput.getAttribute('value');
  }

  async setOwnedbyidInput(ownedbyid) {
    await this.ownedbyidInput.sendKeys(ownedbyid);
  }

  async getOwnedbyidInput() {
    return await this.ownedbyidInput.getAttribute('value');
  }

  async setHeadquartersidInput(headquartersid) {
    await this.headquartersidInput.sendKeys(headquartersid);
  }

  async getHeadquartersidInput() {
    return await this.headquartersidInput.getAttribute('value');
  }

  async setAcquiredbyidInput(acquiredbyid) {
    await this.acquiredbyidInput.sendKeys(acquiredbyid);
  }

  async getAcquiredbyidInput() {
    return await this.acquiredbyidInput.getAttribute('value');
  }

  async setIpoidInput(ipoid) {
    await this.ipoidInput.sendKeys(ipoid);
  }

  async getIpoidInput() {
    return await this.ipoidInput.getAttribute('value');
  }

  async setDomainInput(domain) {
    await this.domainInput.sendKeys(domain);
  }

  async getDomainInput() {
    return await this.domainInput.getAttribute('value');
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

export class OrganizationDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-organization-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-organization'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
