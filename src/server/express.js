var express = require('express')
var app = express()

app.use(express.static('../public'))

app.get('/hello', function (req, res) {
  res.json('Hello!')
})

var server = app.listen(8083, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('应用实例，访问地址为http://%s:%s', host, port)
})
