'use strict';

/**
 * Based on the collection the each function loops through that collection and preforms a action.
 * 
 * @parm {Array or object} collection the collection from which to loop over.
 * @parm {Function} Action preformed n the collection.
*/  

function each(collection, func) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);   
        }
        
    } else if (collection !== null && typeof aCollection === 'object') {
        for (var key in collection) {
            func(collection[key], key, collection);  
        }
    }
}
module.exports.each = each;

/**
 * Based on a test function, filter is designed to collect values from a collection, array or object, and return those filtered values.
 * 
 * @parm {Array or object} collection the collection from which to filter.
 * @parm {Function} test the function that tests whether values should be included in the returned output. The test function must return a boolean.
 * @return {Array} An array of the filtered values.
function filter() {
*/   

function filter (collection, test) {
    var filtered = [];
    each(collection, function(value, position) {
        if (test(value, position, collection) === true){
            filtered.push(value);
        }
    });
    return filtered;
}
module.exports.filter = filter;

/**
 * Based on the value, it searched the array for that value and returns the index of that value, if it is not it returns false.
 * 
 * @parm {Array} Array to seaerch through.
 * @parm {value} Search the array for this value and return its position in the array if it is in it.
*/  

function indexOf(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * Based on the number given,it returns the last value in the array
 * 
 * @parm {Array} the array to search through.
 * @parm {Number} The output depends on this number. If the number is greater then the array length it will return the whole array. If its not less then 0 and less then the array length it will return the last value.
*/  

function last(array, number) {
    if(!Array.isArray(array) || number < 0 ){
        return [];
    }   else if(typeof number !== "number") {
            return array[array.length - 1];
        }   else if(number > array.length) {
                return array;
            }   else {
                    var newArray = array.slice(array.length - number);
                    return newArray;
                }
}
module.exports.last = last;

/**
 * Based on the number given,it returns the last value in the array
 * 
 * @parm {Array} the array to search through.
 * @parm {Number} The output depends on this number. If the number is greater then the array length it will return the whole array. If its not less then 0 and less then the array length it will return the first value.
*/   

function first(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    }   else if (isNaN(number)) {
            return array[0];
        }   else if (number > array.length) {
                return array;
            }   else {
                    var newArray = array.slice(0, number);
                    return newArray;
                }
}
module.exports.first = first;

/**
 * Based on what input into the functions arguement, It will tell you what that thing is.
 * 
 * @parm {thing} You put the thing you want to know the type of as the parameter.
*/  

function typeOf(thing) {
    if (Array.isArray(thing)) {
    return "array";
    }   else if (thing === null) {
            return "null";   
        }   else {
                return typeof thing;
            }
}
module.exports.typeOf = typeOf;

/**
 * If what you input into the functions parameter is equal to it self it will return what you input
 * 
 * @parm {Anything} Anything you want to check if it is equal to it self.

*/  

function identity(anything){
    return anything;
}
module.exports.identity = identity;

/**
 * Whatever is returned as false from the action given will be returned in a new array.
 * 
 * @parm {Array} Array to search through.
 * @parm {Function} test the array aginst the unction to see if it returns true or false
*/  

function reject(array, func) {
    var newArray = [];
    each(array, function(value, i) {
        if (func(array[i], i, array) === false){
            newArray.push(array[i]);
        }
     });
     return newArray;
}
module.exports.reject = reject;

/**
 * Based on the function given, partition creates 2 new arrays.
 * 
 * @parm {Array} Array to preform a action on.
 * @parm {Function} How you want to seperate the Original array into 2 New arrays.
*/  

function partition(array, func) {
    var newArray = [[],[]];
    each(array, function(value, i) {
            if (func(array[i], i, array) === true){
            newArray[0].push(array[i]);
        } else if (func(array[i], i, array) === false){
            newArray[1].push(array[i]);
        }
    });
    return newArray;
}
module.exports.partition = partition;

/**
 * Takes an array and takes out duplicate enteries and create a new array without duplicates.
 * 
 * @parm {Array} Array to remove duplicates from
*/  

function unique(array) {
    var newArray = [];
    each(array, function(value, i) {
        indexOf(array, array[i]);
        if (newArray.indexOf( array[i] ) === -1 ) {
        newArray.push(array[i]);
        }
    });
    return newArray;
}
module.exports.unique = unique;

/**
 * Maps the array by its value, and index. Then preforms a action on the values depending on the function given.
 * 
 * @parm {Array} The array to preform an action too on the values
 * @parm {Function} What you want to do to the values in the array.
*/  

function map(arr, func){
    var newArray = [];
    each(arr, function(value, i, arr) {
            newArray.push(func(value, i, arr));
        
    });
    return newArray;
}
module.exports.map = map;

/**
 * Returns all of a properties values in an array in a new array
 * 
 * @parm {Array} Array to get the values of a property
 * @parm {Property} The property you want to get the values from.
*/  

function pluck(arr, prop){
    return map(arr, function(value){
          return value[prop];
  });
}
module.exports.pluck = pluck;

/**
 * Searches an array for a value, is that value is in the array it returns true, if it is not it returns false.
 * 
 * @parm {Array} Array to search for a value.
 * @parm {value} What you want to search for the array for

*/  

function contains(arr, value){
    var array = value < 1 ? false : arr.indexOf(value) === -1 ? false : true;  
    return array;
}
module.exports.contains = contains;

/**
 * Tests each value in a array aginst the function given. If all the values pass the test it returns true.
 * 
 * @parm {Array} Array to test a function aginst.
 * @parm {Function} what you want to test the values in the array for.

*/  

function every(arr, func) {
    var result = true;
    if (func === undefined) {
        func = identity;
    }
    each(arr, function(value, i, arr){
        if (func(value, i, arr) === false) {
            result = false;
        }
    });
     return result;
}
module.exports.every = every;

/**
 * Tests each value in a array aginst the function given. If any of the values in the array pass the test it returns true.
 * 
 * @parm {Array} Array to test a function aginst.
 * @parm {Function} what you want to test the values in the array for.

*/   

function some(arr, func){
    var result = false;
    if (func === undefined) {
        func = identity;
    }
    each(arr, function(value, i, arr){
        if (func(value, i, arr) === true) {
            result = true;
        }
    });
     return result;
}
module.exports.some = some;

/**
 * Takes the array, does a action on the arrays values with the seed to return just 1 value.
 * 
 * @parm {Array} Array with the values to reduce to 1 value.
 * @parm {Function} preform an action with the array and the seed.
 * @return {seed} a value to be used in the function with the values in the array.
*/  

function reduce(arr, func, seed){
    var results = seed;
        if (seed === undefined) {
            results = arr[0];
            
       }
        for (var i = 0; i < arr.length; i++)
            results = func(results, arr[i]);
            return results;
}
module.exports.reduce = reduce;

/**
 * Copies the keys and key's values too the original object given.
 *
 * @parm {object} The first object you put will be the original object that is added too.
 * @parm {object} every object after the original object will just have there keys and key's values copied to the origanl object. You can add as many objects as you want.
*/  

function extend() { 
    for (var i = 1; i < arguments.length; i++)
        for (var key in arguments[i])
            if (arguments[i].hasOwnProperty(key))
                arguments[0][key] = arguments[i][key];
                return arguments[0];
}
module.exports.extend = extend;