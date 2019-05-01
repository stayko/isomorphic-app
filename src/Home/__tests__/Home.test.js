import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import ConnectedHome, { Home } from "../../Home";
import StyleContext from "isomorphic-style-loader/StyleContext";

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
  users: {
    requesting: false,
    successful: true,
    data: [
      {
        display_name: "User 1",
        user_id: 1,
        reputation: 129192,
        profile_image:
          "https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=128&d=identicon&r=PG"
      },
      {
        display_name: "User 2",
        user_id: 2,
        reputation: 109034,
        profile_image:
          "https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=128&d=identicon&r=PG"
      }
    ],
    error: ""
  },
  fetchUsers: jest.fn()
};

const insertCss = jest.fn();

describe("Home - Snapshot", () => {
  it("Matches Snapshot", () => {
    const mockStore = configureStore();
    const store = mockStore(initialState);

    const component = renderer.create(
      <Provider store={store}>
        <StyleContext.Provider value={{ insertCss }}>
          <MemoryRouter>
            <ConnectedHome />
          </MemoryRouter>
        </StyleContext.Provider>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Home - Mount", () => {
  let component;

  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <Home users={initialState.users} fetchUsers={initialState.fetchUsers} />
      </MemoryRouter>
    );
  });

  it("Renders component successfully", () => {
    expect(component.length).toEqual(1);
  });

  it("Renders Home <ul> successfully", () => {
    expect(component.find(".user-list").length).toEqual(1);
  });

  it("Renders correct number of users", () => {
    expect(component.find(".user").hostNodes().length).toEqual(2);
  });

  it("Renders correct user name", () => {
    expect(
      component
        .find(".user__name")
        .first()
        .text()
    ).toEqual("User 1");
  });

  it("Renders correct user reputation", () => {
    expect(
      component
        .find(".user__reputation")
        .at(1)
        .text()
    ).toEqual("109034");
  });
});
