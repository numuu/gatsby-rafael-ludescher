import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

import Textbody from '../components/Textbody'

import "../styles/global.scss"


const About = () => {  
    var bg = 'about_background.jpg';
    var title = 'about';
    return (
        <div>
            <Layout fileName = {bg} title={title}>
              <Textbody>
                  <p>
                      <b><i>rafael ludescher</i></b> lebt und arbeitet in wien.</p>
                      <p>studium »digitale kunst«, ruth schnell und »transmediale kunst«, brigitte kowanz, universität für angewandte kunst, wien sowie »bildhauerei«, hannes brunner, weißensee kunsthochschule, berlin.</p>
                    <table>
                      <tbody>
                        <tr>
                          <td>September 2019</td>
                          <td></td>  
                          <td>Startstipendium Medienkunst, Bundeskanzleramt Österreich</td>
                        </tr>
                        <tr>
                          <td>November 2018</td>
                          <td><Link to = '/meerorme'><i>me.er.or.me</i></Link></td>  
                          <td>Villa Claudia, Feldkirch</td>
                        </tr>
                        <tr>
                          <td>November 2018</td>
                          <td><Link to = '/um1plusn'><i>Um1+n</i></Link></td> 
                          <td>Essence Angewandte, Wien</td>
                        </tr>
                        <tr>
                          <td>September 2018</td>
                          <td><Link to = '/outlines'><i>outlines expanded</i></Link></td> 
                          <td>Vienna Design Week, Burggasse98, Wien</td>
                        </tr>
                        <tr>
                          <td>Juni 2018</td>
                          <td><Link to = '/um1plusn'><i>Um1+n</i></Link></td> 
                          <td>Anerkennungspreis, Land Vorarlberg</td>
                        </tr>
                        <tr>
                          <td>Juni 2018</td>
                          <td><Link to = '/um1plusn'><i>Um1+n</i></Link></td> 
                          <td>Diplom mit Auszeichnung, »digitale kunst«, Universität für Angewandte Kunst, Wien</td>
                        </tr>
                        <tr>
                          <td>Juni 2017</td>
                          <td><Link to = '/outlines'><i>outlines expanded</i></Link></td> 
                          <td>Essence Angewandte, Wien</td>
                        </tr>
                        <tr>
                          <td>Jänner 2017</td>
                          <td><Link to = '/outlines'><i>outlines expanded</i></Link></td> 
                          <td>BitOrEsc Angewandte, Wien</td>
                        </tr>
                        <tr>
                          <td>Jänner 2016</td>
                          <td><Link to = '/outlines'><i>outlines</i></Link></td> 
                          <td>Medienwerkstatt, Wien</td>
                        </tr>
                        <tr>
                          <td>September 2015</td>
                          <td><Link to = '/outlines'><i>outlines</i></Link></td> 
                          <td>FreiesTheater, Innsbruck</td>
                        </tr>
                        <tr>
                          <td>August 2015</td>
                          <td><Link to = '/entangledspaces'><i>entangled spaces</i></Link></td> 
                          <td>moë, Wien</td>
                        </tr>
                        <tr>
                          <td>Juli, August 2014</td>
                          <td><a href = "https://onlinetheperformance.tumblr.com/" target="_blank" rel="noopener noreferrer"><i>OnLine - The Performance</i></a></td> 
                          <td>Salotto Vienna, Triest; Heart of Noise, Innsbruck; Architekturbiennale, Venedig</td>
                        </tr>
                        <tr>
                          <td>September 2013</td>
                          <td><Link to = "/entangledspaces"><i>entangled spaces</i></Link></td> 
                          <td>FreiesTheater, Innsbruck</td>
                        </tr>
                        
                      </tbody> 
                    </table>
                  
              </Textbody>
            </Layout>
        </div>
    )
}

export default About