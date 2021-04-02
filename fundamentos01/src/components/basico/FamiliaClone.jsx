import React, {cloneElement} from 'react';

export default props => {

    return(
        <div>
            {/* Para um único elemento filho */}
            {/* {cloneElement(Props.children, {...props})} */}

            {/* Para vários elemtnos filhos */}
            {props.children.map((child) => {
                return cloneElement(child, {...props})
            })}
        </div>
    )
}