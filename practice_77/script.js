'use strict';

class Rectangele {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

// const square = new Rectangele(4, 4);

// console.log(square.calcArea());

class ColoredRectangleWithText extends Rectangele {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'hello', 'red');

console.log(div.calcArea());
div.showMyProps();