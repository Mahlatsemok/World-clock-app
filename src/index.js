function time() {
    let honoluluElement = document.querySelector("#honolulu");
    if (honoluluElement) {
        let honoluluDateElement = honoluluElement.querySelector(".date");
        let honoluluTimeElement = honoluluElement.querySelector(".time");
        let honoluluTime = moment().tz("Pacific/Honolulu");

        honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do YYYY");
        honoluluTimeElement.innerHTML = honoluluTime.format("h:mm:ss:SS [<small>]A[</small>]");
    }

    let panamaElement = document.querySelector("#panama");
    if (panamaElement) {
        let panamaDateElement = panamaElement.querySelector(".date");
        let panamaTimeElement = panamaElement.querySelector(".time");
        let panamaTime = moment().tz("America/Panama");

        panamaDateElement.innerHTML = panamaTime.format("MMMM Do YYYY");
        panamaTimeElement.innerHTML = panamaTime.format("h:mm:ss:SS [<small>]A[</small>]");
    }

    let hong_kongElement = document.querySelector("#hong_kong");
    if (hong_kongElement) {
        let hong_kongDateElement = hong_kongElement.querySelector(".date");
        let hong_kongTimeElement = hong_kongElement.querySelector(".time");
        let hong_kongTime = moment().tz("Asia/Hong_Kong");

        hong_kongDateElement.innerHTML = hong_kongTime.format("MMMM Do YYYY");
        hong_kongTimeElement.innerHTML = hong_kongTime.format("h:mm:ss:SS [<small>]A[</small>]");
    }
}

function city(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") 
    cityTimeZone = moment.tz.guess();
    let cityName = cityTimeZone.replace("_", "").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <span class="city">
    <span>
    <h2>${cityName}</h2>
    <span class="date">${cityTime.format("MMMM Do YYYY")}</span>
    </span>
    <span class="time">${cityTime.format("h:mm:ss:SS")} <small>${cityTime.format("A")}</small></span>
    </span>
    <a href="/">All cities</a>
    `;
}

time();
setInterval(time, 1);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", city);