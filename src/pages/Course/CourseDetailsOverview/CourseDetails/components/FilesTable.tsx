import { useMemo } from "react";

import { Table } from "../../../../../components";
import { Column } from "../../../../../components/Table/types";
import { useLanguage } from "../../../../../contexts/LanguageProviderContext";
import { FileType } from "../types";

const FilesTable = () => {
  const { t } = useLanguage();
  const courseTableColumns: Column<FileType>[] = useMemo(
    () => [{ key: "name", header: t("files"), render: (row) => row.name }],
    [t],
  );

  return (
    <Table
      data={[]}
      columns={courseTableColumns}
      emptyMessage={t("looksLikeThereAreNoFilesYet")}
      showPagination={false}
    />
  );
};

export default FilesTable;
