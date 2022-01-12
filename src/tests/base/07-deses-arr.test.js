import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base/07-deses-arr";

describe("testeando 07-deses-arr", () => {
  test("RetornaArreglo funciona, retorna string y numero", () => {
    const arreglo = retornaArreglo();
    const [letras, numeros] = retornaArreglo();

    expect(arreglo).toEqual(["ABC", 123]);

    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});
