// Import validate classes
const Validate = require('./validate.js');

// Testing suite for validating user-entered values
describe('Validate', () => {
    // TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
  
    describe('no logo text', () => {
      it('should return false for empty logo text entry', () => {
        const str = '';
        const result = new Validate().isText(str);
        expect(result).toEqual(false);
      });
    });

    describe('invalid text length', () => {
        it('should return false for text entry longer than 3 characters', () => {
          const str = 'excess';
          const result = new Validate().isLength(str);
          expect(result).toEqual(false);
        });
    });

    describe('invalid text color', () => {
        it('should return false for empty color entry', () => {
          const str = '';
          const result = new Validate().isTextColor(str);    
          expect(result).toEqual(false);
        });
    });

    describe('invalid shape color', () => {
        it('should return false for invalid color entry', () => {
          const str = '';   
          const result = new Validate().isShapeColor(str);
          expect(result).toEqual(false);
        });
    });
      
});
