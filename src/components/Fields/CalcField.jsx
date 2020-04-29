import React, { useState } from 'react';

import {
	Field,
	Label,
	Control,
	Input,
	Icon,
	Help,
} from "bloomer";

const CalcField = ({ value, rawValue, valueError, icon, labelText, inputText, onChange, isCalcValue }) => {
	const [onFocus, toggleFocus] = useState(false);
	
	const state = valueError ? "danger" : "success";
	const finalState = rawValue === "" ? "" : state;

	const finalValue = value ? value : "";

	return (
		<Field>
			<Label
				isSize="medium"
				hasTextColor="light"
			>{labelText}</Label>
			<Control 
				hasIcons
			>
				<Icon
					className={icon ?? "fa fa-info"}
					isSize="medium"
					isAlign="left"
				/>
				<Input
					onFocus={() => toggleFocus(true)} 
					onBlur={() => toggleFocus(false)}
					onChange={onChange}
					isColor={isCalcValue && !onFocus ? "warning" : finalState}
					value={isCalcValue && !onFocus ? finalValue : rawValue}
					isSize="medium"
					type="text"
					placeholder={inputText}
					required
				/>
			</Control>
			{ valueError && <Help isColor="danger">Некорректне значення!</Help> }
			{ isCalcValue && <Help isColor="success">Це значення було автоматично обчислено</Help> }
		</Field>
	)
}

export default CalcField;
