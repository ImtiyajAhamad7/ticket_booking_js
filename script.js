//intial value setting for ticket
const total_tickets = 100;


let available_tickets = 100;

let tot = document.querySelector("h3");

tot.innerHTML = `Total tickets: ${total_tickets}`;

let paragraph = document.querySelector("p");

paragraph.innerHTML = `Available tickets: ${available_tickets}`;




// Selecting the form element
let form = document.querySelector('form[name="booking"]');
let value = 0;

// Adding an event listener to the form submission event
form.addEventListener("submit", function (e) {
  
  e.preventDefault();

  // Getting the input value
  value = document.getElementById("ticket").value;

  if (available_tickets >= value) {
    if(value<1) {
      paragraph.innerHTML = `Please enter a valid number`;
      paragraph.style.color = "red";
      return;
    }
    // Calculating available tickets
    available_tickets = available_tickets - value;

    // Updating the paragraph content
    paragraph.innerHTML = `Available tickets: ${available_tickets}`;

    if (available_tickets == 0) {
      paragraph.innerHTML = ` All tickets were sold`;
      paragraph.style.color = "red";
    }
    document.getElementById("ticket").value = "";
  } else {
    paragraph.innerHTML = `sorry only ${available_tickets} tickets are available`;
    paragraph.style.color = "orange";
  }
});
