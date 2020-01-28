var listOfEventsDiv = document.getElementById('list-of-events')

getEvents(function (events) {
  for (index in events) {
    let event = events[index]
    addToListOfEvents(event)
  }
})


function addToListOfEvents(event) {
  let eventLi = document.createElement('li')
  let span = document.createElement('span')
  let eventNameSpan = document.createElement('span')
  let eventDescriptionSpan = document.createElement('span')
  eventLi.className = "mdc-list-item"
  span.className = "mdc-list-item__text"
  eventNameSpan.className = "mdc-list-item__primary-text"
  eventDescriptionSpan.className = "mdc-list-item__secondary-text"

  eventNameSpan.innerHTML = event.eventName
  eventDescriptionSpan.innerHTML = event.description

  span.appendChild(eventNameSpan)
  span.appendChild(eventDescriptionSpan)
  eventLi.appendChild(span)

  listOfEventsDiv.appendChild(eventLi)
}
