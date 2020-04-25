import { capitalize } from "./../utils/fn";

export const checkRawValue = rawValue => {
	if(rawValue.trim() === "") {
		return [rawValue,false];
	}

	const value = Number.parseFloat(rawValue)
	const valueError = (
		Number.isNaN(value) ||
		!Number.isFinite(value) ||
		(/[^\d,.]/i).test(rawValue)
	);

	return [value, valueError];
}

export const generateReducerCallback = (fieldName) => {
	const errorKey = `${fieldName}Error`;
	const rawKey = `raw${capitalize(fieldName)}`;

	return (state, rawValue) => {
		const [value, valueError] = checkRawValue(rawValue);
		
		return {
			...state,
			[fieldName]: value,
			[errorKey]: valueError,
			[rawKey]: rawValue,
		}
	}
}

export const generateDispatchListener = fieldName => {
	const h = "update" + capitalize(fieldName)
	
	return [h, generateReducerCallback(fieldName)];
}

export const toInitState = initialState => () =>  ({ ...initialState });