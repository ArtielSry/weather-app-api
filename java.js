let weather = {
	apiKey: "33dedaf1f3897196ec6c41542824ed46",
	fetchWeather: function(city) {
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=sp&appid=" +  this.apiKey)
		.then((response) => response.json())
		.then((data) => this.displayWeather(data));
	},

	displayWeather: function(data) {
		const { name } = data;
		const { icon, description } = data.weather[0];
		const { temp, humidity, temp_max, temp_min } = data.main;
		const { speed } = data.wind;
		console.log(name,icon,description,temp,humidity,speed)

		document.querySelector(".city").innerText = "Tiempo ahora mismo en " + name; // ciudad
		document.querySelector(".icon").src =
      "./img/" + icon + ".png"; // imagen del tiempo
		document.querySelector(".description").innerText =  description; // descripcion
		document.querySelector(".temp").innerText = temp + "º"; // temperatur	
		document.querySelector(".humidity").innerHTML = `<img class="humIcon" src='./img/hum.png'>` + "Humedad: " + humidity + "%"; // humedad
		document.querySelector(".wind").innerHTML = `<img class="vieIcon" src='./img/vie.png'>` + "Viento: " + speed + "Km/h"; // viento

		//document.querySelector(".maxminIcon").appendChild(image3); // icono de maxima y minima
		document.querySelector(".maxminIcon").innerHTML = `<img class="maxminIcon" src='./img/mm.png'>`;
		document.querySelector(".max").innerText = "Max: " + temp_max +"ºC" + " "; // maximas
		document.querySelector(".min").innerText = "Min: " + temp_min +"ºC"; // minimas
	},


	search: function(){
		this.fetchWeather(document.querySelector(".search-bar").value)
	}
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });


