import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Title from '../components/Title'
import Textbody from '../components/Textbody'

const um1plusn = () => {
    var bg = 'um1plusn_background.jpg';
    var directory = 'um1plusn';
    var logos = ["BKA.png", "Angewandte_black.png", "Angewandte.png", "IBK.png"];
    return (
        <div>
            <Layout fileName = {bg} directory = {directory}>
                <Title>Um1plusn</Title>
                <Textbody originalNames = {logos}>
                <h2 id = "teaser">Um1+n ist eine kybernetische Rauminstallation mit zwei skulpturalen, sich bewegenden Apparaturen. Die Apparaturen – präziser
                  deren Kameras – geben ihr erfasstes Bild in Rückkoppelungsschleifen wieder und schreiben dabei den Umraum endlos auf
                  die vor ihnen platzierten Monitore ein.</h2>
                  <p>
                  Die anwesenden Personen können sich frei durch den Raum
                  bewegen und dabei die immerfort pendelnden Systeme – respektive deren „Bildkreationen“ – betrachten.
                  Rückkoppelungen, Apparaturen und deren BetrachterInnen stehen
                  im Zentrum dieser Arbeit. Apparaturen, die ihr „Gesehenes“ bis
                  in die Unendlichkeit wieder verarbeiten sowie Personen, die sich
                  bei Anwesenheit in die Arbeit einschreiben. 

                  Die Arbeit Um1+n deutet schon in ihrem Titel darauf hin, dass
                  sie konzeptuell erweiterbar wäre. Nämlich dahingehend, als dass
                  die nun vorgestellten Apparaturen in ihrer Anzahl flexibel sind.
                  Derselbe Aufbau würde auch mit 3, 4, 5, etc. autonomen Einheiten funktionieren.
                  </p>
                </Textbody>
            </Layout>
        </div>
    )
}

export default um1plusn