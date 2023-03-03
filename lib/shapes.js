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

class Triangle extends Shape {
    constructor(shapefill) {
        super(shapefill);
    }
    render(shapefill) {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${shapefill}"/>`
    }
}

class Square extends Shape {
    constructor(shapefill) {
        super(shapefill);
    }
    render(shapefill) {
        return `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${shapefill}"/>`
    }
}

class Circle extends Shape {
    constructor(shapefill) {
        super(shapefill);
    }
    render(shapefill) {
        return `<circle cx="150" cy="100" r="80" fill="${shapefill}"/>`
    }
}

module.exports = Shape;