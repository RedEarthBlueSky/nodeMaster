/**  Title:  Jokes index file
  *  Description: Joke library
  *  Author:  Ian Salt
  *  Date: 11/06/2018 */

// Dependencies
const fs = require('fs');

const jokes = {}; //  App object

//  Get all the jokes and return them to the user
jokes.allJokes = function () {

  // Read the text file containing the jokes
      const fileContents = fs.readFileSync(`${__dirname}/jokes.txt`, 'utf8');

      // Turn the string into an array
      const arrayOfJokes = fileContents.split(/\r?\n/);

      // Return the array
      return arrayOfJokes;
};
//  Export the Library
module.exports = jokes;
