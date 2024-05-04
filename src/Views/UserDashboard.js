import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchUsers } from '../queries/users'
import Card from '../components/Card'
import CreateNewUserModal from '../components/CreateNewUserModal'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`

export default function UserDashboard() {
	const [isOpen, setIsOpen] = React.useState(false);

	const { isPending, data } = useQuery({
		queryKey: ['users'],
		queryFn: fetchUsers,
	})

	if (isPending) {
		return <div> Loading </div>
	}
	return (<>
		<CreateNewUserModal isOpen={isOpen} handleClose={setIsOpen} />
		<Wrapper>
			{data.map((user, index) => (
				<Card user={user} key={index} />
			))
			}
		</Wrapper>
	</>
	)
}
