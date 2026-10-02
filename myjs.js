$(document).ready(function(){

    let tempUnit = "C"
    
    /*Api for weather */
$("#fetch-weather").click(function(){

    const apiKey="d2f4d02b284545b8800232253260704";
    const city=$("#City-name").val().trim();



    const url= "https://api.weatherapi.com/v1/forecast.json?key=" + apiKey + "&q=" + city + "&days=3&aqi=no";

$.get(url, function(data) {
/*verify information*/
        console.log(data);

    $("#Weather-information").empty();/*to clear previos weather*/

/*loop for 3 days*/
        for (let i=0; i<3; i++) {
            let day=data.forecast.forecastday[i];  
            
            

let avgC = day.day.avgtemp_c;
let maxC = day.day.maxtemp_c;
let minC = day.day.mintemp_c;
let avgF = day.day.avgtemp_f;
let maxF = day.day.maxtemp_f;
let minF = day.day.mintemp_f;


let avgTemp = (tempUnit === "C") ? avgC + " °C" : avgF + " °F";
let maxTemp = (tempUnit === "C") ? maxC + "°C" : maxF + " °F";
let minTemp = (tempUnit === "C") ? minC + "°C":  minF + " °F";

let iconUrl = "https:" + day.day.condition.icon;

let card =`

<div class="weather-card">
<h3 class="date"> ${day.date}</h3>
<img src="${iconUrl}" alt="weather-icon">
<p class="cond">Condition: ${day.day.condition.text}</p>
<p class="temp"> avg Temp: ${avgTemp}</p>
<p class="Temp">max temp: ${maxTemp}</p>
<p class="Temp">min temp: ${minTemp}</p>
<p class="humidity"> Humidity: ${day.day.avghumidity}%</p>
<p class="Wind"> wind Speed: ${day.day.maxwind_kph} kph</p>
<p class="rain"> rain chance: ${day.day.daily_chance_of_rain}%</p>
</div>
`;

$("#Weather-information").append(card);
}

}).fail(function(){


$("#Weather-information").html ("<p class='error-msg'> City not found. Please try again.</p>");

 });
 });

$("#City-name").keypress(function(e){
    if(e.which===13) {
        $("#fetch-weather").click();
    }
    });

$("#toggle-unit").click(function(){
if (tempUnit==="C"){
    tempUnit="F";
    $(this).text("Switch to °C");
}else{
    tempUnit="C"
    $(this).text("Switch to °F");
}
if ($("#Weather-information").children().length>0){
$("#fetch-weather").click();

}
 });


/*OWL carousel initialization-puppy*/


$("#new-dog").click(function(){
    $.get("https://dog.ceo/api/breeds/image/random", function(data){
        $("#puppyfhoto").attr("src",data.message);
        }).fail(function(){
            alert("Could no load image. Please try again.");
         });
    });

$(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout: 3000,
    responsive:{
        0: {items:1 },
        600:{items:3},
        1000:{items:5}
    }

});

});

