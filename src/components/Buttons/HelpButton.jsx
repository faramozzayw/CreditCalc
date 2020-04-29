import React from 'react';

import { Button } from "bloomer"; 

const HelpButton = ({ toggle }) => {
    return (
        <Button 
            isColor="info"
            isOutlined
            onClick={toggle}
        >Пояснення</Button>
    )
}

export default HelpButton;