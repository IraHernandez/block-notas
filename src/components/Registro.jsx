import React, { useState } from "react";
import { db, auth } from "../firebase";
import { Link, withRouter } from 'react-router-dom'
import "../App.css";

const FormUser = (props) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  console.log({ email, password });

  const iniciarSesion = async (e) => {
    e.preventDefault();

    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      console.log(res.user);
      await db.collection("registro").doc(res.user.uid);
      props.history.push("/home")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={iniciarSesion}>
      <h1>{"Iniciar Sesion"}</h1>
      <>
        <input
          type="text"
          className="email"
          placeholder="Escribe tu email"
          name="email"
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        <input
          type="text"
          className="password"
          placeholder="Escribe tu password"
          name="password"
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
      </>
      <button
        type="submit"
        className={"registrar"}
        onClick={() => setLogin(!login)}
      >
        Entar
      </button>
      <Link className="registrar" to="/login" > Registrar</Link>
    </form>
  );
};
export default withRouter(FormUser);