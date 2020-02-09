import React from "react";
import { shallow, mount, render } from "enzyme";
import Loading from "../components/UILibrary/Loading";

describe("A Loading Test Suite", function() {
  it("should render without children", function() {
    const markup = shallow(<Loading />);
    expect(markup.find("div")).toHaveLength(1);
    expect(markup.find("div").text()).toContain("Loading..");
    expect(markup.hasClass("loading-div")).toBe(true);
  });
  it("should render with class name", function() {
    const markup = shallow(<Loading>In Progress</Loading>);
    expect(markup.find("div")).toHaveLength(1);
    expect(markup.find("div").text()).toContain("In Progress");
    expect(markup.hasClass("loading-div")).toBe(true);
  });
  it("should render with class name", function() {
    const markup = shallow(
      <Loading>
        <div>test</div>
      </Loading>
    );
    expect(markup.find("div")).toHaveLength(2);
    expect(markup.hasClass("loading-div")).toBe(true);
  });
});