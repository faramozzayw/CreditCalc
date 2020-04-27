import React from 'react';

import { useStoreon } from "storeon/react";

import CalcField from "./CalcField";

const PayoutAmountField = ({ ...others }) => {
	const {
		dispatch, 
		payoutAmountError,
		rawPayoutAmount,
		calcValue,
		payoutAmount,
	} = useStoreon(
		"payoutAmountError",
		"rawPayoutAmount",
		"calcValue",
		"payoutAmount",
	);

	const onChange = e => {
		dispatch("updatePayoutAmount", e.target.value);
		dispatch("need calc?");
	}

	return (
		<CalcField
			rawValue={rawPayoutAmount}
			valueError={payoutAmountError}
			icon="fa fa-calendar-check-o"
			labelText="Сума виплат"
			inputText="Введіть суму виплат"
			onChange={onChange}
			isCalcValue={calcValue === "payoutAmount"}
			value={payoutAmount}
		/>
	)
}

export default PayoutAmountField;