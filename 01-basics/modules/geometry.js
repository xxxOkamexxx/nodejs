/**
 * Do all things geometry-related
 * 
 */


const { PI } = Math;

// πr^2
const area = r => PI * r ** 2;

// 2πr
const circumference = r => 2 * PI * r;

//export all the stuff
module.exports =  {
    area,
    circumference,
}