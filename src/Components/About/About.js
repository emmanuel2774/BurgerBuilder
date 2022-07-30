import React from 'react'
import Layout from '../../Containers/Layout/Layout'
import classes from './About.module.css'
import SpongeBob from '../../assets/images/spongebob.png'

const About = () => {
  return (
    <Layout>
        <div className={classes.aboutContainer}>
            Not much to say, our only interest is to take spongebob out of business
        </div>
        <div className={classes.spongeBobContainer}>
            <img src={SpongeBob} />
        </div>
    </Layout>
  )
}

export default About