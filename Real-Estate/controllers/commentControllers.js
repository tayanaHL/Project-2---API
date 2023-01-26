// Import Dependencies
const express = require('express')
const Comments = require('../models/comments')

// Create router
const router = express.Router()


router.post('/:commentId', (req, res) => {
    const commentId = req.params.propertyId
    if (req.session.loggenIn) {
        req.body.author = req.session.userId
    } else {
        res.sendStatus(401)
    }
    Comments.findById(propertyId)
        .then(fruit => {
            //create comment with req body//
            property.comments.push(req.body)
        })
        .then(comments => {
            res.status(201).json({ comments: comments })
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
})

module.export = router