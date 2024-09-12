import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import UserListScreen from "./../../user-list/UserListScreen";
import { useUser } from "./../../../context/userContext";
import { getUsers } from "./../../../api/api";
import { useNavigation } from "@react-navigation/native";
import mockUsers from "../../__mocks__/mockUsers";

jest.mock("@/app/context/userContext");
jest.mock("@/app/api/api");
jest.mock("@react-navigation/native");
jest.mock("react-native-reanimated", () =>
  require("react-native-reanimated/mock"),
);

describe("UserListScreen", () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);

    (getUsers as jest.Mock).mockResolvedValue(mockUsers);

    (useUser as jest.Mock).mockReturnValue({
      users: mockUsers,
      updateUsers: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("debería renderizar correctamente el componente y llamar a getUsers", async () => {
    const { getByText } = render(<UserListScreen />);

    expect(getByText("Users")).toBeTruthy();
    expect(getByText("Click on any user to see the details.")).toBeTruthy();

    await waitFor(() => {
      expect(getByText("John Doe")).toBeTruthy();
      expect(getByText("Jane Smith")).toBeTruthy();
    });

    expect(getUsers).toHaveBeenCalledTimes(1);
  });
});
