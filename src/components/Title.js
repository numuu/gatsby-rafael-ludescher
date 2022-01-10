import React from 'react'

import * as titleStyles from './_Title.module.scss'

const Title = (props) => {
    return (
        <header className={titleStyles.titlecontainer}>
          <h1 className={titleStyles.title}>{props.children}</h1> 
        </header>
    )
}

export default Title;

