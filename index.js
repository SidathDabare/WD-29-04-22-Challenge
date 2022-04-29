let nameList = []; //list of naemes
let olList = document.querySelector("#nameList");
// console.log(olList);
// console.log(nameList);

// get names------------
function getNames() {
  let inputName = document.querySelector("#name");
  nameList.push(inputName.value);
  inputName.value = "";
  createList();
}
//console.log(inputName.value);

// display names-------------

function createList() {
  olList.innerHTML = "";
  for (let i = 0; i < nameList.length; i++) {
    let name = nameList[i];
    console.log(name);
    let newLi = document.createElement("li");
    newLi.setAttribute("class", "namesLi");
    newLi.innerText = name;
    olList.appendChild(newLi);
  }
}
// createList();
// Create teams-----------
function createTeam() {
  let teamDisplay = document.querySelector(".right-container");
  let inputNumbers = document.querySelector("#number").value;
  //console.log(inputNumbers);
  for (let i = 0; i < inputNumbers; i++) {
    let teams = inputNumbers[i];
    teams = document.createElement("ol");
    teams.setAttribute("class", "teamOl");
    teams.innerText = "Team " + [i + 1];
    teamDisplay.appendChild(teams);
  }
}
// get single name from list-------------------
let names = document.querySelectorAll(".namesLi");
//console.log(names);
let newArr = [];
console.log(newArr);

function getSingleName() {
  for (let index = 0; index < names.length; index++) {
    let singleName = names[index].innerText;
    newArr.push(singleName);
    // names[1].innerText = "";
    //console.log(e);
  }
  //return singleName;
}
getSingleName();

// assign names----------------------
let inputNumbers = document.querySelector("#number");
// get number input value--
let eachTeam = 0;
inputNumbers.addEventListener("input", function (e) {
  eachTeam = Math.ceil(newArr.length / e.target.value);
  console.log(eachTeam);
});

function assignName() {
  let teamOl = document.querySelector(".teamOl");
  //console.log(teamOl);
  if (inputNumbers.value == 0) {
    alert("Please add number");
  } else if (eachTeam) {
    //getSingleName();
    for (let i = 0; i < eachTeam; i++) {
      let singleName = newArr[i];
      console.log(singleName);
      let createLi = document.createElement("li");
      createLi.innerText = singleName;
      eachTeam = createLi;
      teamOl.appendChild(createLi);
    }
  }
}
// Reset page - clear all---------------------
function resetData() {
  window.location.reload(true);
}
