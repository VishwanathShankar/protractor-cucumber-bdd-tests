var PremiumCalculationPage = function() {

    this.get = function() {
      browser.get('http://localhost:4200/');
    };
  
    this.setNameText = function(value) {
      element(by.id('nameInput')).sendKeys(value);
    };
  
    this.setDOB = function(value) {
        element(by.id('dob')).sendKeys(value);
    };
  
    this.clickOnDob = function() {
        element(by.id('dob')).click();
    };
  
    this.clickOnCalcPremium = function() {
      element(by.id('calc-premium')).click()
    }

    this.getCalculatedPremiumPercentageValue = function() {
        return element(by.id('premium-percentage-value')).getText();
    }

    this.getEnteredNameForPremiumDisplay = function() {
        return element(by.id('entered-name')).getText();
    }

  };
  
  module.exports = PremiumCalculationPage;