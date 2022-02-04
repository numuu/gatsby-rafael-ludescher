import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Textbody from '../components/Textbody'

import "../styles/global.scss"

const unfoldingseries = () => {
    var bg = 'unfoldingseries_background.jpg';
    var directory = 'unfolding series';
    var title = '(un(folding series';
    return (
        <div>
            <Layout fileName = {bg} title={title} directory = {directory}>
                <Textbody>
                    <p><b><i>(un(folding series</i></b> besteht aus einer Reihe an dreidimensionalen 
                    Gipsrahmen, in denen jeweils ein Lentikulardruck eingebettet 
                    ist. Der jeweilige Lentikulardruck bildet dabei das in Falten geworfene Textil ab, 
                    welches eine Ebene dahinter faltenlos aufgespannt ist.
                    Die virtuellen Falten zeigen eine Form, die das reale, glatt 
                    dahinter angebrachte Textil haben könnte. Durch die Perspektive der 
                    betrachtenden Person entfalten diese virtuellen Falten 
                    schließlich eine Körperlichkeit, die dem echten Textil abhanden 
                    gekommen ist.
                  </p>
                </Textbody>
            </Layout>
        </div>
    )
}

export default unfoldingseries