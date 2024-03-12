const total_tickets = 100;

let available_tickets = 100;

let tot = document.querySelector('h3');

tot.innerHTML = `Total tickets: ${total_tickets}`;


let paragraph = document.querySelector('p');

paragraph.innerHTML = `Available tickets: ${available_tickets}`;


// getting value of tickets

// let input = document.querySelector('input');


// Selecting the form element
let form = document.querySelector('form[name="booking"]');
let value = 0;



// Adding an event listener to the form submission event
form.addEventListener('submit', function(e) {

    // Preventing the default form submission behavior

    e.preventDefault();

    // Getting the input value
     value = document.getElementById('ticket').value;

     

    if(available_tickets >= value){
   

    // Calculating available tickets
     available_tickets = available_tickets - value;

    

    // Updating the paragraph content
    paragraph.innerHTML = `Available tickets: ${available_tickets}`;

    if(available_tickets==0) {
        paragraph.innerHTML =  ` All tickets were sold`
     }  
    document.getElementById('ticket').value = '';

}
    else{
         
            paragraph.innerHTML =   `sorry only ${available_tickets} tickets are available`;
    }
});



