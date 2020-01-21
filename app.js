const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/public'))

let PORT = process.env.PORT || 8080
app.listen(PORT, function () {
  console.log("Server started on port: " + PORT)
})
