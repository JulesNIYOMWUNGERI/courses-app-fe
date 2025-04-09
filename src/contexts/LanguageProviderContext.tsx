import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "../locales/en.json";
import de from "../locales/de.json";
import { ReactNode } from "react";

const translations: Record<string, Record<string, string>> = {
    en,
    de
}

interface LanguageContextProps {
    selectedLanguage: string;
    setSelectedLanguage: (language: string) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);


interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>(() => {
        const storedLanguage: string | null = localStorage.getItem("selectedLanguage");
        
        try {
            return storedLanguage ? JSON.parse(storedLanguage) : "en"
        } catch (error) {
            return "en"
        }
    });

    useEffect(() => {
        localStorage.setItem("selectedLanguage", JSON.stringify(selectedLanguage));
    }, [selectedLanguage]);

    const t = (key: string): string => translations[selectedLanguage][key] || key;

    const contextValues = useMemo(() => (
        { 
            selectedLanguage, setSelectedLanguage, t 
        }
    ), [selectedLanguage, setSelectedLanguage, t]);

    return (
        <LanguageContext.Provider value={contextValues}>
          {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextProps => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
