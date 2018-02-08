"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee col-lg-6">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function allOptions(e) {
    var allOptions = document.getElementById("all-options").value;
    if (roastSelection.value === allOptions) {
        tbody.innerHTML = renderCoffees(coffees);
    }
}

function updateCoffeesAgain(input) {
var selectedCoffee = coffeeName.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if(coffee.name.toLowerCase().includes(selectedCoffee)){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// coffees.reverse();

function addFlavor() {
    event.preventDefault();
    var newCoffee = document.getElementById("new-coffee");
    console.log(newCoffee);
    var newRoast = document.getElementById("new-roast");
    var addCoffee = {
        name: newCoffee.value,
        roast:newRoast.value
    };
    console.log(addCoffee);
    coffees.push(addCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var coffeeButton = document.querySelector("#submit2");
var roastSelection = document.querySelector('#roast-selection');
var coffeeName = document.querySelector("#coffee-name");
var newButton = document.querySelector("#submit-new");

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
coffeeButton.addEventListener("click", updateCoffeesAgain);
roastSelection.addEventListener("change", updateCoffees);
coffeeName.addEventListener("keyup", updateCoffeesAgain);
roastSelection.addEventListener("change", allOptions);
newButton.addEventListener("click", addFlavor);

