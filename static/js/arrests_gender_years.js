// Create the data array for the plot
// Test code with local pathing
// Update to live pathing when pushing
d3.json("../data/arrests.json").then((Arrests_data) => {

    // console.log(Arrests_data);
    // console.log(Arrests_data[0]["booking id"].length)
    arrest_id = [];
    for (i = 0; i < Arrests_data[0]["booking id"].length; i++){
        if (Arrests_data[0].year[i] == 2019){
            // console.log(Arrests_data[0]["booking id"][i]);
            // console.log(Arrests_data[0]["booking id"][i] == Arrests_data[0]["booking id"][i - 1]);
            if (Arrests_data[0]["booking id"][i] !== Arrests_data[0]["booking id"][i - 1]){
                arrest_id.push(Arrests_data[0]["booking id"][i]);
            };
        };
    
    }
    console.log(arrest_id);
    console.log(arrest_id.length);
});

