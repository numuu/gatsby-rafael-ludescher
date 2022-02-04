//TO DO:
//Vimeo videos into lightbox
//Logos Query / Textfooter
//bootstrap bzw css


import React from "react"

//import Footer from '../components/Footer'
//import StyledBackgroundSection from '../components/StyledBackgroundSection'
import IndexLayout from '../components/IndexLayout'
//import * as layoutStyles from '../components/_Layout.module.scss'
import "../styles/global.scss"

const IndexPage = () => {
    var bg = 'index_background.jpg';
    var title = 'rafael ludescher';
    return (
        <div>
            <IndexLayout fileName={bg} title={title}/>
        </div>
    )
}

export default IndexPage