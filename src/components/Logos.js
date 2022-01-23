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
                          gatsbyImageData(layout: FIXED,  placeholder: BLURRED, height:35)
                          id
                        }
                      }
                    }
                }
            }
                  
        `
    );

    //console.log(originalNames);
    const images = [];

    for(var i = 0; i < originalNames.length; i++) {
        for ( var j = 0; j < data.img.edges.length; j++){
            if(data.img.edges[j].node.relativePath === "logos/" + originalNames[i]){
                images.push(data.img.edges[j])
            }
        } 
    }

    if (!images){
        return null;
    }

    console.log("images: " + images);

    return images.map((image) => (
        <li key={image.node.childImageSharp}>
            <GatsbyImage
            
            image = {image.node.childImageSharp.gatsbyImageData}
            alt={""}
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