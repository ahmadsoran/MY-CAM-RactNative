import React from "react";
import renderer from "react-test-renderer";
import { View } from "../Themed";

describe("<View />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<View />).toJSON();
    expect(tree).toMatchSnapshot({
      children: 1,
      props: {
        darkColor: "",
      },
    });
  });
});
