import { Action, Column, CreateButton, Pagination } from "../../utils/types";
import "./Table.css";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

interface UserTableProps<T> {
  data: T[];
  columns: Column[];
  actions: Action[];
  createButton?: CreateButton;
  isLoading?: boolean;
  emptyMessage: string;
  pagination?: Pagination;
}

const Table = <T extends { id: string }>({
  data,
  columns,
  actions,
  createButton,
  isLoading,
  emptyMessage,
  pagination = {
    rowsPerPageOptions: [2, 5, 10, 25, 50],
    defaultRowsPerPage: 5,
  },
}: UserTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(
    pagination.defaultRowsPerPage || pagination.rowsPerPageOptions?.[0] || 5
  );

  // calculate pagination values
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, data.length);
  const currentData = data.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRowsPerPage = parseInt(e.target.value);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="user-table-component">
      <table className="user-table">
        <thead>
          <tr>
            {columns.map((column: Column) => (
              <th key={column.key}>{column.header}</th>
            ))}

            <th>
              {createButton && (
                <button
                  className="create-user-btn"
                  onClick={createButton.onClick}
                >
                  {createButton.label} {createButton.icon}
                </button>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td
                colSpan={
                  columns.length + (actions && actions.length > 0 ? 1 : 0)
                }
                className="loading-message"
              >
                Loading...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={
                  columns.length + (actions && actions.length > 0 ? 1 : 0)
                }
                className="empty-message"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            currentData.map((item) => (
              <tr key={item.id}>
                {columns.map((column: Column) => (
                  <td key={column.key}>
                    {column.key ? String(item[column.key as keyof T]) : null}
                  </td>
                ))}

                {actions && actions.length > 0 && (
                  <td>
                    <div className="action-buttons">
                      {actions.map((action: Action) => (
                        <button
                          key={action.id}
                          className="action-btn"
                          onClick={() => action.onClick(item)}
                        >
                          {action.icon}
                        </button>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="pagination-controls">
        <div className="rows-per-page">
          <span>Rows per page:</span>
          <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            {pagination.rowsPerPageOptions?.map((option: number) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          {data.length > 0
            ? `${startIndex + 1}–${endIndex} of ${data.length}`
            : "0 of 0"}
        </div>

        <div className="page-navigation">
          <button
            className="nav-button"
            onClick={handlePrevPage}
            disabled={currentPage <= 1}
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            className="nav-button"
            onClick={handleNextPage}
            disabled={currentPage >= totalPages}
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
