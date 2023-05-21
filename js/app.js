'use strict';

/** Grab the window into the DOM */
let salesLists = document.getElementById('sales-lists');
console.dir(salesLists);

/** Hours array */

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

/**
let seattle ={
  name: 'Seattle',
  min: 23,
  max: 65,
  avgCookieBought: 6.3,
};
 */

/** Object Literals */

let Seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  randomCookie: [],
  randomNumGenerator: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  render: function(){
    let cookiesBought = 0;
    for(let i = 0; i < hours.length; i++){
      let total = this.randomNumGenerator(this.min, this.max) * this.avgCookies;
      this.randomCookie.push(Math.floor(total));
    }
    for(let i = 0; i < this.randomCookie.length; i++){
      cookiesBought += this.randomCookie[i];
    }
    this.randomCookie.push(cookiesBought);

    /** DOM - Article */
    let articleEle = document.createElement('article');
    salesLists.appendChild(articleEle);

    /** DOM - Heading */
    let cookieHeading = document.createElement('h2');
    cookieHeading.innerText = this.name;
    articleEle.appendChild(cookieHeading);

    /** DOM - UL */
    let cookieUL = document.createElement('ul');
    articleEle.appendChild(cookieUL);

    for(let i = 0; i < hours.length; i++){
      let hoursLI = document.createElement('li');
      hoursLI.innerText = `${hours[i]}: ${this.randomCookie[i]}`;
      cookieUL.appendChild(hoursLI);
    }

    /** DOM - Total */
    let cookieTotal = document.createElement('li');
    let cookieTotalTwo = this.randomCookie[this.randomCookie.length - 1];
    cookieTotal.innerText = `Total: ${cookieTotalTwo}`;
    cookieUL.appendChild(cookieTotal);

  }
};

let Tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avgCookies: 1.2,
  randomCookie: [],

  randomNumGenerator: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  render: function(){
    let cookiesBought = 0;
    for(let i = 0; i < hours.length; i++){
      let total = this.randomNumGenerator(this.min, this.max) * this.avgCookies;
      this.randomCookie.push(Math.floor(total));
    }
    for(let i = 0; i < this.randomCookie.length; i++){
      cookiesBought += this.randomCookie[i];
    }
    this.randomCookie.push(cookiesBought);

    /** DOM - Article */
    let articleEle = document.createElement('article');
    salesLists.appendChild(articleEle);

    /** DOM - Heading */
    let cookieHeading = document.createElement('h2');
    cookieHeading.innerText = this.name;
    articleEle.appendChild(cookieHeading);

    /** DOM - UL */
    let cookieUL = document.createElement('ul');
    articleEle.appendChild(cookieUL);

    for(let i = 0; i < hours.length; i++){
      let hoursLI = document.createElement('li');
      hoursLI.innerText = `${hours[i]}: ${this.randomCookie[i]}`;
      cookieUL.appendChild(hoursLI);
    }

    /** DOM - Total */
    let cookieTotal = document.createElement('li');
    let cookieTotalTwo = this.randomCookie[this.randomCookie.length - 1];
    cookieTotal.innerText = `Total: ${cookieTotalTwo}`;
    cookieUL.appendChild(cookieTotal);

  }
};

let Dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avgCookies: 3.7,
  randomCookie: [],

  randomNumGenerator: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  render: function(){
    let cookiesBought = 0;
    for(let i = 0; i < hours.length; i++){
      let total = this.randomNumGenerator(this.min, this.max) * this.avgCookies;
      this.randomCookie.push(Math.floor(total));
    }
    for(let i = 0; i < this.randomCookie.length; i++){
      cookiesBought += this.randomCookie[i];
    }
    this.randomCookie.push(cookiesBought);

    /** DOM - Article */
    let articleEle = document.createElement('article');
    salesLists.appendChild(articleEle);

    /** DOM - Heading */
    let cookieHeading = document.createElement('h2');
    cookieHeading.innerText = this.name;
    articleEle.appendChild(cookieHeading);

    /** DOM - UL */
    let cookieUL = document.createElement('ul');
    articleEle.appendChild(cookieUL);

    for(let i = 0; i < hours.length; i++){
      let hoursLI = document.createElement('li');
      hoursLI.innerText = `${hours[i]}: ${this.randomCookie[i]}`;
      cookieUL.appendChild(hoursLI);
    }

    /** DOM - Total */
    let cookieTotal = document.createElement('li');
    let cookieTotalTwo = this.randomCookie[this.randomCookie.length - 1];
    cookieTotal.innerText = `Total: ${cookieTotalTwo}`;
    cookieUL.appendChild(cookieTotal);

  }
};

let Paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avgCookies: 2.3,
  randomCookie: [],

  randomNumGenerator: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  render: function(){
    let cookiesBought = 0;
    for(let i = 0; i < hours.length; i++){
      let total = this.randomNumGenerator(this.min, this.max) * this.avgCookies;
      this.randomCookie.push(Math.floor(total));
    }
    for(let i = 0; i < this.randomCookie.length; i++){
      cookiesBought += this.randomCookie[i];
    }
    this.randomCookie.push(cookiesBought);

    /** DOM - Article */
    let articleEle = document.createElement('article');
    salesLists.appendChild(articleEle);

    /** DOM - Heading */
    let cookieHeading = document.createElement('h2');
    cookieHeading.innerText = this.name;
    articleEle.appendChild(cookieHeading);

    /** DOM - UL */
    let cookieUL = document.createElement('ul');
    articleEle.appendChild(cookieUL);

    for(let i = 0; i < hours.length; i++){
      let hoursLI = document.createElement('li');
      hoursLI.innerText = `${hours[i]}: ${this.randomCookie[i]}`;
      cookieUL.appendChild(hoursLI);
    }

    /** DOM - Total */
    let cookieTotal = document.createElement('li');
    let cookieTotalTwo = this.randomCookie[this.randomCookie.length - 1];
    cookieTotal.innerText = `Total: ${cookieTotalTwo}`;
    cookieUL.appendChild(cookieTotal);

  }
};

let Lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avgCookies: 4.6,
  randomCookie: [],

  randomNumGenerator: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  render: function(){
    let cookiesBought = 0;
    for(let i = 0; i < hours.length; i++){
      let total = this.randomNumGenerator(this.min, this.max) * this.avgCookies;
      this.randomCookie.push(Math.floor(total));
    }
    for(let i = 0; i < this.randomCookie.length; i++){
      cookiesBought += this.randomCookie[i];
    }
    this.randomCookie.push(cookiesBought);

    /** DOM - Article */
    let articleEle = document.createElement('article');
    salesLists.appendChild(articleEle);

    /** DOM - Heading */
    let cookieHeading = document.createElement('h2');
    cookieHeading.innerText = this.name;
    articleEle.appendChild(cookieHeading);

    /** DOM - UL */
    let cookieUL = document.createElement('ul');
    articleEle.appendChild(cookieUL);

    for(let i = 0; i < hours.length; i++){
      let hoursLI = document.createElement('li');
      hoursLI.innerText = `${hours[i]}: ${this.randomCookie[i]}`;
      cookieUL.appendChild(hoursLI);
    }

    /** DOM - Total */
    let cookieTotal = document.createElement('li');
    let cookieTotalTwo = this.randomCookie[this.randomCookie.length - 1];
    cookieTotal.innerText = `Total: ${cookieTotalTwo}`;
    cookieUL.appendChild(cookieTotal);

  }
};

/** Executions */
// Seattle
Seattle.render();

// Tokyo
Tokyo.render();

// Dubai
Dubai.render();

// Paris
Paris.render();

// Lima
Lima.render();
