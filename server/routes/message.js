const express = require('express')
const {createMessage, getMessages, deleteMessage} = require("../controllers/message");

const router = express.Router()

router.post('/message', createMessage)
router.get('/messages', getMessages)
router.delete('/message', deleteMessage)

exports.route = router