const express = require('express')
const server = express()
const cors = require('cors')

const port = 3333

const TaskRoute = require('./routes/TaskRoutes')

server.use(express.json())
server.use(cors())

server.use('/task', TaskRoute)

server.listen(port, () => {
  console.log(`Server is running on: ${port}`)
})
