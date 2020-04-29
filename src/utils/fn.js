export const capitalize = s => {
	if (typeof s !== 'string') {
		return '';
	}
	
	return s.charAt(0).toUpperCase() + s.slice(1);
}

export const isEmptyString = string => {
	if (typeof string !== 'string') {
		return false;
	}

	return string.trim() === "";
}

export const generateRawFieldName = fieldName => `raw${capitalize(fieldName)}`;
export const generateErrorFieldName = fieldName => `${fieldName}Error`;

export const checkRawValue = (rawValue = "") => {
	if(rawValue.trim() === "") {
		return [rawValue, false];
	}

	const rValue = rawValue.replace(/,/gi, ".");

	const value = Number.parseFloat(rValue);

	const valueError = (
		Number.isNaN(value) ||
		!Number.isFinite(value) ||
		(/[^\d.]/gi).test(rValue) ||
		rValue.match(/\./gi)?.length > 1
	);

	return [value, valueError];
}

export const generateReducerCallback = (fieldName = "") => {
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

export const generateDispatchListener = (fieldName = "") => {
	const h = `update${capitalize(fieldName)}`
	
	return [h, generateReducerCallback(fieldName)];
}

export const toInitState = initialState => () =>  ({ ...initialState });