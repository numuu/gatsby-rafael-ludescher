import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Title from '../components/Title'
import Textbody from '../components/Textbody'

import "../styles/global.scss"

const unfoldingseries = () => {
    var bg = 'unfoldingseries_background.jpg';
    var directory = 'unfolding series';
    var logos = ["LandVorarlberg.png"];
    return (
        <div>
            <Layout fileName = {bg} directory = {directory}>
                <Title>(un(folding series</Title>
                <Textbody originalNames = {logos}>
                    <p><b><i>(un(folding series</i></b> consists of a series of plaster frames, each
                        of which has a lenticular print embedded in it, with a fabric
                        surface in the background underneath.The lenticular print
                        depicts the fabric with imaginary folds it might have had. Through
                        the perspective of the viewer, the imaginary fabric gains a
                        physicality through the lenticular print that the real one lacks.
                  </p>
                </Textbody>
            </Layout>
        </div>
    )
}

export default unfoldingseries