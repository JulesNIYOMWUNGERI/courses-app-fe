import { JSX } from "react";

import { AppMessages } from "../common/localization/types";

export type ViewTypes = {
  id: string;
  title: keyof AppMessages;
  image?: string;
  path: string;
};

export type LanguageOptions = {
  id: string;
  name: string;
  flag: JSX.Element;
};
