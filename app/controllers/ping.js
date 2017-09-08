'use strict';

import express from "express";

const router = express.Router();

router.get('/ping', function (req, res) {
    res.send(200, "pong");
});

export default router;
