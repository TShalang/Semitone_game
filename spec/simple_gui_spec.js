const { JSDOM } = require("jsdom");
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const { JamBuddy } = require("../src/jam_buddy");
const { document } = new JSDOM(index).window;
global.document = document;
const buddy = new JamBuddy();

describe(`index.html`, function () {
  beforeEach(function (done) {
    JSDOM.fromFile(`index.html`).then(function (res) {
      browser = res;
      done();
    });
  });
  it(`should have </div> element`, function () {
    const div = browser.window.document.querySelector(`div`);
    expect(div).not.toBe(null);
  });
  it(`should have </script> element`, function () {
    const script = browser.window.document.querySelector(`script`);
    expect(script).not.toBe(null);
  });
  it(`should have </img> element`, function () {
    const img = browser.window.document.querySelector(`img`);
    expect(img).not.toBe(null);
  });
  it("should update dom element by displaying random notes when get random notes button is clicked", () => {
    expect(global.document.getElementById("notes").innerHTML).toBe("");
    const randomNotes = document.getElementById("randomNotesBtn");
    randomNotes.addEventListener("click", function () {
      document.getElementById("notes").innerHTML = buddy.selectNotes();
    });
    randomNotes.click();
    expect(global.document.getElementById("notes").innerHTML).not.toBe("");
  });
  it("should update dom element by displaying correct/incorrect result when submit button is clicked", () => {
    expect(global.document.getElementById("result").innerHTML).toBe("");
    const submit = document.getElementById("submit");
    const resultValue = document.getElementById("result");
    submit.addEventListener("click", function () {
      document.getElementById("result").innerHTML = resultValue;
    });
    submit.click();
    expect(global.document.getElementById("result").innerHTML).not.toBe("");
  });
  it("should clear explanation div when get random notes button is clicked", () => {
    const randomNotes = document.getElementById("randomNotesBtn");
    randomNotes.click();
    expect(global.document.getElementById("explanation").innerHTML).toBe("");
  });
  it("should clear answer div when get random notes button is clicked", () => {
    const randomNotes = document.getElementById("randomNotesBtn");
    randomNotes.click();
    expect(global.document.getElementById("answer").innerHTML).toBe("");
  });
});
