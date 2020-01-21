// getEvents('dev/events.json', function (data) {
//   console.log(data);
// })

fetch('dev/events.json')
  .then(response => response.body.json())
  .then(json => console.log(json))
