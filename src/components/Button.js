import React from 'react'
import { Link } from 'gatsby'

import * as buttonStyles from './_Button.module.scss'

const Button = (props) => {
    return (
        <div>
            <Link to={props.to} className={buttonStyles.button} activeClassName={buttonStyles.buttonActive}>{props.children}</Link>
        </div>
    )
}

export default Button