// Import shape classes
const { Triangle, Square, Circle } = require('./shapes.js');

// Testing suite for checking functionality of shape classes
describe('Shape', () => {

    describe('triangle', () => {
        it('should set shape fill to blue', () => {
            const shape = new Triangle();
            expect(shape.render("blue")).toEqual('<polygon points="150, 10 244, 190 56, 190" fill="blue"/>');
        })
    });
    describe('square', () => {
        it('should set shape fill to blue', () => {
            const shape = new Square();
            expect(shape.render("blue")).toEqual('<rect x="60" y="10" width="180" height="180" fill="blue"/>');
        })
    });
    describe('circle', () => {
        it('should set shape fill to blue', () => {
            const shape = new Circle();
            expect(shape.render("blue")).toEqual('<circle cx="150" cy="100" r="90" fill="blue"/>');
        })
    })

});