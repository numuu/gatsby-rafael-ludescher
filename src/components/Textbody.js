import React from 'react'

import * as textStyles from './_Textbody.module.scss'
import Logo from './Logos'

const Textbody = (props) => {
    if (props.originalNames !== undefined || 0){
        console.log("props originalNames: " + props.originalNames);
        console.log("props.keyprop: " + props.keyprop);
        return (
            <div className={textStyles.textcontainer} key={props.keyprop + textStyles.textcontainer}>
                <div className={textStyles.textbox} key={props.keyprop + textStyles.textbox}>
                    <div className={textStyles.text}>
                        {props.children}  
                    </div>
                </div>
                
                <div className={textStyles.logos} key={props.keyprop + textStyles.logos}>
                        <div className={textStyles.logosContainer}>
                            <Logo originalNames = {props.originalNames}/>
                        </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={textStyles.textcontainer}>
                <div className={textStyles.text}>
                    {props.children}  
                </div>
            </div>
        )
    }
}

export default Textbody