import React from 'react';

const StatefulComponent = (props) => (
    <div className={props.classes}>
        {props.children}
    </div>


)

export default StatefulComponent;