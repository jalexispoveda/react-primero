import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";

describe("Test - 08-imp-exp", () => {
  test("getHeroeById deberia traer a Batman", () => {
    const heroe = getHeroeById(1);

    expect(heroe.name).toBe("Batman");
  });

  test("getHeroeById deberia traer undefined si no encuentra el ID", () => {
    const heroe = getHeroeById(10);

    expect(heroe).toBe(undefined);
  });

  test("getHeroesByOwner deberia traer los heroes de DC", () => {
    const heroes = getHeroesByOwner("DC");
    const expectedHeroes = [
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ];

    expect(heroes).toEqual(expectedHeroes);
  });

  test("getHeroesByOwner deberia traer los heroes de MARVEL y son 2", () => {
    const heroes = getHeroesByOwner("Marvel");
    const expectedHeroesCount = 2;

    expect(heroes.length).toBe(expectedHeroesCount);
  });
});
