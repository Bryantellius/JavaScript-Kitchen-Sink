var name = "Ben";
const states = 50;

// variable nine is assigned the addition of 5 and 4
var nine = 5 + 4; 

function sayHello() {
    console.log("Hello World!");
}

sayHello(); 

function checkAge(name, age) {
    if(age<21){
        console.log("Sorry, " + name + ", you aren't old enough to view this page!");
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

var veggies = ["celery", 'broccoli', 'cauliflower', 'carrots', 'green beans']
for(i=0; i<veggies.length; i++){
    console.log(veggies[i]);
}

var users = [
    {name: "Will", age: 23}, {name: "Ben", age: 22}, {name: "Alex", age: 20}, 
    {name: "Gabi", age: 2}, {name: "Elisa", age: 1}   
];

console.log(users);
for(i=0; i<users.length; i++){ 
checkAge(users[i].name, users[i].age);
};

function getLength(string){
    length = string.length;
    return length;
};
var length;
getLength("Hello World");
if(length % 2){
    console.log("The world is nice and even!");
}else{
    console.log("The world is an odd place!");
};
