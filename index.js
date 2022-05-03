let nameList = [
  "Sidath",
  "Dabare",
  "Simon",
  "Farshad",
  "Carloz",
  "Ade",
  "Tinko",
  "Jhon",
  "Eric",
  "Stefano",
  "Lidia",
]; //list of naemes
let currentTeam = 0;
let newTeam = 0;
let olList = document.querySelector("#nameList");
console.log(nameList.length);
// get names------------
function getNames() {
  let inputName = document.querySelector("#name");
  nameList.push(inputName.value);
  inputName.value = "";
  createList();
}
//console.log(inputName.value);
getNames();
// display names-------------

function createList() {
  olList.innerHTML = "";
  for (let i = 0; i < nameList.length; i++) {
    let name = nameList[i];
    console.log(name);
    let newLi = document.createElement("li");
    newLi.setAttribute("class", "namesLi");

    olList.appendChild(newLi);
    newLi.innerText = name;
  }
}
// createList();
// Create teams-----------
let teamsArr = [];

function createTeam() {
  let teamDisplay = document.querySelector(".right-container");
  let inputNumbers = document.querySelector("#number").value;
  //console.log(inputNumbers);
  for (let i = 0; i < inputNumbers; i++) {
    let teams = inputNumbers[i];
    teams = document.createElement("div");
    teams.setAttribute("class", "teams");
    teams.innerHTML = `<p>Team : ${[i + 1]}</p>`;
    teamDisplay.appendChild(teams);
    teamsArr.push(teams);
    console.log(teams);
  }
}

// get number input value--
// let newArr = [];
// let inputNumbers = document.querySelector("#number");
// let eachTeam = 0;
// inputNumbers.addEventListener("input", function (e) {
//   eachTeam = Math.floor(newArr.length / e.target.value);
//   //console.log(eachTeam);
// });

// assign names----------------------
let count = 1;
//newTeam = document.querySelector(`.teams:nth-child(${count})`);
function assignName() {
  let teamCount = document.querySelectorAll(".teams").length;
  console.log(teamCount);

  //while (nameList.length > 0) {
  if (teamCount > 0) {
    // let randomName = nameList[Math.floor(Math.random() * nameList.length)];
    // nameList = nameList.filter((name) => name !== randomName);
    // let newTeam = document.querySelector(`.teams:nth-child(${count})`);
    // let createNode = document.createElement("p");
    // createNode.innerText = randomName;
    // newTeam.appendChild(createNode);
    // count += 1;
    // return;
    //teamsArr[count].push(newTeam);

    if (teamCount === count) {
      count = 1;
    }
    let randomName = nameList[Math.floor(Math.random() * nameList.length)];
    nameList = nameList.filter((name) => name !== randomName);
    let newTeam = document.querySelector(`.teams:nth-child(${count})`);
    let createNode = document.createElement("p");
    createNode.innerText = randomName;
    newTeam.appendChild(createNode);
    count += 1;
  } else {
    count--;
    alert("finish");
  }
}

//}
// }

// Reset page - clear all---------------------
function resetData() {
  window.location.reload(true);
}

// function reset() {
//   inputName.value = "";
//   teamsNum.value = 2;
//   mainList.innerHTML = "";
//   teamsContainer.innerHTML = "";

//   for (let i = 0; i < 2; i++) {
//     createTeam(i + 1);
//   }
// }
