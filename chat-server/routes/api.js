const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

const pusher = new Pusher({
    appId: '644975',
    key: '73b94b7fcdea15ec5ad5',
    secret: 'f3f8bb83f07e1330ed99',
    cluster: 'eu',
    encrypted: true
});

router.post('/pusher/auth', (req, res) => {
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const auth = pusher.authenticate(socketId, channel);
    res.send(auth);
});

module.exports = router;