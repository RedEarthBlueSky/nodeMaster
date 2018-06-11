/*
  *  Title:  Math Library
  *  Description: Utilty library for math related functions
  *  Author:  Ian Salt
  *  Date: 11/06/2018
  *
  */

  //  App object
  const math = {};

  //  Get a random integer between two integers
  math.getRandomNumber = function (min, max) {
    min = typeof (min) === 'number' && min % 1 === 0 ? min : 0;
    max = typeof (max) === 'number' && max % 1 === 0 ? max : 0;
    return Math.floor(Math.random() * (max - min + 1) + min );
  };

  //  Export the Library
  module.exports = math;
