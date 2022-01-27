import React from 'react'

import Menu from './Menu'
import * as footerStyles from './_Footer.module.scss'

const Footer = (props) => {
    if(props.styleBool === true){
        console.log('styleBool (true): ' + props.styleBool);
        return (
            <footer className={footerStyles.indexFooter}>
                <Menu/>
                <p className = {footerStyles.contactFooter}><a href = "mailto:rafael-ludescher@numu.at"> rafael-ludescher@numu.at</a> &copy; 2022 rafael ludescher</p>
                
            </footer>
        )
    } else {
        console.log('styleBool (false): ' + props.styleBool);
        return(
            <footer className={footerStyles.footer}>
                <Menu/>
                <p className = {footerStyles.contactFooter}><a href = "mailto:rafael-ludescher@numu.at"> rafael-ludescher@numu.at</a> &copy; 2022 rafael ludescher</p>
            
            </footer>
        )
    }
    
    
}

export default Footer