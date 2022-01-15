import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"

import LightBoxContainer from "./LightboxContainer"
import Thumbnail from './Thumbnail'

import * as LightboxStyles from './_ImageLightbox.module.scss'
  

const GalleryComponent = ({directory}) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)


  const handleOpen = i => e => {
    console.log("Handle opened");
    setShowLightbox(true)
    setSelectedImage(selectedImage)
  }
  const handleClose = () => {
    setShowLightbox(false)
    setSelectedImage(selectedImage)
  }
  const handlePrevRequest = (i, length) => e => {
    setSelectedImage((i - 1 + length) % length)
  }
  const handleNextRequest = (i, length) => e => {
    setSelectedImage((i + 1) % length)
  }

  return (  
    <StaticQuery
      query={graphql`
        query {
          source: 
          allFile(filter: {sourceInstanceName: {regex: "/(images)/"}}) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    originalName
                    presentationHeight
                    presentationWidth
                    src
                  }
                  gatsbyImageData(layout: FIXED, width: 800, quality: 90)
                }
                relativeDirectory
              }
            }
          }
        }
      `}
      


      render={data => {    
       // console.log("before render " + data.source.edges);    
        const images = [];
        
        for ( var i = 0; i < data.source.edges.length; i++){
            console.log("relativeDirectory " + i + ": " + data.source.edges[i].node.relativeDirectory); 
            if(data.source.edges[i].node.relativeDirectory === "img/" + directory){
                images.push(data.source.edges[i])
            }
        } 
        if (!images){
            return null;
        }

        images.sort(compare);

        console.log("directory: " + directory);
        console.log("selected Image: " + selectedImage);
        console.log("images[0]: " + images[0]);
        //console.log("images[0].node.relativeDirectory: " + images[0].node.relativeDirectory);


        //images[selectedImage].childImageSharp.fluid

        return (
            <div className={LightboxStyles.imagecontainer}>
                <Thumbnail images={images} handleOpen={handleOpen} selectedImage={selectedImage}/>
                
                {console.log("Images: " + images[selectedImage] + " selected Image " + selectedImage + " i: " + i + " showLightbox: " + showLightbox)}

                {showLightbox && selectedImage !== null && (
                <LightBoxContainer
                    images={images}
                    handleClose={handleClose}
                    handleNextRequest={handleNextRequest}
                    handlePrevRequest={handlePrevRequest}
                    selectedImage={selectedImage}
                />
                )}
            </div>
        )
      }}
    />
  )
}

function compare( a, b ) {
    if ( a.node.childImageSharp.fluid.originalName < b.node.childImageSharp.fluid.originalName ){
      return -1;
    }
    if ( a.node.childImageSharp.fluid.originalName > b.node.childImageSharp.fluid.originalName ){
      return 1;
    }
    return 0;
}


export default GalleryComponent
