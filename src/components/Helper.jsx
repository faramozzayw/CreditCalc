import React, { Fragment } from "react";

import {
	Modal,
	ModalBackground,
	ModalCard,
	ModalCardHeader,
	ModalCardTitle,
	Delete,
	ModalCardBody,
	Title,
} from "bloomer";

import helper from "./helper.json";


const CustomHelp = ({ title, input, output }) =>  (
	<>
		<Title 
			hasTextColor="dark"
			tag="h5"
			isSize={5}
		>{title}</Title>
		<p>
			Вхідні дані {input.map((item, i) => <i key={i}>{item}{i !== input.length - 1  ? ", " : ""}</i>)}.
		</p>
		<span>Результат:</span>
		<ul>
			{
				output.map((item, i) => <li key={i}>- {item}</li>)
			}
		</ul>
	</>
)

const Helper =  ({ isActive, toggle }) => {
	return (
		<Modal isActive={isActive}>
			<ModalBackground />
			<ModalCard>
				<ModalCardHeader>
					<ModalCardTitle>Коротке пояснення</ModalCardTitle>
					<Delete onClick={toggle} />
				</ModalCardHeader>
				<ModalCardBody hasTextColor="dark">
					{
						helper.map((item, i) => (
							<>
								<CustomHelp {...item} key={i}/>
								{ i !== helper.length - 1 && <hr /> }
							</>
						))
					}
				</ModalCardBody>
			</ModalCard>
		</Modal>
	)
}

export default Helper;