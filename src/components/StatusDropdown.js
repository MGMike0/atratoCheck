import React from 'react'
import { statusOptions } from '../constants';

export default function StatusDropdown(props) {
	const { status } = props;
	const handleChange = (v) => {}
	return (
		<select
			value={status}
			onChange={handleChange}
			options={statusOptions}
		>
			{statusOptions.map((e) => (
				<option value={e.value}>{e.label}</option>
			))}
		</select>)
}
