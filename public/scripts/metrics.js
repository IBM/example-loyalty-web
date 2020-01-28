var metricsOfEventsDiv = document.getElementById('metrics-of-all-events')
var metricsGroupedByLanguageDiv = document.getElementById('metrics-grouped-by-language')

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

const list = mdc.list.MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarElement);
// topAppBar.setScrollTarget(document.getElementById('main-content'));
// topAppBar.listen('MDCTopAppBar:nav', () => {
//   drawer.open = !drawer.open;
// });

function drawChart() {

  getAllEventsCheckins(function (events) {
    let eventsMapped = events.map(function (data, index) {
      return [data.eventName, data.checkIns]
    })
    eventsMapped.unshift(["Event", "Number of Check-ins"])

    var data = google.visualization.arrayToDataTable(eventsMapped);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1]);

    var options = {
      title: "Total number of check-ins per event",
      width: 800,
      height: 400,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };

    var chart = new google.visualization.BarChart(metricsOfEventsDiv);
    chart.draw(view, options);
  })

  getCheckinsByLanguage(function (languages) {
    let languagesArray = []
    Object.keys(languages).forEach(function (key) {
      languagesArray.push([key, languages[key]])
    })
    languagesArray.unshift(['Lanuage', 'Check-ins'])

    let data = google.visualization.arrayToDataTable(languagesArray)

    var options = {
      title: "Total number of check-ins per language",
      width: 800,
      height: 400,
    }

    var chart = new google.visualization.PieChart(metricsGroupedByLanguageDiv);
    chart.draw(data, options)
  })
}
