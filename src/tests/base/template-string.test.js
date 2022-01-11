import "@testing-library/jest-dom";
import getSaludo from "../../base/02-template-string";

describe("testeando template-string js", () => {
  test("get saludo deberia decir hola alex", () => {
    const nombre = "Alex";
    const result = getSaludo(nombre);
    expect(result).toBe("Hola Alex");
  });

  test("get saludo deberia decir hola carlos, default", () => {
    const result = getSaludo();
    expect(result).toBe("Hola Carlos");
  });
});
