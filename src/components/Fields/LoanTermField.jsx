import React from 'react';

import {
	Field,
	Label,
	Control,
	Input,
	Icon,
} from "bloomer";

const LoanTermField = ({ ...others }) => {
	return (
		<Field>
		<Label hasTextColor="light">Термін кредитування</Label>
		<Control hasIcons>
			<Icon
				className="fa fa-money"
				isSize="medium"
				isAlign="left"
			/>
			<Input 
				isSize="medium"
				type="text"
				placeholder='Введіть термін кредитування'
			/>
		</Control>
	</Field>
	)
}

export default LoanTermField;