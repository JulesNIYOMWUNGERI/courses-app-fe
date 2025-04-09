import { JSX } from "react";

export type CourseTypes = {
    id: string
    title: string;
    image: string
}

export type LanguageOptions = {
    id: string;
    name: string
    flag: JSX.Element
} 