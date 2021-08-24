import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Registro from "./Registro"
import CreateNote from './CreateNote'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-brand" to="/"></Link>
      <div>
        <div>
          <NavLink to="/" exact >
            <imput> Inicio</imput>
          </NavLink>
          <br></br>
          <NavLink to="/login">
            <Registro />
          </NavLink>
          <br></br>
          <NavLink to="/home">
            <CreateNote />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar;