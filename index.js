'use strict';

const dgram = require('dgram');
const { WebSocketServer } = require('ws');

const server = new WebSocketServer({
    port: 3000
});

server.on('connection', (c) => {
    c.on('message', (m) => {
        const parsed = JSON.parse(m);
        const data = Buffer.from(parsed.data, 'base64');
        const client = dgram.createSocket('udp4');
        client.send(
            data, 0, data.byteLength,
            parsed.port, parsed.host,
            () => client.close());
    });
});

