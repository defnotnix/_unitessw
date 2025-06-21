"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";

const LanguageContext: any = createContext(null);

const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<any>("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

function useLanguage(): any {
  return useContext(LanguageContext);
}

export { useLanguage, LanguageContext, LanguageProvider };
