import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

//import * as BackgroundStyles from './_StyledBackgroundSection.scss'

//import styled from 'styled-components'

const StyledBackgroundSection = ({ fileName }) => {
    const data = useStaticQuery( 
        graphql`
            query {
                img: 
                allFile(filter: {relativePath: {regex: "/(backgrounds)/"}}) {
                    edges {
                      node {
                        relativePath
                        childImageSharp {
                          gatsbyImageData(layout: FULL_WIDTH)
                        }
                      }
                    }
                }
            }
        `
    );

    console.log(data.img.edges);
    console.log(fileName);
    
    const image = getImage(data.img.edges.find(
        ({ node }) => node.relativePath === "backgrounds/" + fileName
        ).node);
    if (!image) {
        return null;
    }

    const bgImage = convertToBgImage(image);

    return (
            <BackgroundImage
                Tag="section"
                {...bgImage}
                preserveStackingContext
            >
                <div style={{
                    position: `fixed`,
                    height: `100vh`, 
                    width: `100vw`
                }}>
                    <div style={{  
                        position: `absolute`,
                        backgroundPosition:`center`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`,
                        objectFit: `cover`,
                    
                        filter: `blur(5px)`,
                                        
                        height: `150%`,
                        minHeight: `100vh`,
                        minWidth: `100%`}}>
                            <GatsbyImage image={image} alt={""}/>
                        </div>
                    </div>
            </BackgroundImage>
    );
    
}

export default StyledBackgroundSection
/*
                    height: `200vh`,
                    width: `200vw`,
                    filter: `blur(12px)`,
                    backgroundColor: `transparent`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center center`,
                    display: `flex`,
                    alignItems: `center`,

*/