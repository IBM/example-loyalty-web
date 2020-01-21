function getEvents(callback) {
  loadJSON('dev/events.json', callback)
}

function getAllEventsCheckins(callback) {
  loadJSON('dev/events-checkins.json', callback)
}

function getCheckinsByLanguage(callback) {
  loadJSON('dev/language.json', callback)
}

function loadJSON(file, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', file, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}
