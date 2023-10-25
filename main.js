let clientName = prompt('Add your name');
let clientAge = +prompt('Add your age');
function ClientCard (name, age)  {
    this.name = name;
    this.age = age;

    this.getInfo = function () {
        console.log(`Client information: ${this.name}, ${ this.age}`);
    }
}
let newClient = new ClientCard(clientName, clientAge);
newClient.getInfo();

let carName = prompt('Add a car');
let carModel = prompt('Add the car model');
let carYear = +prompt('Add the year of manufacture of the car');
function ClientCar (car, model, year) {
    this.car = car;
    this.model = model;
    this.year = year;
    this.owner = null;

    this.getInfo = function () {
        console.log(`Car information: ${this.car} ${this.model}, ${this.year}`);
    };

    this.setOwner = function (client) {
        this.owner = client;
        console.log(client);
    };
}
let newCar = new ClientCar(carName, carModel, carYear);
newCar.getInfo();
newCar.setOwner(newClient);
console.log(newCar);