const {Message} = require("../models/message");

exports.createMessage = async (req, res) => {
    const { text } = req.body;
    try {
        const message = await Message.create({text: text})
        return res.status(200).send({message})
    }catch (e) {
        return res.status(404).send({message: "can't create a message"})
    }
}

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.findAll()
        return res.status(200).send({messages})
    }catch (e) {
        return res.status(404).send({message: "can't get a messages"})
    }
}

exports.deleteMessage = async (req, res) => {
    try {
        await Message.destroy({where: {id: req.query.id}})
        return res.status(200).send({message: "delete message completed"})
    }catch (e) {
        return res.status(404).send({message: "can't delete a message"})
    }
}
