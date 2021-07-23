// Create the data array for the plot
// Test code
d3.json("api/budget.json").then((Budget_data) => {

    console.log(Budget_data);

    var x = Budget_data[0].id

    var y = Budget_data[0].actual_fy_18_19

    var trace = {
        x: x,
        y: y,
        type: "bar"
    };

    var data = [trace];

    // Define the plot layout
    var layout = {
    title: "Budget Data",
    xaxis: { title: "ID" },
    yaxis: { title: "Actual Spending"}
    };

    // Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("bar-plot", data, layout);

});
