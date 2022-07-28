import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={classes.NavItem}>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/Orders'>Orders</NavLink></li>
        </ul>
    </div>
   
  )
}

export default Navigation