import PrimeraApp from "../PrimeraApp";
import { render } from "@testing-library/react";
import React from "react";

describe("Probando primeraApp component", () => {
  test("debe mostrar el mensaje hola soy goku", () => {
    const saludo = "Hola soy goku";
    //Producto renderizado de lo que yo voy a probar
    const wrapper = render(<PrimeraApp saludo={saludo}></PrimeraApp>);

    expect(wrapper.getByText(saludo)).toBeInTheDocument();
  });
});
