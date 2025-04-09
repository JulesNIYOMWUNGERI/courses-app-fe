import { useEffect, useRef } from 'react'
import { LanguageSelect } from ".."
import { useLanguage } from '../../contexts/LanguageProviderContext'

type UserPanelProps = {
    onClose: () => void
}

const UserPanel = ({ onClose }: UserPanelProps) => {
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const { t } = useLanguage();
  
  const handleClickOutside = (e: MouseEvent) => {
    if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
    ) {
        onClose();
    }
  };
    
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="user-panel" ref={dropDownRef}>
      <h3>{t("welcome")} USER1</h3>

      <hr className="separator" />

      <LanguageSelect />

      <hr className="separator" />

      <button className="logout-button">{t("logOut")}</button>
    </div>
  )
}

export default UserPanel;
