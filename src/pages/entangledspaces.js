import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Title from '../components/Title'
import Textbody from '../components/Textbody'

const entangledspaces = () => {
    var bg = 'entangledspaces_background.jpg';
    var directory = 'entangledspaces';
    var logos = ["BKA.png", "Angewandte_black.png", "Angewandte.png", "IBK.png"];
    return (
        <div>
            <Layout fileName = {bg} directory = {directory}>
                <Title>entangled spaces</Title>
                <Textbody originalNames = {logos}>
                <h2><i>entangled spaces</i>, ein virtuelles Raumschauspiel, spannt sich auf einer realen Bewegungsfläche von 6,5 x 5 Metern auf. Einmal eingetaucht in den virtuellen Raum, beginnen sich zunehmend die physischen Grenzen aufzulösen und eine Welt aus verschachtelten Räumen eröffnet sich.
                    </h2>
                  <p>Im realen Raum der Arbeit findet der/die RezipientIn lediglich eine räumliche Abgrenzung sowie eine Virtual-Reality-Brille vor. <i>entangled spaces</i> selbst wird erst durch das Eintreten in die Virtualität produziert, indem sich die Person physisch im realen, zeitgleich verschränkt im virtuellen, Raum bewegt und das Raumschauspiel in ihrer Narration vorantreibt. Der/die RezipientIn geht im Laufe der Handlung von der betrachtenden Person in den Hauptcharakter über und verlässt geschlossen mit diesem die vorgefundene Welt.
                    <br>
                    </br>
                    Die Arbeit wurde 2012/13 entwickelt und damit zwei Jahre bevor VR-Brillen ihre Marktreife erhalten sollten. Dies überhaupt in Erwägung zu ziehen, wurde durch eine, zur damaligen Zeit bereits breit aufgestellte OpenSource-Community in digitalen Foren ermöglicht, die Wissen zu Soft- und Hardware auf ihren Kanälen teilten. Sie trugen und tragen damit einen essentiellen Teil zur Demokratisierung von Wissen bei.
                  </p>
                </Textbody>
            </Layout>
        </div>
    )
}

export default entangledspaces