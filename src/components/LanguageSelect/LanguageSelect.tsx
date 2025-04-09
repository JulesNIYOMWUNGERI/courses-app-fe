import { useState } from 'react';
import { Languages } from '../../utils/utils'
import { LanguageOption } from ".."


import "./LanguageSelect.css"
import { LanguageOptions } from '../../utils/types';

const LanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  const handleLanguageChange = (languageId: string) => {
    setSelectedLanguage(languageId);
  };

  return (
    <div className="language-container">
      <span className='title'>LANGUAGE</span>
      <div className="language-box">
        {Languages.map((language: LanguageOptions) => (
          <LanguageOption
            key={language.id}
            id={language.id}
            name={language.name}
            flag={language.flag}
            isSelected={language.id === selectedLanguage}
            onChange={handleLanguageChange}
          />
        ))}
      </div>
    </div>
  )
}

export default LanguageSelect