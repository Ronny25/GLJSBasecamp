/*
1.Напишите функцию compareObjects, которая принимает 2 объекта и название числового свойства,
по которому нужно выполнить сравнение объектов, и выводит в консоль свойство name того объекта,
у которого значение переданного свойства больше.
2.Создайте один объект с помощью литерала, второй через конструктор.
3.Вызовите написанную функцию и передайте два созданных объекта и свойство для сравнения
*/
var obj1 = {};
obj1.name = 'Kevin';
obj1.age = 13;

function ObjConstr( name, age ) {
  this.name = name,
  this.age = age
}
var obj2 = new ObjConstr( 'John', 33 );

function compareObjects( first, second, age ) {
  if ( first.age > second.age ) {

    return console.log( first.name );
  }

  return console.log( second.name );
}
compareObjects( obj1, obj2, 'age' );

/*
1.Создайте коллекцию из 5 музыкальных песен, где каждая песня содержит следующую информацию:
played - количество раз песня была проиграна (определить случайным образом), name - имя песни.
2.Напишите функцию favoriteSong, которая принимает коллекцию из песен,
и возвращает следующую информацию: название песни, сколько раз песня была проиграна, индекс песни в коллекции.
3.Вызовите функцию favoriteSong и передайте ей созданную коллекцию
*/
var collection = [ {played: 4, name: 'Song1'}, {played: 2, name: 'Song2'},
                   {played: 0, name: 'Song3'}, {played: 9, name: 'Song4'},
                   {played: 5, name: 'Song5'} ];

function favoriteSong( item ) {

  var most = Math.max.apply( null, item.map(function( count ) {
    return count.played;
  }));

  for (var i = 0; i < item.length; i++) {
    if (item[i].played === most) {
      return console.log( "Песня " + item[i].name + ', была проиграна: ' + item[i].played + ' раз, index: ' + i );
    }
  }
}
favoriteSong(collection);

/*
1.Опишите конструктор объектов (класс) Calculator с двумя методами:
add - принимает число и прибавляет его к предыдущему,
getCurrentSum - принимает индекс и возвращает результирующее число на шаге указынном в индексе
(если индекса нет, возвращает текущую сумму).
2.Создайте два экземпляра класса Calculator
3.Добавьте в первый объект числа 3,8,11 и во второй 5,12,17.
4.Выведите в консоль сумму:
 - всех чисел всех объектов, убедитесь (56)
 - сумму чисел всех объектов на втором шаге (28)
 - для одного объекта сумму после третьего шага и общую результирующую сумму (должна совпадать)
*/
function Calculator(  ) {
  var arg = arguments,
      result = 0;

  for (var i = 0, m = arg.length; i < m; ++i) {
    result += +arg[i];
  }

  this.add = function() {
    var adding = arguments,
        sum = 0;

    for (var i = 0, n = adding.length; i < n; ++i) {
      sum += +adding[i];
    }

    return result += sum;
  },

  this.getCurrentSum = function( index ) {

    if ( typeof index === 'undefined' ) {
      return result;
    }

    result = 0;
    for (var i = 0; i < index; ++i) {
      result += +arg[i];
    }

    return result;
  }
}
var calc1 = new Calculator( 3, 8, 11 );
var calc2 = new Calculator( 5, 12, 17 );

var sum1 = calc1.add();
var sum2 = calc2.add();
var total = sum1 + sum2;
console.log( total );

var step1 = calc1.getCurrentSum(2);
var step2 = calc2.getCurrentSum(2);
var steps = step1 + step2;
console.log( steps );

var step3 = calc2.getCurrentSum(3);
console.log( sum1 + step3 === total );
