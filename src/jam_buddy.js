class JamBuddy {
  constructor() {
    this.notes = [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "Bb",
      "Db",
      "Eb",
      "Gb",
      "Ab",
    ];
    this.randomNotes = [];
  }

  selectNotes() {
    const note1 = this.notes[Math.floor(Math.random() * this.notes.length)];
    const note2 = this.notes[Math.floor(Math.random() * this.notes.length)];
    this.randomNotes = [note1, note2];
    return this.randomNotes;
  }

  getNoteDifference() {
    let noteIndexes = [];
    let newIndex = [];

    for (let i = 0; i < 2; i++) {
      noteIndexes.push(this.notes.indexOf(this.randomNotes[i]));
    }
    newIndex = noteIndexes.map((element) => {
      if (element === 12) {
        element = 1;
      } else if (element === 13) {
        element = 4;
      } else if (element === 14) {
        element = 6;
      } else if (element === 15) {
        element = 9;
      } else if (element === 16) {
        element = 11;
      }
      return element;
    });

    const index1 = newIndex[0];
    const index2 = newIndex[1];
    let noteDifference = 0;

    if (index1 > index2) {
      noteDifference = 12 - index1 + index2;
    } else if (index1 === index2) {
      noteDifference = 12;
    } else {
      noteDifference = index2 - index1;
    }
    return noteDifference;
  }

  checkAnswer(number) {
    let difference = this.getNoteDifference();

    if (number < 0 || Number.isInteger(number) === false) {
      return "Invalid";
    }
    return difference === number;
  }
}

module.exports = { JamBuddy };
