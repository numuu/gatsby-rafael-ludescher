import React from 'react'

import Button from './Button'

import * as menuStyles from './_Menu.module.scss'

const Menu = () => {
    return (
        <div className={menuStyles.menu}>
            <Button to='/entangledspaces'>entangled spaces</Button>
            <Button to='/um1plusn'>um1plusn</Button>
            <Button to='/meerorme'>meerorme</Button>
            <Button to='/outlines'>outlines</Button>
            <Button to='/unfoldingseries'>(un(folding series</Button>
            <Button to='/dom_ino'>dom_ino</Button>
            <Button to='/about'>about</Button>
        </div>
    )
}

export default Menu