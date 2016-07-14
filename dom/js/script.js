/*
0. Создать функицю, которая принимает строку селектор и возвращает:
    	 - undefined - если ничего не найдено
    	 - найденую ноду - если она одна
    	 - массив нод - если их несколько
    	 - если в функцию передать ноду, функция возвращает ее тип (Node, Text, Comment etc)
*/
function searching0( searchName ) {
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
  var el = document.querySelector(searchElem).nextElementSibling,
      parent = document.querySelector(searchElem).parentElement;

  parent.insertBefore(insertElem, el);
}
var newElem = document.createElement('p');
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
  var el = document.querySelector('#sel');
  console.log(el.hasAttribute(attr));
}
attributing('color');
