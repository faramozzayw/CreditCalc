const checkRawValue = rawValue => {
	if(rawValue.trim() === "") {
		return [rawValue,false];
	}

	const value = Number.parseFloat(rawValue)
	const valueError = Number.isNaN(value) || !Number.isFinite(value);
	return [value, valueError];
}

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

	store.on("updateInterestRate", (state, rawInterestRate) => {
		const [interestRate, interestRateError] = checkRawValue(rawInterestRate);

		return {
			state,
			interestRate,
			interestRateError,
			rawInterestRate,
		}
	});

	store.on("updateLoadTerm", (state, rawLoadTerm) => {
		const [loadTerm, loadTermError] = checkRawValue(rawLoadTerm);

		return {
			state,
			loadTerm,
			loadTermError,
		}
	});

	store.on("updatePayoutAmount", (state, rawPayoutAmount) => {
		const [payoutAmount, payoutAmountError] = checkRawValue(rawPayoutAmount);

		return {
			state,
			payoutAmount,
			payoutAmountError,
		}
	});

	store.on("reset", () => ({ ...initialState }));
}

export default inputStore;