//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function Laptop() {
    this.processor = "I7";
}

Laptop.prototype.model = function() {
    console.log("This laptop has an Intel " + this.processor + " processor. Grabbed from parent!");
}

var hp = new Laptop();
hp.model();


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var slicedNum = numbers.slice(4);
console.log(slicedNum);

//3. Delete the last number in the array that you created above.
numbers.splice(-1, 1); // From the original array
slicedNum.splice(-1, 1); // From the sliced array

console.log(numbers);
console.log(slicedNum);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
var p = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied."

var mapObj = {
    Strawberries: "Bananas",
    strawberries: "bananas",
    Strawberry: "Banana",
    strawberry: "banana"
};

p = p.replace(/Strawberries|strawberries|Strawberry|strawberry/gi, function(matched) {
    return mapObj[matched];
});

console.log(p);


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var changingArray = ["Manchester United", "Liverpool", "Manchester City", "Real Madrid"];
console.log(changingArray);

function changeArray() {
    changingArray = [];
    console.log(changingArray);
    
    changingArray = ["Mercedes", "Audi", "Tesla", "Opel"];
    console.log(changingArray);
}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var people = [
    {
        name: "Jhon", 
        age: 22, 
        hobby: "Skiing",
    },
    {
        name: "Elin", 
        age: 28,
        hobby: "Running",
    },
    {
        name: "Mark",
        age: 18, 
        hobby: "Football",
    }
];

const peopleName = people.filter(people => people.name);

console.log(peopleName);

//7. Create a simple function that logs the date.

var myDate = new Date();

function today() {
    console.log(myDate);
}

today();
