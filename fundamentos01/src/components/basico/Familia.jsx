import React from 'react';

import FamiliaMembro from './MembroFamilia';

export default props => {

    return(
        <div>
            <FamiliaMembro nome="Homer jay" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Marjorie" sobrenome="Bouvier"/>
            <FamiliaMembro nome="Bartholomew JOJO" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Lisa Marie" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Margareth" {...props}/>
        </div>

    )
}