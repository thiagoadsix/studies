const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/todo'

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
})

module.exports = mongoose
