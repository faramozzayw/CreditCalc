import { 
	generateDispatchListener, 
	toInitState, 
	generateRawFieldName,
	generateErrorFieldName
} from "./utils";

import { isEmptyString, capitalize } from "./../utils/fn";
import inputConfig from "./inputConfig.json";

const { fields, initialState } = inputConfig;

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
			.filter(item => item === true)
			.length !== 0;

		if(count === needToCalc && !globalError) {
			return console.log("yes");
		}

		return console.log("no");
	});
}

export default inputStore;