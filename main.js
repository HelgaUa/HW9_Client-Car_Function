let name = prompt('Add your name');
let age = +prompt('Add your age');
function ClientCard (name, age)  {
    this.name = name;
    this.age = age;

    this.getInfo = function () {
        console.log(`Client information: ${this.name}, ${ this.age}`);
    }
}
let newClient = new ClientCard(name, age);
newClient.getInfo();

let car = prompt('Add a car');
let model = prompt('Add the car model');
let year = +prompt('Add the year of manufacture of the car');
function ClientCar (car, model, year) {
    this.car = car;
    this.model = model;
    this.year = year;
    this.owner = null;

    this.getInfo = function () {
        console.log(`Car information: ${this.car} ${this.model}, ${this.year}`);
    };

    this.getOwner = function (client) {
        this.owner = client;
        console.log(client);
    };
}
let newCar = new ClientCar(car, model, year);
newCar.getInfo();
newCar.getOwner(newClient);
console.log(newCar);