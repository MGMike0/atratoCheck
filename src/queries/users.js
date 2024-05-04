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
