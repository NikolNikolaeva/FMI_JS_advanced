/*Напишете функция curry, която взима дадена функция f като аргумент и ни връща нова функция, чрез която частично можем да прилагаме f.

Пример:

function trippleAdd(a, b, c) {
    return a + b + c;
}

cTrippleAdd = curry(trippleAdd);

console.log(cTrippleAdd(1)(2)(3)); //6
console.log(cTrippleAdd(1, 2)(3)); //6
console.log(cTrippleAdd(1, 2, 3)); //6*/

function trippleAdd(a, b, c) {
    return a + b + c;
}

function curry(trippleAdd){

    let arr=[];
    let argC=trippleAdd.length;

    return function getArg()
    {
        arr.push(...arguments);
        if(arr.length===argC){
            return trippleAdd.apply(this,arr);
        }
        return getArg;
    }
}

var cTrippleAdd = curry(trippleAdd);

console.log(cTrippleAdd(1)(2)(3)); //6
console.log(cTrippleAdd(1, 2)(3)); //6
console.log(cTrippleAdd(1, 2, 3)); //6

