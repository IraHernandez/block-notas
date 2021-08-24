import React, { useState } from "react";
import { auth, google } from "../firebase";
import { withRouter } from "react-router-dom";

const SessionGlobal = (props) => {
  const [user, setUser] = useState(null)
  const [displayname, setDisplayName] = useState(null)
  const loginGoogle = () => {
    auth.signInWithPopup(google)
      .then(respuesta => {
        console.log(respuesta.user)
        setUser(respuesta.user)
        setDisplayName(respuesta.user.displayName)
        props.history.push("/home")
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <div className="containerButton">
        {<button onClick={loginGoogle} type="button"> Iniciar Sesion </button>}
        <img src={props.logo} height="30" alt="imglogo"></img>
      </div>
    </>
  )

}

export default withRouter(SessionGlobal);