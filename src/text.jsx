import React from "react"

export default function Form(props){
    return(
      <form onSubmit={props.handleSubmit}>
        <input type="text" onChange = {props.handleChange} className="text-inp"/>
        <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16" id="IconChangeColor"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute" strokeWidth="1.5" stroke="#fff" fill="#ffffff"></path> </svg></button>
      </form>
    );
}