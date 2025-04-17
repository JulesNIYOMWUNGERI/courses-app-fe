import Dialog from "../Dialog";
import "./DeleteDialog.css"

interface DeleteDialogProps {
  isDialogOpen: boolean;
  onCancel: () => void;
  handleDelete: () => void;
}

const DeleteDialog = ({ isDialogOpen, onCancel, handleDelete }: DeleteDialogProps) => {
  return (
    <Dialog isOpen={isDialogOpen} onClose={onCancel} title={`Alert`}>
      <div className="container">
        <span>Are you sure you want to delete this user?</span>
        <div className="button-actions">
          <button type="button" className="btns" onClick={handleDelete}>
            Yes
          </button>
          <button type="submit" className="btns" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteDialog;
