$(document).ready(function() {    
    var apiKey = "96d883e2c169eeff1d104b75a73fe7be" // Enter your API Key here        
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop

    Object.keys(state_info).forEach(function(eachState, index){
        var stateName=state_info[eachState];
        var latitude=stateName.lat.toString();
        var longitude=stateName.lng.toString();
        var url ='https://api.darksky.net/forecast/96d883e2c169eeff1d104b75a73fe7be/'+latitude+','+longitude;


    

    $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
                
                console.log(data)
                var temperature = data.currently.temperature;
                // TODO
                // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
                // var temperature = 

                console.log(temperature)
                //console.log(eachState)
                if(temperature<=10){
                    $("#"+eachState).css('fill', "blue");
                }else if(temperature>10 && temperature<=30){
                    $("#"+eachState).css('fill', "cyan");
                }else if(temperature>30 && temperature<=50){
                    $("#"+eachState).css('fill', "green");
                }else if(temperature>50 && temperature<=80){
                    $("#"+eachState).css('fill', "orange");
                }else if(temperature>80){
                    $("#"+eachState).css('fill', "red");
                }
                //TODO 
                // Default color gray
                // Create a series of if else blocks to set the color for the state based on the temperature
                // Less than equal to 10 should be blue
                // Between 11 and 30 should be cyan
                // Between 31 and 50 should be green
                // Between 51 and 80 should be orange
                // Greater than 80 should be red

                //$('#CO').css('fill', "blue");   // Example on how to fill colors for your state.    
            })
        });
});