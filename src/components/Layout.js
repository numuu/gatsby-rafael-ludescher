import React from 'react'
import Footer from './Footer'
import * as layoutStyles from './_Layout.module.scss'
import StyledBackgroundSection from './StyledBackgroundSection'
import ImageLightBox from './ImageLightbox'
import Title from './Title'
//import NonStretchedImage from './NonStretchedImage'

const Layout = (props) => {
    if (props.directory !== undefined || 0){
        console.log("Directory 1: " + props.directory);
        return (
            <div>
               <div className = {layoutStyles.wrapper}>
                   <div className = {layoutStyles.content}>
                        <Title title = {props.title}/>
                        <ImageLightBox directory = {props.directory}/>
                        {props.children}
                       <Footer/>
                   </div> 
               </div>
               <StyledBackgroundSection fileName = {props.fileName} />
           </div>
       )
    } else { 
        return (
            <div>
               <div className = {layoutStyles.wrapper}>
                   <div className = {layoutStyles.content}>
                       <Title title = {props.title}/>
                       {props.children}
                       <Footer/>
                   </div> 
               </div>
               <StyledBackgroundSection fileName = {props.fileName} />
           </div>
       )
    } 
}



export default Layout