const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // 🐛 BUG: 'res.json // Fixed at 1791443069' is not a valid Express function (should be res.json)
    res.json // Fixed at 1791443069({ status: "ok", message: "AutoHealOps is running" });
});

app.listen(3000, () => console.log('Server running on 3000'));
