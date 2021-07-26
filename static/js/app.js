function plot2019(){
    d3.json("api/arrests.json").then((response) => {

        var months = {
            'January': 1,
            'February': 2,
            'March': 3,
            'April': 4,
            'May': 5,
            'June': 6,
            'July': 7,
            'August': 8,
            'September': 9,
            'October': 10,
            'November': 11,
            'December': 12
        };
    
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
    
        // Arrests in 2019 by months
        var arrests_19 = d3.nest()
            .key(function(d){
                return d.arrest_month;
            })
            .entries(arrest_by_years[2].values);
    
        // console.log(arrests_19)
    
        var arrestCounts_19 = [];
        var arrestMonths_19 = [];
    
        for (var i = 0; i < arrests_19.length; i++){
            var month = arrests_19[i].key;
            arrestMonths_19.push(month);
            var counts = arrests_19[i].values.length;
            arrestCounts_19.push(counts);
        };
        
        for (var i = 0; i < arrestMonths_19.length; i++){
            arrestMonths_19.splice(i, 1, months[`${arrestMonths_19[i]}`]);
        };
    
        // TESTING
        var arrests_by_months = {}; 
        for (var i = 0; i < arrestMonths_19.length; i++){
            arrests_by_months[arrestMonths_19[i]] = arrestCounts_19[i];
        };
        console.log(arrests_by_months);
        // TESTING ENDS

        console.log(arrestMonths_19);
        console.log(arrestCounts_19);

        // Plot graph
        var trace1 = {
            x: arrestMonths_19,
            y: arrestCounts_19,
            name: "2019 Number of Arrests",
            type: "scatter"
        };

        var data = [trace1];

        // Define the plot layout
        var layout = {
            title: "Tucson PD 2019 Arrest Data",
            xaxis: { title: "Month",
                    tickmode: 'array',
                    tickval: arrestMonths_19,
                    ticktext: ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']    
            },
            yaxis: { title: "Number of Arrests"},
        };

        // Plot the chart to a div tag with id "bar-plot"
        Plotly.newPlot("int-plot1", data, layout);

    });
};

function plot2020(){
    d3.json("api/arrests.json").then((response) => {

        var months = {
            'January': 1,
            'February': 2,
            'March': 3,
            'April': 4,
            'May': 5,
            'June': 6,
            'July': 7,
            'August': 8,
            'September': 9,
            'October': 10,
            'November': 11,
            'December': 12
        };
    
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
    
        // Arrests in 2020 by months
        var arrests_20 = d3.nest()
            .key(function(d){
                return d.arrest_month;
            })
            .entries(arrest_by_years[1].values);
    
        // console.log(arrests_19)
    
        var arrestCounts_20 = [];
        var arrestMonths_20 = [];
    
        for (var i = 0; i < arrests_20.length; i++){
            var month = arrests_20[i].key;
            arrestMonths_20.push(month);
            var counts = arrests_20[i].values.length;
            arrestCounts_20.push(counts);
        };
        
        for (var i = 0; i < arrestMonths_20.length; i++){
            arrestMonths_20.splice(i, 1, months[`${arrestMonths_20[i]}`]);
        };
    
        // console.log(arrestMonths_19);
        // console.log(arrestCounts_19);

        // Plot graph
        var trace1 = {
            x: arrestMonths_20,
            y: arrestCounts_20,
            name: "2020 Number of Arrests",
            type: "scatter"
        };

        var data = [trace1];

        // Define the plot layout
        var layout = {
            title: "Tucson PD 2020 Arrest Data",
            xaxis: { title: "Month",
                    tickmode: 'array',
                    tickval: arrestMonths_20,
                    ticktext: ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']    
            },
            yaxis: { title: "Number of Arrests"},
        };

        // Plot the chart to a div tag with id "bar-plot"
        Plotly.newPlot("int-plot1", data, layout);
    });
};

function plot2021(){
    d3.json("api/arrests.json").then((response) => {

        var months = {
            'January': 1,
            'February': 2,
            'March': 3,
            'April': 4,
            'May': 5,
            'June': 6,
            'July': 7,
            'August': 8,
            'September': 9,
            'October': 10,
            'November': 11,
            'December': 12
        };
    
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
    
        // Arrests in 2021 by months
        var arrests_21 = d3.nest()
            .key(function(d){
                return d.arrest_month;
            })
            .entries(arrest_by_years[0].values);
    
        // console.log(arrests_19)
    
        var arrestCounts_21 = [];
        var arrestMonths_21 = [];
    
        for (var i = 0; i < arrests_21.length; i++){
            var month = arrests_21[i].key;
            arrestMonths_21.push(month);
            var counts = arrests_21[i].values.length;
            arrestCounts_21.push(counts);
        };
        
        for (var i = 0; i < arrestMonths_21.length; i++){
            arrestMonths_21.splice(i, 1, months[`${arrestMonths_21[i]}`]);
        };
    
        // console.log(arrestMonths_19);
        // console.log(arrestCounts_19);

        // Plot graph
        var trace1 = {
            x: arrestMonths_21,
            y: arrestCounts_21,
            name: "2021 Number of Arrests",
            type: "scatter"
        };

        var data = [trace1];

        // Define the plot layout
        var layout = {
            title: "Tucson PD 2021 Arrest Data",
            xaxis: { title: "Month",
                    tickmode: 'array',
                    tickval: arrestMonths_21,
                    ticktext: ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']    
            },
            yaxis: { title: "Number of Arrests"},
        };

        // Plot the chart to a div tag with id "bar-plot"
        Plotly.newPlot("int-plot1", data, layout);
    });
};






   