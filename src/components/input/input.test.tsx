import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import { expect, test, describe, jest } from "@jest/globals";
import { Input } from "./input";

describe("Компонент <Input/>", () => {
  test("Рендер компонента", () => {
    const component = renderer.create(
      <Input newTodo="test" addTodo={() => {}} setNewTodo={() => {}} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Submit", () => {
    const setTodo = jest.fn();
    render(<Input newTodo="fdfs" addTodo={() => {}} setNewTodo={setTodo} />);
    const form = screen.getByTestId("form");
    expect(form).toBeTruthy();
    userEvent.type(screen.getByTestId("input"), "test");
    fireEvent.submit(form);
    expect(setTodo).toHaveBeenCalledWith("");
  });
});
