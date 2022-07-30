import React from 'react'
import { Link } from 'react-router-dom'
import BurgerBuilder from '../../Containers/BurgerBuilder/BurgerBuilder'
import Layout from '../../Containers/Layout/Layout'
import Navigation from '../Navigation/Navigation'
import classes from './Home.module.css'

const Home = () => {
  return (
    <Layout>
       
       <div className={classes.Text}>
        <h2>Welcome  {'\n'}</h2>
        <h2>to Build A Burger</h2>
       </div>
       <div className={classes.buttonContainer} >
            <Link to='/BurgerBuilder'><button onClick className={classes.button}>Get Me Lit!</button></Link>
        </div>
    </Layout>
  )
}

export default Home