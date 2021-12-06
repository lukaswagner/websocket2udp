# WebSocket2UDP

Forwards WebSocket packets to UDP. Quick workaround for missing UDP support in browsers.

## Usage

Start proxy:

```bash
npm i
node index.js
```

Send data from browser:

```js
// open connection
const socket = new WebSocket('ws://localhost:3000');
// send your data as base64 encoded blob
const packet = new Uint8Array();
const base64 = window.btoa(String.fromCharCode(...packet));
socket.send(JSON.stringify({
    host: 'localhost',
    port: 6454,
    data: base64
}));
```
