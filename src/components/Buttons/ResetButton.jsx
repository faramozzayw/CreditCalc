import React from 'react';

import { useStoreon } from "storeon/react";

import { Button } from "bloomer"; 

import {
	reset
} from "./../../store/inputActions";

const ResetButton = () => {
    const { dispatch } = useStoreon();
    const onClick = () => dispatch(reset);
    
    return (
        <Button 
            isColor="danger"
            isOutlined
            onClick={onClick}
        >Очистити дані</Button>
    )
}

export default ResetButton;