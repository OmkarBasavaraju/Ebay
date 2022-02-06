import { Given, When, Then } from "@wdio/cucumber-framework";
import homePage from "../pages/home.page";

Given(/^I am on the ebay home page$/, async () => {
  await homePage.open("");
});

When(/^I enter <text> in the search field$/, async (dataTable: any) => {
  await homePage.enterTextInSearchField(dataTable.hashes()[0].text);
});

When(/^I click on the search button$/, async () => {
  await homePage.clickSearchButton();
});

When(/^I click on the electronic link$/, async () => {
  await homePage.clickElectronicLink();
});

Then(
  /^I verify <text> is displayed in digital camera page$/,
  async (dataTable: any) => {
    await homePage.verifyDigitalCameraText(dataTable.hashes()[0].text);
  }
);

Then(
  /^I verify <text> is displayed in electonics section$/,
  async (dataTable: any) => {
    await homePage.verifyElectronicSectionText(dataTable.hashes()[0].text);
  }
);

Then(/^I should see a header text as <headerText>$/, async (dataTable: any) => {
  await homePage.verifyHomeText(dataTable.hashes()[0].headerText);
});
