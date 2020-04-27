import { 
	isEmptyString,
	generateDispatchListener, 
	toInitState, 
	generateRawFieldName,
	generateErrorFieldName
} from "./../utils/fn";
import { calcFn } from "./../utils/calcFn";

import { fields, initialState } from "./inputConfig.json";

const resetState = toInitState(initialState);

const inputStore = store => {
	store.on("@init", resetState);
	store.on("reset", resetState);

	fields.map(fieldName => store.on(...generateDispatchListener(fieldName)));

	store.on("need calc?", state => {
		const needToCalc = 2;

		const count = fields
			.map(item => Number(!isEmptyString(state[generateRawFieldName(item)])))
			.reduce((p, c) => p + c);

		const globalError = fields
			.map(item => state[generateErrorFieldName(item)])
			.filter(item => item)
			.length !== 0;

		if(count === needToCalc && !globalError) {
			const filterFn = item => isEmptyString(state[generateRawFieldName(item)])
			const calcValue = fields.filter(filterFn)[0];
			
			return {
				...state,
				calcValue,
				globalError,
				needToCalc: true
			}
		}
		
		return {
			...state,
			calcValue: null,
			globalError,
			needToCalc: false
		}
	});

	store.on("calc", state => {
		let { calcValue } = state;
		console.log(calcValue);
		console.log(calcFn[calcValue]);

		return {
			...state,
			[calcValue]: calcFn[calcValue](),
		}
	});
}

export default inputStore;