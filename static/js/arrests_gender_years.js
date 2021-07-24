// Create the data array for the plot
// Test code with local pathing
// Update to live pathing when pushing
d3.json("../data/arrests.json").then((Arrests_data) => {

    // console.log(Arrests_data);
    // console.log(Arrests_data[0]["booking id"].length)
    arrest_id = Arrests_data[0]["booking id"];
    for (i = 0; i < arrest_id.length; i++){
        console.log(arrest_id[i])
    }
    console.log(arrest_id);
    // console.log(arrest_id.length);
});
