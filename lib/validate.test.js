// Import validate classes
const Validate = require('./validate.js');

// Testing suite for validating user-entered values
describe('Validate', () => {
  
    describe('no logo text', () => {
      it('should return false for empty logo text entry', () => {
        const result = new Validate().isText('');
        expect(result).toEqual(false);
      });
    });

    describe('invalid text length', () => {
        it('should return false for text entry longer than 3 characters', () => {
          const result = new Validate().isLength('excess');
          expect(result).toEqual(false);
        });
    });

    describe('invalid text color', () => {
        it('should return false for empty color entry', () => {
          const result = new Validate().isTextColor('');    
          expect(result).toEqual(false);
        });
    });

    describe('invalid shape color', () => {
        it('should return false for invalid color entry', () => {
          const result = new Validate().isShapeColor('');
          expect(result).toEqual(false);
        });
    });
      
});
