import React from 'react';

import {
	Field,
	Label,
	Control,
	Input,
	Icon,
	Help,
} from "bloomer";

const CalcField = ({ value, rawValue, valueError, icon, labelText, inputText, onChange }) => {
	const state = valueError ? "danger" : "success";
	const finalState = rawValue === "" ? "" : state;

	return (
		<Field>
			<Label isSize="medium" hasTextColor="light">{labelText}</Label>
			<Control hasIcons>
				<Icon
					className={icon}
					isSize="medium"
					isAlign="left"
				/>
				<Input
					onChange={onChange}
					isColor={finalState}
					value={rawValue}
					isSize="medium"
					type="text"
					placeholder={inputText}
					required
				/>
			</Control>
			{ valueError && <Help isColor='danger'>Некорректне значення!</Help> }
		</Field>
	)
}

export default CalcField;