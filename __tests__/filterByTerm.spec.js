//const filterByTerm = require("../src/filterByTerm");
import { filterByTerm } from "../src/filterByTerm";

describe("Filter function", () => {
  //test stuff
  test("it should filter by a search term (link)", () => {
    //actual test
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);
    expect(filterByTerm(input, "LINK")).toEqual(output); // maisculas
  });

  test("it should filter by a search term (uRl)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [ 
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" }
    ];

    expect(filterByTerm(input, "uRl")).toEqual(output);//pesquisando pelo termo url

  });

  test("empty search term", () => {
    const input = [];

    expect(() => {
      filterByTerm(input, "");
    }).toThrowError(Error("searchTerm cannot be empty"));

  });

  test("empty inputarr", () => {
    const input = [];

    expect(() => {
      filterByTerm(input, "uRl");
    }).toThrowError(Error("inputArr cannot be empty"));

  });

});