import React, { useState } from "react";

import { useUserContext } from "../../../pages/Administration/user/UserProviderContext";

const AUTHENTICATED_USER_ID = "selectedUserId";
const UserSwitch = () => {
  const { users } = useUserContext();

  const [selectedUserId, setSelectedUserId] = useState<string>(() => {
    const storedUserId = localStorage.getItem(AUTHENTICATED_USER_ID);

    return storedUserId ?? users[0]?.id ?? "";
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = e.target.value;
    setSelectedUserId(userId);
    localStorage.setItem(AUTHENTICATED_USER_ID, userId);
  };

  return (
    <select
      value={selectedUserId}
      onChange={handleChange}
      className="user-select"
    >
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.firstName}
        </option>
      ))}
    </select>
  );
};

export default UserSwitch;
