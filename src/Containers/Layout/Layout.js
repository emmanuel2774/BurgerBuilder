import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import classes from './Layout.module.css'

const Layout = (props) => {
  return (
    <div className={classes.LayoutContainer}>
        <Navigation/>
        {props.children}
    </div>
  )
}

export default Layout