google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    /*The variable is the data represented in the form as comparing the different forms of sale
    over the year 2013*/
    var data = google.visualization.arrayToDataTable([
        ['Music', 'Sold'],
        ['Streaming', 1450],
        ['Download', 2823],
        ['Ringtone', 98]
    ]);

    var options = {
        title: '2013 Music Sales',
        width: 1300,
        height: 200,
        hAxis: {
            title: 'Music Sales (Millions)',
            minValue: 0
        },
        vAxis: {
            title: 'Sale'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}