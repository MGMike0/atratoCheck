import React, { useState } from 'react'
import styled from 'styled-components'
import Label from './Label'

const Wrapper = styled.div`
	background: lightgrey;
	width: 249px;
`

const List = styled.div`
	display: flex;
	justify-content: space-between;
`

export default function CardInfo(props) {

	const { visible, name, cardInfo: { cvv, expiration, number, pin } } = props
	const expYear = new Date(expiration).toLocaleDateString('en', { year: '2-digit', month: '2-digit' })

	if (!visible) {
		return <></>
	}
	return (
		<Wrapper>
			<Label tag="Full Name" value={name} />
			<Label tag="Card Number" value={number} />
			<List>
				<Label tag="CVV" value={cvv} />
				<Label tag="PIN" value={pin} />
				<Label tag="EXP" value={expYear} />
			</List>
		</Wrapper>
	)
}
