const express = require('express');
const axios = require('axios');
const app = express();

app.use('/', express.static(__dirname + '/public'))

app.get('/events', function(req, res) {
    console.log("nodejs: getting event data.");
    // TODO replace with env variable 
    // var all_events = "http://accountroute-default.koyfman-oc4-f2c6cdc6801be85fd188b09d006f13e3-0000.us-south.containers.appdomain.cloud/loyalty/v1/events"
    var all_events = "http://localhost:9080/loyalty/v1/events"
    axios.get(all_events,{}).then(function(response){
      return res.status(200).send(response.data);
    }).catch(function(err) {
      console.log(err);
      return res.status(500);
    });
  });

  
let PORT = process.env.PORT || 8080
app.listen(PORT, function () {
    console.log("Server started on port: " + PORT)
})
