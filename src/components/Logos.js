import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as textStyles from './_Textbody.module.scss'
//import styled from 'styled-components'

const Logos = ({ originalNames }) => {
    const data = useStaticQuery( 
        graphql`
            query {
                img: 
                allFile(filter: {relativePath: {regex: "/(logos)/"}}) {
                    edges {
                      node {
                        relativePath
                        childImageSharp {
                          fluid(maxHeight: 30) {
                            originalName
                            presentationHeight
                          }
                          gatsbyImageData(layout: FIXED, height: 30)
                        }
                      }
                    }
                }
            }
                  
        `
    );

    console.log(originalNames);
    const images = [];

    for(var i = 0; i < originalNames.length; i++) {
        for ( var j = 0; j < data.img.edges.length; j++){
            if(data.img.edges[j].node.childImageSharp.fluid.originalName === originalNames[i]){
                images.push(data.img.edges[j])
            }
        } 
    }

    if (!images){
        return null;
    }

    console.log("Images 0: " + images[0].node.childImageSharp.fluid.originalName);

    return images.map((image) => (
        <li key={image.node.id}>
            <GatsbyImage
            fluid={image.node.childImageSharp.fluid}

            className={textStyles.logo}
            />
        </li>
    ))    
}

export default Logos


/*
        style={{
            height: `30px`,
            maxWidth: `100px`,
            padding: `0`,
            margin: `0`,
            marginLeft: `5px`
        }}

*/