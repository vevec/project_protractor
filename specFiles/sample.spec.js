describe("Test Suite for banking application", function() {
   
    browser.get('https://angular.io/');
    it("test spec for home page", function() {
       expect(element(by.xpath('//a[text()="Sign In"]')).getText()).toEqual('XYZ Bank');
      browser.sleep(10000);
    });
});