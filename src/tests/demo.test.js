describe("mis primeros tests en demo", () => {
  test("debe ser true", () => {
    const isActive = true;
  });

  test("string deben ser iguales", () => {
    const message = "hola";
    const message2 = `hola`;
    expect(message).toBe(message2);
  });
});
