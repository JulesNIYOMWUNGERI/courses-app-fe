import { useRef, useState } from "react";
import { MdDelete, MdOutlineUploadFile } from "react-icons/md";

import { useLanguage } from "../../../../../contexts/LanguageProviderContext";

interface UploadFileSectionProps {
  document?: boolean;
}

type UploadedFile = {
  file: File;
  preview: string;
};

const UploadFileSection = ({ document }: UploadFileSectionProps) => {
  const { t } = useLanguage();
  const [selectedFile] = useState<UploadedFile>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <section className="upload-section">
      <h3 className="section-title">
        {document ? t("uploadDocument") : t("uploadPhoto")}
      </h3>
      <div className="action-container">
        <span className="upload-subtitle">
          {document ? t("addDocumentsToCourse") : t("addPhotosToCourse")}
        </span>
        <button className="add-file-button">{t("add")}</button>
      </div>
      <div className="file-list-container">
        <div className="file-item">
          <div className="file-name">
            {!selectedFile ? `${t("noFile")}...` : selectedFile.file.name}
          </div>

          {selectedFile && (
            <button className="trash-button">
              <MdDelete size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="upload-dropzone">
        {!document && selectedFile && selectedFile.preview ? (
          <div className="preview-container">
            <img
              src={selectedFile.preview}
              alt="preview"
              className="preview-image"
            />
          </div>
        ) : (
          <div className="dropzone-content">
            <div className="upload-icon">
              <MdOutlineUploadFile size={30} />
              <div className="upload-text">{t("uploadFile")}</div>
            </div>
            <p className="dropzone-instructions">
              {`${t("dragAndDropYourFileHereOrClickToBrowseYourDevice")} ${document ? "(.doc, .docx, .ppt, .pptx, .txt, .pdf)" : "(image/png, image/gif, image/jpeg)"} `}
            </p>
            <input
              type="file"
              ref={fileInputRef}
              className="file-input"
              accept={document ? ".pdf" : "image/png,image/gif,image/jpeg"}
              id="document-upload"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default UploadFileSection;
