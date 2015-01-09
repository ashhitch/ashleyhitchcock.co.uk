'use strict';

describe('Directive: onePageScroll', function () {

  // load the directive's module
  beforeEach(module('ahPortfolioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  // it('should make hidden element visible', inject(function ($compile) {
  //   element = angular.element('<one-page-scroll></one-page-scroll>');
  //   element = $compile(element)(scope);
  //   expect(element.text()).toBe('this is the onePageScroll directive');
  // }));
});
