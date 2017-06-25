import { browser, element, by } from "protractor";

describe("Web numeric sequences E2E tests", () => {

    const sequences: any[] = [];

    function checkSequence(name: string, values: string) {
        console.log("seqs:", sequences.length);
        const seq = sequences.filter(x => (x.name === name))[0];

        it(name + " must be not undefined", () => expect(seq).not.toBeUndefined());
        it(name + " must equal " + values, () => expect(seq.values).toEqual(values));
    }

    beforeAll(() => {

        console.log("Navigating to the root web page");
        browser.get("");

        const apiWaitTimeout = 2000;
        console.log("Calling Web API to fill sequences");
        element(by.id("submit")).click();
        browser.sleep(apiWaitTimeout);

        console.log("Found sequences:");
        element.all(by.tagName("sequence")).then(seqs =>
            seqs.forEach(seq => {
                    seq.element(by.css(".sequence-name")).getText().then(name => {
                        seq.element(by.css(".sequence-values")).getText().then(values => {
                            console.log("\t", name, values);
                            sequences.push({ name: name, values: values });
                        });
                    });
                }
            ));
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

    checkSequence("Fibonacci Numbers", "1,1,2,3,5,8");

});