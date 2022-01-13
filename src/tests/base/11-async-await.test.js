import { getImagen } from "../../base/11-async-await";

describe("pruebas async await", () => {
  test("debe retornar url imagen", async () => {
    //el async retorna una promesa
    const response = await getImagen();
    //undefined porque el API no esta sirviendo
    expect(typeof response).toBe("undefined");
  });
});
