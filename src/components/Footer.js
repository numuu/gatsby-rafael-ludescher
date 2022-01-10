import React from 'react'

import Menu from './Menu'
import * as footerStyles from './_Footer.module.scss'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <p className = {footerStyles.contactFooter}><a href = "mailto:rafael-ludescher@numu.at"> rafael-ludescher@numu.at</a> &copy; 2019 rafael ludescher</p>
            <Menu/>
        </footer>
    )
}

export default Footer