function getTime() {
    let date = new Date(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        hour = date.getHours();

    return (hour < 10 ? ("0" + hour) : hour) + ":" + 
        (min < 10 ? ("0" + min) : min) + ":" + 
        (sec < 10 ? ("0" + sec) : sec);
}

function getDate() {
    let date = new Date()
    return date.toDateString()
}

window.onload = () => {
    let xhr = new XMLHttpRequest();
    xhr.open(
        'GET', 
        'http://api.openweathermap.org/data/2.5/' +
        'weather?id=3467865&units=metric&appid=e5b292ae2f9dae5f29e11499c2d82ece&lang=pt'
    );
    xhr.onload = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.responseText);
                // console.log(json); 
                document.getElementById("temperature").innerHTML = json.main.temp.toFixed(0) + " °C";
                document.getElementById("weather").innerHTML = json.weather[0].description;
                
            } else {
                console.log('error msg: ' + xhr.status);
            }
        }
    }
    
    xhr.send();
    document.getElementById("clock").innerHTML = getTime();
    document.getElementById("date").innerHTML = getDate();
    setInterval(() => document.getElementById("clock").innerHTML = getTime(), 100);
}
