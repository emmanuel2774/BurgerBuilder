import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavItem.css'

const NavItem = (props) => {
  return (
    <li>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={props.link}>{props.children}</NavLink>
    </li>
  )
}

export default NavItem