// const lib = require('./lib');
// console.log("Hello");
// lib.m();
// lib.message();

const myLib = require('./lib');
myLib.welcome("Ahsan Riaz");

const {welcome} = myLib;
welcome("Ahsan");

// console.log("Hello World");