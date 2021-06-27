const test = "http://api.openweathermap.org/data/2.5/forecast?q=London&appid=014e1a4022cb99cf5234c6849cfa9289";
const Mosurl = "http://api.openweathermap.org/data/2.5/forecast?q=Moscow&appid=014e1a4022cb99cf5234c6849cfa9289";

fetch(Mosurl)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data);
        document.querySelector(".m0").innerHTML = data.list[0].dt_txt;
        document.querySelector(".m1").innerHTML = data.list[1].dt_txt;
        document.querySelector(".m2").innerHTML = data.list[2].dt_txt;
        document.querySelector(".m3").innerHTML = data.list[3].dt_txt;
        document.querySelector(".m4").innerHTML = data.list[4].dt_txt;
        document.querySelector(".m5").innerHTML = data.list[5].dt_txt;
        document.querySelector(".m6").innerHTML = data.list[6].dt_txt;
        document.querySelector(".m7").innerHTML = data.list[7].dt_txt;
        document.querySelector(".m8").innerHTML = data.list[8].dt_txt;
        document.querySelector(".m9").innerHTML = data.list[9].dt_txt;
        document.querySelector(".m10").innerHTML = data.list[10].dt_txt;
        document.querySelector(".m11").innerHTML = data.list[11].dt_txt;
        document.querySelector(".m12").innerHTML = data.list[12].dt_txt;
        document.querySelector(".m13").innerHTML = data.list[13].dt_txt;
        document.querySelector(".m14").innerHTML = data.list[14].dt_txt;
        document.querySelector(".m15").innerHTML = data.list[15].dt_txt;
        document.querySelector(".m16").innerHTML = data.list[16].dt_txt;
        // Температура
        document.querySelector(".degreemain").innerHTML = Math.round(data.list[0].main.temp - 273) + '&degC';
        document.querySelector(".mt0").innerHTML = Math.round(data.list[0].main.temp - 273) + '&deg';
        document.querySelector(".mt1").innerHTML = Math.round(data.list[1].main.temp - 273) + '&deg';
        document.querySelector(".mt2").innerHTML = Math.round(data.list[2].main.temp - 273) + '&deg';
        document.querySelector(".mt3").innerHTML = Math.round(data.list[3].main.temp - 273) + '&deg';
        document.querySelector(".mt4").innerHTML = Math.round(data.list[4].main.temp - 273) + '&deg';
        document.querySelector(".mt5").innerHTML = Math.round(data.list[5].main.temp - 273) + '&deg';
        document.querySelector(".mt6").innerHTML = Math.round(data.list[6].main.temp - 273) + '&deg';
        document.querySelector(".mt7").innerHTML = Math.round(data.list[7].main.temp - 273) + '&deg';
        document.querySelector(".mt8").innerHTML = Math.round(data.list[8].main.temp - 273) + '&deg';
        document.querySelector(".mt9").innerHTML = Math.round(data.list[9].main.temp - 273) + '&deg';
        document.querySelector(".mt10").innerHTML = Math.round(data.list[10].main.temp - 273) + '&deg';
        document.querySelector(".mt11").innerHTML = Math.round(data.list[11].main.temp - 273) + '&deg';
        document.querySelector(".mt12").innerHTML = Math.round(data.list[12].main.temp - 273) + '&deg';
        document.querySelector(".mt13").innerHTML = Math.round(data.list[13].main.temp - 273) + '&deg';
        document.querySelector(".mt14").innerHTML = Math.round(data.list[14].main.temp - 273) + '&deg';
        document.querySelector(".mt15").innerHTML = Math.round(data.list[15].main.temp - 273) + '&deg';
        document.querySelector(".mt16").innerHTML = Math.round(data.list[16].main.temp - 273) + '&deg';
        // Основная погода
        document.querySelector(".mw0").innerHTML = data.list[0].weather[0].main;
        document.querySelector(".mw1").innerHTML = data.list[1].weather[0].main;
        document.querySelector(".mw2").innerHTML = data.list[2].weather[0].main;
        document.querySelector(".mw3").innerHTML = data.list[3].weather[0].main;
        document.querySelector(".mw4").innerHTML = data.list[4].weather[0].main;
        document.querySelector(".mw5").innerHTML = data.list[5].weather[0].main;
        document.querySelector(".mw6").innerHTML = data.list[6].weather[0].main;
        document.querySelector(".mw7").innerHTML = data.list[7].weather[0].main;
        document.querySelector(".mw8").innerHTML = data.list[8].weather[0].main;
        document.querySelector(".mw9").innerHTML = data.list[9].weather[0].main;
        document.querySelector(".mw10").innerHTML = data.list[10].weather[0].main;
        document.querySelector(".mw11").innerHTML = data.list[11].weather[0].main;
        document.querySelector(".mw12").innerHTML = data.list[12].weather[0].main;
        document.querySelector(".mw13").innerHTML = data.list[13].weather[0].main;
        document.querySelector(".mw14").innerHTML = data.list[14].weather[0].main;
        document.querySelector(".mw15").innerHTML = data.list[15].weather[0].main;
        document.querySelector(".mw16").innerHTML = data.list[16].weather[0].main;
        // Описание 
        document.querySelector(".md0").innerHTML = data.list[0].weather[0].description;
        document.querySelector(".md1").innerHTML = data.list[1].weather[0].description;
        document.querySelector(".md2").innerHTML = data.list[2].weather[0].description;
        document.querySelector(".md3").innerHTML = data.list[3].weather[0].description;
        document.querySelector(".md4").innerHTML = data.list[4].weather[0].description;
        document.querySelector(".md5").innerHTML = data.list[5].weather[0].description;
        document.querySelector(".md6").innerHTML = data.list[6].weather[0].description;
        document.querySelector(".md7").innerHTML = data.list[7].weather[0].description;
        document.querySelector(".md8").innerHTML = data.list[8].weather[0].description;
        document.querySelector(".md9").innerHTML = data.list[9].weather[0].description;
        document.querySelector(".md10").innerHTML = data.list[10].weather[0].description;
        document.querySelector(".md11").innerHTML = data.list[11].weather[0].description;
        document.querySelector(".md12").innerHTML = data.list[12].weather[0].description;
        document.querySelector(".md13").innerHTML = data.list[13].weather[0].description;
        document.querySelector(".md14").innerHTML = data.list[14].weather[0].description;
        document.querySelector(".md15").innerHTML = data.list[15].weather[0].description;
        document.querySelector(".md16").innerHTML = data.list[16].weather[0].description;
        // Скорость ветра
        document.querySelector(".mi0").innerHTML = "wind speed: " + data.list[0].wind.speed + " m/s";
        document.querySelector(".mi1").innerHTML = "wind speed: " + data.list[1].wind.speed + " m/s";
        document.querySelector(".mi2").innerHTML = "wind speed: " + data.list[2].wind.speed + " m/s";
        document.querySelector(".mi3").innerHTML = "wind speed: " + data.list[3].wind.speed + " m/s";
        document.querySelector(".mi4").innerHTML = "wind speed: " + data.list[4].wind.speed + " m/s";
        document.querySelector(".mi5").innerHTML = "wind speed: " + data.list[5].wind.speed + " m/s";
        document.querySelector(".mi6").innerHTML = "wind speed: " + data.list[6].wind.speed + " m/s";
        document.querySelector(".mi7").innerHTML = "wind speed: " + data.list[7].wind.speed + " m/s";
        document.querySelector(".mi8").innerHTML = "wind speed: " + data.list[8].wind.speed + " m/s";
        document.querySelector(".mi9").innerHTML = "wind speed: " + data.list[9].wind.speed + " m/s";
        document.querySelector(".mi10").innerHTML = "wind speed: " + data.list[10].wind.speed + " m/s";
        document.querySelector(".mi11").innerHTML = "wind speed: " + data.list[11].wind.speed + " m/s";
        document.querySelector(".mi12").innerHTML = "wind speed: " + data.list[12].wind.speed + " m/s";
        document.querySelector(".mi13").innerHTML = "wind speed: " + data.list[13].wind.speed + " m/s";
        document.querySelector(".mi14").innerHTML = "wind speed: " + data.list[14].wind.speed + " m/s";
        document.querySelector(".mi15").innerHTML = "wind speed: " + data.list[15].wind.speed + " m/s";
        document.querySelector(".mi16").innerHTML = "wind speed: " + data.list[16].wind.speed + " m/s";
        //Влажность
        document.querySelector(".mh0").innerHTML = "humidity: " + data.list[0].main.humidity + "%";
        document.querySelector(".mh1").innerHTML = "humidity: " + data.list[1].main.humidity + "%";
        document.querySelector(".mh2").innerHTML = "humidity: " + data.list[2].main.humidity + "%";
        document.querySelector(".mh3").innerHTML = "humidity: " + data.list[3].main.humidity + "%";
        document.querySelector(".mh4").innerHTML = "humidity: " + data.list[4].main.humidity + "%";
        document.querySelector(".mh5").innerHTML = "humidity: " + data.list[5].main.humidity + "%";
        document.querySelector(".mh6").innerHTML = "humidity: " + data.list[6].main.humidity + "%";
        document.querySelector(".mh7").innerHTML = "humidity: " + data.list[7].main.humidity + "%";
        document.querySelector(".mh8").innerHTML = "humidity: " + data.list[8].main.humidity + "%";
        document.querySelector(".mh9").innerHTML = "humidity: " + data.list[9].main.humidity + "%";
        document.querySelector(".mh10").innerHTML = "humidity: " + data.list[10].main.humidity + "%";
        document.querySelector(".mh11").innerHTML = "humidity: " + data.list[11].main.humidity + "%";
        document.querySelector(".mh12").innerHTML = "humidity: " + data.list[12].main.humidity + "%";
        document.querySelector(".mh13").innerHTML = "humidity: " + data.list[13].main.humidity + "%";
        document.querySelector(".mh14").innerHTML = "humidity: " + data.list[14].main.humidity + "%";
        document.querySelector(".mh15").innerHTML = "humidity: " + data.list[15].main.humidity + "%";
        document.querySelector(".mh16").innerHTML = "humidity: " + data.list[16].main.humidity + "%";
        //Туман
        document.querySelector(".mg0").innerHTML = "gust: " + data.list[0].wind.gust;
        document.querySelector(".mg1").innerHTML = "gust: " + data.list[1].wind.gust;
        document.querySelector(".mg2").innerHTML = "gust: " + data.list[2].wind.gust;
        document.querySelector(".mg3").innerHTML = "gust: " + data.list[3].wind.gust;
        document.querySelector(".mg4").innerHTML = "gust: " + data.list[4].wind.gust;
        document.querySelector(".mg5").innerHTML = "gust: " + data.list[5].wind.gust;
        document.querySelector(".mg6").innerHTML = "gust: " + data.list[6].wind.gust;
        document.querySelector(".mg7").innerHTML = "gust: " + data.list[7].wind.gust;
        document.querySelector(".mg8").innerHTML = "gust: " + data.list[8].wind.gust;
        document.querySelector(".mg9").innerHTML = "gust: " + data.list[9].wind.gust;
        document.querySelector(".mg10").innerHTML = "gust: " + data.list[10].wind.gust;
        document.querySelector(".mg11").innerHTML = "gust: " + data.list[11].wind.gust;
        document.querySelector(".mg12").innerHTML = "gust: " + data.list[12].wind.gust;
        document.querySelector(".mg13").innerHTML = "gust: " + data.list[13].wind.gust;
        document.querySelector(".mg14").innerHTML = "gust: " + data.list[14].wind.gust;
        document.querySelector(".mg15").innerHTML = "gust: " + data.list[15].wind.gust;
        document.querySelector(".mg16").innerHTML = "gust: " + data.list[16].wind.gust;
        //Картинки
        // https://openweathermap.org/img/wn/04n@2x.png
        document.querySelector(".feat0").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat1").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[1].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat2").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[2].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat3").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[3].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat4").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[4].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat5").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[5].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat6").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[6].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat7").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[7].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat8").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[8].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat9").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[9].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat10").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[10].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat11").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[11].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat12").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[12].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat13").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[13].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat14").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[14].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat15").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[15].weather[0].icon + '@2x.png" class="wimg">';
        document.querySelector(".feat16").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[16].weather[0].icon + '@2x.png" class="wimg">';
        //other
        document.querySelector("#cityname").innerHTML = data.city.name + ", " + data.city.country + " (one day)";
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
            document.querySelector(".m0").innerHTML = data.list[0].dt_txt;
            document.querySelector(".m1").innerHTML = data.list[1].dt_txt;
            document.querySelector(".m2").innerHTML = data.list[2].dt_txt;
            document.querySelector(".m3").innerHTML = data.list[3].dt_txt;
            document.querySelector(".m4").innerHTML = data.list[4].dt_txt;
            document.querySelector(".m5").innerHTML = data.list[5].dt_txt;
            document.querySelector(".m6").innerHTML = data.list[6].dt_txt;
            document.querySelector(".m7").innerHTML = data.list[7].dt_txt;
            document.querySelector(".m8").innerHTML = data.list[8].dt_txt;
            document.querySelector(".m9").innerHTML = data.list[9].dt_txt;
            document.querySelector(".m10").innerHTML = data.list[10].dt_txt;
            document.querySelector(".m11").innerHTML = data.list[11].dt_txt;
            document.querySelector(".m12").innerHTML = data.list[12].dt_txt;
            document.querySelector(".m13").innerHTML = data.list[13].dt_txt;
            document.querySelector(".m14").innerHTML = data.list[14].dt_txt;
            document.querySelector(".m15").innerHTML = data.list[15].dt_txt;
            document.querySelector(".m16").innerHTML = data.list[16].dt_txt;
            // Температура
            document.querySelector(".degreemain").innerHTML = Math.round(data.list[0].main.temp - 273) + '&degC';
            document.querySelector(".mt0").innerHTML = Math.round(data.list[0].main.temp - 273) + '&deg';
            document.querySelector(".mt1").innerHTML = Math.round(data.list[1].main.temp - 273) + '&deg';
            document.querySelector(".mt2").innerHTML = Math.round(data.list[2].main.temp - 273) + '&deg';
            document.querySelector(".mt3").innerHTML = Math.round(data.list[3].main.temp - 273) + '&deg';
            document.querySelector(".mt4").innerHTML = Math.round(data.list[4].main.temp - 273) + '&deg';
            document.querySelector(".mt5").innerHTML = Math.round(data.list[5].main.temp - 273) + '&deg';
            document.querySelector(".mt6").innerHTML = Math.round(data.list[6].main.temp - 273) + '&deg';
            document.querySelector(".mt7").innerHTML = Math.round(data.list[7].main.temp - 273) + '&deg';
            document.querySelector(".mt8").innerHTML = Math.round(data.list[8].main.temp - 273) + '&deg';
            document.querySelector(".mt9").innerHTML = Math.round(data.list[9].main.temp - 273) + '&deg';
            document.querySelector(".mt10").innerHTML = Math.round(data.list[10].main.temp - 273) + '&deg';
            document.querySelector(".mt11").innerHTML = Math.round(data.list[11].main.temp - 273) + '&deg';
            document.querySelector(".mt12").innerHTML = Math.round(data.list[12].main.temp - 273) + '&deg';
            document.querySelector(".mt13").innerHTML = Math.round(data.list[13].main.temp - 273) + '&deg';
            document.querySelector(".mt14").innerHTML = Math.round(data.list[14].main.temp - 273) + '&deg';
            document.querySelector(".mt15").innerHTML = Math.round(data.list[15].main.temp - 273) + '&deg';
            document.querySelector(".mt16").innerHTML = Math.round(data.list[16].main.temp - 273) + '&deg';
            // Основная погода
            document.querySelector(".mw0").innerHTML = data.list[0].weather[0].main;
            document.querySelector(".mw1").innerHTML = data.list[1].weather[0].main;
            document.querySelector(".mw2").innerHTML = data.list[2].weather[0].main;
            document.querySelector(".mw3").innerHTML = data.list[3].weather[0].main;
            document.querySelector(".mw4").innerHTML = data.list[4].weather[0].main;
            document.querySelector(".mw5").innerHTML = data.list[5].weather[0].main;
            document.querySelector(".mw6").innerHTML = data.list[6].weather[0].main;
            document.querySelector(".mw7").innerHTML = data.list[7].weather[0].main;
            document.querySelector(".mw8").innerHTML = data.list[8].weather[0].main;
            document.querySelector(".mw9").innerHTML = data.list[9].weather[0].main;
            document.querySelector(".mw10").innerHTML = data.list[10].weather[0].main;
            document.querySelector(".mw11").innerHTML = data.list[11].weather[0].main;
            document.querySelector(".mw12").innerHTML = data.list[12].weather[0].main;
            document.querySelector(".mw13").innerHTML = data.list[13].weather[0].main;
            document.querySelector(".mw14").innerHTML = data.list[14].weather[0].main;
            document.querySelector(".mw15").innerHTML = data.list[15].weather[0].main;
            document.querySelector(".mw16").innerHTML = data.list[16].weather[0].main;
            // Описание 
            document.querySelector(".md0").innerHTML = data.list[0].weather[0].description;
            document.querySelector(".md1").innerHTML = data.list[1].weather[0].description;
            document.querySelector(".md2").innerHTML = data.list[2].weather[0].description;
            document.querySelector(".md3").innerHTML = data.list[3].weather[0].description;
            document.querySelector(".md4").innerHTML = data.list[4].weather[0].description;
            document.querySelector(".md5").innerHTML = data.list[5].weather[0].description;
            document.querySelector(".md6").innerHTML = data.list[6].weather[0].description;
            document.querySelector(".md7").innerHTML = data.list[7].weather[0].description;
            document.querySelector(".md8").innerHTML = data.list[8].weather[0].description;
            document.querySelector(".md9").innerHTML = data.list[9].weather[0].description;
            document.querySelector(".md10").innerHTML = data.list[10].weather[0].description;
            document.querySelector(".md11").innerHTML = data.list[11].weather[0].description;
            document.querySelector(".md12").innerHTML = data.list[12].weather[0].description;
            document.querySelector(".md13").innerHTML = data.list[13].weather[0].description;
            document.querySelector(".md14").innerHTML = data.list[14].weather[0].description;
            document.querySelector(".md15").innerHTML = data.list[15].weather[0].description;
            document.querySelector(".md16").innerHTML = data.list[16].weather[0].description;
            // Скорость ветра
            document.querySelector(".mi0").innerHTML = "wind speed: " + data.list[0].wind.speed + " m/s";
            document.querySelector(".mi1").innerHTML = "wind speed: " + data.list[1].wind.speed + " m/s";
            document.querySelector(".mi2").innerHTML = "wind speed: " + data.list[2].wind.speed + " m/s";
            document.querySelector(".mi3").innerHTML = "wind speed: " + data.list[3].wind.speed + " m/s";
            document.querySelector(".mi4").innerHTML = "wind speed: " + data.list[4].wind.speed + " m/s";
            document.querySelector(".mi5").innerHTML = "wind speed: " + data.list[5].wind.speed + " m/s";
            document.querySelector(".mi6").innerHTML = "wind speed: " + data.list[6].wind.speed + " m/s";
            document.querySelector(".mi7").innerHTML = "wind speed: " + data.list[7].wind.speed + " m/s";
            document.querySelector(".mi8").innerHTML = "wind speed: " + data.list[8].wind.speed + " m/s";
            document.querySelector(".mi9").innerHTML = "wind speed: " + data.list[9].wind.speed + " m/s";
            document.querySelector(".mi10").innerHTML = "wind speed: " + data.list[10].wind.speed + " m/s";
            document.querySelector(".mi11").innerHTML = "wind speed: " + data.list[11].wind.speed + " m/s";
            document.querySelector(".mi12").innerHTML = "wind speed: " + data.list[12].wind.speed + " m/s";
            document.querySelector(".mi13").innerHTML = "wind speed: " + data.list[13].wind.speed + " m/s";
            document.querySelector(".mi14").innerHTML = "wind speed: " + data.list[14].wind.speed + " m/s";
            document.querySelector(".mi15").innerHTML = "wind speed: " + data.list[15].wind.speed + " m/s";
            document.querySelector(".mi16").innerHTML = "wind speed: " + data.list[16].wind.speed + " m/s";
            //Влажность
            document.querySelector(".mh0").innerHTML = "humidity: " + data.list[0].main.humidity + "%";
            document.querySelector(".mh1").innerHTML = "humidity: " + data.list[1].main.humidity + "%";
            document.querySelector(".mh2").innerHTML = "humidity: " + data.list[2].main.humidity + "%";
            document.querySelector(".mh3").innerHTML = "humidity: " + data.list[3].main.humidity + "%";
            document.querySelector(".mh4").innerHTML = "humidity: " + data.list[4].main.humidity + "%";
            document.querySelector(".mh5").innerHTML = "humidity: " + data.list[5].main.humidity + "%";
            document.querySelector(".mh6").innerHTML = "humidity: " + data.list[6].main.humidity + "%";
            document.querySelector(".mh7").innerHTML = "humidity: " + data.list[7].main.humidity + "%";
            document.querySelector(".mh8").innerHTML = "humidity: " + data.list[8].main.humidity + "%";
            document.querySelector(".mh9").innerHTML = "humidity: " + data.list[9].main.humidity + "%";
            document.querySelector(".mh10").innerHTML = "humidity: " + data.list[10].main.humidity + "%";
            document.querySelector(".mh11").innerHTML = "humidity: " + data.list[11].main.humidity + "%";
            document.querySelector(".mh12").innerHTML = "humidity: " + data.list[12].main.humidity + "%";
            document.querySelector(".mh13").innerHTML = "humidity: " + data.list[13].main.humidity + "%";
            document.querySelector(".mh14").innerHTML = "humidity: " + data.list[14].main.humidity + "%";
            document.querySelector(".mh15").innerHTML = "humidity: " + data.list[15].main.humidity + "%";
            document.querySelector(".mh16").innerHTML = "humidity: " + data.list[16].main.humidity + "%";
            //Туман
            document.querySelector(".mg0").innerHTML = "gust: " + data.list[0].wind.gust;
            document.querySelector(".mg1").innerHTML = "gust: " + data.list[1].wind.gust;
            document.querySelector(".mg2").innerHTML = "gust: " + data.list[2].wind.gust;
            document.querySelector(".mg3").innerHTML = "gust: " + data.list[3].wind.gust;
            document.querySelector(".mg4").innerHTML = "gust: " + data.list[4].wind.gust;
            document.querySelector(".mg5").innerHTML = "gust: " + data.list[5].wind.gust;
            document.querySelector(".mg6").innerHTML = "gust: " + data.list[6].wind.gust;
            document.querySelector(".mg7").innerHTML = "gust: " + data.list[7].wind.gust;
            document.querySelector(".mg8").innerHTML = "gust: " + data.list[8].wind.gust;
            document.querySelector(".mg9").innerHTML = "gust: " + data.list[9].wind.gust;
            document.querySelector(".mg10").innerHTML = "gust: " + data.list[10].wind.gust;
            document.querySelector(".mg11").innerHTML = "gust: " + data.list[11].wind.gust;
            document.querySelector(".mg12").innerHTML = "gust: " + data.list[12].wind.gust;
            document.querySelector(".mg13").innerHTML = "gust: " + data.list[13].wind.gust;
            document.querySelector(".mg14").innerHTML = "gust: " + data.list[14].wind.gust;
            document.querySelector(".mg15").innerHTML = "gust: " + data.list[15].wind.gust;
            document.querySelector(".mg16").innerHTML = "gust: " + data.list[16].wind.gust;
            //Картинки
            // https://openweathermap.org/img/wn/04n@2x.png
            document.querySelector(".feat0").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat1").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[1].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat2").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[2].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat3").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[3].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat4").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[4].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat5").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[5].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat6").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[6].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat7").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[7].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat8").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[8].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat9").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[9].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat10").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[10].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat11").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[11].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat12").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[12].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat13").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[13].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat14").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[14].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat15").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[15].weather[0].icon + '@2x.png" class="wimg">';
            document.querySelector(".feat16").innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[16].weather[0].icon + '@2x.png" class="wimg">';
            //other
            document.querySelector("#cityname").innerHTML = data.city.name + ", " + data.city.country + " (one day)";
        })
        .catch(function() {

        });
}