import React from 'react';

import { useStoreon } from "storeon/react";

import {
	Field,
	Label,
	Control,
	Input,
	Icon,
	Help,
} from "bloomer";

const LoanTermField = ({ ...others }) => {
	const {
		dispatch, 
		loadTermError,
		rawLoadTerm,
	} = useStoreon(
		"loadTermError",
		"rawLoadTerm",
	);

	const onChange = e => {
		dispatch("updateLoadTerm", e.target.value);
	}

	const state = loadTermError ? "danger" : "success";

	return (
		<Field>
			<Label isSize="medium" hasTextColor="light">Термін кредитування</Label>
			<Control hasIcons>
				<Icon
					className="fa fa-money"
					isSize="medium"
					isAlign="left"
				/>
				<Input
					onChange={onChange}
					isColor={state}
					value={rawLoadTerm}
					isSize="medium"
					type="text"
					placeholder="Введіть термін кредитування"
					required
				/>
			</Control>
			{ loadTermError && <Help isColor='danger'>Incorrect value!</Help> }
		</Field>
	)
}

export default LoanTermField;