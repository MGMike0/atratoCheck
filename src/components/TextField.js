import { useField } from 'formik';
import React from 'react'

export const TextField = (props) => {
	const { label } = props
	const [field, meta] = useField(props);

	return (
		<>
			<label>{label}</label>
			<input {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	)
}
