function plot2019(){
    d3.json("api/arrests.json").then((response) => {

        var months = [
            {
                "month_string": "January",
                "month_int": 1
            },
            {
                "month_string": "February",
                "month_int": 2
            },
            {
                "month_string": "March",
                "month_int": 3
            },
            {
                "month_string": "April",
                "month_int": 4
            },
            {
                "month_string": "May",
                "month_int": 5
            },
            {
                "month_string": "June",
                "month_int": 6
            },
            {
                "month_string": "July",
                "month_int": 7
            },
            {
                "month_string": "August",
                "month_int": 8
            },
            {
                "month_string": "September",
                "month_int": 9
            },
            {
                "month_string": "October",
                "month_int": 10
            },
            {
                "month_string": "November",
                "month_int": 11
            },
            {
                "month_string": "December",
                "month_int": 12
            }
        ];
    
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
        for (var i = 0; i < arrests_19.length; i++){
            arrestMonths_19 = arrests_19[i].key;
            
            // Find month string from array and replace
            converted_month = months.find(m => m.month_string == arrestMonths_19);
            
            // Update Key to Numeric Month
            arrests_19[i].key =  converted_month.month_int
        };

        // Sort by Month
        var sorted_arrest_19 = arrests_19.sort((a, b) => a.key - b.key);
    
        var arrestCounts_19 = [];
        var arrestMonths_19 = [];
    
        for (var i = 0; i < arrests_19.length; i++){
            var month = arrests_19[i].key;
            arrestMonths_19.push(month);
            var counts = arrests_19[i].values.length;
            arrestCounts_19.push(counts);
        };

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

        var months = [
            {
                "month_string": "January",
                "month_int": 1
            },
            {
                "month_string": "February",
                "month_int": 2
            },
            {
                "month_string": "March",
                "month_int": 3
            },
            {
                "month_string": "April",
                "month_int": 4
            },
            {
                "month_string": "May",
                "month_int": 5
            },
            {
                "month_string": "June",
                "month_int": 6
            },
            {
                "month_string": "July",
                "month_int": 7
            },
            {
                "month_string": "August",
                "month_int": 8
            },
            {
                "month_string": "September",
                "month_int": 9
            },
            {
                "month_string": "October",
                "month_int": 10
            },
            {
                "month_string": "November",
                "month_int": 11
            },
            {
                "month_string": "December",
                "month_int": 12
            }
        ];
    
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
        // console.log(arrests_19)
        for (var i = 0; i < arrests_20.length; i++){
            arrestMonths_20 = arrests_20[i].key;
            
            // Find month string from array and replace
            converted_month = months.find(m => m.month_string == arrestMonths_20);
            
            // Update Key to Numeric Month
            arrests_20[i].key =  converted_month.month_int
        };

        // Sort by Month
        var sorted_arrest_20 = arrests_20.sort((a, b) => a.key - b.key);
    
        var arrestCounts_20 = [];
        var arrestMonths_20 = [];
    
        for (var i = 0; i < arrests_20.length; i++){
            var month = arrests_20[i].key;
            arrestMonths_20.push(month);
            var counts = arrests_20[i].values.length;
            arrestCounts_20.push(counts);
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

        var months = [
            {
                "month_string": "January",
                "month_int": 1
            },
            {
                "month_string": "February",
                "month_int": 2
            },
            {
                "month_string": "March",
                "month_int": 3
            },
            {
                "month_string": "April",
                "month_int": 4
            },
            {
                "month_string": "May",
                "month_int": 5
            },
            {
                "month_string": "June",
                "month_int": 6
            },
            {
                "month_string": "July",
                "month_int": 7
            },
            {
                "month_string": "August",
                "month_int": 8
            },
            {
                "month_string": "September",
                "month_int": 9
            },
            {
                "month_string": "October",
                "month_int": 10
            },
            {
                "month_string": "November",
                "month_int": 11
            },
            {
                "month_string": "December",
                "month_int": 12
            }
        ];
    
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
        for (var i = 0; i < arrests_21.length; i++){
            arrestMonths_21 = arrests_21[i].key;
            
            // Find month string from array and replace
            converted_month = months.find(m => m.month_string == arrestMonths_21);
            
            // Update Key to Numeric Month
            arrests_21[i].key =  converted_month.month_int
        };

        // Sort by Month
        var sorted_arrest_21 = arrests_21.sort((a, b) => a.key - b.key);
    
        var arrestCounts_21 = [];
        var arrestMonths_21 = [];
    
        for (var i = 0; i < arrests_21.length; i++){
            var month = arrests_21[i].key;
            arrestMonths_21.push(month);
            var counts = arrests_21[i].values.length;
            arrestCounts_21.push(counts);
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






   