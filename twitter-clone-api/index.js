const express = require('express');
const app = express();
const errorHandler = require('./handlers/error');

const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3000;
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    let err = new Error("Not found!");
    err.status = 404;
    next(err);

});

app.use(errorHandler);




app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});