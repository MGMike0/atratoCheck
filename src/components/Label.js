import React from 'react'
import styled from 'styled-components'

const Header = styled.p`
	color: gray;
`

export default function Label(props) {

	const { tag, value } = props
	return (
		<div>
			<Header>{tag}</Header>
			<div>{value || '-'}</div>
		</div>
	)
}
