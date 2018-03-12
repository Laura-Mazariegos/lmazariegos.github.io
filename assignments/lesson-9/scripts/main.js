var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/06755379febc9626/conditions/q/MN/Franklin.json', true );
weatherObject.send();
weatherObject.onload = function() {
	var weatherInfo = JSON.parse(weatherObject.responseText);
	console.log(weatherInfo);
	document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
	document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
	document.getElementById('feelsLike').innerHTML = weatherInfo.current_observation.feelslike_string;
	document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
	document.getElementById('description').innerHTML = weatherInfo.current_observation.weather;
	document.getElementById('wIcon').src = weatherInfo.current_observation.icon_url;

}
var townData = new XMLHttpRequest();

townData.open('GET','https://byui-cit230.github.io/weather/data/towndata.json', true );
townData.send();
townData.onload = function() {
	var townInfo = JSON.parse(townData.responseText);
	console.log(townInfo);
	document.getElementById('motto').innerHTML = townInfo.towns["0"].motto;
	document.getElementById('yearFounded').innerHTML = townInfo.towns["0"].yearFounded;
	document.getElementById('population').innerHTML = townInfo.towns["0"].currentPopulation;
	document.getElementById('annualRainfall').innerHTML = townInfo.towns["0"].averageRainfall;

	document.getElementById('motto1').innerHTML = townInfo.towns["1"].motto;
	document.getElementById('yearFounded1').innerHTML = townInfo.towns["1"].yearFounded;
	document.getElementById('population1').innerHTML = townInfo.towns["1"].currentPopulation;
	document.getElementById('annualRainfall1').innerHTML = townInfo.towns["1"].averageRainfall;

	document.getElementById('motto2').innerHTML = townInfo.towns["2"].motto;
	document.getElementById('yearFounded2').innerHTML = townInfo.towns["2"].yearFounded;
	document.getElementById('population2').innerHTML = townInfo.towns["2"].currentPopulation;
	document.getElementById('annualRainfall2').innerHTML = townInfo.towns["2"].averageRainfall;
}
