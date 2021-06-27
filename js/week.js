const test = "http://api.openweathermap.org/data/2.5/forecast?q=London&appid=014e1a4022cb99cf5234c6849cfa9289";
const Mosurl = "http://api.openweathermap.org/data/2.5/forecast?q=Moscow&appid=014e1a4022cb99cf5234c6849cfa9289";

fetch(Mosurl)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data);
        document.querySelector(".m0").innerHTML = data.list[1].dt_txt;
        document.querySelector(".m1").innerHTML = data.list[5].dt_txt;
        document.querySelector(".m2").innerHTML = data.list[9].dt_txt;
        document.querySelector(".m3").innerHTML = data.list[13].dt_txt;
        document.querySelector(".m4").innerHTML = data.list[17].dt_txt;
        document.querySelector(".m5").innerHTML = data.list[21].dt_txt;
        document.querySelector(".m6").innerHTML = data.list[25].dt_txt;
        document.querySelector(".m7").innerHTML = data.list[29].dt_txt;
        document.querySelector(".m8").innerHTML = data.list[33].dt_txt;
        document.querySelector(".m9").innerHTML = data.list[37].dt_txt;
        // Температура
        document.querySelector(".degreemain").innerHTML = Math.round(data.list[0].main.temp - 273) + '&degC';
        document.querySelector(".mt0").innerHTML = Math.round(data.list[1].main.temp - 273) + '&deg';
        document.querySelector(".mt1").innerHTML = Math.round(data.list[5].main.temp - 273) + '&deg';
        document.querySelector(".mt2").innerHTML = Math.round(data.list[9].main.temp - 273) + '&deg';
        document.querySelector(".mt3").innerHTML = Math.round(data.list[13].main.temp - 273) + '&deg';
        document.querySelector(".mt4").innerHTML = Math.round(data.list[17].main.temp - 273) + '&deg';
        document.querySelector(".mt5").innerHTML = Math.round(data.list[21].main.temp - 273) + '&deg';
        document.querySelector(".mt6").innerHTML = Math.round(data.list[25].main.temp - 273) + '&deg';
        document.querySelector(".mt7").innerHTML = Math.round(data.list[29].main.temp - 273) + '&deg';
        document.querySelector(".mt8").innerHTML = Math.round(data.list[33].main.temp - 273) + '&deg';
        document.querySelector(".mt9").innerHTML = Math.round(data.list[37].main.temp - 273) + '&deg';
        // Основная погода
        document.querySelector(".mw0").innerHTML = data.list[1].weather[0].main;
        document.querySelector(".mw1").innerHTML = data.list[5].weather[0].main;
        document.querySelector(".mw2").innerHTML = data.list[9].weather[0].main;
        document.querySelector(".mw3").innerHTML = data.list[13].weather[0].main;
        document.querySelector(".mw4").innerHTML = data.list[17].weather[0].main;
        document.querySelector(".mw5").innerHTML = data.list[21].weather[0].main;
        document.querySelector(".mw6").innerHTML = data.list[25].weather[0].main;
        document.querySelector(".mw7").innerHTML = data.list[29].weather[0].main;
        document.querySelector(".mw8").innerHTML = data.list[33].weather[0].main;
        document.querySelector(".mw9").innerHTML = data.list[37].weather[0].main;
        // Описание 
        document.querySelector(".md0").innerHTML = data.list[1].weather[0].description;
        document.querySelector(".md1").innerHTML = data.list[5].weather[0].description;
        document.querySelector(".md2").innerHTML = data.list[9].weather[0].description;
        document.querySelector(".md3").innerHTML = data.list[13].weather[0].description;
        document.querySelector(".md4").innerHTML = data.list[17].weather[0].description;
        document.querySelector(".md5").innerHTML = data.list[21].weather[0].description;
        document.querySelector(".md6").innerHTML = data.list[25].weather[0].description;
        document.querySelector(".md7").innerHTML = data.list[29].weather[0].description;
        document.querySelector(".md8").innerHTML = data.list[33].weather[0].description;
        document.querySelector(".md9").innerHTML = data.list[37].weather[0].description;
        // Скорость ветра
        document.querySelector(".mi0").innerHTML = "wind speed: " + data.list[1].wind.speed + " m/s";
        document.querySelector(".mi1").innerHTML = "wind speed: " + data.list[5].wind.speed + " m/s";
        document.querySelector(".mi2").innerHTML = "wind speed: " + data.list[9].wind.speed + " m/s";
        document.querySelector(".mi3").innerHTML = "wind speed: " + data.list[13].wind.speed + " m/s";
        document.querySelector(".mi4").innerHTML = "wind speed: " + data.list[17].wind.speed + " m/s";
        document.querySelector(".mi5").innerHTML = "wind speed: " + data.list[21].wind.speed + " m/s";
        document.querySelector(".mi6").innerHTML = "wind speed: " + data.list[25].wind.speed + " m/s";
        document.querySelector(".mi7").innerHTML = "wind speed: " + data.list[29].wind.speed + " m/s";
        document.querySelector(".mi8").innerHTML = "wind speed: " + data.list[33].wind.speed + " m/s";
        document.querySelector(".mi9").innerHTML = "wind speed: " + data.list[37].wind.speed + " m/s";
        //Влажность
        document.querySelector(".mh0").innerHTML = "humidity: " + data.list[1].main.humidity + "%";
        document.querySelector(".mh1").innerHTML = "humidity: " + data.list[5].main.humidity + "%";
        document.querySelector(".mh2").innerHTML = "humidity: " + data.list[9].main.humidity + "%";
        document.querySelector(".mh3").innerHTML = "humidity: " + data.list[13].main.humidity + "%";
        document.querySelector(".mh4").innerHTML = "humidity: " + data.list[17].main.humidity + "%";
        document.querySelector(".mh5").innerHTML = "humidity: " + data.list[21].main.humidity + "%";
        document.querySelector(".mh6").innerHTML = "humidity: " + data.list[25].main.humidity + "%";
        document.querySelector(".mh7").innerHTML = "humidity: " + data.list[29].main.humidity + "%";
        document.querySelector(".mh8").innerHTML = "humidity: " + data.list[33].main.humidity + "%";
        document.querySelector(".mh9").innerHTML = "humidity: " + data.list[37].main.humidity + "%";
        //Туман
        document.querySelector(".mg0").innerHTML = "gust: " + data.list[1].wind.gust;
        document.querySelector(".mg1").innerHTML = "gust: " + data.list[5].wind.gust;
        document.querySelector(".mg2").innerHTML = "gust: " + data.list[9].wind.gust;
        document.querySelector(".mg3").innerHTML = "gust: " + data.list[13].wind.gust;
        document.querySelector(".mg4").innerHTML = "gust: " + data.list[17].wind.gust;
        document.querySelector(".mg5").innerHTML = "gust: " + data.list[21].wind.gust;
        document.querySelector(".mg6").innerHTML = "gust: " + data.list[25].wind.gust;
        document.querySelector(".mg7").innerHTML = "gust: " + data.list[29].wind.gust;
        document.querySelector(".mg8").innerHTML = "gust: " + data.list[33].wind.gust;
        document.querySelector(".mg9").innerHTML = "gust: " + data.list[37].wind.gust;
        //Картинки
        // https://openweathermap.org/img/wn/04n@2x.png
        document.querySelector(".feat0").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[1].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat1").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[5].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat2").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[9].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat3").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[13].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat4").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[17].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat5").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[21].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat6").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[25].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat7").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[29].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat8").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[33].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat9").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[37].weather[0].icon + '@2x.png" class="wimg">';
        //other
        document.querySelector("#cityname").innerHTML = data.city.name + ", " + data.city.country + " (5 days)";
    })
    .catch(function() {

    });

function getAPIB() {
    let city = document.querySelector('#searchcity').value;
    console.log(city);
    const url = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=014e1a4022cb99cf5234c6849cfa9289";
    fetch(url)
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data) {
            console.log(data);
            // Дата
            console.log(data);
            document.querySelector(".m0").innerHTML = data.list[1].dt_txt;
            document.querySelector(".m1").innerHTML = data.list[5].dt_txt;
            document.querySelector(".m2").innerHTML = data.list[9].dt_txt;
            document.querySelector(".m3").innerHTML = data.list[13].dt_txt;
            document.querySelector(".m4").innerHTML = data.list[17].dt_txt;
            document.querySelector(".m5").innerHTML = data.list[21].dt_txt;
            document.querySelector(".m6").innerHTML = data.list[25].dt_txt;
            document.querySelector(".m7").innerHTML = data.list[29].dt_txt;
            document.querySelector(".m8").innerHTML = data.list[33].dt_txt;
            document.querySelector(".m9").innerHTML = data.list[37].dt_txt;
            // Температура
            document.querySelector(".degreemain").innerHTML = Math.round(data.list[0].main.temp - 273) + '&degC';
            document.querySelector(".mt0").innerHTML = Math.round(data.list[1].main.temp - 273) + '&deg';
            document.querySelector(".mt1").innerHTML = Math.round(data.list[5].main.temp - 273) + '&deg';
            document.querySelector(".mt2").innerHTML = Math.round(data.list[9].main.temp - 273) + '&deg';
            document.querySelector(".mt3").innerHTML = Math.round(data.list[13].main.temp - 273) + '&deg';
            document.querySelector(".mt4").innerHTML = Math.round(data.list[17].main.temp - 273) + '&deg';
            document.querySelector(".mt5").innerHTML = Math.round(data.list[21].main.temp - 273) + '&deg';
            document.querySelector(".mt6").innerHTML = Math.round(data.list[25].main.temp - 273) + '&deg';
            document.querySelector(".mt7").innerHTML = Math.round(data.list[29].main.temp - 273) + '&deg';
            document.querySelector(".mt8").innerHTML = Math.round(data.list[33].main.temp - 273) + '&deg';
            document.querySelector(".mt9").innerHTML = Math.round(data.list[37].main.temp - 273) + '&deg';
            // Основная погода
            document.querySelector(".mw0").innerHTML = data.list[1].weather[0].main;
            document.querySelector(".mw1").innerHTML = data.list[5].weather[0].main;
            document.querySelector(".mw2").innerHTML = data.list[9].weather[0].main;
            document.querySelector(".mw3").innerHTML = data.list[13].weather[0].main;
            document.querySelector(".mw4").innerHTML = data.list[17].weather[0].main;
            document.querySelector(".mw5").innerHTML = data.list[21].weather[0].main;
            document.querySelector(".mw6").innerHTML = data.list[25].weather[0].main;
            document.querySelector(".mw7").innerHTML = data.list[29].weather[0].main;
            document.querySelector(".mw8").innerHTML = data.list[33].weather[0].main;
            document.querySelector(".mw9").innerHTML = data.list[37].weather[0].main;
            // Описание 
            document.querySelector(".md0").innerHTML = data.list[1].weather[0].description;
            document.querySelector(".md1").innerHTML = data.list[5].weather[0].description;
            document.querySelector(".md2").innerHTML = data.list[9].weather[0].description;
            document.querySelector(".md3").innerHTML = data.list[13].weather[0].description;
            document.querySelector(".md4").innerHTML = data.list[17].weather[0].description;
            document.querySelector(".md5").innerHTML = data.list[21].weather[0].description;
            document.querySelector(".md6").innerHTML = data.list[25].weather[0].description;
            document.querySelector(".md7").innerHTML = data.list[29].weather[0].description;
            document.querySelector(".md8").innerHTML = data.list[33].weather[0].description;
            document.querySelector(".md9").innerHTML = data.list[37].weather[0].description;
            // Скорость ветра
            document.querySelector(".mi0").innerHTML = "wind speed: " + data.list[1].wind.speed + " m/s";
            document.querySelector(".mi1").innerHTML = "wind speed: " + data.list[5].wind.speed + " m/s";
            document.querySelector(".mi2").innerHTML = "wind speed: " + data.list[9].wind.speed + " m/s";
            document.querySelector(".mi3").innerHTML = "wind speed: " + data.list[13].wind.speed + " m/s";
            document.querySelector(".mi4").innerHTML = "wind speed: " + data.list[17].wind.speed + " m/s";
            document.querySelector(".mi5").innerHTML = "wind speed: " + data.list[21].wind.speed + " m/s";
            document.querySelector(".mi6").innerHTML = "wind speed: " + data.list[25].wind.speed + " m/s";
            document.querySelector(".mi7").innerHTML = "wind speed: " + data.list[29].wind.speed + " m/s";
            document.querySelector(".mi8").innerHTML = "wind speed: " + data.list[33].wind.speed + " m/s";
            document.querySelector(".mi9").innerHTML = "wind speed: " + data.list[37].wind.speed + " m/s";
            //Влажность
            document.querySelector(".mh0").innerHTML = "humidity: " + data.list[1].main.humidity + "%";
            document.querySelector(".mh1").innerHTML = "humidity: " + data.list[5].main.humidity + "%";
            document.querySelector(".mh2").innerHTML = "humidity: " + data.list[9].main.humidity + "%";
            document.querySelector(".mh3").innerHTML = "humidity: " + data.list[13].main.humidity + "%";
            document.querySelector(".mh4").innerHTML = "humidity: " + data.list[17].main.humidity + "%";
            document.querySelector(".mh5").innerHTML = "humidity: " + data.list[21].main.humidity + "%";
            document.querySelector(".mh6").innerHTML = "humidity: " + data.list[25].main.humidity + "%";
            document.querySelector(".mh7").innerHTML = "humidity: " + data.list[29].main.humidity + "%";
            document.querySelector(".mh8").innerHTML = "humidity: " + data.list[33].main.humidity + "%";
            document.querySelector(".mh9").innerHTML = "humidity: " + data.list[37].main.humidity + "%";
            //Туман
            document.querySelector(".mg0").innerHTML = "gust: " + data.list[1].wind.gust;
            document.querySelector(".mg1").innerHTML = "gust: " + data.list[5].wind.gust;
            document.querySelector(".mg2").innerHTML = "gust: " + data.list[9].wind.gust;
            document.querySelector(".mg3").innerHTML = "gust: " + data.list[13].wind.gust;
            document.querySelector(".mg4").innerHTML = "gust: " + data.list[17].wind.gust;
            document.querySelector(".mg5").innerHTML = "gust: " + data.list[21].wind.gust;
            document.querySelector(".mg6").innerHTML = "gust: " + data.list[25].wind.gust;
            document.querySelector(".mg7").innerHTML = "gust: " + data.list[29].wind.gust;
            document.querySelector(".mg8").innerHTML = "gust: " + data.list[33].wind.gust;
            document.querySelector(".mg9").innerHTML = "gust: " + data.list[37].wind.gust;
            //Картинки
            // https://openweathermap.org/img/wn/04n@2x.png
            document.querySelector(".feat0").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[1].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat1").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[5].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat2").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[9].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat3").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[13].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat4").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[17].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat5").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[21].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat6").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[25].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat7").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[29].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat8").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[33].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat9").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[37].weather[0].icon + '@2x.png" class="wimg">';
            //other
            document.querySelector("#cityname").innerHTML = data.city.name + ", " + data.city.country + " (5 days)";
        })
        .catch(function() {

        });
}