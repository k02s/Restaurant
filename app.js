'use strict';


// constructor 
function Food(foodName, foodType, price){

    this.Id = this.generateFoodID();
    this.foodName = foodName;
    this.foodType = foodType;
    this.price = price;
}

//  generate food id conssits from four digits
Food.prototype.generateFoodID = function () {

    let foodID = Math.ceil(1000 + Math.random() * 2000);
    return foodID;
};

// render method
Food.prototype.render =function(){

    let foodTable = document.getElementById('foodTable');

    let newRow = document.createElement('tr');

    foodTable.appendChild(newRow);

    let foodID = document.createElement('td');
    foodID.textContent = this.Id;
    newRow.appendChild(foodID);

    let foodName = document.createElement('td');
    foodName.textContent = this.foodName;
    newRow.appendChild(foodName);

    let foodType = document.createElement('td');
    foodType.textContent = this.foodType;
    newRow.appendChild(foodType);
    
    let price = document.createElement('td');
    price.textContent = this.price;
    newRow.appendChild(price);

}

function handler(e){

    e.preventDefault();

    
    let foodName = e.target.foodName.value;
    let foodType = e.target.foodType.value;
    let price = e.target.price.value;
    

    let newFood = new Food(foodName, foodType, price);
    
    newFood.generateFoodID();
    newFood.render();

    
    console.log(foodName, foodType, price);

    e.target.reset();
};


let submitFoodData = document.getElementById('foodForm');
submitFoodData.addEventListener('submit', handler)