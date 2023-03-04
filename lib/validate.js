class Validate {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }
    isText() {
        if (this.text.length === 0) {
            return false;
        }

    };
    isLength() {
        if (this.text.length > 3) {
            return false;
        }
    };
    isTextColor(){
        if (!this.textcolor) {
            return false;
        }
    };
    isShapeColor(){
        if (!this.shapecolor) {
            return false;
        }
    };
}

module.exports = Validate;