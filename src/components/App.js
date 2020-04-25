import React from 'react';
import './App.css';

import {
	Hero,
	HeroHeader,
	HeroBody,
	HeroFooter,
	Container,
	Field,
	Label,
	Control,
	Input,
	Title
} from "bloomer";

const App = () => {
	return (
		<div className="App">
			<main>
				<Hero isColor="success" isFullHeight>
					<HeroHeader>
						<Title
							isSize={4}
							tag="h4"
							style={{
								"padding": "2.5vmin"
							}}
						>Кредитний калькулятор</Title>
					</HeroHeader>
					<HeroBody>
						<Container hasTextAlign='centered'>
							<form >
								<Field>
									<Label hasTextColor="light">Сума виплат</Label>
									<Control>
										<Input
											isSize="medium"
											type="text"
											placeholder='Введіть суму виплат'
										/>
									</Control>
								</Field>
								<Field>
									<Label hasTextColor="light">Відсоткова ставка</Label>
									<Control>
										<Input 
											isSize="medium"
											type="text"
											placeholder='Введіть відсоткову ставку'
										/>
									</Control>
								</Field>
								<Field>
									<Label hasTextColor="light">Термін кредитування</Label>
									<Control>
										<Input 
											isSize="medium"
											type="text"
											placeholder='Введіть термін кредитування'
										/>
									</Control>
								</Field>
							</form>
						</Container>
					</HeroBody>
					<HeroFooter>
						Powered by faramo_zayw
					</HeroFooter>
				</Hero>
			</main>
		</div>
	);
}

export default App;
