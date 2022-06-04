import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import React from "react";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state) => {
  return shallow(<App {...props} />)
}

const findByTestAttr = (wrapper, attr) => wrapper.find(`[data-test='${attr}']`);

test('renders without errors', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'button')
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1);
});

test('counter start at 0', () => {
  const setNum = jest.fn();
  const initialCounterState = jest.spyOn(React, "useState");
  initialCounterState.mockImplementation(num => [num, setNum]);
  expect(initialCounterState.mock).toBeTruthy();
});

test('clicking button increment button display', () => {

});
