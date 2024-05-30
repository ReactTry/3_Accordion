import React from "react";


const UserDisplay = ({ userList, deleteUser }) => {
  return (
    <>
      <div>
        <ul>
          {userList.map(
            (user, index) =>
              user.id <= 10 && (
                <li key={user.id} align="left">
                  {user.id}
                  {"."}&nbsp;&nbsp;&nbsp;{user.name} {"  "}{" "}
                  <button onClick={() => deleteUser(user.id)}>Delete</button>{" "}
                </li>
              )
          )}
        </ul>
        
      </div>
    </>
  );
};

export default UserDisplay;
