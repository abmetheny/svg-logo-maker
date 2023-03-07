// Parent class used to render SVG based on user inputs
class Shape {
    constructor(text, textfill, shape, shapefill) {
        this.text = text;
        this.textfill = textfill;
        this.shape = shape;
        this.shapefill = shapefill;
    }
    renderShape(text, textfill, shape, shapefill) {
        let shapeType = '';
        if (shape === 'triangle') {
            const newTriangle = new Triangle (shapefill);
            shapeType = newTriangle.render(shapefill);
        }
        else if (shape === 'square') {
            const newSquare = new Square (shapefill);
            shapeType = newSquare.render(shapefill);        
        }
        else if (shape === 'circle') {
            const newCircle = new Circle (shapefill);
            shapeType = newCircle.render(shapefill);        
        }
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        ${shapeType}

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textfill}">${text}</text>

        </svg>
        `
    };
}

// Children classes to return code to render the correct shape based on user selection
class Triangle extends Shape {
    constructor(shapefill) {
        super(shapefill);
    }
    render(shapefill) {
        return `<polygon points="150, 10 244, 190 56, 190" fill="${shapefill}"/>`
    }
}

class Square extends Shape {
    constructor(shapefill) {
        super(shapefill);
    }
    render(shapefill) {
        return `<rect x="60" y="10" width="180" height="180" fill="${shapefill}"/>`
    }
}

class Circle extends Shape {
    constructor(shapefill) {
        super(shapefill);
    }
    render(shapefill) {
        return `<circle cx="150" cy="100" r="90" fill="${shapefill}"/>`
    }
}

module.exports = { Shape, Triangle, Square, Circle };