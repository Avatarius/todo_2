import renderer from "react-test-renderer";
import { expect, test, describe } from "@jest/globals";
import { ButtonRemove } from "./buttonRemove";

describe("Компонент <ButtonRemove/>", () => {
  test("Рендер компонента", () => {
    const component = renderer.create(<ButtonRemove onClick={() => {}} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
