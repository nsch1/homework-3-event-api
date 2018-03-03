const Router = require('express').Router
const {Event} = require('../models')

const router = new Router()

router.get('/events', (req, res) => {
  Event.findAll({
    attributes: ['title', 'startDate', 'endDate']
  })
    .then(result => {
      if (!result) {
        res.status(404).json({
          message: "Sorry no future events found."
        })
      }
      else {
        const currentDate = new Date()
        const futureEvents = result.filter(event => {
          +Date.parse(event.startDate) >= +currentDate
        })

        res.json(futureEvents)
      }
    })
    .catch(err => {
      res.status(500).json({
        message: 'Something went wrong!'
      })
    })
})

module.exports = router