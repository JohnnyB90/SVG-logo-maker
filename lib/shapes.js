class Shape{
constructor (text, shapeColor, textColor){
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
}
}

class Sqaure extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect fill="${this.shapeColor}" width="300" height="300" />
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
}

var square = new Sqaure('SVG', 'Orange', 'purple')
console.log(square.render());