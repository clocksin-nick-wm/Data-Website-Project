google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    /*The variable is the data represented in the form as comparing the different forms of sale
     over the year 2012*/
    var data = google.visualization.arrayToDataTable([
        ['Music', 'Sales'],
        ['Streaming', 1033],
        ['Download', 2875],
        ['Ringtone', 145]
    ]);

    var options = {
        title: 'Music Sales of 2012',
        width: 1300,
        height: 200,
        hAxis: {
            title: 'Music Sales 2012 (millions)',
            minValue: 0
        },
        vAxis: {
            title: 'Music Sales'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}