import { Fragment } from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick ={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.closeModal}>Okay</Button>
      </footer>
    </Card>
  );
};

export default function ErrorModal(props) {
  return (
    // <div className={classes.backdrop}>
    //   <Card className={classes.modal}>
    //     <header className={classes.header}>
    //       <h2>{props.title}</h2>
    //     </header>
    //     <div className={classes.content}>
    //       <p>{props.message}</p>
    //     </div>
    //     <footer className={classes.actions}>
    //       <Button onClick={props.closeModal}>Okay</Button>
    //     </footer>
    //   </Card>
    // </div>
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick = {props.closeModal} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title ={props.title} message = {props.message} closeModal = {props.closeModal}/>, document.getElementById('modal-root'))}
    </Fragment>
  );
}
