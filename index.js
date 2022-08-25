const express = require('express')
const app = express()
app.listen(3000, () => console.log('Listening at port 3000'))

// body-parser is now a middleware
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const todos = [
]
// Get all todos
app.get('/todos', (req, res) => {
  console.log('Getting todo list.')
  return res.status(200).json({
    data: todos,
    error: null
  })
})

app.post('/todo', (req, res) => {
  console.log('Adding item...')
  try {
    const { id, item, completed } = req.body
    const newTodo = {
      id,
      item,
      completed
    }
    console.log(newTodo)
    todos.push(newTodo)
    console.log(`Added item ${newTodo.id}`)
    return res.status(201).json({
      data: todos,
      error: null
    })
  } catch (error) {
    console.log(error)
    console.log('===============')
    console.log(req.body)
    return res.status(500).json({
      data: null,
      error
    })
  }
})
