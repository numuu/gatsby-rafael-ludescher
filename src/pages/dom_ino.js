import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Title from '../components/Title'
import Textbody from '../components/Textbody'

import "../styles/global.scss"

const dom_ino = () => {
    var bg = 'domino_background.jpg';
    var directory = 'dom_ino';
    var logos = ["LandVorarlberg.png", "BKA.png"];
    return (
        <div>
            <Layout fileName = {bg} directory = {directory}>
                <Title>Dom_Ino</Title>
                <Textbody originalNames = {logos}>
                    <p><b><i>Dom_Ino</i></b>, dessen Titel auf das Legespiel sowie auf das Konzept des modernen Architekten Le Corbusier rekurriert, 
                        ist eine VR-Installation, die mit der Fragilität der Digitalität und deren Wechselwirkung mit der Realität spielt. 
                        Als Schnittstelle und Anker zur Wirklichkeit agiert dabei eine Skulptur in der Mitte des Ausstellungsraumes. 
                        Aus einzelnen Modulen, Grundeinheiten bestehend, fügt sie sich wie die Architektur der Arbeit zu einem Ganzen, 
                        um sich gleichsam kritisch befragend wieder zu dekonstruieren. Beim Eintauchen in die VR-Arbeit nehmen die Dinge 
                        schließlich gleich dem Domino-Spiel ihren Lauf und stoßen die Besucher:innen durch die audiovisuelle Partitur. 
                  </p>
                  <p>Konzept und Umsetzung: Rafael Ludescher, Shahab Nedaei<br></br>
                     Sounddesign: Jorge Gómez Elizondo</p>
                  <p><i>&gt;&gt;&gt; </i><a href = "https://vimeo.com/651493566" target="_blank" rel="noopener noreferrer"><i>Trailer</i></a><i> &lt;&lt;&lt;</i></p>
                </Textbody>
            </Layout>
        </div>
    )
}

export default dom_ino