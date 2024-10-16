import renderer from "react-test-renderer";
import { expect, test, describe } from "@jest/globals";
import { ButtonCheckmark } from "./buttonCheckmark";

describe("Компонент <ButtonCheckMark/>", () => {
  test("Рендер компонента", () => {
    const component = renderer.create(
      <ButtonCheckmark isComplated={true} onClick={() => {}} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
