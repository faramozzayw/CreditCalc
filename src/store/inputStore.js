import { 
	isEmptyString,
	generateDispatchListener, 
	toInitState, 
	generateRawFieldName,
	generateErrorFieldName
} from "./../utils/fn";
import { calcFn } from "./../utils/calcFn";

import InputConfig, { fields, targetField, initialState } from "./inputConfig.json";

import {
	needCalc,
	calc,
	reset
} from "./inputActions";

const resetState = toInitState(initialState);

const inputStore = store => {
	store.on("@init", resetState);
	store.on(reset, resetState);

	fields.map(fieldName => store.on(...generateDispatchListener(fieldName)));

	store.on(needCalc, state => {
		const needToCalc = InputConfig.needToCalcMarker ?? targetField.length - 1;

		const count = targetField
			.map(item => Number(!isEmptyString(state[generateRawFieldName(item)])))
			.reduce((p, c) => p + c);

		const globalError = fields
			.map(item => state[generateErrorFieldName(item)])
			.filter(item => item)
			.length !== 0;

		if(count === needToCalc && !globalError) {
			const filterFn = item => isEmptyString(state[generateRawFieldName(item)])

			const calcValue = targetField.filter(filterFn)[0];

			console.log("to calc! " + calcValue);

			return {
				...state,
				calcValue,
				globalError,
				[calcValue]: calcFn[calcValue]({...state}),
			}
		}
		
		return {
			...state,
			calcValue: null,
			globalError,
		}
	});
}

export default inputStore;