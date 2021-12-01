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

//syntax:
// describe('nameOfFunctionThatsBeingTested', function () {
//     it('should - describe what you are specifically testing', function() {
//         expect(something from the function).jasmineMethod("actual" + "expected output here");
//     });
// });

// Unit tests for double function
describe('double', function() {
    it('should return a number', function() {
        expect(typeof double()).toBe('number');
    });
    it('should return a function', function() {
        expect(typeof double).toBe('function');
    });
    it('should return double', function() {
        expect(double(5)).toEqual(10);
    });
});

// Unit test for sayHello function
describe('sayHello', function() {
    it('should return a function', function() {
        expect(typeof sayHello).toBe('function')
    });
    it('should return Hello, Jane!', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return Hello, Alex!', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return Hello, Pat!', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return Hello, World!', function() {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it('should return Hello, World! if true', function() {
        expect(sayHello(true)).toBe("Hello, World!")
    })
    it('should return Hello, World if false', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    })
});