"use strict";

const mountainField = document.getElementById("mountainsField");
const cardSection = document.getElementById("card-section");

function loadMountSelect() {
    mountainField.innerHTML = "";
    let option = new Option("Select...", " ");
    mountainField.appendChild(option);
    mountainsArray.forEach((mountain) => {
        let newOption = new Option(mountain.name, mountain.name)
        mountainField.appendChild(newOption);
    })
}

function loadMountainInfo() {
    let selectedValue = mountainField.value
    mountainsArray.forEach((mountain) => {
        if (selectedValue === mountain.name) {
            buildMountainCard(cardSection, mountain)
        }
    })
}

function buildMountainCard(section, mountain) {
    //created the card
    const div = document.createElement("div")
    div.className = "card"
    //put inside the document 
    section.appendChild(div)
    //create the title
    let cardTitle = document.createElement("h5")
    cardTitle.className = "card-title"
    cardTitle.innerText = mountain.name;
    //add the description
    let desc = document.createElement("p")
    desc.innerText = mountain.desc;
    //add the elevation
    let elevation = document.createElement("p")
    elevation.innerText = mountain.elevation;
    //add additional info
    let addInfo = document.createElement("p")
    addInfo.innerText = `effort: ${mountain.effort} coo`

    const divBody = document.createElement("div")
    divBody.className = "card-body"
    div.appendChild(divBody)
    divBody.appendChild(para)
     
}



window.onload = () => {
    loadMountSelect();
    mountainField.onchange = loadMountainInfo;
}