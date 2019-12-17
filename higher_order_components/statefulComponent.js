import React from 'react';

const statefulComponent = (props) => (
    <div className={props.classes}>
        {props.children}
    </div>


)

export default statefulComponent;