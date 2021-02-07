const { browser } = require('protractor');

var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;


var PremiumCalculationSteps = function() {
    var PremiumCalculationPage = require("../pages/premiumCalculationPage.js");

    this.World = function MyWorld() {
      this.page = new PremiumCalculationPage();
    };

    this.Given(/^The premium calculation app is open$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        this.page.get();
        callback();
      });

    this.When(/^I enter name as Vishwa$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        this.page.setNameText("Vishwa");
        callback();
    });

    this.When(/^I enter name as "([^"]*)"$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        this.page.setNameText(arg1);
        callback();
      });

    this.When(/^I enter DOB as (\d+)\/(\d+)\/(\d+)$/, function (arg1, arg2, arg3, callback) {
        // Write code here that turns the phrase above into concrete actions
        var dateString = arg1 + '/' + arg2 + '/' + arg3;
        this.page.setDOB(dateString);
        this.page.clickOnCalcPremium();
        callback();
    });

    this.When(/^I enter BOD as (\d+)\/(\d+)\/(\d+)$/, function (arg1, arg2, arg3, callback) {
        // Write code here that turns the phrase above into concrete actions
        var dateString = arg1 + '/' + arg2 + '/' + arg3;
        this.page.setDOB(dateString);
        this.page.clickOnCalcPremium();
        callback();
      });

    this.Then(/^The premium percentage should be equal to (\d+)\.(\d+)$/, function (arg1, arg2, callback) {
        // Write code here that turns the phrase above into concrete actions
        var percentageValue = arg1 + '.' + arg2;
        browser.sleep(2000);
        expect(this.page.getCalculatedPremiumPercentageValue()).to.eventually.equal(percentageValue).and.notify(callback);
        
    });
  };
  
  module.exports = PremiumCalculationSteps;