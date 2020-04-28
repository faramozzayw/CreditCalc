import React from 'react';

import { useStoreon } from "storeon/react";

import CalcField from "./CalcField";

import { 
	capitalize,
	generateRawFieldName,
	generateErrorFieldName,
} from "./../../utils/fn";

const CalcFieldWithState = ({ fieldname, labelText, inputText, icon }) => {
	const { dispatch, calcValue } = useStoreon("calcValue");
	
	const raw = generateRawFieldName(fieldname);
	const error = generateErrorFieldName(fieldname);

	const $value = useStoreon(raw, error, fieldname);

	const isCalcValue = calcValue === fieldname;

	const onChange = e => {
		dispatch(`update${capitalize(fieldname)}`, e.target.value);
		dispatch("need calc?");
	}

	return (
		<CalcField
			rawValue={$value[raw]}
			valueError={$value[error]}
			icon={icon}
			labelText={labelText}
			inputText={inputText}
			onChange={onChange}
			isCalcValue={isCalcValue}
			value={$value[fieldname]}
		/>
	)
}

export default CalcFieldWithState;