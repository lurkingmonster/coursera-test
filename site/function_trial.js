// var title = "hello king";
// console.log (title);


// Functions are First-Class Data Types
// Functions ARE objects
function multiply(x, y) {
    return x * y;
}  // just a simple function

multiply.version = "v.1.0.0";  //giving the function multiply, a version object
console.log(multiply.version); //prints v.1.0.0

console.log(multiply(10, 6));
//first try giving (x,y) values by invoking the multiply function name.
console.log(multiply(8, 8));
//second try giving (x,y) values by invoking the multiply function name.
console.log(multiply(7,3));
//third try giving (x,y) values by invoking the multiply function name.

// Function factory
function makeMultiplier(multiplier) { //function object main
    var myFunc = function (x) {
        return multiplier * x; //function object 1
    };

    return myFunc; //result for function object 1
}  //the main function

makeMultiplier.version = "v.2(passing objects as arguments)";  //giving the function multiply, a version object
console.log(makeMultiplier.version); //prints v.2.0.0


var multiplyBy3 = makeMultiplier(3); //have to assign a value to makeMultiplier first 
// console.log(multiplyBy3(10)); EG
var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100)); EG
var multiplyBy5 = makeMultiplier(5);
//all these objects set a value to makeMultiplier for future arguments.

console.log(multiplyBy5(5)); 
console.log(doubleAll(6));
// using function objects as arguments by setting new properties to makeMultiplier


// // Passing functions as arguments
function doOperationOn(y, mySet) {
    return mySet(y);
}

doOperationOn.version = "v.3(Passing functions as arguments)";
console.log(doOperationOn.version);

var result = doOperationOn(5, multiplyBy3 );
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);


