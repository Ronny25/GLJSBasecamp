/*
1. Создайте класс Garage, который хранит список машин со следующим интерфейсом:
addCar - принимает объект класса Car, и getCar - который принимает индекс машины
и возвращает запрашиваемую машину, count - возвращает количество машин в гараже.
2. Создайте класс Car, который инициализуруется значениями model, manufacturer и price.
3. Создайте класс Buyer, который иницализируется объектом garage и числовым значением budget,
с методами: getBudget - возвращает текущее значение бюджета, buyCar - принимает объект класса Car,
смотрит, хватит ли бюджета на машину, если не хватает, бросает ошибку,
если хватает, списывает деньги с бюджета и добавляет машину в гараж.
4. Создайте функцию showRoom, которая принимает объект buyer,
и дальше в цикле 10 раз создает объект car со случайным значением в price.
Объект buyer пытается купить каждую созданную машину.
5. Создайте экземпляр класса Garage и Buyer. Вызовите функцию showRoom и передайте в нее buyer.
6. После выполнения функции выведите список всех машин, которые купил покупатель
*/

function Garage() {
  this.cars = []
}
Garage.prototype.addCar = function(car) {
  return this.cars.push(car);
}
Garage.prototype.getCar = function(index) {
  return this.cars[index];
}
Garage.prototype.count = function() {
  return this.cars.length;
}
Garage.prototype.overview = function() {
  var l = this.cars.length,
      list = [];
  for (var i = 0; i < l; i++) {
    list.push(this.cars[i].manufacturer);
  }
  return console.log('Cars in the Garage = ', list);
}

function Car(model, manufacturer, price) {
  this.model = model,
  this.manufacturer = manufacturer,
  this.price = price
}

function Buyer(garage, budget) {
  this.garage = garage,
  this.budget = budget
}
Buyer.prototype.getBudget = function() {
  return this.budget;
}
Buyer.prototype.buyCar = function(car) {
  if (this.budget >= car.price) {
    this.budget -= car.price;
    return garage.addCar(car);
  }
  return alert('Not enough money for this car!');
}

function showRoom(buyer) {
  var manufacturers = ['Honda', 'BMW', 'Audi', 'Mersedes', 'Opel', 'Volvo', 'Toyota', 'Bentley', 'Cooper', 'Volkswagen'];
  for (var i = 0; i < 10; i++) {
    var desiredCar = new Car('GT ' + (1 + i), manufacturers[i], Math.round(Math.random() * 1000));
    buyer.buyCar(desiredCar);
  }
}

var garage = new Garage();
var buyer = new Buyer(garage, 3500);

showRoom(buyer);
garage.overview();
