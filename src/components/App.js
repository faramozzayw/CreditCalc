import React from 'react';
import './App.css';

import {
	Hero,
	HeroHeader,
	HeroBody,
	Container,
	Icon,
	Title,
	Footer,
} from "bloomer";

import fieldConfig from "./Fields/fieldsConfig.json";
import CalcFieldWithState from "./Fields/CalcFieldWithState"

import ResetButton from "./Buttons/ResetButton";

const App = () => {
	return (
		<div className="App">
			<main>
				<Hero isColor="dark" isFullHeight>
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
							<form>
								{
									fieldConfig.map((props, key) => <CalcFieldWithState {...props} key={key}/>)
								}
								<ResetButton />
							</form>
						</Container>
					</HeroBody>
				</Hero>
			</main>
			<Footer id='footer'>
				<p>
					Made with<Icon hasTextColor="danger" className="fa fa-heart"/> 
					by faramo_zayw
				</p>
			</Footer>
		</div>
	);
}

export default App;
