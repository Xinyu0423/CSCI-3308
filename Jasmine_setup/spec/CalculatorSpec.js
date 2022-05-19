
describe("Test add() method", function() {
 	var calc;
    //This will be called before running each spec
    beforeEach(function() {
        calc = new Calculator(); //Create a calculator object to call our math operations
    });

    /* 
    *  Example Test Case for Addition Operation
    */
   it("Check addition, two positive values", function() {

        expect( calc.add(1,2) ).toEqual(3);
    }); 

   it("Check addition, two negative values", function() {

        expect( calc.add(-7,-5) ).toEqual(-12);
    }); 
});

/*
* Create a new test suit with two new test cases for sub() method
*/
describe("test sub() method",function(){
    it("Check subtraction, two positive values", function() {

        expect( calc.sub(5,3) ).toEqual(2);
    }); 

   it("Check subtraction, two negative values", function() {

        expect( calc.sub(-5,-3) ).toEqual(-2);
    }); 
});

/*
* Create a new test suit with two new test cases for multiply() method
*/
describe("test multiply() method",function(){
    it("Check multiplication, two positive values", function() {

        expect( calc.multiply(2,3) ).toEqual(6);
    }); 

   it("Check multiplication, two negative values", function() {

        expect( calc.multiply(-3,-4) ).toEqual(12);
    }); 
});
/*
* Create a new test suit with two new test cases for divide() method
*/
describe("test divide() method",function(){
    it("Check division, two positive values", function() {

        expect( calc.divide(6,3) ).toEqual(2);
    }); 

   it("Check division, two negative values", function() {

        expect( calc.divide(-10,-2) ).toEqual(5);
    }); 
});