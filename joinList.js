/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

const joinList = function(words) {
  // loop through the array to get the values in the array
  // initialize the string we will return. This will also return an empty string if the array is empty.
  let string = "";
  for (const word of words) {
    // if string is not empty, add a comma
    if (string) {
      string += ", ";
    }
    // add the word to the sentence
    string += `${word}`;
  }
  // return the new string
  return (string);
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);

console.log('Today I learned about', concepts);
