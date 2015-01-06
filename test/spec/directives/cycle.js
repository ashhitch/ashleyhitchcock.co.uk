'use strict';

describe('Directive: cycle', function () {

  // load the directive's module
  beforeEach(module('ahPortfolioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cycle></cycle>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cycle directive');
  }));
});
