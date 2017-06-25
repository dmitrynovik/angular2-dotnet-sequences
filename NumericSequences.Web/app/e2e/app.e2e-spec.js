"use strict";
var protractor_1 = require("protractor");
describe("Web numeric sequences E2E tests", function () {
    var sequences = [];
    function checkSequence(name, values) {
        console.log("seqs:", sequences.length);
        var seq = sequences.filter(function (x) { return (x.name === name); })[0];
        it(name + " must be not undefined", function () { return expect(seq).not.toBeUndefined(); });
        it(name + " must equal " + values, function () { return expect(seq.values).toEqual(values); });
    }
    beforeAll(function () {
        console.log("Navigating to the root web page");
        protractor_1.browser.get("");
        var apiWaitTimeout = 2000;
        console.log("Calling Web API to fill sequences");
        protractor_1.element(protractor_1.by.id("submit")).click();
        protractor_1.browser.sleep(apiWaitTimeout);
        console.log("Found sequences:");
        protractor_1.element.all(protractor_1.by.tagName("sequence")).then(function (seqs) {
            return seqs.forEach(function (seq) {
                seq.element(protractor_1.by.css(".sequence-name")).getText().then(function (name) {
                    seq.element(protractor_1.by.css(".sequence-values")).getText().then(function (values) {
                        console.log("\t", name, values);
                        sequences.push({ name: name, values: values });
                    });
                });
            });
        });
    });
    var title = "Numeric sequences generator.";
    it("title must display: " + title, function () {
        expect(protractor_1.element(protractor_1.by.tagName("h1")).getText()).toEqual(title);
    });
    var help = "Generates some fancy numeric sequences";
    it("help must display: " + help, function () {
        expect(protractor_1.element(protractor_1.by.css(".help")).getText()).toEqual(help);
    });
    var label = "Please enter the limit";
    it("label must display: " + label, function () {
        expect(protractor_1.element(protractor_1.by.tagName("label")).getText()).toEqual(label);
    });
    checkSequence("Fibonacci Numbers", "1,1,2,3,5,8");
});
//# sourceMappingURL=app.e2e-spec.js.map