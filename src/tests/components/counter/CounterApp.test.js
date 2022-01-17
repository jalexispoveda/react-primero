import React from "react";
import CounterApp from "../../../components/counter/CounterApp";
import { shallow } from "enzyme/build";

describe("tests para counterApp", () => {
  const value = 100;
  let component = shallow(<CounterApp value={value}></CounterApp>);

  //Se ejecutara antes de cada prueba
  beforeEach(() => {
    component = shallow(<CounterApp value={value}></CounterApp>);
  });

  test("should show counterApp component ", () => {
    const value = 100;

    expect(component).toMatchSnapshot();
  });

  test("El contador deberia estar en 100", () => {
    const text = component.find("h2").text();

    expect(+text).toBe(value);
  });

  test("Debe incrementar contador cuando se haga click en +1 ", () => {
    component.find("button").at(1).simulate("click");

    const text = component.find("h2").text();

    expect(+text).toBe(101);
  });

  test("Debe decrementar contador cuando se haga click en -1 ", () => {
    component.find("button").at(0).simulate("click");

    const text = component.find("h2").text();

    expect(+text).toBe(99);
  });

  test("El buton reset deberia dejar el value en 0 ", () => {
    component.find("button").at(2).simulate("click");

    const text = component.find("h2").text();

    expect(+text).toBe(0);
  });
});
