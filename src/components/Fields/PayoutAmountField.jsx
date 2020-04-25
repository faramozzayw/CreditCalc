import React from 'react';

import { useStoreon } from "storeon/react";

import {
	Field,
	Label,
	Control,
	Input,
	Icon,
	Help,
} from "bloomer";

const PayoutAmountField = ({ ...others }) => {
	const {
		dispatch, 
		payoutAmountError
	} = useStoreon(
		"payoutAmountError"
	);

	const onChange = e => {
		dispatch("updatePayoutAmount", e.target.value);
	}

	const state = payoutAmountError ? "danger" : "success";

    return (
        <Field>
			<Label isSize="medium" hasTextColor="light">Сума виплат</Label>
			<Control hasIcons>
				<Icon
					className="fa fa-calendar-check-o"
					isSize="medium"
					isAlign="left"
				/>
				<Input
					onChange={onChange}
					isColor={state}
					isSize="medium"
					type="text"
					placeholder='Введіть суму виплат'
					required
				/>
			</Control>
			{ payoutAmountError && <Help isColor='danger'>Incorrect value!</Help> }
		</Field>
    )
}

export default PayoutAmountField;