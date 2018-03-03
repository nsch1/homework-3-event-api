const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4001

app.use(cors())

app.listen(port, () => {
  console.log(`Express listening on port: ${port}`)
})