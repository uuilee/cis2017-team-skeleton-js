'use strict';

import express from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import ping from "./controllers/ping";

const app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', ping);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.message);
});

module.exports = app;
