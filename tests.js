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

// Unit test for isFive function
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return true', function() {
        expect(isFive('anything can go here')).toBe(true);
    });
    it('should return true when number 5 is passed', function() {
        expect(isFive(5)).toBe(true);
    })
});

// Unit test for isEven function
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return true when number is 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when number is -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when number is 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when "banana" is input', function() {
        expect(isEven('banana')).toBe(false);
    });
    it('should return true when "8" is input', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when Infinity is input', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when a boolean is input', function() {
        expect(isEven(false)).toBe(false);
    });
});

// Unit test for isVowel function
describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return true when "a" input', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when "A" input', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when "y" input', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when 4 input', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when true input', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when false input', function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when "banana" input', function() {
        expect(isVowel("banana")).toBe(false);
    });
});