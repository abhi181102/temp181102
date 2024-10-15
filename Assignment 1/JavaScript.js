const wordList1 = [
  "Lord Rama",
  "Sita",
  "Lakshmana",
  "Hanuman",
  "Ravana",
  "Sugriva",
  "Vibhishana",
];
const wordList2 = [
  "Battled with",
  "Rescued",
  "Flew with",
  "Defeated",
  "Found",
  "Helped",
];
const wordList3 = [
  "A mighty",
  "A loyal",
  "A fierce",
  "A wise",
  "A brave",
  "An evil",
];
const wordList4 = [
  "Demon",
  "Monkey army",
  "King",
  "Queen",
  "Warrior",
  "Rakshasa",
];
const wordList5 = [
  "In the forest",
  "On the battlefield",
  "In Lanka",
  "On the mountaintop",
  "In Ayodhya",
  "On the sea bridge",
];

let word1Index = 0;
let word2Index = 0;
let word3Index = 0;
let word4Index = 0;
let word5Index = 0;

let btnWord1Pressed = false;
let btnWord2Pressed = false;
let btnWord3Pressed = false;
let btnWord4Pressed = false;
let btnWord5Pressed = false;

document
  .getElementById("btnWord1")
  .addEventListener("click", () => updateWord(1));
document
  .getElementById("btnWord2")
  .addEventListener("click", () => updateWord(2));
document
  .getElementById("btnWord3")
  .addEventListener("click", () => updateWord(3));
document
  .getElementById("btnWord4")
  .addEventListener("click", () => updateWord(4));
document
  .getElementById("btnWord5")
  .addEventListener("click", () => updateWord(5));

document.getElementById("generateBtn").addEventListener("click", buildSentence);
document.getElementById("resetBtn").addEventListener("click", resetAll);
document.getElementById("randomBtn").addEventListener("click", randomSentence);

function updateWord(btnNumber) {
  switch (btnNumber) {
    case 1:
      document.getElementById("btnWord1").textContent = wordList1[word1Index++];
      btnWord1Pressed = true;
      if (word1Index === wordList1.length) word1Index = 0;
      break;
    case 2:
      document.getElementById("btnWord2").textContent = wordList2[word2Index++];
      btnWord2Pressed = true;
      if (word2Index === wordList2.length) word2Index = 0;
      break;
    case 3:
      document.getElementById("btnWord3").textContent = wordList3[word3Index++];
      btnWord3Pressed = true;
      if (word3Index === wordList3.length) word3Index = 0;
      break;
    case 4:
      document.getElementById("btnWord4").textContent = wordList4[word4Index++];
      btnWord4Pressed = true;
      if (word4Index === wordList4.length) word4Index = 0;
      break;
    case 5:
      document.getElementById("btnWord5").textContent = wordList5[word5Index++];
      btnWord5Pressed = true;
      if (word5Index === wordList5.length) word5Index = 0;
      break;
  }
}

function buildSentence() {
  if (
    !btnWord1Pressed ||
    !btnWord2Pressed ||
    !btnWord3Pressed ||
    !btnWord4Pressed ||
    !btnWord5Pressed
  ) {
    alert("Please select all words.");
    return;
  }

  const sentence =
    [
      document.getElementById("btnWord1").textContent,
      document.getElementById("btnWord2").textContent,
      document.getElementById("btnWord3").textContent,
      document.getElementById("btnWord4").textContent,
      document.getElementById("btnWord5").textContent,
    ].join(" ") + ".";

  document.getElementById("storyBox").textContent = sentence;
}

function resetAll() {
  document.getElementById("btnWord1").textContent = "Word 1";
  document.getElementById("btnWord2").textContent = "Word 2";
  document.getElementById("btnWord3").textContent = "Word 3";
  document.getElementById("btnWord4").textContent = "Word 4";
  document.getElementById("btnWord5").textContent = "Word 5";
  document.getElementById("storyBox").textContent = "";
  word1Index = word2Index = word3Index = word4Index = word5Index = 0;
  btnWord1Pressed =
    btnWord2Pressed =
    btnWord3Pressed =
    btnWord4Pressed =
    btnWord5Pressed =
      false;
}

function randomSentence() {
  const randomSentence =
    [
      wordList1[Math.floor(Math.random() * wordList1.length)],
      wordList2[Math.floor(Math.random() * wordList2.length)],
      wordList3[Math.floor(Math.random() * wordList3.length)],
      wordList4[Math.floor(Math.random() * wordList4.length)],
      wordList5[Math.floor(Math.random() * wordList5.length)],
    ].join(" ") + ".";

  document.getElementById("storyBox").textContent = randomSentence;
}
