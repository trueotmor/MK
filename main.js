const getRandomElement = (iterable) => {
  const clonedData = [...iterable];
  const randomIndex = Math.floor(Math.random() * clonedData.length);
  return clonedData[randomIndex];
};

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const names = new Set(["SONYA", "KITANA", "SCORPION", "SUBZERO", "LIUKANG"]);
const getRandomName = () => getRandomElement(names);

const fighters = new Map([
  ["SONYA", "http://reactmarathon-api.herokuapp.com/assets/sonya.gif"],
  ["KITANA", "http://reactmarathon-api.herokuapp.com/assets/kitana.gif"],
  ["SCORPION", "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif"],
  ["SUBZERO", "http://reactmarathon-api.herokuapp.com/assets/subzero.gif"],
  ["LIUKANG", "http://reactmarathon-api.herokuapp.com/assets/liukang.gif"],
]);

const getImage = (someMap, fighterName) => {
  return someMap.get(fighterName);
};

const weapons = new Set([
  "Бионические руки",
  "Нагината",
  "Стальные веера",
  "Молот гнева",
  "Мечи-крюки",
  "Боуи",
  "Меч",
]);
const getRandomWeapon = () => getRandomElement(weapons);

const playerOneName = getRandomName();
const playerOne = {
  player: 1,
  name: playerOneName,
  hp: 100,
  img: getImage(fighters, playerOneName),
  weapon: getRandomWeapon(),
  attack: () => {
    console.log(this.name + "Fight...");
  },
};

const playerTwoName = getRandomName();
const playerTwo = {
  player: 2,
  name: playerTwoName,
  hp: 100,
  img: getImage(fighters, playerTwoName),
  weapon: getRandomWeapon(),
  attack: () => {
    console.log(this.name + "Fight...");
  },
};

const arena = document.querySelector(".arenas");
const randomButton = document.querySelector(".button");

const createElement = (tag, className) => {
  const newTag = document.createElement(tag);
  if (className) {
    newTag.classList.add(className);
  }

  return newTag;
};

const createPlayer = (char) => {
  const player = createElement("div", "player" + char.player);
  const progressBar = createElement("div", "progressbar");
  const character = createElement("div", "character");
  const life = createElement("div", "life");
  const name = createElement("div", "name");
  const image = document.createElement("img");
  image.src = char.img;
  player.appendChild(progressBar);
  player.appendChild(character);
  progressBar.appendChild(life);
  progressBar.appendChild(name);
  character.appendChild(image);

  life.style.width = char.hp + "%";
  name.innerHTML = char.name;
  return player;
};

const playerWin = (name) => {
  const loseTitle = createElement("div", "loseTitle");
  loseTitle.innerHTML = name + " WIN";

  return loseTitle;
};

const changeHP = (player1, player2) => {
  const player1Life = document.querySelector(
    ".player" + player1.player + " .life"
  );

  const player2Life = document.querySelector(
    ".player" + player2.player + " .life"
  );

  player1.hp -= getRandomInteger(1, 20);
  player2.hp -= getRandomInteger(1, 20);

  if (player1.hp <= 0) {
    player1.hp = 0;
  }

  if (player2.hp <= 0) {
    player2.hp = 0;
  }

  player1Life.style.width = player1.hp + "%";
  player2Life.style.width = player2.hp + "%";

  if (player1.hp && player2.hp == 0) {
    randomButton.setAttribute("disabled", true);
    arena.appendChild(playerWin("NOBODY"));
  } else if (player2.hp == 0) {
    arena.appendChild(playerWin(player1.name));
    randomButton.setAttribute("disabled", true);
  } else if (player1.hp == 0) {
    arena.appendChild(playerWin(player2.name));
    randomButton.setAttribute("disabled", true);
  }
};

randomButton.addEventListener("click", () => {
  changeHP(playerOne, playerTwo);
});

arena.appendChild(createPlayer(playerOne));
arena.appendChild(createPlayer(playerTwo));
