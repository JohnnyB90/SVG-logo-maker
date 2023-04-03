class Shape{
    constructor (text, shapeColor, textColor){
      this.text = text;
      this.shapeColor = shapeColor;
      this.textColor = textColor;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect fill="${this.shapeColor}" width="300" height="300" />
        <text x="150" y="165" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="120" fill="${this.shapeColor}"/>
        <text x="150" y="165" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<svg version="1.1"  width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 282, 283 18, 283" fill="${this.shapeColor}"/> 
        <text x="150" y="210" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
  }
  
  module.exports = { Square, Circle, Triangle };