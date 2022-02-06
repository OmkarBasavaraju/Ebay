import {
  clickElement,
  setValue,
  stringComparision,
} from "../../utils/commonCommands";

class HomePage {
  get ebayText() {
    return $("#gh-l-h1");
  }

  get homeText() {
    return $("//span[normalize-space()='Home']");
  }

  get searchField() {
    return $("#gh-ac");
  }

  get searchButton() {
    return $("#gh-btn");
  }

  get digitalCameraText() {
    return $("//span[normalize-space()='digital camera']");
  }

  get electronicLink() {
    return $(".hl-cat-nav__js-tab[data-currenttabindex='0']");
  }

  get electronicSectionText() {
    return $(".title-banner__title");
  }

  open(pageUrl: string) {
    return browser.url(pageUrl);
  }

  async verifyHomeText(text: string) {
    let getHomeText = await this.homeText.getText();
    stringComparision(getHomeText, text);
  }

  async verifyDigitalCameraText(text: string) {
    let getDigitalCameraText = await this.digitalCameraText.getText();
    stringComparision(getDigitalCameraText, text);
  }

  async verifyElectronicSectionText(text: string) {
    let getElectronicSectionText = await this.electronicSectionText.getText();
    stringComparision(getElectronicSectionText, text);
  }

  async clickElectronicLink() {
    await clickElement(this.electronicLink);
  }

  async enterTextInSearchField(text: string) {
    await setValue(this.searchField, text);
  }

  async clickSearchButton() {
    await clickElement(this.searchButton);
  }
}
export default new HomePage();
