﻿import { browser, element, by } from "protractor";

describe("Web numeric sequences E2E tests", () => {

    function checkSequence(id: string, values: string) {
        it("checking " + id, () => {
            const vals = element(by.id(id)).element(by.css(".sequence-values")).getText();
            expect(vals).toEqual(values);
        });
    }

    beforeAll(() => {

        console.log("Navigating to the root web page");
        browser.get("");

        console.log("Calling Web API to fill sequences");
        const apiWaitTimeout = 5000;
        element(by.id("submit")).click();
        browser.sleep(apiWaitTimeout);
    });

    const title = "Numeric sequences generator.";
    it("title must display: " + title, () => {
        expect(element(by.tagName("h1")).getText()).toEqual(title);
    });

    const help = "Generates some fancy numeric sequences";
    it("help must display: " + help, () => {
        expect(element(by.css(".help")).getText()).toEqual(help);
    });

    const label = "Please enter the limit";
    it("label must display: " + label, () => {
        expect(element(by.tagName("label")).getText()).toEqual(label);
    });

    checkSequence("FibonacciNumbers", "1,1,2,3,5,8");
    checkSequence("EvenPositiveNaturalNumbers", "2,4,6,8,10");
    checkSequence("OddPositiveNaturalNumbers", "1,3,5,7,9");
    checkSequence("PositiveNaturalNumbers", "1,2,3,4,5,6,7,8,9,10");
    checkSequence("WeirdNaturalNumbers", "1,2,C,4,E,C,7,8,C,E");
});
