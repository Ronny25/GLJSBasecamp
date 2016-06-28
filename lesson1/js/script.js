/*
  Напишите фукцию с одним аргументом. Аргумент должен быть числом от 0 до 24.
  Если аргумент число от 8 до 21, выведите в консоль ‘Hello’.
  В другом случае выведите в консоль ‘It is not good time for that’.
  Если аргумент не число, выведите в консоль ‘It is not a number’.
*/
function check( a ) {
  if (typeof a !== 'number') {
    console.log("It's not a number");
  } else if ( a >= 8 && a <= 21 ) {
    console.log('Hello');
  } else {
    console.log("It's not a good time for that");
  }
}
check( 9 );

/*
Напишите функцию, которая принимает массив и буленовое значение в качестве аргументов.
Если буленовое значение true, выведите в консоль найбольшее число, если false найменшее.
*/
function boolOrNot( arr, bool ) {
  if ( bool ) {
    console.log( Math.max.apply(null, arr) );
  } else {
    console.log( Math.min.apply(null, arr) );
  }
}
boolOrNot( [5, 6, 2, 0, -3, 17, '7'], true );

/*
Напишите функцию, которая принимает один аргумент.
Проверяет число ли это и выводит в консоль данной число в квадрате,
если его можно поделить на 2 без остатка.
*/
function checkNumber( number ) {
  if ( number % 2 == 0 ) {
    console.log( Math.pow(number, 2) );
  } else {
    console.log( number );
  }
}
checkNumber( 22 );

/*
Напишите функцию с двумья аргументами. Если первый больше второго, выведите
в консоль ихнюю разницу. Если второе больше первого, сумму.
*/
function differ( a, b) {
  if ( a > b ) {
    console.log( a - b );
  } else if ( b > a ) {
    console.log( a + b );
  }
}
differ( 5, 9 );

/*
Напишите функцию с двумья аргументами. Если сумма этих чисел от 11 до 19,
то выведите в консоль результат. Если нет, то выведите “Result is not in range between 11 and 19”.
*/
function sum( a, b ) {
  var c = a + b;

  if ( c > 10 && c > 20 ) {
    console.log( c );
  } else {
    console.log( 'Result is not in range between 11 and 19' );
  }
}
sum( 4, 6 );

/*
Напишите функцию с двумя аргументами. Если один из них делится без остатка на другой.
Bыведите true, если нет false.
*/
function division( a, b ) {
  if ( a % b == 0 ) {
    console.log( 'true' );
  } else {
    console.log( 'false' );
  }
}
division( 656, 4 );

/*
Напишите функцию с двумя аргументами. Сравните последние цыфри числа, используя %.
*/
function compare( a, b ) {

}
compare( 102, 32 );

/*
выведите массив используя разные типы цыклов.
*/
function looping( arr ) {
  var count = 0,
      count2 = arr.length - 1;

  while ( count < arr.length ) {
    console.log( arr[count] );
    count++;
  }

  do {
    console.log( arr[count2] );
    count2--;
  } while ( count2 >= 0 );

  for (var i = 0; i < arr.length; i++) {
    console.log( arr[i] );
  }

  for (var i = arr.length - 1; i >= 0; i--) {
    console.log( arr[i] );
  }
}
looping( [1, 154, 254, 184] );

/*
Является ли строка палиндромом.
*/
function palindrom( string ) {
  var newString = '';

  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i].toLowerCase();
  }
  newString = newString[0].toUpperCase() + newString.slice(1);

  if ( string == newString ) {
    console.log('This string is palindrom');
  } else {
    console.log("It's not a palindrom");
  }
}
palindrom( 'Шалаш' );

/*
Write a program that prints the integers from 1 to 100.
But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz". [1]
*/
function detecting( num ) {
  var arr = [];

  for (var i = 1; i <= num; i++) {
    arr.push(i);
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      arr[i] = 'FizzBuzz';
    } else if (arr[i] % 3 == 0) {
      arr[i] = 'Fizz';
    } else if (arr[i] % 5 == 0) {
      arr[i] = 'Buzz';
    }
  }

  console.log(arr);
}
detecting( 100 );

/*
Числа-вампиры
*/
function vampire( a, b ) {
  var multiply = a * b;
  var lastA = a.toString().length - 1;
  var lastB = b.toString().length - 1;

  if ( multiply.toString().length === a.toString().length * 2
    && multiply.toString().length === b.toString().length * 2 ) {

    if ( a.toString()[lastA] === 0 && b.toString()[lastB] === 0 ) {
      return false;
    } else {
      if ( true ) {

      }
      console.log('true');
    }
    return false;
  }
}
vampire( 15, 93 );
