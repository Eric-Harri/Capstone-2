"use strict";

const mountainField = document.getElementById("mountainsField");
const cardSection = document.getElementById("card-section");

function loadMountSelect() {
  mountainField.innerHTML = "";
  let option = new Option("Select...", " ");
  mountainField.appendChild(option);
  mountainsArray.forEach((mountain) => {
    let newOption = new Option(mountain.name, mountain.name);
    mountainField.appendChild(newOption);
  });
}

function loadMountainInfo() {
  let selectedValue = mountainField.value;
  mountainsArray.forEach((mountain) => {
    if (selectedValue === mountain.name) {
      buildMountainCard(cardSection, mountain);
    }
  });
}

function buildMountainCard(section, mountain) {
  //created the card
  const div = document.createElement("div");
  div.className = "card";
  //put inside the document or card section which is a div being used
  section.appendChild(div);
  //create image
  let cardImg = document.createElement("img");
  cardImg.className = "card-img-top";
  cardImg.alt = mountain.name;
  cardImg.src = "images/" + mountain.img;

  //create the title
  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.innerText = mountain.name;
  //add the description
  let desc = document.createElement("p");
  desc.innerText = mountain.desc;
  //add the elevation
  let elevation = document.createElement("p");
  elevation.innerText = `${mountain.elevation} ft`;
  //add additional info
  let addInfo = document.createElement("p");
  addInfo.innerText = `Effort: ${mountain.effort}
    Coordinates: ${mountain.coords.lat}, ${mountain.coords.lng}`;
  //button
  let removeBtn = document.createElement("button");
  removeBtn.className = "btn btn-danger";
  removeBtn.innerText = "remove";
  //button function
  function removeCard() {
    section.removeChild(div);
  }

  removeBtn.onclick = removeCard;

  const divBody = document.createElement("div");
  divBody.className = "card-body";
  div.appendChild(divBody);
  divBody.append(cardImg, cardTitle, desc, elevation, addInfo, removeBtn);
}

function clearScreen() {
  let cardSection = document.querySelector("#card-section");

  let cards = document.querySelectorAll("#card-section .card");
  cards.forEach((card) => cardSection.removeChild(card));
}

function displayMounts() {
    mountainsArray.forEach((mountain) => {
        buildMountainCard(cardSection, mountain)
    });
}

window.onload = () => {
  loadMountSelect();
  mountainField.onchange = loadMountainInfo;
  const clearBtn = document.getElementById("clearBtn");

  clearBtn.onclick = clearScreen;
  const displayAllMountsBtn = document.getElementById("displayAllMounts");

  displayAllMountsBtn.onclick = displayMounts;
};
