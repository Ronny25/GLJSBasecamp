// HOMETASK
/*
Напишите функцию, которая будет возвращать набор уникальных символов,
которые были переданы в эту функцию, как аргумент. Сортировка - не нужна,
строчные и заглавные буквы - 1 символ.
*/
function extractCharacters( str ) {
  var temp = str.toLowerCase().split(''),
      obj = {};

  for (var i = 0, l = temp.length; i < l; i++) {
    var string = temp[i];
    obj[string] = true;
  }
  console.log( Object.keys(obj) );
}

extractCharacters('abcd');
    //['a', 'b', 'c', 'd']
extractCharacters('aaaabc');
    //['a', 'b', 'c']
extractCharacters('Hello, world');
    //[ 'h', 'e', 'l', 'o', ',', ' ', 'w', 'r', 'd' ];

/*
Напишите функцию, которая будет возвращать новую функцию,
с помощью которой можно будет выводить в консоль текстовую информацию.
*/
function createLogger( prefix ) {
  var data = [new Date().toISOString(), prefix];

  return function( anything ) {
    data.push(': ');
    data.push(anything);
    console.log.apply(console, data);
  }
}

var myLogger = createLogger( {key: 'value'} );

myLogger( 'some data' );
    // 2016-06-06T09:55:44.162Z My Logger: some data
    // hint: use toISOString method to format Date object
