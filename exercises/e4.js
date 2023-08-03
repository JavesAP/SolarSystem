import { data } from "../data/data";

// SPACE DATA EXERCISE 4
// Return an array of Planets' names with gravity less than 10
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithLowGravity(data) {
  // Your code goes here...

  return data.planets
  .filter((planet) => planet.gravity < 10)
  .map((planet) => planet.name);

  /*let lowGravity = [];
  let planetGrabber = data.planets.filter(function(planet) {
    if (planet.gravity < 10) {
      lowGravity.push(planet.name);
    }
  })
  return lowGravity;*/
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
