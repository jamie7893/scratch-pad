#!/usr/bin/env node

'use strict';

var lodown = require("./lodown");

var customers = require("./data/customers.json");

function print(value) {
    console.log(value);
}


///////////////////////////////////////////////////////////////////////////////////////

//  lodown.each(customers, function(customer) {
//      print(customer.name);
//  });

///////////////////////////////////////////////////////////////////////////////////////
// var femaleCount = 0;
// var maleCount = 0;
// lodown.each(customers, function(customer) {
//     if (customer.gender === 'female') {
//         femaleCount += 1;
//     }   else if (customer.gender === 'male') {
//             maleCount += 1;
//         }
// });

// print(femaleCount);
// print(maleCount);

///////////////////////////////////////////////////////////////////////////////////////

// var oldestName = "name";
// var oldestAge = lodown.reduce(customers, function(currentAge, customer) {
//     return currentAge < customer.age ? currentAge = customer.age : currentAge;
// }, 0);
// lodown.each(customers, function(customer) {
//     customer.age === oldestAge ? oldestName = customer.name : oldestName = oldestName;
// });

//////////////////////////////////////////////////////////////
// var youngName = "name";
// var youngAge = lodown.reduce(customers, function(currentAge, customer) {
//     return currentAge > customer.age ? currentAge = customer.age : currentAge;
// }, oldestAge);
// lodown.each(customers, function(customer) {
//     customer.age === youngAge ? youngName = customer.name : youngName = youngName;
// });

////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////

// var number = 0;
// var average = lodown.reduce(customers, function(balance, customer) {
//     var length = customers.length;
//     var remove = customer.balance.replace("$", "");
//     var remove2 = remove.replace(",", "");
//     remove2 = remove2.split(" ");
//     remove2 = remove2.join("");
//     remove2 = parseFloat(remove2);
//     number = number + remove2;
//     return number / length;
        
// }, 0);
// print(average);

///////////////////////////////////////////////////////////////////////////////////////

// var names = lodown.map(customers, function (customer) {
//     return customer.name.toUpperCase();
// });
// print(names);

// var letter = "D";
// var count = 0;
// lodown.each(customers, function(customer) {
//     customer.name.toLowerCase().charAt(0) === letter.toLowerCase() ? ++count : count;
// });
// print(count);

///////////////////////////////////////////////////////////////////////////////////////

// function findFriendsWith(customer, startsWith) {
//     var names = lodown.pluck(customer.friends, "name") 
//     return lodown.reduce(names, function(count, name) { 
//         return name.charAt(0) === startsWith ? ++count : count;
//     }, 0);
// }
// print(findFriendsWith(customers[0], "O"));





///////////////////////////////////////////////////////////////////////////////////////


// var count = 0;
// var friends = [];
// lodown.each(customers, function(customer) {
//     for (var i = 0; i < customer.friends.length; i++) {
//         friends.push(customer.friends[i].name.toLowerCase());
//     } for (var j = 0; j < friends.length; j++) {
//         if (customer.name.toLowerCase() === friends[j]) {
//             if(count === 0) {
//                 ++count;
//             }
//             ++count;
//         }
//     }
// });
// print(count);

///////////////////////////////////////////////////////////////////////////////////////
var tagsArray = [];
var count = 0;
var mostTag = "fsfdsf";
var mostUsedTag = lodown.reduce(customers, function(seed, customer){
    var tagss = customer.tags.join(" ");
    var single = tagss.split(" ");
    lodown.each(single, function(value, i, arr){
        lodown.every(arr, function(value) {
            lodown.each(tagsArray, function(value2, j, arr2){
                tagsArray.push(value)
                if (value === value[i]) 
                    ++count;
                    if(count < seed)
                        count = 0;
                        else if(count >= seed)
                            seed = count;
                            mostTag = value;
                            print(mostTag);
            });
            
        });
        
    });
}, 0);

print(mostTag);