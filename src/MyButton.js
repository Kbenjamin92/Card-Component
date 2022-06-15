import React from "react";

const MyButton = (props) => {
    const myStyles = {
        backgroundColor: 'dodgerblue',
        color: 'white',
        border: '1px solid transparent',
        borderRadius: '5px',
    }
  return (
    <>
        <button onClick={props.onClick} style={myStyles}>
           <p>{props.children}</p>
        </button>
    </>
  )};
export default MyButton;
