import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { expect, test, describe, jest } from "@jest/globals";
import { List } from "./list";

describe("Компонент <List/>", () => {
  const todos = [
    { text: "test1", isCompleted: false, id: "1" },
    { text: "test2", isCompleted: true, id: "2" },
  ];
  test("Рендер компонента", () => {
    const component = renderer.create(
      <List
        todos={todos}
        changeTodoStatus={() => {}}
        removeTodo={(id: string) => {}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Change todo status", () => {
    const changeTodoStatus = jest.fn();
    const listEl = render(
      <List
        todos={todos}
        changeTodoStatus={changeTodoStatus}
        removeTodo={() => {}}
      />
    );
    const list = screen.getByTestId("list");
    expect(list).toBeTruthy();
    const firstCheckmark = list.querySelector("[data-testid=buttonCheckmark]");
    expect(firstCheckmark).toBeTruthy();
    fireEvent.click(firstCheckmark as Element);
    expect(changeTodoStatus).toHaveBeenCalledWith("1");
  });
  test("Remove item", () => {
    const removeTodo = jest.fn();
    const listEl = render(
      <List todos={todos} changeTodoStatus={() => {}} removeTodo={removeTodo} />
    );
    const list = screen.getByTestId("list");
    expect(list).toBeTruthy();
    const firstRemoveButton = list.querySelector("[data-remove-button]");
    expect(firstRemoveButton).toBeTruthy();
    fireEvent.click(firstRemoveButton as Element);
    expect(removeTodo).toHaveBeenCalledWith("1");
  });
});
