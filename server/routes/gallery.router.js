const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const queryText = 
    `UPDATE posts
    SET likes = likes + 1
    WHERE "id" = $1;`;
    pool.query(queryText, [galleryId])
    .then((results) => {
        res.sendStatus(200)
    }).catch ((error) => {
        res.sendStatus(500)
    })
    // const galleryId = req.params.id;
    // for (const galleryItem of galleryItems) {
    //     if (galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM posts
                        ORDER BY "id";`
    pool.query(queryText)
    .then((results) => {
        res.send(results.rows)
    }).catch ((error) => {
        res.sendStatus(500)
    })
    // res.send(galleryItems);
}); // END GET Route

// POST router
router.post('/', (req, res) => {
    const queryText = `INSERT INTO posts (path, description)
    VALUES ($1, $2);`;
    pool.query(queryText, [req.body.path, req.body.description])
    .then((results) => {
        res.sendStatus(201)
    }).catch(error => {
        res.sendStatus(500)
    })
})

module.exports = router;