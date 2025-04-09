import { Languages } from '../../utils/utils'
import { LanguageOption } from ".."


import "./LanguageSelect.css"
import { LanguageOptions } from '../../utils/types';
import { useLanguage } from '../../contexts/LanguageProviderContext';

const LanguageSelect = () => {
  const { t } = useLanguage();

  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const handleLanguageChange = (languageId: string) => {
    setSelectedLanguage(languageId);
  };

  return (
    <div className="language-container">
      <span className='title'>{t("language")}</span>
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