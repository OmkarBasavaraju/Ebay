Feature: As a user, I want to search and navigate to digital cameras from the home page

  Background: Navigate to the home page of ebay application
    Given I am on the ebay home page
      
  Scenario: Search for digital cameras from the home page and verify header text in home and digital camera page
    Then I should see a header text as <headerText>
    |headerText|
    |Home|
    When I enter <text> in the search field
    |text|
    |Digital camera|
    And I click on the search button
    Then I verify <text> is displayed in digital camera page
    |text|
    |digital camera|

    Scenario: Navigate to the electonics section from home page and verify header text
    When I click on the electronic link
    Then I verify <text> is displayed in electonics section
    |text|
    |Tech & Electronics|