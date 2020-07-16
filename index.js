const express = require('express')
const app = express()

app.use(express.json())

const timeStamp = () => {
  var currentdate = new Date();
  var datetime = "API called at: " + currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();
  return datetime
}

app.get('/getRequest', (req, res) => {
  res.status(200).send(timeStamp() + '\nGET Request\nRequest Body contains the text -> ' + req.body.test)
})

app.post('/postRequest', (req, res) => {
  res.status(200).send(timeStamp() + '\nPOST Request\nRequest Body contains the text -> ' + req.body.test)
})

app.use((req, res) => {
  res.status(404).send('API Endpoint\nRoute not found\nTimestamp:' + timeStamp())
})

var port = 3000
app.listen(port, () => {
  console.log(`Server live at port: ${port}`)
})
