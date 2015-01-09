'use strict';

describe('Directive: email', function () {

  // load the directive's module
  beforeEach(module('ahPortfolioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  // it('should make hidden element visible', inject(function ($compile) {
  //   element = angular.element('<email></email>');
  //   element = $compile(element)(scope);
  //   expect(element.text()).toBe('this is the email directive');
  // }));
});
