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

const player1Name = getRandomName();
const player1 = {
  name: player1Name,
  hp: getRandomInteger(0, 100),
  img: getImage(fighters, player1Name),
  weapon: getRandomWeapon(),
  attack: () => {
    console.log(this.name + "Fight...");
  },
};

const player2Name = getRandomName();
const player2 = {
  name: player2Name,
  hp: getRandomInteger(0, 100),
  img: getImage(fighters, player2Name),
  weapon: getRandomWeapon(),
  attack: () => {
    console.log(this.name + "Fight...");
  },
};

const createPlayer = (gamer, char) => {
  const arena = document.querySelector(".arenas");

  const player = document.createElement("div");
  player.classList.add(gamer);

  const progressBar = document.createElement("div");
  progressBar.classList.add("progressbar");

  const character = document.createElement("div");
  character.classList.add("character");

  const life = document.createElement("div");
  life.classList.add("life");

  const name = document.createElement("div");
  name.classList.add("name");

  const image = document.createElement("img");
  image.src = char.img;

  arena.appendChild(player);

  player.appendChild(progressBar);
  player.appendChild(character);
  progressBar.appendChild(life);
  progressBar.appendChild(name);
  character.appendChild(image);

  life.style.width = char.hp + "%";
  name.innerHTML = char.name;
};

createPlayer("player1", player1);
createPlayer("player2", player2);
