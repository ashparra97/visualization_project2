// Create the data array for the plot
// Test code with local pathing
// Update to live pathing when pushing
d3.json("api/arrests.json").then((response) => {


    // console.log(response);
    // Arrests by years
    var arrest_by_years = d3.nest()
        .key(function(d){
            return d.arrest_year;
        })
        .entries(response.arrest);

    // console.log(arrest_by_years)

    var arrestCounts = [];
    var arrestYears = [];

    for (var i = 0; i < arrest_by_years.length; i++){
        var year = arrest_by_years[i].key;
        arrestYears.push(year);
        var counts = arrest_by_years[i].values.length;
        arrestCounts.push(counts);
    }
    
    // console.log(arrestYears);
    // console.log(arrestCounts);

    // Arrests by sex
    // 2021
    var arrest_by_sex_21 = d3.nest()
        .key(function(d){
            return d.arrestee_sex;
        })
        .entries(arrest_by_years[0].values);

    // console.log(arrest_by_sex_21);

    var arrestCounts_21 = [];
    var arrestSex_21 = [];

    for (var i = 0; i < arrest_by_sex_21.length; i++){
        var sex = arrest_by_sex_21[i].key;
        arrestSex_21.push(sex);
        var sexCounts = arrest_by_sex_21[i].values.length;
        arrestCounts_21.push(sexCounts);
    }

    // console.log(arrestSex_21);
    // console.log(arrestCounts_21);

    // 2020
    var arrest_by_sex_20 = d3.nest()
        .key(function(d){
            return d.arrestee_sex;
        })
        .entries(arrest_by_years[1].values);

    // console.log(arrest_by_sex_20);

    var arrestCounts_20 = [];
    var arrestSex_20 = [];

    for (var i = 0; i < arrest_by_sex_20.length; i++){
        var sex = arrest_by_sex_20[i].key;
        arrestSex_20.push(sex);
        var sexCounts = arrest_by_sex_20[i].values.length;
        arrestCounts_20.push(sexCounts);
    }

    // console.log(arrestSex_20);
    // console.log(arrestCounts_20);

    // 2019
    var arrest_by_sex_19 = d3.nest()
        .key(function(d){
            return d.arrestee_sex;
        })
        .entries(arrest_by_years[2].values);

    // console.log(arrest_by_sex_19);

    var arrestCounts_19 = [];
    var arrestSex_19 = [];

    for (var i = 0; i < arrest_by_sex_19.length; i++){
        var sex = arrest_by_sex_19[i].key;
        arrestSex_19.push(sex);
        var sexCounts = arrest_by_sex_19[i].values.length;
        arrestCounts_19.push(sexCounts);
    }

    // console.log(arrestSex_19);
    // console.log(arrestCounts_19);

    // Plot stacked bar chart to bar-plot
    var trace_M = {
        x: ["2019", "2020", "2021"],
        y: [arrestCounts_19[0], arrestCounts_20[0], arrestCounts_21[0]],
        name: "Male Arrestee",
        type: "bar",
        marker: {
            color: 'gray'
        }
    };

    var trace_F = {
        x: ["2019", "2020", "2021"],
        y: [arrestCounts_19[1], arrestCounts_20[1], arrestCounts_21[1]],
        name: "Female Arrestee",
        type: "bar",
        marker: {
            color: 'teal'
        }
    };

    var data = [trace_M, trace_F];

    // Define the plot layout
    var layout = {
        title: "Tucson PD 2019 - 2021 Arrest Data",
        xaxis: { title: "Year",
            tickmode: "array",
            tickvals: [2019, 2020, 2021]},
        yaxis: { title: "Number of Arrests"},
        barmode: 'stack'
    };

    // Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("other-plot", data, layout);

});

