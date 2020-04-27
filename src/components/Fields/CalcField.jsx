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

const CalcField = ({ value, rawValue, valueError, icon, labelText, inputText, onChange, isCalcValue }) => {
	const {
		dispatch
	} = useStoreon(null);

	const state = valueError ? "danger" : "success";
	const finalState = rawValue === "" ? "" : state;
	
	return (
		<Field>
			<Label
				isSize="medium"
				hasTextColor="light"
			>{labelText}</Label>
			<Control 
				hasIcons
				isLoading={isCalcValue}
			>
				<Icon
					className={icon}
					isSize="medium"
					isAlign="left"
				/>
				<Input
					onChange={onChange}
					isActive={isCalcValue}
					isColor={isCalcValue ? "warning" : finalState}
					// => value={isCalcValue ? value : rawValue}
					value={rawValue}
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