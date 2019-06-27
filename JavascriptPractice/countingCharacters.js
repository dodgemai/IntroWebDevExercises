function countingCharacters(stringToCount){
    // The length property has been mentioned in
    // the Logging Letter Exercise in Lesson 4
    console.log (stringToCount + " has " +
              stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, charToFind){
  var charCount= 0;
  for (var i=0; i<stringToCount.length; i++){
    if (stringToCount[i] == charToFind){
      charCount++;
    }
  }
  console.log("String to search in: " + stringToCount);
  console.log("Character to find: " + charToFind);
  console.log("Number of times the character appears: " + charCount);
}

function countingCharacters3(str, search){
  var count = 0;
  for (var i = 0; i <= str.length-search.length; i++){
    var current = str.substring(i, i + search.length);
    if (current == search) count++;
  }
  return count;
}
