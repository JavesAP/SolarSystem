/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  let asteroidsYear = data.asteroids.reduce((acc, asteroid) => {
    
    if (!acc[asteroid.discoveryYear]) {
      return {...acc, [asteroid.discoveryYear]: 1}
    } else {
      return {...acc, [asteroid.discoveryYear]: acc[asteroid.discoveryYear] + 1}
    }
    
  }, {});
 
  let highestYear = Object.entries(asteroidsYear)
  .reduce((acc, asteroid) => {

    if (acc) {
      return asteroidsYear[acc] < asteroid[1] ? asteroid[0] : acc;
    } else {
      return asteroid[0];
    }
    
  }, 0)
  let highestYearN = Number(highestYear);
  return highestYearN;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
