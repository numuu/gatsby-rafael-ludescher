import React from 'react'

/*
import {graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'*/

import Footer from './Footer'
import Title from './Title'
import * as layoutStyles from './_Layout.module.scss'

import StyledBackgroundSection from './StyledBackgroundSection'

const IndexLayout = (props) => {
    var styleBool = true;
    return (
        <div>
            <div className={layoutStyles.wrapper}>
                <div className={layoutStyles.indexcontent}>
                    <Title title = {props.title} styleBool={styleBool}/>
                    <Footer styleBool={styleBool}/>
                </div>
            </div>
            <StyledBackgroundSection fileName = {props.fileName} />
        </div>
    )
}



export default IndexLayout