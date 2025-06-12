import FilesTable from "./FilesTable";
import { useLanguage } from "../../../../../contexts/LanguageProviderContext";

const FileSection = () => {
  const { t } = useLanguage();

  return (
    <section className="info-card">
      <h3 className="card-title">{t("files")}</h3>

      <FilesTable />
    </section>
  );
};

export default FileSection;
