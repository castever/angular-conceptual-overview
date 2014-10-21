/* global angular */

// create a new angular module that matches the app name
// see ng-app in index.html
angular.module('invoice1', [])
  //create a new controller to "control" the app
  .controller('InvoiceController', function() {
    this.qty = 10;
    this.cost = 2;
    this.inCurr = 'EUR';
    this.currencies = ['USD', 'EUR', 'CNY'];
    this.usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09
    };

    this.total = function total(outCurr) {
      return this.convertCurrency(this.qty * this.cost,
        this.inCurr, outCurr);
    };

    this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
      return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
    };

    this.pay = function pay() {
      window.alert("Thanks!");
    };
  });