import { links } from "./data";

export type SectionNameType = (typeof links)[number]["name"];

export type ThemeType = "light" | "dark" | null ;
