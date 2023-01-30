// Import Dependencies
const express = require('express')
const Comments = require('../models/comments')

// Create router
const router = express.Router()


router.post('/:commentId', (req, res) => {
    const commentId = req.params.propertyId
    if (req.session.loggenIn) {
        req.body.author = req.session.userId
const Comments = req.body
    Property.findById(propertyId)
        .then(comment => {
            //create comment with req body//
            property.comment.push(req.body)
            return comment.save()
        })
        .then(comment => {
            res.status(201).json({ comment: comment })
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    } else {
    res.sendStatus(401)
    }
})
//Delete router//
router.delete('/delete/:propertyID/:commentId', (req, res) => {
    const { propertyId, commentId } = req.params
    Property.findById(propertyId)
    .then(property => {
        const Comments = property.comments.id(commentId)
        console.log('this is the comment to be deleted: \n', Comments )
        if (req.session.loggenIn) {
            if (Comments.author == req.session.userId) {
                Comments.remove()
                property.save()
                    res.sendStatus(204)
            } else {
                res.sendStatus(401)
            }
        }
    })
    .catch(err => {
        console.log(err)
        res.status(400).json(err)
    })
})
module.exports = router