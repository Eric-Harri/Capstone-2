"strict use";

console.log(locationsArray);

const stateTerriField = document.getElementById("stateTerriField");
const byLocationField = document.getElementById("byLocationField");
const byTypeField = document.getElementById("byTypeField");
const nationalParkByLocationInfoTableBody = document.getElementById(
  "nationalParkByLocationInfoTableBody"
);

function loadStateTerriField() {
  locationsArray.forEach((location) => {
    let newOption = new Option(location, location);
    stateTerriField.appendChild(newOption);
  });
}

function loadTableBody() {
  selectedValue = stateTerriField.value;

  nationalParkByLocationInfoTableBody.innerHTML = "";
  nationalParksArray.forEach((park) => {
    if (selectedValue === park.State) {
      buildLocationInfoRow(nationalParkByLocationInfoTableBody, park);
    }
  });
}

function buildLocationInfoRow(tablebody, nationalPark) {
  let row = tablebody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = nationalPark.LocationName;

  let cell2 = row.insertCell(1);
  cell2.innerText = nationalPark.Address;

  let cell3 = row.insertCell(2);
  cell3.innerText = nationalPark.City;

  let cell4 = row.insertCell(3);
  cell4.innerText = nationalPark.State;

  let cell5 = row.insertCell(4);
  cell5.innerText = nationalPark.ZipCode;

  let cell6 = row.insertCell(5);
  cell6.innerText = nationalPark.Phone;

  let cell7 = row.insertCell(6);

  if (nationalPark.Visit) {
    const a = document.createElement("a");
    link = document.createTextNode(nationalPark.Visit);
    a.appendChild(link);
    a.innerText = "Visit";
    a.href = nationalPark.Visit;
    cell7.appendChild(a);
  }
}

window.onload = () => {
  loadStateTerriField();

  stateTerriField.onchange = loadTableBody;
};
