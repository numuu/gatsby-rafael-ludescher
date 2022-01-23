import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Title from '../components/Title'
import Textbody from '../components/Textbody'

const dom_ino = () => {
    var bg = 'domino_background.jpg';
    var directory = 'dom_ino';
    var logos = ["LandVorarlberg.png", "BKA.png"];
    return (
        <div>
            <Layout fileName = {bg} directory = {directory}>
                <Title>Dom_Ino</Title>
                <Textbody originalNames = {logos}>
                    <p> one brick hits another – walls come down and
                    buildings collapse. one hits the other. dissolving
                    its matter until merely images are left. they move
                    and fall, fly and dance. spin and play a marvellous
                    abhorrent mess.
                  </p>
                </Textbody>
            </Layout>
        </div>
    )
}

export default dom_ino