import { 
	isEmptyString,
	generateDispatchListener, 
	toInitState, 
	generateRawFieldName,
	generateErrorFieldName
} from "./../utils/fn";
import { calcFn } from "./../utils/calcFn";

import InputConfig, { fields, targetField, targetFieldWithDep, initialState } from "./inputConfig.json";

import {
	needCalc,
	reset
} from "./inputActions";

const resetState = toInitState(initialState);

const inputStore = store => {
	store.on("@init", resetState);
	store.on(reset, resetState);

	fields.map(fieldName => store.on(...generateDispatchListener(fieldName)));

	store.on(needCalc, state => {
		const needToCalc = InputConfig.needToCalcMarker ?? targetField.length - 1;

		const count = fields
			.map(item => Number(!isEmptyString(state[generateRawFieldName(item)])))
			.reduce((p, c) => p + c);

		const globalError = fields
			.map(item => state[generateErrorFieldName(item)])
			.filter(item => item)
			.length !== 0;

		if(count === needToCalc && !globalError) {
			const calcValues = targetFieldWithDep.filter(subarr => {
				const target = subarr[0];
				
				return isEmptyString(state[generateRawFieldName(target)])
			}).flat();

			return {
				...state,
				globalError,
				calcValues: calcValues[1],
				...calcFn[calcValues[0]]({...state}),
			}
		}
		
		return {
			...state,
			globalError,
			calcValues: [],
		}
	});
}

export default inputStore;