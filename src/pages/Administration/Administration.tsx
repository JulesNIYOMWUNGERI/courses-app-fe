import { useEffect, useState } from "react";
import { User, UserData } from "../../utils/types";
import { generateId, UserTableColumns } from "../../utils/utils";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { DeleteDialog, Table, UserDialog } from "../../components";

import "./Administration.css";

const Administration = () => {
  const userStore = "users";
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<
    string | null | undefined
  >();
  const [newUser, setNewUser] = useState<UserData>({
    firstName: "",
    lastName: "",
  });
  const [users, setUsers] = useState<User[]>(() => {
    const defaultUsers = [
      { id: "984471", firstName: "Example", lastName: "User2" },
      { id: "426419", firstName: "Example", lastName: "User1" },
    ];

    const storedUsers = localStorage.getItem(userStore);
    if (!storedUsers) {
      localStorage.setItem(userStore, JSON.stringify(defaultUsers));
      return defaultUsers;
    }

    return JSON.parse(storedUsers);
  });

  const handleCreateOrEditUser = (newUser: UserData) => {
    if (selectedUserId) {
      // Edit user mode
      setUsers((prev: User[]) =>
        prev.map((user: User) =>
          user.id === selectedUserId
            ? {
                ...user,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
              }
            : user
        )
      );
    } else {
      // Create user mode
      setUsers((prev) => [
        ...prev,
        {
          id: generateId(),
          firstName: newUser.firstName,
          lastName: newUser.lastName,
        },
      ]);
    }

    setSelectedUserId(null);
    handleCloseDialog();
  };

  const handleCloseDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedUserId(null);
    setNewUser((prev: UserData) => ({
      ...prev,
      firstName: "",
      lastName: "",
    }));
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleOpenEditUser = (userId: string) => {
    const userToEdit = users.find((user) => user.id === userId) as User;

    if (userToEdit) {
      setNewUser((prev: UserData) => ({
        ...prev,
        firstName: userToEdit.firstName,
        lastName: userToEdit.lastName,
      }));
      setSelectedUserId(userId);
      setIsDialogOpen(true);
    }
  };

  const handleOpenDeleteWarning = (userId: string) => {
    const userToDelete = users.find((user) => user.id === userId) as User;

    if (userToDelete) {
      setSelectedUserId(userId);
      setIsDeleteDialogOpen(true);
    }
  };

  const handleDeleteUser = () => {
    setUsers((prev) => prev.filter((user) => user.id !== selectedUserId));
    setIsDeleteDialogOpen(false);
  }

  const UserTableActions = [
    {
      id: "1",
      icon: <MdEdit size={20} />,
      onClick: (user: Record<string, string>) =>
        handleOpenEditUser(user.id as string),
    },
    {
      id: "2",
      icon: <MdDelete size={20} />,
      onClick: (user: Record<string, string>) =>
        handleOpenDeleteWarning(user.id as string),
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev: UserData) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    localStorage.setItem(userStore, JSON.stringify(users));
  }, [users]);

  return (
    <main className="admins-container">
      <h1 className="admin-title">Administration</h1>
      <Table
        data={users}
        columns={UserTableColumns}
        actions={UserTableActions}
        createButton={{
          label: "Create new user",
          icon: <FaUserPlus />,
          onClick: handleOpenDialog,
        }}
        emptyMessage="Looks like there are no users yet."
      />

      <UserDialog
        onSubmit={handleCreateOrEditUser}
        onCancel={handleCloseDialog}
        isDialogOpen={isDialogOpen}
        initialValues={newUser}
        onInputChange={handleInputChange}
        selectedUserId={selectedUserId}
      />
      <DeleteDialog
        onCancel={handleCloseDeleteDialog}
        isDialogOpen={isDeleteDialogOpen}
        handleDelete={handleDeleteUser}
      />
    </main>
  );
};

export default Administration;
