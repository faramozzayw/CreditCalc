import React, { useEffect } from 'react';

import { useStoreon } from "storeon/react";

import {
	Field,
	Label,
	Control,
	Input,
	Icon,
	Help,
} from "bloomer";

import { calc } from "./../../store/inputActions";


const CalcField = ({ value, rawValue, valueError, icon, labelText, inputText, onChange, isCalcValue }) => {
	const {	dispatch } = useStoreon();
	
	useEffect(() => {
		if(isCalcValue && value === null) {
			dispatch(calc);
		}
	}, [isCalcValue, dispatch]);

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
					onChange={onChange}
					isActive={isCalcValue}
					isColor={isCalcValue ? "warning" : finalState}
					value={isCalcValue ? finalValue : rawValue}
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