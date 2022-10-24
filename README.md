# Capstone-2

adding a array into a get select drop I had forgot. 
# js 
`
function someField() {
    someArray.forEach((callfn) => {
        let newOption = new Option(otpName, otpValue);
        someField.appendChild(newOption);
    })
}
`

# I didn't know how to make a table rows and cells using JS
`
function buildTicketRow(tableBody, ticket) {
  let row = tableBody.insertRow(-1);
  let cell1 = row.insertCell(0);
  cell1.innerText = ticket.tixNum;

  let cell2 = row.insertCell(1);
  cell2.innerText = ticket.prize;

  let cell3 = row.insertCell(2);
  cell3.innerText = ticket.expires;
}
`