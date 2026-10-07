const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // 🐛 BUG: 'res.json // Fixed at 1791394599' is not a valid Express function (should be res.json)
    res.json // Fixed at 1791394599({ status: "ok", message: "AutoHealOps is running" });
});

app.listen(3000, () => console.log('Server running on 3000'));
