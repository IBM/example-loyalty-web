var listOfEventsDiv = document.getElementById('list-of-events')

getEvents(function (events) {
  for (index in events) {
    let event = events[index]
    addToListOfEvents(event)
  }
})


function addToListOfEvents(event) {
  let eventDiv = document.createElement('li')
  let span = document.createElement('span')
  let eventNameSpan = document.createElement('span')
  let eventDescriptionSpan = document.createElement('span')
  eventDiv.className = "mdl-list__item mdl-list__item--two-line"
  span.className = "mdl-list__item-primary-content"
  eventDescriptionSpan.className = "mdl-list__item-sub-title"

  eventNameSpan.innerHTML = event.eventName
  eventDescriptionSpan.innerHTML = event.description

  span.appendChild(eventNameSpan)
  span.appendChild(eventDescriptionSpan)
  eventDiv.appendChild(span)

  listOfEventsDiv.appendChild(eventDiv)
}
