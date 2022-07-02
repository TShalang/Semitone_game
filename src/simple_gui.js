const buddy = new JamBuddy();
let streak = 0;

function showNotes() {
  document.getElementById("num").disabled = false;
  document.getElementById("notes").innerHTML = buddy.selectNotes();
  document.getElementById("num").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("explanation").innerHTML = "";
  document.getElementById("answer").innerHTML = "";
}

function guessAnswer() {
  let userInput = parseInt(document.getElementById("num").value);
  let correct = buddy.checkAnswer(userInput);
  let result = "";

  correct === true
    ? ((result = "You got it right. Well Done!"), streak++, revealAnswer())
    : ((result = "Wrong answer! Try again"), (streak = 0));

  document.getElementById("result").innerHTML = result;
  document.getElementById("streak").innerHTML = streak;
}

function revealAnswer() {
  let notes = [
    `A`,
    `A#/Bb`,
    `B`,
    `C`,
    `C#/Db`,
    `D`,
    `D#/Eb`,
    `E`,
    `F`,
    `F#/Gb`,
    `G`,
    `G#/Ab`,
  ];

  let displayedNotes = document.getElementById("notes").innerHTML.split(",");
  let str = "";

  for (let i = 0; i < displayedNotes.length; i++) {
    if (displayedNotes[i] == "Bb" || displayedNotes[i] == "A#") {
      displayedNotes[i] = "A#/Bb";
    } else if (displayedNotes[i] == "Db" || displayedNotes[i] == "C#") {
      displayedNotes[i] = "C#/Db";
    } else if (displayedNotes[i] == "Eb" || displayedNotes[i] == "D#") {
      displayedNotes[i] = "D#/Eb";
    } else if (displayedNotes[i] == "Gb" || displayedNotes[i] == "F#") {
      displayedNotes[i] = "F#/Gb";
    }
    if (displayedNotes[i] == "Ab" || displayedNotes[i] == "G#") {
      displayedNotes[i] = "G#/Ab";
    }
  }

  for (let i = 0; i < notes.length; i++) {
    if (displayedNotes[0] === notes[i]) {
      str = str + notes[i].fontcolor("red").bold() + " | ";
    } else if (displayedNotes[1] === notes[i]) {
      str = str + notes[i].fontcolor("red").bold() + " | ";
    } else {
      str = str + notes[i] + ` | `;
    }
  }
  document.getElementById("explanation").innerHTML = str;
  document.getElementById("answer").innerHTML = buddy.getNoteDifference();
  document.getElementById("num").disabled = true;

  return str;
}
