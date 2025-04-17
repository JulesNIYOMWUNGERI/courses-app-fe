import { JSX, ReactNode } from "react";

export type ViewTypes = {
  id: string;
  title: string;
  image?: string;
  path: string;
};

export type LanguageOptions = {
  id: string;
  name: string;
  flag: JSX.Element;
};

export interface UserData {
  firstName: string;
  lastName: string;
}

export interface User extends UserData {
  id: string;
}

export interface Column {
  header: string;
  key: string;
}

export interface Action {
  id: string;
  icon: ReactNode;
  onClick: (row: Record<string, string>) => void;
}

export interface CreateButton {
  label: string;
  icon: ReactNode;
  onClick: () => void;
}

export interface Pagination {
  rowsPerPageOptions: number[];
  defaultRowsPerPage: number;
}
