import React from 'react';

import { useStoreon } from "storeon/react";

import CalcField from "./CalcField";

const LoanTermField = ({ ...others }) => {
	const {
		dispatch, 
		loanTermError,
		rawLoanTerm,
		calcValue,
		loanTerm,
	} = useStoreon(
		"loanTermError",
		"rawLoanTerm",
		"calcValue",
		"loanTerm",
	);

	const onChange = e => {
		dispatch("updateLoanTerm", e.target.value);
		dispatch("need calc?");
	}

	return (
		<CalcField
			rawValue={rawLoanTerm}
			valueError={loanTermError}
			icon="fa fa-money"
			labelText="Термін кредитування"
			inputText="Введіть термін кредитування"
			onChange={onChange}
			isCalcValue={calcValue === "loanTerm"}
			value={loanTerm}
		/>
	)
}

export default LoanTermField;