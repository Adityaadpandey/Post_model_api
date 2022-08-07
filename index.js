const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const CORS = require('cors');
// const connectToMongo = require('./db');

const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
// connectToMongo();
app.use(CORS())


app.get('/', (req, res) => {
    res.send('Hello World');
});

// app.use('/api/post', require('./routes/post'))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})