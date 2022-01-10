import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
//import { getImage, GatsbyImage } from "gatsby-plugin-image"
//import { convertToBgImage } from "gbimage-bridge"

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
    
    const image = data.img.edges.find(
        ({ node }) => node.relativePath === "backgrounds/" + fileName
        ).node;
    if (!image) {
        return null;
    }

    return (
            <BackgroundImage
                sharp={image.childImageSharp.gatsbyImageData.images.src}
                style={{

                    position: `relative`,
                    backgroundPosition:`left`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `cover`,
                    objectFit: `cover`,
                  
                    filter: `blur(12px)`,
                                      
                    height: `150vmax`,
                    minWidth: `100%`
                }}
            />
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