class Shape {
    constructor(version, width, height, xmlns, shapex, shapey, shapefill, textx, texty, fontsize, textanchor, textfill) {
      this.version = version;
      this.width = width;
      this.height = height;
      this.xmlns = xmlns;
      this.shapex = shapex;
      this.shapey = shapey;
      this.shapefill = shapefill;
      this.textx = textx;
      this.texty = texty;
      this.fontsize = fontsize;
      this.textanchor = textanchor;
      this.texfill = textfill;
    };
    // getShapeFill (answers) {
    //     return answers.shapecolor;
    // };
    // getTextFill (answers) {
    //     return answers.textcolor;
        
    // }
}

class Triangle extends Shape {
    constructor(version, width, height, xmlns, shapex, shapey, shapefill, textx, texty, fontsize, textanchor, textfill, points) {
        super(version, width, height, xmlns, shapex, shapey, shapefill, textx, texty, fontsize, textanchor, textfill);
        this.points = points;
    }
}

class Square extends Shape {
    constructor(version, width, height, xmlns, shapex, shapey, shapefill, textx, texty, fontsize, textanchor, textfill, shapewidth, shapeheight) {
        super(version, width, height, xmlns, shapex, shapey, shapefill, textx, texty, fontsize, textanchor, textfill);
        this.shapewidth = shapewidth;
        this.shapeheight = shapeheight;
    }
}

class Circle extends Shape {
    constructor(version, width, height, xmlns, shapex, shapey, shapefill, textx, texty, fontsize, textanchor, textfill, radius) {
        super(version, width, height, xmlns, shapex, shapey, shapefill, textx, texty, fontsize, textanchor, textfill);
        this.radius = radius;
    }
}

// New object using the BlogPost class constructor.
// const newPost = new BlogPost(
// 'John Doe',
// 'My Fourth Post',
// 'Dogs, cats, and snakes are super cute!',
// '12/19/2021'
// );

module.exports = { Shape, Triangle, Square, Circle }