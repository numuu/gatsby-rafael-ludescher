import React from "react"
import PropTypes from "prop-types"
import {GatsbyImage} from "gatsby-plugin-image"


import { withStyles, ButtonBase } from "@material-ui/core"

const style = theme => ({
  previewButton: {
    display: "inline-block",
    background: "transparent",
    border: "none",
    padding: 0,
    margin: 0,
    width: 1000,
    height: "auto",
    borderRadius: 0,

    boxShadow: "0 0 15px -5px rgba(0,0,0,0.3)",
  }
})

const Thumbnail = ({ images, handleOpen, classes, selectedImage }) => {
    return (
          <ButtonBase
            onClick={handleOpen(selectedImage)}
            className={classes.previewButton}
            key={selectedImage}
          >
            {console.log("selected image in Thumbnails: " + selectedImage)}
            {console.log("images in Thumbnails: " + images[selectedImage])}
            {console.log("selected image.node.relativeDirectory in Thumbnails: " + images[selectedImage].node.relativeDirectory)}
            <GatsbyImage
              image={images[selectedImage].node.childImageSharp.gatsbyImageData}
              className={classes.thumbnail}
              key={selectedImage}
              alt=""
            />
          </ButtonBase>
      )
}

Thumbnail.propTypes = {
  classes: PropTypes.object,
  images: PropTypes.array,
}

export default withStyles(style)(Thumbnail)
