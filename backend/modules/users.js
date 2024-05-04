const Joi = require('@hapi/joi')
const data = require('../../data/data.json');
const { getCCInformation } = require('../utils/cardInfo');
const { selectAnalyst } = require('../utils/analyst')

const schema = Joi.object({
	email: Joi.string().email().required(),
	name: Joi.string().min(3).required(),
	lastName: Joi.string().optional().allow(''),
	sLastName: Joi.string().optional().allow(''),
	phone: Joi.number().min(6).optional().allow(''),
});

const getUsers = async (req, res) => {
	try {
		res.status(200).json(data);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
}

const addUser = async (req, res) => {
	try {
		const { error } = schema.validate(req.body)
		if (error) {
			return res.status(400).send(error.details[0].message)
		}

		const assignedAnalyst = selectAnalyst()

		const ccInfo = await getCCInformation()

		data.push({ id: data.length + 1, cardInfo: ccInfo, ...req.body, assignedAnalyst })

		return res.status(200).json({ success: true })
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
}

module.exports = { addUser, getUsers }