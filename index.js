function isPalindrome(word) {
  // Write your algorithm here
  let stringReverse = [...word].reverse().join("");
  console.log(stringReverse)
  if (word === stringReverse) {
    return true;
  } else{
    return false;
  }
}


/* 
  Add your pseudocode here
  Do the characters of the argument string match the same characters of the same string written backwards?
  Manipulate the argument string to rewrite it backwards
  Set a variable equal to the string written backwards
  Compare that variable to the argument
  return the bollean if true or false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
