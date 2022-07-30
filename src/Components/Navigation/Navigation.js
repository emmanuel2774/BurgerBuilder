import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'
import NavItem from './NavItem/NavItem'

const Navigation = () => {
  return (
    <div className={classes.NavItem}>
        <ul>
            <NavItem link='/'>Home</NavItem>
            <NavItem link='/about'>About</NavItem>
            <NavItem link='/orders'>Orders</NavItem>
        </ul>
    </div>
   
  )
}

export default Navigation