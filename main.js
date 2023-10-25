const weatherAPIKEY='eb6cba8d853049da66cbd88452fdbc0c';

// Select the search icon
let searchIcon=document.querySelector(".fa-search");
// Select Input Search
let theInputSearch=document.getElementById("search__input");

// Select image Temperature value
let TempValue=document.querySelector(".image_temp__value");

// select city name 
let cityName=document.querySelector(".city__name");

// Select humandity rar=te
let hummandityRate=document.querySelector(".humandity .rate");

// Select wind rate
let windRate=document.querySelector(".windy .rate");

// Select weather state image
let weatherimage=document.querySelector(".weather__state img");

let theSearchValue=null;

function setTemperatureDetails (temp, humandity, countryName, windSpeed, weatherState) {

    TempValue.innerHTML=`${Math.round(temp)} °C`;
    cityName.innerHTML=countryName;
    hummandityRate.innerHTML=`${humandity}%`;
    windRate.innerHTML=`${windSpeed} Km/h`;

    if(weatherState=="Clear") {
        weatherimage.src="images/clear.png";
    }
    else if(weatherState=="Clouds") {
        weatherimage.src="images/clouds.png";
    }
    else if(weatherState=="Drizzle") {
        weatherimage.src="images/drizzle.png";
        document.querySelector(".container").style.backgroundImage="url('images/rainy.jpg')";
    }
    else if(weatherState=="Humidity") {
        weatherimage.src="images/humidity.png";
    }
    else if(weatherState=="Mist") {
        weatherimage.src="images/mist.png";
    }
    else if(weatherState=="Rain") {
        weatherimage.src="images/rain.png";
        document.querySelector(".container").style.backgroundImage="url('images/rainy.jpg')";
    }
    else if(weatherState=="Snow") {
        weatherimage.src="images/snow.png";
        document.querySelector(".container").style.backgroundImage="url('images/snoww.png')";
    }
    else if(weatherState=="Wind") {
        weatherimage.src="images/wind.png";
    }

}
let getTemperature=(weatherAPIUEL) => {
    fetch(weatherAPIUEL).then((result) => {
        let data=result.json();
        return data;
    }).then((data) => {
        setTemperatureDetails(data.main.temp, data.main.humidity, data.name, data.wind.speed, data.weather[0].main);
    });
};

theInputSearch.addEventListener('keyup', function (e) {
    if(e.key=='Enter') {
        theSearchValue=e.target.value;
        getTemperature(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${theSearchValue}&appid=${weatherAPIKEY}`);
    }
});

searchIcon.addEventListener('click', function (e) {
    theSearchValue=theInputSearch.value;
    getTemperature(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${theSearchValue}&appid=${weatherAPIKEY}`);
});

getTemperature(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=tala&appid=${weatherAPIKEY}`);

