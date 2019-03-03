const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {

    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in get:', error);
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {

    pool.query('INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);', [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then(() => {
            res.send(201)
        }).catch((error => {
            res.sendStatus(500);
            console.log('error in post:', error);
        }))
})

module.exports = router;