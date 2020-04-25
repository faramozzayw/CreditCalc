import { generateDispatchListener, toInitState } from "./utils";

const fields = [
	"interestRate",
	"loadTerm",
	"payoutAmount",
];

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

const resetState = toInitState(initialState);

const inputStore = store => {
	store.on("@init", resetState);
	store.on("reset", resetState);

	fields.map(fieldName => store.on(...generateDispatchListener(fieldName)))
}

export default inputStore;