import { capitalize } from "./../utils/fn";

const checkRawValue = rawValue => {
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

const generateReducerCallback = (fieldName) => {
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

const generateDispatchListener = fieldName => {
	const h = "update" + capitalize(fieldName)
	
	return [h, generateReducerCallback(fieldName)];
}

const fields = [
	"interestRate",
	"loadTerm",
	"payoutAmount",
];

const inputStore = store => {
	const initialState = {
		rawInterestRate: "",
		rawLoadTerm: "",
		rawPayoutAmount: "",

		interestRate: 0,
		loadTerm: 0,
		payoutAmount: 0,

		interestRateError: false,
		loadTermError: false,
		payoutAmountError: false,
	}

	store.on("@init", () => ({ ...initialState }));

	fields.map(fieldName => store.on(...generateDispatchListener(fieldName)))

	store.on("reset", () => ({ ...initialState }));
}

export default inputStore;