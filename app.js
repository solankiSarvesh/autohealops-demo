const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // 🐛 BUG: 'res.sendData' is not a valid Express function (should be res.json)
    res.sendData({ status: "ok", message: "AutoHealOps is live" });
});

app.listen(3000, () => console.log('Server running on 3000'));
