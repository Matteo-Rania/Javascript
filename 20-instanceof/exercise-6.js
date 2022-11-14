class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {

  static calculate(figure) {
    if(figure instanceof Square){
      return figure.side * figure.side
    }
    else if(figure instanceof Rectangle){
      return figure.width * figure.height
    }
    else if(figure instanceof Circle){
      return figure.radius * figure.radius * Math.PI
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log((AreaCalculator.calculate(square)));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));