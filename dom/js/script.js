/*
0. Создать функицю, которая принимает строку селектор и возвращает:
    	 - undefined - если ничего не найдено
    	 - найденую ноду - если она одна
    	 - массив нод - если их несколько
    	 - если в функцию передать ноду, функция возвращает ее тип (Node, Text, Comment etc)
*/
function searching0( searchName ) {
  if (typeof searchName !== 'string') {
    return console.log(searchName.nodeName);
  }
  var elements = document.querySelectorAll( searchName );
  if (elements.length === 1) {
    elements = document.querySelector( searchName );
  }

  if (elements == null || elements.length === 0) {
    return console.log('undefined');
  }

  if (elements.length >= 2) {
    return console.log(elements);
  }

  return console.log(elements);
}

var searchName = 'span';
searching0(searchName);
searching0(document.body);

/*
1. Создать функцию, которая принимает строку селектор и возвращает:
       - undefined - если ничего не найдено
    	 - найденую ноду - если она одна
    	 - первую найденную ноду - если их несколько
*/
function searching1( searchName ) {
  var elements = document.querySelector( searchName );

  if (elements == null) {
    return console.log('undefined');
  }

  return console.log(elements);
}

var searchName = '#joker';
searching1(searchName);

/*
2. Создать функцию аналог функции DOM insertBefore, но вставляет не до, а после указанного элемента.
*/
function insertAfter( searchElem, insertElem ) {
  var el = document.querySelector(searchElem);

  el.insertAdjacentHTML('afterend', insertElem);
}
// var newElem = '<p>';
var newElem = "<ul>" +
              " <li id='a'>Some A text</li>" +
              " <li id='b'>Some B text</li>" +
              "</ul>";
insertAfter( '#line-0', newElem );

/*
3. Создать функцию, которая выдает значение аттрибута или ставит его значение.

    	 Чтение.
    	 Что имеется в виду - Допустим есть элемент:
    	    <titanic style="float:none"></titanic>
    	    Если передать в функцию 'style' - она должна выдать "float:none"
    	    <ninja color="black" visibility="hidden"></ninja>
    	    Если передать в функцию 'color' - она должна выдать "black"

    	 Установка.
         Что имеется в виду - Допустим есть элемент:
            <lego></lego>
            Если передать в функцию два параметра - аттрибут и значение, то нода должна выглядеть
            <lego style="display:block"></lego>
            Если значение этого аттрибута уже задано, устанавливается новое значение.
    	    Было:
    	    <chucknorris speed="5"></chucknorris>
    	    После вызова функции с передачей аттрибута и значения (speed Infinity):
    	    <chucknorris speed="Infinity"></chucknorris>
*/
function attributing( attr, val ) {
  var el = document.querySelector('#line-1');

  if (el.getAttribute(attr) !== null) {
    return console.log(el.getAttribute(attr));
  }

  if (val) {
    el.style.setProperty( attr, val );
    return console.log(el);
  }

  return console.log('атрибут не задан');
}
attributing('background', 'red');

/*
4. С помощью JS создайте шахматное поле:
    - контейнер поля
    - 64 ребёнка (ячейки) элементы (проще позиционировать с помощью float)
    - ячейки раскрашены белым и черным
    - нужные аттрибуты и стили задавайте с помощью JS
*/
var container = document.createElement('div');
container.classList.add('container');
container.style.setProperty('margin', 'auto');
container.style.setProperty('margin-bottom', '100px');
container.style.setProperty('width', '800px');
container.style.setProperty('border', '10px solid #fff');
container.style.setProperty('box-shadow', '5px 5px 3px 50px');

for (var i = 1; i < 65; i++) {
  var squares = container.appendChild(document.createElement('div'));
  squares.classList.add('square');
  squares.style.setProperty('display', 'inline-block');
  squares.style.setProperty('margin-top', '-4px');
  squares.style.setProperty('width', '100px');
  squares.style.setProperty('height', '100px');
}

document.body.appendChild(container);

var all = document.querySelectorAll('.square');
for (var i = 8; i < all.length; i += 16) {

  for (var k = i + 1; k < i + 9; k++) {
    all[k].style.setProperty('float', 'left');

    if (k > all.length - 2) {
      break;
    }
  }
}

for (var i = 1; i < all.length; i += 2) {
  all[i].classList.add('black');
  all[i].style.setProperty('background', 'black');
}
