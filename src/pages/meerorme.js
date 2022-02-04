import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/Layout'
//import Title from '../components/Title'
import Textbody from '../components/Textbody'

import "../styles/global.scss"

const meerorme = () => {
    var bg = 'meerorme_background.jpg';
    var directory = 'meerorme';
    var title = 'me.er.or.me';
    var logos = ["LandVorarlberg.png"];
    return (
        <div key={directory.toString()}>
            <Layout fileName = {bg} directory = {directory} title = {title} key={directory.toString() + "_layout"}>
                <Textbody originalNames = {logos} directory={directory} key={directory.toString() + "_textbody"}>
                    <p>
                    <b><i>me.er.or.me</i></b> experimentiert mit der De-Konstruktion
                    von Raumerfahrungen: Zwischen zwei Spiegelelementen spannt
                    sich ein Raum auf; darin treffen digitale und reale Unendlichkeiten
                    aufeinander und überlagern sich. Abhängig von der Position der
                    BeobachterIn zu den Spiegelelementen werden das eigene Antlitz,
                    der Umraum und die digitalen Rückkoppelungen subjektiver Teil
                    von <b><i>me.er.or.me</i></b>.
                    </p>
                </Textbody>
            </Layout>
        </div>
    )
}

export default meerorme