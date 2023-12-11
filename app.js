"use strict";

const {count} = require("console");

//retrive data
const data = require("./data.js").data;

// PATTERN FILTER
/**
 * Determine if a person own a animal with a name matching the selected pattern (string).
 * Only People object with animal's name matching the search is kept.
 * Animal with name not matchig the pattern aren't kept in the animals.
 * @param {*} peoples peoples list with animals list
 * @param {*} pattern String - pattern searched for into animals name
 * @returns List of people objects or empty list depending of the filter result
 */
const filterPeopleByAnimalNamePattern = (peoples, pattern) => {
  if (!Array.isArray(peoples) || peoples.length === 0) {
    return [];
  } else {
    return peoples.reduce((acc, people) => {
      const matchingAnimals = people.animals.filter((animal) => animal.name.includes(pattern));

      return matchingAnimals.length > 0
        ? [...acc, {name: people.name, animals: matchingAnimals}]
        : acc;
    }, []);
  }
};

/**
 * Determine the people(s) with animal(s)'s name matching the seleted pattern (string)
 * Only people object matching the search will be displayed
 * @param {*} pattern String - pattern searched for into animals name
 * @returns List of country with people and pet name matching the searched pattern
 */
const filterCountriesByAnimalNamePattern = (data, pattern) => {
  if (data === undefined || !Array.isArray(data) || data.length === 0) {
    return [];
  } else {
    return data.reduce((acc, country) => {
      const filteredPeople = filterPeopleByAnimalNamePattern(country.people, pattern);

      return filteredPeople.length > 0
        ? [...acc, {name: country.name, people: filteredPeople}]
        : acc;
    }, []);
  }
};

// CHILD LIST COUNT
/**
 * Iterate over a list of object, count elements in the list stored in the the defined key.
 * And then append the count to the "name" object attribute.
 * @param {*} elements list of elements
 * @param {*} listKey object attribute with the list to count as value
 * @returns return a copy of the initial list, with count appened to the object "name" attribute
 */
const appendListCountToElementName = (elements, listKey) => {
  if (!Array.isArray(elements) || elements.length === 0) {
    return [];
  } else {
    return elements.map((element) => {
      const listLength = element[listKey].length;
      return {
        ...element,
        name: `${element.name} [${listLength}]`,
      };
    });
  }
};

/**
 * take a data list, and append peoples count for each country,
 * so animals count for each people of each country
 * @returns a copy of the initial data list with count value for each categories
 */
const setPeoplesAndAnimalCounts = (data) => {
  if (data === undefined || !Array.isArray(data) || data.length === 0) {
    return [];
  } else {
    const peopleCountPerCountry = appendListCountToElementName(data, "people");

    peopleCountPerCountry.forEach((country) => {
      country.people = appendListCountToElementName(country.people, "animals");
    });

    return peopleCountPerCountry;
  }
};

// TERMINAL CMD AND DISPLAY
/**
 * Using node <filename> --filter=<value>
 * Extract the filter value and pass it as argument of the filter Function.
 * Filter result will not be displayed if there is data to return.
 * @param {*} cmdParam
 */
const displayDataByFilterParameter = (data, cmdParam) => {
  let patternToSearchFor = cmdParam.split("=")[1];
  if (patternToSearchFor === "") {
    console.log("Please add a value : --filter=<value>");
    return;
  }
  const filterResult = filterCountriesByAnimalNamePattern(data, patternToSearchFor);
  if (filterResult.length > 0) console.log(JSON.stringify(filterResult, null, 2));
};

/**
 * Initial function retriving the parameter added after the node <filename> command
 * Depending of the parameter invoke filter or data count
 */
const promptAndDisplayData = () => {
  const parameter = process.argv.slice(2)[0];

  if (parameter.startsWith("--filter=")) {
    displayDataByFilterParameter(data, parameter);
  } else if (parameter === "--count") {
    const dataWithCount = setPeoplesAndAnimalCounts(data);
    console.log(JSON.stringify(dataWithCount, null, 2));
  } else {
    console.log(
      "This command is not valid, please use :  \n --count \n or \n --filter=<value>"
    );
  }
};

if (require.main === module) {
  promptAndDisplayData();
}

module.exports = {
  filterCountriesByAnimalNamePattern,
  setPeoplesAndAnimalCounts,
  appendListCountToElementName,
  displayDataByFilterParameter,
  promptAndDisplayData,
};
