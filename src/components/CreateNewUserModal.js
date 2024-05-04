import { Form, Formik } from 'formik';
import React from 'react'
import Modal from 'react-modal'
import styled from 'styled-components';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '../queries/users';

Modal.setAppElement('#root');

const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;
`

const Wrapper = styled.div`
	display: flex;
	gap: 10px;
	flex-direction: column;
	justify-content: space-evenly;
`


const SignupSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	lastName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!'),
	sLastName: Yup.string().min(2, 'Too Short!'),
	phone: Yup.number(),
	email: Yup.string().email('Invalid email').required('Required'),
});

export default function CreateNewUserModal(props) {

	const { isOpen, handleClose } = props

	const queryClient = useQueryClient()

	const clearKeys = () => {
		queryClient.invalidateQueries({ queryKey: ['users'] })
		closeModal()
	}


	function openModal() {
		handleClose(true);
	}

	function closeModal() {
		handleClose(false);
	}

	const { mutateAsync } = useMutation({ mutationFn: createUser, onSuccess: clearKeys });

	return (
		<>
			<button onClick={openModal}>Open Modal</button>
			<Modal
				isOpen={isOpen}
				onRequestClose={closeModal}
				style={{ content: { maxHeight: '500px' } }}
				contentLabel="Example Modal"
			>

				<FlexBox>
					<h2>Create New User</h2>
					<button onClick={closeModal}>x</button>
				</FlexBox>
				<Formik
					initialValues={{}}
					validationSchema={SignupSchema}
					onSubmit={(values, actions) => {
						mutateAsync(values)
					}}
				>
					{() => (
						<Form>
							<Wrapper>
								<TextField name="name" type="text" label="First Name" />
								<TextField name="lastName" type="text" label="Last Name" />
								<TextField name="slastName" type="text" label="Seccond Last Name" />
								<TextField name="email" type="email" label="Email" />
								<TextField name="phone" type="number" label="Phone Number" />

								<button type="submit">Submit</button>
							</Wrapper>
						</Form>
					)}
				</Formik>
			</Modal>
		</>
	);
}

