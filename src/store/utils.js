import { capitalize } from "./../utils/fn";

export const generateRawFieldName = fieldName => `raw${capitalize(fieldName)}`;
export const generateErrorFieldName = fieldName => `${fieldName}Error`;

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
	const errorKey = generateErrorFieldName(fieldName);
	const rawKey = generateRawFieldName(fieldName);

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