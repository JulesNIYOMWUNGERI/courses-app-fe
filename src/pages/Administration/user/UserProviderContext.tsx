import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { User } from "./types";

type UserContextType = {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const defaultUsers: User[] = [
  { id: "984471", firstName: "Example", lastName: "User2" },
  { id: "426419", firstName: "Example", lastName: "User1" },
];
const userStore = "users";

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState<User[]>(() => {
    const stored = localStorage.getItem(userStore);
    if (stored) {
      return JSON.parse(stored);
    }
    localStorage.setItem(userStore, JSON.stringify(defaultUsers));
    return defaultUsers;
  });

  useEffect(() => {
    localStorage.setItem(userStore, JSON.stringify(users));
  }, [users]);

  const contextValue = useMemo(() => ({ users, setUsers }), [users]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
