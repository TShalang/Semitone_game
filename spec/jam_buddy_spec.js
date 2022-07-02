const { JamBuddy } = require("../src/jam_buddy");
const buddy = new JamBuddy();

describe("selectNotes()", function () {
  it("should print 2 random notes in array ", function () {
    const notes = buddy.selectNotes();
    expect(notes.length).toEqual(2);
  });
});

describe("checkAnswer()", function () {
  it("should return false for incorrect input guess", function () {
    buddy.randomNotes = ["A", "B"];
    expect(buddy.checkAnswer(1)).toBe(false);
  });
  it("should return true for correct input guess", function () {
    buddy.randomNotes = ["A", "B"];
    expect(buddy.checkAnswer(2)).toBe(true);
  });
  it("should return true to display circle is clockwise", function () {
    buddy.randomNotes = ["G", "B"];
    expect(buddy.checkAnswer(4)).toBe(true);
  });
  it("should return Invalid for negative input", function () {
    buddy.randomNotes = ["F", "A#"];
    expect(buddy.checkAnswer(-4)).toBe("Invalid");
  });
  it("should return Invalid for non integer input", function () {
    buddy.randomNotes = ["B", "C"];
    expect(buddy.checkAnswer("a")).toBe("Invalid");
  });
  it("should return false for incorrect input guess on sharps and flats", function () {
    buddy.randomNotes = ["A#", "Db"];
    expect(buddy.checkAnswer(1)).toBe(false);
  });
  it("should return true for correct input guess on sharps and flats", function () {
    buddy.randomNotes = ["A#", "Db"];
    expect(buddy.checkAnswer(3)).toBe(true);
  });
  it("should return true if the notes difference is 12", () => {
    buddy.randomNotes = ["C", "C"];
    expect(buddy.checkAnswer(12)).toBe(true);
  });
});
