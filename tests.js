// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe(`sayHello`, function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe(`function`);
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe(`string`);
    });
    it('should return the string "Hello, Jane!"', function () {
        expect(sayHello(`Jane`)).toBe(`Hello, Jane!`);
    });
    it('should return the string "Hello, Alex!"', function () {
        expect(sayHello(`Alex`)).toBe(`Hello, Alex!`);
    });
    it('should return the string "Hello, Pat!"', function () {
        expect(sayHello(`Pat`)).toBe(`Hello, Pat!`);
    });
    it('should return the string "Hello, World!" when input is undefined', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input is true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input is false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe(`isFive`, function (){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe(`function`);
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe(`boolean`);
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed "5"', function () {
        expect(isFive("5")).toBe(true);
    });
});

describe(`isEven`, function (){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe(`function`);
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isEven()).toBe(`boolean`);
    });
    it('should return true when passed 2 as an argument', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4 as an argument', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should returns false when passed 3 as an argument', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should be a defined function', function () {
        expect(typeof isEven).toBe(`function`);
    });
    it('should be a defined function', function () {
        expect(typeof isEven).toBe(`function`);
    });
    it('should be a defined function', function () {
        expect(typeof isEven).toBe(`function`);
    });
    it('should be a defined function', function () {
        expect(typeof isEven).toBe(`function`);
    });
    it('should be a defined function', function () {
        expect(typeof isEven).toBe(`function`);
    });
});


//     returns false when executed with isEven(3)
//     returns false when called with isEven("banana")
//     returns true when called with isEven("8")
//     returns false when called with isEven(infinity)
//     return false when called with a boolean input like isEven(true) or isEven(false)
// returns false when calles without an argument like isEven()

describe(`isVowel`, function (){
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe(`function`);
    });
});

describe(`add`, function (){
    it('should be a defined function', function () {
        expect(typeof add).toBe(`function`);
    });
});