/*
21.    Implement the following:

1.    Define a Shape constructor. Objects created with Shape should have a `type` property and a `getType` method.
2.    Define a Triangle constructor. Objects created with Triangle should inherit from Shape and have three own properties:
a, b and c representing the sides of a triangle.
3.    Add a new method to the prototype called `getPerimeter`.

Test your implementation with this code:

var t = new Triangle(1, 2, 3);
t.constructor;                 // Triangle(a, b, c)
t instanceof Shape                // true
t.getPerimeter();              // 6
t.getType();                   // "triangle"
*/
function Shape() {
  this.type = 'triangle'
}
Shape.prototype.getType = function() {
  return this.type;
}

function Triangle( a, b, c ) {
  this.a = a,
  this.b = b,
  this.c = c
}

Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

var triangle = new Triangle( 1, 2, 3 );

console.log( triangle.constructor );
console.log( triangle instanceof Shape );
console.log( triangle.getPerimeter() );
console.log( triangle.getType() );
