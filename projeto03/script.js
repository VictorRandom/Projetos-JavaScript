

document.querySelector(".busca").addEventListener("submit", async (event) => {
    event.preventDefault(); //para prevenir que a pagina atualize ao enviar o formulario

    let input = document.querySelector("#searchInput").value;

    if(input !== ""){
        clearInfo()
        warning("Carregando")

        //site dos dados: https://openweathermap.org/
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=384d9af7b1b50a06f517435afffeba4b&units=metric&lang=pt_br`;

        let results = await fetch(url)
        let json = await results.json();
        //cod: 404 -> erro
        //cod: 200 -> achou cidade

        if(json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg,
            })
        } else {
            clearInfo()
            warning("Cidade não encontrada")
        }
    } 

})

function warning(msg){
    document.querySelector(".aviso").innerText = msg
}

function showInfo(json){
    warning('')

    document.querySelector(".titulo").innerHTML = `${json.name}, ${json.country}`
    document.querySelector(".tempInfo").innerHTML = `${json.temp} <sup>oC</sup>`
    document.querySelector(".ventoInfo").innerHTML = `${json.windSpeed} <span>km/h</span>`
    
    document.querySelector(".temp img").setAttribute('src',`http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)

    document.querySelector(".ventoPonto").style.transform = `rotate(${json.windAngle}deg)`

    document.querySelector(".resultado").style.display = 'block'
}

function clearInfo() {
    warning('')
    document.querySelector('.resultado').style.display = 'none'
}