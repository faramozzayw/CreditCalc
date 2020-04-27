import React from 'react';

import { useStoreon } from "storeon/react";

import CalcField from "./CalcField";

const InterestRateField = ({ ...others }) => {
	const {
		dispatch, 
		interestRateError,
		rawInterestRate,
		calcValue
	} = useStoreon(
		"interestRateError",
		"rawInterestRate",
		"calcValue"
	);

	const onChange = e => {
		dispatch("updateInterestRate", e.target.value);
		dispatch("need calc?");
	}


	return (
		<CalcField
			rawValue={rawInterestRate}
			valueError={interestRateError}
			icon="fa fa-percent"
			labelText="Відсоткова ставка"
			inputText="Введіть відсоткову ставку"
			onChange={onChange}
			isCalcValue={calcValue === "interestRate"}
		/>
	)
}

export default InterestRateField;