# Ontario Weather Forecast – Dynamic Weather Dashboard

## Live Demo
[View the website](https://hanpal16-ux.github.io/ontario-weather-forecast/)

## Project Description
Ontario Weather Forecast is an interactive web page that shows a
3-day weather forecast for any city. Users type a city name and
instantly see the date, weather icon, condition, temperatures,
humidity, wind speed, and chance of rain for each day. Temperatures
can be switched between Celsius and Fahrenheit with one click.

The page also includes a Puppy Gallery, with a button that loads a
random dog picture and an automatic image carousel.

This project was developed as the final project of the Advanced
Frontend – JavaScript & jQuery course of the Full Stack Software
Development program at Canadian Business College (CBC).

## Technologies
- HTML
- CSS (Flexbox)
- JavaScript
- jQuery 3.7.1
- AJAX (`$.get`)
- [WeatherAPI](https://www.weatherapi.com/) (3-day forecast)
- [Dog CEO API](https://dog.ceo/dog-api/) (random dog pictures)
- [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/) (image carousel)

## How to Run
**Option 1:** Visit the live demo link above.

**Option 2:** Run it on your computer:
1. Clone the repository:
   ```bash
   git clone https://github.com/hanpal16-ux/ontario-weather-forecast.git
   ```
2. Open the project folder.
3. Open `index.html` in your web browser.

Note: an internet connection is required, because the weather data,
the dog pictures, and the libraries are loaded from online sources.

The project uses a free WeatherAPI key. If the search stops working,
create a free account at [weatherapi.com](https://www.weatherapi.com/),
copy your own key, and paste it into the `apiKey` variable in `myjs.js`.

## Features
- Search the 3-day weather forecast for any city
- Search by clicking the button or by pressing Enter
- Weather cards with date, icon, condition, average, maximum and
  minimum temperature, humidity, wind speed, and chance of rain
- Switch between Celsius (°C) and Fahrenheit (°F)
- Friendly error message when a city is not found
- Load a random puppy picture with the "New Dog" button
- Automatic, responsive image carousel of dog breeds

## Author
Hanner Palacios
