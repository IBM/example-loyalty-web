

function getEventsClient() {
  console.log("Getting event data.");
  var all_events = "http://localhost:8080/events"
  
  axios.get(all_events,{}).then((response) => {
    console.log("Client: Received data from event service.");
    console.log(response);
    addEvents(response.data);
  }).catch(err => {
    console.log(err);
  });
}

function addEvents(event_list) {
  for (index in event_list) {
    let event = event_list[index]
    addToListOfEvents(event)
  }
}

function addToListOfEvents(event) {
  console.log("Adding event: " + event.eventId);

  // list of event columns
  // | event_id     |   point_value |   event_name |   location |   start_time |   end_time |   description |

  var listBody = document.getElementById('event_list_body')
  let eventRow = document.createElement('tr');
  eventRow.className = "mdc-data-table__row";

  let eventName = document.createElement('td');
  eventName.className = "mdc-data-table__cell";
  eventName.innerHTML = event.eventName;

  let eventLoc = document.createElement('td');
  eventLoc.className = "mdc-data-table__cell";
  eventLoc.innerHTML = event.eventLocation;

  let eventPoints = document.createElement('td');
  eventPoints.className = "mdc-data-table__cell mdc-data-table__cell--numeric";
  eventPoints.innerHTML = event.pointValue;

  let eventDesc = document.createElement('td');
  eventDesc.className = "mdc-data-table__cell";
  eventDesc.innerHTML = event.eventDescription;
  

  eventRow.appendChild(eventName);
  eventRow.appendChild(eventLoc);
  eventRow.appendChild(eventPoints);
  eventRow.appendChild(eventDesc);

  listBody.appendChild(eventRow);
}

