import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

	background-color: blue;
	color: white;
	height: 30px;
	line-height: 30px;
	text-align: middle;
	padding: 0 7px;
	border-radius: 5px;
	`

export default function StatusDropdown(props) {
	const { status } = props;
	return (
		<Wrapper>{status || 'Unknown'} <i>▼</i></Wrapper>

	)
}
