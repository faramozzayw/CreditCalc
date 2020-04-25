import React from 'react';

import { useStoreon } from "storeon/react";

import { Button } from "bloomer"; 

const ResetButton = () => {
    const { dispatch } = useStoreon();

    const onClick = () => dispatch("reset");
    
    return (
        <Button 
            isColor='danger'
            isOutlined
            onClick={onClick}
        >Reset all data!</Button>
    )
}

export default ResetButton;