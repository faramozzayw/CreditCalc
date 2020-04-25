import React from 'react';

import {
	Field,
	Label,
	Control,
	Input,
	Icon,
} from "bloomer";

const PayoutAmountField = ({ ...others }) => {
    return (
        <Field>
			<Label hasTextColor="light">Сума виплат</Label>
			<Control hasIcons>
				<Icon
					className="fa fa-calendar-check-o"
					isSize="medium"
					isAlign="left"
				/>
				<Input
					isSize="medium"
					type="text"
					placeholder='Введіть суму виплат'
				/>
			</Control>
		</Field>
    )
}

export default PayoutAmountField;