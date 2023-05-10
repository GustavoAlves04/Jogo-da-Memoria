const grid = document.querySelector(".grid");

const charactersSimpson = [
    'bart',
    'burns',
    'homer',
    'krusty',
    'lisa',
    'marge',
    'moe',
    'milhouse',
    'nelson',
    'maggie',
]
const createElement = (tag, className) =>{

    const element = document.createElement(tag)
    element.className = className
    return element
}
const createCard = (character) => {
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../img/${character}.jpg')`

  card.appendChild(front);
  card.appendChild(back);

  return card
};

const loadGame = () => {

  const duplicateCharacters = [ ...charactersSimpson, ...charactersSimpson]

  duplicateCharacters.forEach((characters) =>{

    const card = createCard(characters)
    grid.appendChild(card)

  })
}

loadGame()