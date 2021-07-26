// Create the data array for the plot
// Test code with local pathing
// Update to live pathing when pushing
d3.json("api/budget.json").then((Budget_data) => {

    // console.log(Budget_data);

    var x = Budget_data[0].expenditures.slice(0, 4);

    var y_18_19 = Budget_data[0].actual_fy_18_19.slice(0, 4);
    var y_19_20 = Budget_data[0].adopted_fy_19_20.slice(0, 4);
    var y_20_21 = Budget_data[0].adopted_fy_20_21.slice(0, 4);

    var trace1 = {
        x: x,
        y: y_18_19,
        name: "2018/19 Budget",
        type: "bar",
        marker: {
            color: 'teal'
        }
    };

    var trace2 = {
        x: x,
        y: y_19_20,
        name: "2019/20 Budget",
        type: "bar",
        marker: {
            color: 'gray'
        }
    };

    var trace3 = {
        x: x,
        y: y_20_21,
        name: "2020/21 Budget",
        type: "bar",
        marker: {
            color: 'gray-dark',
        }
    };

    var data = [trace1, trace2, trace3];

    // Define the plot layout
    var layout = {
    title: "Tucson PD 2019 - 2021 Budget Data",
    xaxis: { title: "Budget Categories" },
    yaxis: { title: "Department Spending (USD)"},
    barmode: 'group'
    };

    // Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("budget-plot", data, layout);

    // console.log(Budget_data[0].expenditures.length);
});
