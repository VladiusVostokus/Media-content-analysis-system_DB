'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const resDataRoutes = require('./routes/resDataRoutes');
const mentRepRouter = require('./routes/mentRepRoutes');

app.use(express.json());
app.use('/userRoutes', userRoutes);
app.use('/roleRoutes', roleRoutes);
app.use('/resDataRoutes',resDataRoutes);
app.use('/mentRepRoutes',mentRepRouter);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req ,res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
