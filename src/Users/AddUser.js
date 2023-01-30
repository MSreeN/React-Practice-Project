import Card from "../UI/Card";
import classes from './AddUser.module.css'

function AddUser(){
  function userSubmitHandler(e){
    e.preventDefault();
  }
  return(
    <Card className = {classes.input}>
    <form onSubmit={userSubmitHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" name="" value=""/>
      <label for="">Age (years) </label>
    <input type="submit" name="" value="number"/>
    </form>
    </Card>
  )
}

export default AddUser;