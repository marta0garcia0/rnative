import * as React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react-native";

import { Card } from "../card/Card";

describe("Card component", () => {
  it(`renders correctly`, () => {
    const onSelect = jest.fn();
    const tree = renderer
      .create(
        <Card
          user={{
            id: 1,
            name: "John Doe",
            username: "johndoe",
            email: "johndoe@example.com",
            address: {
              street: "123 Elm St",
              suite: "Apt 4",
              city: "Gotham",
              zipcode: "12345",
              geo: {
                lat: "40.7128",
                lng: "-74.0060",
              },
            },
            phone: "555-555-5555",
            website: "johndoe.com",
            company: {
              name: "Doe Enterprises",
              catchPhrase: "We do things differently",
              bs: "innovate synergy",
            },
          }}
          onSelect={onSelect}
        ></Card>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("display name and surname correctly", () => {
    const onSelect = jest.fn();
    const { getByTestId, debug, getByText } = render(
      <Card
        user={{
          id: 1,
          name: "John Doe",
          username: "johndoe",
          email: "johndoe@example.com",
          address: {
            street: "123 Elm St",
            suite: "Apt 4",
            city: "Gotham",
            zipcode: "12345",
            geo: {
              lat: "40.7128",
              lng: "-74.0060",
            },
          },
          phone: "555-555-5555",
          website: "johndoe.com",
          company: {
            name: "Doe Enterprises",
            catchPhrase: "We do things differently",
            bs: "innovate synergy",
          },
        }}
        onSelect={onSelect}
      />,
    );
    debug();
    const buttonComponent = getByTestId("cardId");
    fireEvent(buttonComponent, "press");
    const name = getByText("John Doe");
    const username = getByText("johndoe");

    expect(onSelect).toHaveBeenCalled();
    expect(name).toBeDefined();
    expect(username).toBeDefined();
  });
});
