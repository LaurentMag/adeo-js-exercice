const {
  filterCountriesByAnimalNamePattern,
  setPeoplesAndAnimalCounts,
  appendListCountToElementName,
  displayDataByFilterParameter,
  promptAndDisplayData,
} = require("./app.js");

const {
  rowData,
  oakfilteredData,
  foxfilteredData,
  countedData,
  objListWithChildrenList,
  countedObjListWithChildrenList,
} = require("./data.mocked.js");

describe("List filter functionality", () => {
  const incorrectDataCases = [
    {data: undefined, description: "undefined"},
    {data: "not an array", description: "not an array"},
    {data: [], description: "an empty array"},
  ];

  incorrectDataCases.forEach((incorrectDataCases) => {
    test(`Filter function should return an empty array if the data is : ${incorrectDataCases.description}`, () => {
      const result = filterCountriesByAnimalNamePattern(incorrectDataCases.data, "pattern");

      expect(result).toEqual([]);
    });
  });

  test("Filter function should return an empty array if the pattern is not found", () => {
    const result = filterCountriesByAnimalNamePattern(rowData, "pattern");

    expect(result).toEqual([]);
  });

  test("Filter function should return data only displaying country with people owning animals matching the 'oak' pattern", () => {
    const result = filterCountriesByAnimalNamePattern(rowData, "oak");

    expect(result).toEqual(oakfilteredData);
  });
  test("Filter function should return data only displaying country with people owning animals matching the 'fox' pattern", () => {
    const result = filterCountriesByAnimalNamePattern(rowData, "fox");

    expect(result).toEqual(foxfilteredData);
  });
});

describe("List count functionality testing", () => {
  const incorrectDataCases = [
    {data: "not an array", description: "not an array"},
    {data: [], description: "an empty array"},
  ];

  const incorrectDataCasesWUndefinedKey = [
    ...incorrectDataCases,
    {data: undefined, description: "undefined"},
  ];

  incorrectDataCases.forEach((incorrectDataCases) => {
    test(`appendListCountToElementName : should return an empty array if the data is : ${incorrectDataCases.description}`, () => {
      expect(appendListCountToElementName(incorrectDataCases.data, "children")).toEqual([]);
    });
  });

  test("appendListCountToElementName : Should return the intial list with the children count append to the parent name attribute", () => {
    const result = appendListCountToElementName(objListWithChildrenList, "children");

    expect(result).toEqual(countedObjListWithChildrenList);
  });

  incorrectDataCasesWUndefinedKey.forEach((incorrectDataCases) => {
    test(`setPeoplesAndAnimalCounts : should return an empty array if the data is : ${incorrectDataCases.description}`, () => {
      expect(setPeoplesAndAnimalCounts(incorrectDataCases.data)).toEqual([]);
    });
  });

  test("setPeoplesAndAnimalCounts : Should return the intial list with the children count append to the parent name attribute", () => {
    const result = setPeoplesAndAnimalCounts(rowData);

    expect(result).toEqual(countedData);
  });
});

describe("displayDataByFilterParameter : verify filter verification, and error message", () => {
  const originalArgv = process.argv;
  const originalConsoleLog = console.log;

  beforeEach(() => {
    process.argv = [...originalArgv];
    console.log = jest.fn();
  });

  afterEach(() => {
    process.argv = originalArgv;
  });

  test("if the filter value is empty, display a message and stop the function", () => {
    displayDataByFilterParameter([], "--filter=");
    expect(console.log).toHaveBeenCalledWith("Please add a value : --filter=<value>");
  });

  test("Filtered data is returned when using valid filter", () => {
    displayDataByFilterParameter(rowData, "--filter=oak");
    expect(console.log).toHaveBeenCalledWith(JSON.stringify(oakfilteredData, null, 2));
  });
});

describe("promptAndDisplayData : function invoked on start and redirecting depending of prompt command", () => {
  const originalArgv = process.argv;
  const originalConsoleLog = console.log;

  beforeEach(() => {
    process.argv = [...originalArgv];
    console.log = jest.fn();
  });

  afterEach(() => {
    process.argv = originalArgv;
    console.log = originalConsoleLog;
  });

  test("calls console.log with error message when invalid command is passed", () => {
    process.argv.push("--invalid");
    promptAndDisplayData();
    expect(console.log).toHaveBeenCalledWith(
      "This command is not valid, please use :  \n --count \n or \n --filter=<value>"
    );
  });
});
