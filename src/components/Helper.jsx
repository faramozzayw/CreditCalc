import React from "react";

import {
	Modal,
	ModalBackground,
	ModalContent,
	ModalClose,

	ModalCard,
	ModalCardHeader,
	ModalCardTitle,
	Delete,
	ModalCardBody,
	Title,
} from "bloomer";

const Helper =  ({ isActive, toggle }) => {
	return (
		<Modal isActive={isActive}>
			<ModalBackground />
			<ModalCard>
				<ModalCardHeader>
					<ModalCardTitle>Пояснення </ModalCardTitle>
					<Delete onClick={toggle} />
				</ModalCardHeader>
				<ModalCardBody hasTextColor="dark">
					<Title 
						hasTextColor="dark"
						tag="h5"
						isSize={5}
					>Если надо найти суму выплат:</Title>
					<p>
						Вводишь <i>проценты</i>, <i>срок кредитования</i> и <i>ежемесячные выплаты</i>.
					</p>
					Вывод:
					<ul>
						<li>- сума кредита </li>
						<li>- сума выплат </li>
					</ul>

					<hr />

					<Title 
						hasTextColor="dark"
						tag="h5"
						isSize={5}
					>Если надо проценты:</Title>
					<p>
						Вводишь <i>срок</i>, <i>суму кредита</i> и <i>ежемесячные выплаты</i>.
					</p>
					Вывод:
					<ul>
						<li>- проценты </li>
						<li>- сума выплат </li>
					</ul>

					<hr />

					<Title 
						hasTextColor="dark"
						tag="h5"
						isSize={5}
					>Если надо найти срок:</Title>
					<p>
						Вводишь <i>суму кредита</i>, <i>проценты</i> и <i>ежемесячные выплаты</i></p>.
					Вывод:
					<ul>
						<li>- срок </li>
						<li>- сума выплат </li>
					</ul>
				</ModalCardBody>
			</ModalCard>
		</Modal>
	)
}

export default Helper;