import React, { useState } from 'react'
import { statusOptions } from '../constants';
import { useMutation } from '@tanstack/react-query';
import { setStatus } from '../queries/users';

export default function StatusDropdown(props) {
	const { status, id } = props;
	const [statusValue, setStatusValue] = useState(status)
	const { mutateAsync } = useMutation({ mutationFn: setStatus });

	const handleChange = (e, o) => {
		const value = e.target.value;
		mutateAsync({ id, status: value })
		setStatusValue(value)
	}
	return (
		<select
			value={statusValue}
			onChange={handleChange}
			options={statusOptions}
		>
			{statusOptions.map((e) => (
				<option value={e.value}>{e.label}</option>
			))}
		</select>)
}
