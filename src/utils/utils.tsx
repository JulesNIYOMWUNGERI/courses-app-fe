import { EnglishFlag, GermanFlag } from "../components";
import { LanguageOptions } from "./types";

export const Languages: LanguageOptions[] = [
    {
      id: 'en',
      name: 'English',
      flag: <EnglishFlag />
    },
    {
      id: 'de',
      name: 'German',
      flag: <GermanFlag />
    }
];