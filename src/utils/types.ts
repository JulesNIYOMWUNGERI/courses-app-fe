import { JSX } from "react";

export type ViewTypes = {
    id: string;
    title: string;
    image?: string;
    path: string;
}

export type LanguageOptions = {
    id: string;
    name: string
    flag: JSX.Element
} 