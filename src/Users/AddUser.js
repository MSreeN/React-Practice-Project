import { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

function AddUser() {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredUserAge,setEnteredUserAge] = useState('');
  const [isValid, setIsValid] = useState(true)

  function addUserHandler(e) {
    e.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0){
      setIsValid(false);
     return;}
    if(+enteredUserAge < 1) {
      setIsValid(false);
      return;
    }
    setEnteredUsername('');
    setEnteredUserAge('');
    console.log(enteredUserAge, enteredUsername);
  }

  function usernameChangeHandler(e){
    setIsValid(true);
    setEnteredUsername(e.target.value);
  }
  function userAgeChangeHandler(e){
    setIsValid(true);
    setEnteredUserAge(e.target.value);
  }

  return (
    <Card className={classes.input}>
      <form  onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input style={{borderColor : !isValid? "red":""}} type="text" name="" value={enteredUsername} onChange={usernameChangeHandler} />
        <label for="">Age (years) </label>
        <input style={{borderColor : !isValid? "red":""}} type="number" name="" value={enteredUserAge} onChange={userAgeChangeHandler}/>
        <Button type = "submit">AddUser</Button>
      </form>
    </Card>
  );
}

export default AddUser;
