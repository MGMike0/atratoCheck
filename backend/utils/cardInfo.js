
const axios = require('axios')

const getCCInformation = async () => {
	const data = await axios.get('https://randommer.io/api/Card', { headers: { 'X-Api-Key': process.env.SECRET_KEY } })
	const { date, cardNumber, type, cvv, pin } = data.data
	console.log({data: data.data})
	return { expiration: date, type, cvv, pin, number: cardNumber }
}

module.exports = { getCCInformation }