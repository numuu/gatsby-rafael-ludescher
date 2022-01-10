import React from 'react'

/*
import {graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'*/

import Footer from './Footer'
import layoutStyles from './Layout.module.scss'

import StyledBackgroundSection from './StyledBackgroundSection'

const IndexLayout = (props) => {
    return (
        <div>
            <div>
                <Title>rafael ludescher</Title>
                <Footer/>
            </div>
            <StyledBackgroundSection fileName = {props.fileName} />
        </div>
    )
}



export default IndexLayout