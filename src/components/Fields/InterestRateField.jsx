import React from 'react';

import { useStoreon } from "storeon/react";

import CalcField from "./CalcField";

const InterestRateField = ({ ...others }) => {
	const {
		dispatch, 
		interestRateError,
		rawInterestRate,
		calcValue,
		interestRate,
	} = useStoreon(
		"interestRateError",
		"rawInterestRate",
		"calcValue",
		"interestRate",
	);

	const isCalcValue = calcValue === "interestRate";

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
			isCalcValue={isCalcValue}
			value={interestRate}
		/>
	)
}

export default InterestRateField;