import "@testing-library/jest-dom";
import heroes from "../../data/heroes";
import { getHeroeByIdAsync } from "../../base/09-promesas";

describe("09-promesas testeando Promesas", () => {
  test("Probando getHeroeByIdAsync, debe retornar un heroe async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("Probando getHeroeByIdAsync, dee mandar error con heroe que no existe", (done) => {
    const id = 100;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
