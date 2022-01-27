//TO DO:
//Vimeo videos into lightbox
//Logos Query / Textfooter
//bootstrap bzw css


import React from "react"

import Title from '../components/Title'
import Footer from '../components/Footer'
import StyledBackgroundSection from '../components/StyledBackgroundSection'

import * as layoutStyles from '../components/_Layout.module.scss'
import "../styles/global.scss"

const IndexPage = () => {
    var bg = 'index_background.jpg';
    return (
        <div>
            <div className={layoutStyles.wrapper}>
                <div className={layoutStyles.indexcontent}>
                    <Title>rafael ludescher</Title>
                    <Footer styleBool = {true}/>
                </div>
            </div>
            <StyledBackgroundSection fileName = {bg} />
        </div>
    )
}

export default IndexPage