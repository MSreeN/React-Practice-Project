import React, {useState} from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);
  function addUserHandler(userName, userAge){
    setUsersList((prevUsersList) => {
      // console.log("in app");
      return [...prevUsersList,{name:userName, age: userAge,id: Math.random() }]
    });
  }
  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UsersList users = {usersList}/>
    </div>
  );
}

export default App;
