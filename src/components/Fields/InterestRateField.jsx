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

const InterestRateField = ({ ...others }) => {
	const {
		dispatch, 
		interestRateError,
		rawInterestRate
	} = useStoreon(
		"interestRateError",
		"rawInterestRate"
	);

	const onChange = e => {
		dispatch("updateInterestRate", e.target.value);
	}

	const state = interestRateError ? "danger" : "success";

	return (
		<Field>
			<Label isSize="medium" hasTextColor="light">Відсоткова ставка</Label>
			<Control hasIcons>
				<Icon
					className="fa fa-percent"
					isSize="medium"
					isAlign="left"
				/>
				<Input
					onChange={onChange}
					isColor={state}
					value={rawInterestRate}
					isSize="medium"
					type="text"
					placeholder='Введіть відсоткову ставку'
					required
				/>
			</Control>
			{ interestRateError && <Help isColor='danger'>Incorrect value!</Help> }
		</Field>
	)
}

export default InterestRateField;