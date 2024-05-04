import axios from 'axios'
import { API_URl } from '../constants'

export const fetchUsers = async () => {
	const data = await axios.get(`${API_URl}/users`)

	return data.data
}

export const createUser = async (userInfo) => {
	const response = await axios.post(`${API_URl}/users`,
		userInfo
	);

	return response;
};


export const setStatus = async ({ id, status }) => {
	console.log('algo?', id, status)
	const response = await axios.put(`${API_URl}/users/${id}`,
		{ status }
	);

	return response
}


export const deleteUser = async (id, status) => {
	const response = await axios.delete(`${API_URl}/users/${id}`,
		{ id, status }
	);

	return response
}