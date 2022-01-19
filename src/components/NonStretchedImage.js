import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const NonStretchedImage = props => {
  console.log("props Width " + props.GatsbyImage.width);
  let normalizedProps = props
  if (props.gatsbyImageData.width > props.gatsbyImageData.height){
    if (props.gatsbyImageData && props.gatsbyImageData.width) {
      console.log("VERTICAL");
      normalizedProps = {
        ...props,
        style: {
          ...(props.style || {}),
          //width: "auto",
          // maxHeight: window.innerHeight - 50,
         // maxWidth: props.fluid.presentationWidth,
         
          maxWidth: props.gatsbyImageData.width,
          height: "90%",        
          //maxWidth: props.fluid.presentationWidth,
          margin: "50px auto 0", 
          //maxHeight: window.innerHeight - 100,
          //maxHeight: props.fluid.presentationHeightg
        }
      }
    }
  } else {
    if (props.gatsbyImageData && props.gatsbyImageData.height) {
      console.log("HORIZONTAL");
      normalizedProps = {
        ...props, 
        style: {
          ...(props.style || {}),
          //width: "auto",
          // maxHeight: window.innerHeight - 50,
         // maxWidth: props.fluid.presentationWidth,
         
          //maxHeight: props.fluid.presentatonHeight,
          maxHeight: "90vmin",
          height: "90%",
          maxWidth:"auto",        
          //maxWidth: props.fluid.presentationWidth,
          margin: "auto", 
          //maxHeight: window.innerHeight - 100,
          //maxHeight: props.fluid.presentationHeight
        },
      }
    }
  }

  return <GatsbyImage image = {props.gatsbyImageData} {...normalizedProps}/>
}
export default NonStretchedImage
