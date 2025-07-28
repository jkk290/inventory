const dotenv = require('dotenv');
const express = require('express');

dotenv.config;

const app = express();
const PORT = process.env.APP_PORT;

app.listen(PORT, () => console.log (`Inventory app listening on port ${PORT}`));

