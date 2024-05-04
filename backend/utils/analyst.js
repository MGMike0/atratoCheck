const analysts = ['Ash Ketchum', 'Misty', 'Dr Oak', 'Brock', 'Jessie', 'James']

const selectAnalyst = () => {
	const i = Math.floor(analysts.length * Math.random())

	return analysts[i]

}

module.exports = { selectAnalyst }