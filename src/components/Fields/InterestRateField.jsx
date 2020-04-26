import React from 'react';

import { useStoreon } from "storeon/react";

import CalcField from "./CalcField";

const InterestRateField = ({ ...others }) => {
	const {
		dispatch, 
		interestRateError,
		rawInterestRate
	} = useStoreon(
		"interestRateError",
		"rawInterestRate"
	);

	const onChange = e => dispatch("updateInterestRate", e.target.value);


	return (
		<CalcField
			rawValue={rawInterestRate}
			valueError={interestRateError}
			icon="fa fa-percent"
			labelText="Відсоткова ставка"
			inputText="Введіть відсоткову ставку"
			onChange={onChange}
		/>
	)
}

export default InterestRateField;