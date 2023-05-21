'use strict';

/** Global Variables & Declarations */
/** ------ Grab the window into the DOM ------ */
let salesLists = document.getElementById('sales-lists');

/** ------ Arrays ------ */
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const cityArray = [];

/** ------ City Renderer ------ */
function renderAllCities(){
  for(let i = 0; i < cityArray.length; i++){
    cityArray[i].render();
  }
}

/** Header Row Function */
function headerFunction(){
  let table = document.createElement('table');
  salesLists.appendChild(table);

  let headRow = document.createElement('tr');
  table.appendChild(headRow);

  let cell = document.createElement('th');
  headRow.appendChild(cell);

  for(let i = 0; i < hours.length; i++){
    let headCell = document.createElement('th');
    headCell.textContent = hours[i];
    headRow.appendChild(headCell);
  }

  let totalHeaderCell = document.createElement('th');
  totalHeaderCell.textContent = 'Daily Location Total';
  headRow.appendChild(totalHeaderCell);
}

/** Footer Row Function */
function footerFunction(){
  let table = document.querySelector('table');
  let footRow = document.createElement('tr');
  table.appendChild(footRow);

  let cell = document.createElement('td');
  cell.textContent = 'Totals';
  footRow.appendChild(cell);

  let hourlyTotals = [];

  for(let i = 0; i < hours.length; i++){
    let total = 0;

    for(let j = 0; j < cityArray.length; j++){
      total += cityArray[j].randomCookie[i];
    }

    hourlyTotals.push(total);

    let cell = document.createElement('td');
    cell.textContent = total;
    footRow.appendChild(cell);
  }

  let total = 0;
  for(let i = 0; i < hourlyTotals.length; i++){
    total += hourlyTotals[i];
  }

  let totalCell = document.createElement('td');
  totalCell.textContent = total;
  footRow.appendChild(totalCell);
}

/** Constructor */
function Store(name, min, max, avgCookies){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.randomCookie = [];
  this.totalCookies = 0;
}

/** ------ Prototype Methods ------ */
Store.prototype.randomNumGenerator = function(max, min){
  return Math.floor(Math.random() * (max - min + 1) + min);
};

Store.prototype.render = function(){
  let cRow = document.createElement('tr');

  let cityName = document.createElement('td');
  cityName.textContent = this.name;
  cRow.appendChild(cityName);

  for(let i = 0; i < hours.length; i++){
    let total = this.randomNumGenerator(this.max, this.min) * this.avgCookies;
    let cookiesSold = Math.floor(total);
    this.randomCookie.push(cookiesSold);
    this.totalCookies += cookiesSold;

    let cookiesSoldPerHour = document.createElement('td');
    cookiesSoldPerHour.textContent = cookiesSold;
    cRow.appendChild(cookiesSoldPerHour);
  }

  let totalChart = document.createElement('td');
  totalChart.textContent = this.totalCookies;
  cRow.appendChild(totalChart);

  let table = document.querySelector('table');
  table.appendChild(cRow);
};

/** Executable */
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

cityArray.push(seattle, tokyo, dubai, paris, lima);

headerFunction();
renderAllCities();
footerFunction();
