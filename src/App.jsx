import { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
import { fetchUsers } from "./api/api";
import UserDisplay from "./components/UserDisplay";

import Accordion from "./components/Accordion";

function App() {
  const [userList, setUserList] = useState([]);

  //delete user from user List
  const deleteUser = (id) => {
    setUserList(
      userList.filter((data) => {
        return data.id != id;
      })
    );
  };

  useEffect(() => {
    (async () => {
      const response = await fetchUsers();
      setUserList(response);
    })();
    return () => {};
  }, []);

  return (
    <>
      <h1>User List</h1>
      <div>
        <UserDisplay userList={userList} deleteUser={deleteUser} /> 
      </div>

      <h1>Accordion</h1>
      <div>
        <Accordion />
      </div>
    </>
  );
}

export default App;

/* Rectangle 1 */
