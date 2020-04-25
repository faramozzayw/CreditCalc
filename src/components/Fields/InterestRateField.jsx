import React from 'react';

import {
	Field,
	Label,
	Control,
	Input,
	Icon,
} from "bloomer";

const InterestRateField = ({ ...others }) => {
	return (
		<Field>
			<Label hasTextColor="light">Відсоткова ставка</Label>
			<Control hasIcons>
				<Icon
					className="fa fa-percent"
					isSize="medium"
					isAlign="left"
				/>
				<Input 
					isSize="medium"
					type="text"
					placeholder='Введіть відсоткову ставку'
				/>
			</Control>
		</Field>
	)
}

export default InterestRateField;