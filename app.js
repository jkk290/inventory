require('dotenv').config();
const express = require('express');
const itemsRouter = require('./routes/itemsRouter');
const categoriesRouter = require('./routes/categoryRouter');

const app = express();
const PORT = process.env.APP_PORT;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.use('/category', categoriesRouter);
app.use('/', itemsRouter);


app.listen(PORT, () => console.log (`Inventory app listening on port ${PORT}`));

