import React from 'react';

import { useStoreon } from "storeon/react";

import CalcField from "./CalcField";

import { 
	capitalize,
	generateRawFieldName,
	generateErrorFieldName,
} from "./../../utils/fn";

import { needCalc } from "./../../store/inputActions";

const CalcFieldWithState = ({ fieldname, labelText, inputText, icon }) => {
	if(!fieldname) {
		throw new Error(`prop 'fieldname' not found for component with labelText '${labelText}'`);
	}

	const { dispatch, calcValue } = useStoreon("calcValue");
	
	const raw = generateRawFieldName(fieldname);
	const error = generateErrorFieldName(fieldname);

	const $value = useStoreon(raw, error, fieldname);

	const isCalcValue = calcValue === fieldname;

	const onChange = e => {
		dispatch(`update${capitalize(fieldname)}`, e.target.value);
		dispatch(needCalc);
	}

	isCalcValue && console.log($value[fieldname])

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