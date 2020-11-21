const express = require('express');
const path = require('path');

const server = express();

server.use(express.static(path.join(__dirname, '../app/build')));

server.get('/api', (req, res) => {
    res.json(
        {user: {
            id: 0,
            username: 'wkh'
        }}
    )
})

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/build/index.html'));
})

server.listen(3080, () => console.log('listening to port 3080'));