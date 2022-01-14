import { render } from "@testing-library/react";

import React from "react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("Probando primeraApp component", () => {
  //   test("debe mostrar el mensaje hola soy goku", () => {
  //     const saludo = "Hola soy goku";
  //     //Producto renderizado de lo que yo voy a probar
  //     const wrapper = render(<PrimeraApp saludo={saludo}></PrimeraApp>);
  //     expect(wrapper.getByText(saludo)).toBeInTheDocument();
  //   });

  test("debe mostrar <primeraApp> component correctamente ", () => {
    const saludo = "Hola soy goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo}></PrimeraApp>);
    //probando que el componente se muestr en pantalla correctamente

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el subtitulo mostrado por props ", async () => {
    const saludo = "Hola";
    const subtitulo = "Soy un sub";

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo}></PrimeraApp>
    );

    //find en wrapper funciona como querySelector
    const textoParrafo = wrapper.find("p").text();

    expect(textoParrafo).toBe(subtitulo);
  });
});
