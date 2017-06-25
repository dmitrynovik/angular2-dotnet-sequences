"use strict";
var protractor_1 = require("protractor");
var Angular2EndToEndPage = (function () {
    function Angular2EndToEndPage() {
    }
    Angular2EndToEndPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    return Angular2EndToEndPage;
}());
exports.Angular2EndToEndPage = Angular2EndToEndPage;
//# sourceMappingURL=app.page.js.map