const grid = document.querySelector(".grid");
const spanPlayer = document.querySelector(".player");
const timer = document.querySelector(".timer");

const charactersSimpson = [
  "bart",
  "burns",
  "homer",
  "krusty",
  "lisa",
  "marge",
  "moe",
  "milhouse",
  "nelson",
  "maggie",
];
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = "";
let secoundCard = "";

const checkEndGame = () => {
  const disableCards = document.querySelectorAll(".disable-card");

  if (disableCards.length === 20) {
    clearInterval(this.loop);
    alert(`Parabéns, ${spanPlayer.innerHTML} você conseguiu`);
  }
};

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute("data-character");
  const secoundCharacter = secoundCard.getAttribute("data-character");

  if (firstCharacter === secoundCharacter) {
    firstCard.firstChild.classList.add("disable-card");
    secoundCard.firstChild.classList.add("disable-card");

    firstCard = "";
    secoundCard = "";

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secoundCard.classList.remove("reveal-card");

      firstCard = "";
      secoundCard = "";
    }, 500);
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("reveal-card")) {
    return;
  }

  if (firstCard === "") {
    target.parentNode.classList.add("reveal-card");
    firstCard = target.parentNode;
  } else if (secoundCard === "") {
    target.parentNode.classList.add("reveal-card");
    secoundCard = target.parentNode;

    checkCards();
  }
};
const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../img/${character}.jpg')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-character", character);
  return card;
};

const loadGame = () => {
  const duplicateCharacters = [...charactersSimpson, ...charactersSimpson];

  const arrayEmbaralhado = duplicateCharacters.sort(() => Math.random() - 0.5);

  arrayEmbaralhado.forEach((characters) => {
    const card = createCard(characters);
    grid.appendChild(card);
  });
};

const startTimer = () => {
  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);
};

window.onload = () => {
  const playerName = localStorage.getItem("player");

  spanPlayer.innerHTML = playerName;

  startTimer();

  loadGame();
};
