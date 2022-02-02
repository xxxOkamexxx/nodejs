/**
 * Calc stuff
 */

const geo = require('./modules/geometry');
const nim = require('./modules/num');

//console.log("geo", geo);

//geo.area(4);

let radius = 4;

let area = geo.area(radius);
//let approxArea = Math.round(area * 10) / 10;
let approxArea = num.round1WithDecimal(area); // *10 /10 





console.log('The area of a circle with radius ${radius} is :', area);

let circumference = geo.circumference(radius);
console.log('The circumferense of a circle with radius ${radius} is: ',circumference);