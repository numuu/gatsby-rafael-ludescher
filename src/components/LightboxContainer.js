import React from "react"

//https://github.com/treyhuffine/lightbox-react/blob/master/src/lightbox-react.js
//https://reactjsexample.com/lightbox-for-components-or-images-built-for-react/
import Lightbox from "react-image-lightbox"
import 'react-image-lightbox/style.css'
import { GatsbyImage } from "gatsby-plugin-image" 

//import NonStretchedImage from "./nonStretchedImage"

const LightboxContainer = ({
  images,
  selectedImage,
  handleClose,
  handlePrevRequest,
  handleNextRequest,
}) => {
  const array = []

  for(var i = 0; i < images.length - 1; i++){
    array.push(<GatsbyImage image={images[i].node.childImageSharp.gatsbyImageData} alt=""/>)
  }
  
  /*images.forEach(image =>
    array.push(<GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt=""/>)
  )
  */

  return (
    <Lightbox
      enableZoom={false}
      discourageDownloads={true}
      clickOutsideToClose={true}
      imageCaption={getTitle(images[selectedImage].node.childImageSharp.fixed.originalName)}
      mainSrc={toString(array[selectedImage])}
      nextSrc={toString(array[(selectedImage + 1) % array.length])}
      prevSrc={toString(array[(selectedImage + array.length - 1) % images.length])}
      onCloseRequest={handleClose}
      onMovePrevRequest={handlePrevRequest(selectedImage, array.length)}
      onMoveNextRequest={handleNextRequest(selectedImage, array.length)}
    />
  )
}

function getTitle(originalName){
  var author = originalName.split("~");
  author = author[1].split("-");

  var author_fin = [];
  author_fin.push("© ")

  for(var i = 0; i < author.length; i++){
   
    if (i === author.length - 1){
      author[i] = author[i].slice(0,-4);
      console.log("should slice")
      //author[author.length] = author[author.length].substring(0, author[author.length].length - 4);
      //author[i] = parseInt(author[i]);
    }
      //console.log(author[i] + " + i: " + i);
      author_fin.push(author[i]);
      author_fin.push(" ");
  }

  return author_fin;
}

export default LightboxContainer
