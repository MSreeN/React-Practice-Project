import { useState, Fragment, useRef } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "../Helpers/Wrapper";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredUserAge, setEnteredUserAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState();

  function addUserHandler(e) {
    e.preventDefault();
    const enteredNameRef = nameInputRef.current.value;
    const enteredAgeRef = ageInputRef.current.value
    if (
      // enteredUsername.trim().length === 0 ||
      // enteredUserAge.trim().length === 0
      enteredNameRef.trim().length === 0 ||
      enteredAgeRef.trim().length === 0
    ) {
      setIsValid(false);
      setError({
        title: "Invalid username",
        message: "Please enter valid name and age (non-empty fields)",
      });
      return;
    }
    // if (+enteredUserAge < 1) {
      if (+enteredNameRef < 1) {
      setIsValid(false);
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (age > 0)",
      });
      return;
    }
    // props.onAddUser(enteredUsername, enteredUserAge);
    props.onAddUser(enteredNameRef, enteredAgeRef);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUsername("");
    // setEnteredUserAge("");
    // console.log(enteredUserAge, enteredUsername);
  }

  // function usernameChangeHandler(e) {
  //   setIsValid(true);
  //   setEnteredUsername(e.target.value);
  // }
  // function userAgeChangeHandler(e) {
  //   setIsValid(true);
  //   setEnteredUserAge(e.target.value);
  // }

  function errorHandler() {
    setError();
  }

  return (
    <Fragment>
      {error && (
        <ErrorModal
          closeModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            style={{ borderColor: !isValid ? "red" : "" }}
            type="text"
            name=""
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref = {nameInputRef}
          />
          <label for="">Age (years) </label>
          <input
            style={{ borderColor: !isValid ? "red" : "" }}
            type="number"
            name=""
            // value={enteredUserAge}
            // onChange={userAgeChangeHandler}
            ref = {ageInputRef}
          />
          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </Fragment>
  );
}

export default AddUser;
