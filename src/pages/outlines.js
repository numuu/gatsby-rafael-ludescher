import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Textbody from '../components/Textbody'

import "../styles/global.scss"

const outlines = () => {
    var bg = 'outlines_background.jpg';
    var directory = 'outlines';
    var title = 'outlines';
    var logos = ["BKA.png", "Angewandte_black.png", "IBK.png", "LandTirol.png"];
    return (
        <div key={directory + "_"}>
            <Layout fileName={bg} title={title} directory={directory} keyprop={directory + "_Layout"}>
                <Textbody originalNames = {logos} keyprop={directory + "_Textbody"}>
                    <p>Der experimentelle Kurzfilm Outlines zweckentfremdet die 3DTechnologie, um damit die Linearität des Filmgeschehens aufzubrechen und die Möglichkeiten der dreidimensionalen Darstellung zu erforschen. Aufgrund einer Manipulation von aktiven
                  3D-Shutter-Brillen wird es möglich, mehrere Filme gleichzeitig
                  zu projizieren. Dabei spielen Simultanität, Interferenzen, Bildrhythmen, verknüpfende Soundscapes und Zufälligkeiten eine
                  tragende Rolle.<br>
                  </br>
                  In Zusammenarbeit mit Magdalena Salner und Tom Marsh.
                  </p>
                </Textbody>
            </Layout>
        </div>
    )
}

export default outlines