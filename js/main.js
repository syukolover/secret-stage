//character related initializers

function idol(lastname, firstname, age, location, vocal, dance, visual) {
  this.lastname = lastname;
  this.firstname = firstname;
  this.age = age;
  this.location = location;
  this.hp = 100;
  this.love = 0;
  this.trust = 10;
  this.virgin = true;
  this.virginTakenBy = null;
  this.currentAction = "";
  this.activity = false;

  this.youCount = 0;
  this.youNakadashiCount = 0;
  this.youFellaCount = 0;
  this.rivCount = 0;
  this.rivNakadashiCount = 0;
  this.rivFellaCount = 0;
  this.menCount = 0;
  this.menNakadashiCount = 0;
  this.menFellaCount = 0;

  this.isHavingSex = false;
  this.hadSexWithRiv = false;

  this.semenInVagina = 0;
  this.semenOnFace = 0;
  this.semenOnTits = 0;
  this.semenOnHair = 0;
  this.semenOnBody = 0;
  this.sweat = 0;

  this.vocal = vocal;
  this.dance = dance;
  this.visual = visual;

  this.sexTechHips = 0;
  this.sexTechMouth = 0;
  this.sexTechHand = 0;
  this.sexTechTits = 0;
  this.sexTechVoice = 0;

  this.returnTime = 0;
}

function character(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
  this.hp = 100;
}

let uzuki = new idol("시마무라", "우즈키", 17, "사무실", 1020, 1248, 1965);
console.log(uzuki);
let syuko = new idol("시오미", "슈코", 18, "619 사무실", 1000, 1000, 1000);
let producer = new character("프로듀서", 21, "사무실");
let rival = new character("619 프로듀서", 21, "619 사무실");

let cash = 10000;
if (cash in localStorage) {
  cash = localStorage.getItem(cash);
}
let kikakusho = 1;
if (kikakusho in localStorage) {
  kikakusho = localStorage.getItem(cash);
}

let cindefes = false;
let finishTime = 0;

//time tracker

let time = 720;
if (time in localStorage) {
  time = localStorage.getItem(time);
}
let hour;
let minute;

let HTMLtopleft = document.getElementById("topleft");
let HTMLtopright = document.getElementById("topright");

function updateTime() {
  let day = Math.floor(time / 1440) + 1;
  let yobi;
  if (day % 7 == 1) {
    yobi = "월";
  } else if (day % 7 == 2) {
    yobi = "화";
  } else if (day % 7 == 3) {
    yobi = "수";
  } else if (day % 7 == 4) {
    yobi = "목";
  } else if (day % 7 == 5) {
    yobi = "금";
  } else if (day % 7 == 6) {
    yobi = "토";
  } else if (day % 7 == 0) {
    yobi = "일";
  }
  hour = Math.floor((time / 60) % 24);
  minute = time % 60;
  HTMLtopleft.innerHTML = day + "일차 (" + yobi + ")";
  if (minute < 10) {
    HTMLtopright.innerHTML = hour + ":0" + minute;
  } else {
    HTMLtopright.innerHTML = hour + ":" + minute;
  }
}

function updateMinute(minutes) {
  for (let i = 0; i < minutes; i++) {
    time++;
    calculateSweat(0, 60, 1);
    calculateHp(0, 100);
  }

  function calculateSweat(min, max, rate) {
    uzuki.sweat -= rate;
    if (uzuki.sweat < min) {
      uzuki.sweat = 0;
    }
    if (uzuki.sweat > max) {
      uzuki.sweat = 60;
    }
  }
  function calculateHp(min, max) {
    if (uzuki.hp > 100) {
      uzuki.hp = 100;
    }
    if (uzuki.hp < 0) {
      uzuki.hp = 0;
    }
  }
}

updateTime();

//html content

let content = document.getElementById("content");

navButton = document.getElementById("status");
navButton.addEventListener("click", () => status());
navButton = document.getElementById("phone");
navButton.addEventListener("click", () => phone());
navButton = document.getElementById("commu");
navButton.addEventListener("click", () => commu());
navButton = document.getElementById("activity");
navButton.addEventListener("click", () => activity());
navButton = document.getElementById("settings");
navButton.addEventListener("click", () => settings());

//content

function newLine(text, classAssign) {
  let newLine = document.createElement("p");
  if (classAssign !== undefined) {
    newLine.className = classAssign;
  }
  newLine.innerHTML = text;
  content.appendChild(newLine);
}

function newDial(character, text) {
  let newDial = document.createElement("p");
  if (character == "uzuki") {
    newDial.style.color = "#fa7497";
  }
  newDial.innerHTML = `"` + text + `"`;
  content.appendChild(newDial);
}

function newButt(text, func) {
  let newButton = document.createElement("BUTTON");
  newButton.innerHTML = text;
  newButton.addEventListener("click", () => func());
  newButton.addEventListener("click", () => updateTime());

  content.appendChild(newButton);
}

function clearContent() {
  content.innerHTML = "";
}
