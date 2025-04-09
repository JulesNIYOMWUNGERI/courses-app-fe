import { useLanguage } from "../../contexts/LanguageProviderContext";
import { ViewTypes } from "../../utils/types"

const ViewCard = ({ View }: { View: ViewTypes}) => {
  const { t } = useLanguage()
  return (
    <div className="card" style={{ backgroundImage: `url(${View.image})` }}>
        <div className="overlay">
            <p>{t(View.title)}</p>
        </div>
    </div>
  )
}

export default ViewCard;
