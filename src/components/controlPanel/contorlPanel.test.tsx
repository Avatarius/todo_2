import renderer from "react-test-renderer";
import { expect, test, describe } from "@jest/globals";
import { ControlPanel } from "./controlPanel";
import { FilterType } from "../../utils/types";

describe("Компонент <ControlPanel/>", () => {
  test("Рендер компонента", () => {
    const component = renderer.create(
      <ControlPanel
        length={3}
        filter={FilterType.Completed}
        callbacks={{
          all: () => {},
          active: () => {},
          completed: () => {},
          clear: () => {},
        }}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
