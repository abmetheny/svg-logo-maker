// Class functions used in Inquirer validation property to validate user responses
class Validate {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }
    isText() {
        if (!this.text) {
            return false;
        } return true;
    }
    isLength(answerString) {
        if (answerString.length > 3) {
            return false;
        } return true;
    }
    isTextColor(){
        if (!this.textcolor) {
            return false;
        } return true;
    }
    isShapeColor(){
        if (!this.shapecolor) {
            return false;
        } return true;
    }
}

module.exports = Validate;