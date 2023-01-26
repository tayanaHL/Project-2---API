// Import Dependencies
const express = require('express')
const Properties = require('../models/properties')

// Create router
const router = express.Router()

// Router Middleware
// Authorization middleware
// If you have some resources that should be accessible to everyone regardless of loggedIn status, this middleware can be moved, commented out, or deleted. 
router.use((req, res, next) => {
	// checking the loggedIn boolean of our session
	if (req.session.loggedIn) {
		// if they're logged in, go to the next thing(thats the controller)
		next()
	} else {
		// if they're not logged in, send them to the login page
		res.redirect('/auth/login')
	}
})

// Routes

// index ALL
router.get('/', (req, res) => {
	Properties.find({})
		.then(properties => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			
			res.render('properties/index', { properties, username, loggedIn })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// index that shows only the user's examples
router.get('/mine', (req, res) => {
    // destructure user info from req.session
    const { username, userId, loggedIn } = req.session
	Properties.find({ owner: userId })
		.then(properties => {
			res.render('examples/index', { properties, username, loggedIn })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// new route -> GET route that renders our page with the form
router.get('/new', (req, res) => {
	const { username, userId, loggedIn } = req.session
	res.render('properties/new', { username, loggedIn })
})

// create -> POST route that actually calls the db and makes a new document
router.post('/', (req, res) => {
	req.body.ready = req.body.ready === 'on' ? true : false

	req.body.owner = req.session.userId
	Properties.create(req.body)
		.then(properties => {
			console.log('this was returned from create', properties)
			res.redirect('/properties')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// edit route -> GET that takes us to the edit form view
router.get('/:id/edit', (req, res) => {
	// we need to get the id
	const propertyId = req.params.id
	Properties.findById(propertyId)
		.then(property => {
			res.render('proper/edit', { property })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// update route
router.put('/:id', (req, res) => {
	const propertyId = req.params.id
	req.body.ready = req.body.ready === 'on' ? true : false

	Property.findByIdAndUpdate(propertyId, req.body, { new: true })
		.then(property => {
			res.redirect(`/properties/${property.id}`)
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// show route
router.get('/:id', (req, res) => {
	const propertyId = req.params.id
	Properties.findById(propertyId)
		.then(property => {
            const {username, loggedIn, userId} = req.session
			res.render('property/show', { property, username, loggedIn, userId })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// delete route
router.delete('/:id', (req, res) => {
	const propertyId = req.params.id
	Property.findByIdAndRemove(propertyId)
		.then(property => {
			res.redirect('/properties')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// Export the Router
module.exports = router
