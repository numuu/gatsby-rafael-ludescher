//TO DO:
//Vimeo videos into lightbox
//Logos Query / Textfooter
//bootstrap bzw css


import React from "react"

import Title from '../components/Title'
import Footer from '../components/Footer'
import StyledBackgroundSection from '../components/StyledBackgroundSection'

const IndexPage = () => {
    var bg = 'index_background.jpg';
    return (
        <div>
             <div>
                <Title>rafael ludescher</Title>
                <Footer/>
            </div>
            <StyledBackgroundSection fileName = {bg} />
        </div>
    )
}

export default IndexPage