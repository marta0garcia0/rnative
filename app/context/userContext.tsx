import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../api/models";

interface UserState {
  updateUsers: (props: { users: User[] }) => void;
  users: User[];
}

const UserContext = createContext<UserState | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);

  const updateUsers = (props: { users: User[] }) => {
    setUsers(props.users);
  };

  return (
    <UserContext.Provider value={{ updateUsers, users }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserState => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};
