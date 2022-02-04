import React from 'react'

import * as titleStyles from './_Title.module.scss'

const Title = (props) => {
    //debugger;
    return (
        <header className={titleStyles.titlecontainer}>
          <h1 className={titleStyles.title}>{props.title}</h1> 
        </header>
    )
}

export default Title;

