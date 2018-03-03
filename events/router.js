const Router = require('express').Router
const {Event} = require('../models')

const router = new Router()

router.get('/events', (req, res) => {
  Event.findAll({
    attributes: ['title', 'startDate', 'endDate']
  })
    .then(result => {
      if (!result) return res.status(404).json({
        message: "Sorry no future events found."
      })

      const currentDate = new Date()
      const futureEvents = result.filter(event => +Date.parse(event.startDate) >= +currentDate)
      res.json(futureEvents)
    })
    .catch(err => {
      res.status(500).json({
        message: "Something went wrong."
      })
    })
})

router.get('/events/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(result => {
      if (!result) return res.status(404).json({ message: "No event found."})
      res.json(result)
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong!" })
    })
})

router.post('/events', (req, res) => {
  const event = req.body

  Event.create(event)
    .then(entity => {
      res.status(201).json(entity)
    })
    .catch(err => {
      res.status(422).json({ message: err.message })
    })
})

module.exports = router