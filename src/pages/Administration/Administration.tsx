import { useLanguage } from "../../contexts/LanguageProviderContext";
import "./Administration.css";
import { UserProvider } from "./user/UserProviderContext";
import UserTable from "./user/UserTable";

const Administration = () => {
  const { t } = useLanguage();
  return (
    <main className="admins-container">
      <h1 className="admin-title">{t("administration")}</h1>
      <UserProvider>
        <UserTable />
      </UserProvider>
    </main>
  );
};

export default Administration;
