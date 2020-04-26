import React from 'react';

import { useStoreon } from "storeon/react";

import CalcField from "./CalcField";

const LoanTermField = ({ ...others }) => {
	const {
		dispatch, 
		loadTermError,
		rawLoadTerm,
	} = useStoreon(
		"loadTermError",
		"rawLoadTerm",
	);

	const onChange = e => {
		dispatch("updateLoadTerm", e.target.value);
		dispatch("need calc?");
	}

	return (
		<CalcField
			rawValue={rawLoadTerm}
			valueError={loadTermError}
			icon="fa fa-money"
			labelText="Термін кредитування"
			inputText="Введіть термін кредитування"
			onChange={onChange}
		/>
	)
}

export default LoanTermField;