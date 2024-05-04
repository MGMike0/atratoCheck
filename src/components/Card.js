import React from 'react'
import styled from 'styled-components'
import Label from './Label'
import StatusDropdown from './StatusDropdown'
import CardInfo from './CardInfo'

const Wrapper = styled.div`
 	max-width: 700px;
 	border: 1px solid lightgray;
	border-radius: 4px;
	box-shadow: 2px 2px 2px 1px  lightgray;
	padding: 10px;
	margin: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 20px;
`

const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;
`

const Title = styled.div`
	 > h3{
		 color: #18336b;
			margin: 0;
	 }
`

export default function Card(props) {
	const { user: { id, email, name, status, sLastName, phone, middleName, assignedAnalyst, birthday, cardInfo } } = props
	const fullName = `${name} ${middleName || ''} ${sLastName || ''}`

	return (
		<Wrapper>
			<FlexBox>
				<Title>
					<h3>{fullName}</h3>
					<span>ID: {id}</span>
				</Title>
				<StatusDropdown status={status} />
			</FlexBox>
			<FlexBox>
				<div>
					<Label tag="Mail" value={email} />

					<Label tag="Fecha de Nacimiento" value={birthday} />

					<Label tag="Telefono" value={phone} />

					<Label tag="Analista Asignado" value={assignedAnalyst} />
				</div>
				<CardInfo visible name={fullName} cardInfo={cardInfo}>
					<Label tag="Full Name" value={fullName} />
				</CardInfo>
			</FlexBox>
		</Wrapper>
	)
}
