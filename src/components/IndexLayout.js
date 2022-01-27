import React from 'react'

/*
import {graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'*/

import Footer from './Footer'
import * as layoutStyles from './_Layout.module.scss'

import StyledBackgroundSection from './StyledBackgroundSection'

const IndexLayout = (props) => {
    return (
        <div>
            <div className={layoutStyles.wrapper}>
                <div className={layoutStyles.content}>
                    <Title>rafael ludescher</Title>
                    <Footer/>
                </div>
            </div>
            <StyledBackgroundSection fileName = {props.fileName} />
        </div>
    )
}



export default IndexLayout