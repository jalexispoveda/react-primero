import "@testing-library/jest-dom";
import { getUser } from "../../base/05-funciones";

describe("testeando 05-funciones", () => {
  test("getUser retorna objeto", () => {
    const user = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const userExpected = getUser();
    expect(userExpected).toEqual(user);
  });
});
