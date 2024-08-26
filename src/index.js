function time() {
    let honoluluElement = document.querySelector("#honolulu");
    let honoluluDateElement = honoluluElement.querySelector(".date");
    let honoluluTimeElement = honoluluElement.querySelector(".time");
    let honoluluTime = moment().tz("Pacific/Honolulu");

    honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do YYYY");
    honoluluTimeElement.innerHTML = honoluluTime.format("h:mm:ss SS [<small>]A[</small>]");
 
    let panamaElement = document.querySelector("#panama");
    let panamaDateElement = panamaElement.querySelector(".date");
    let panamaTimeElement = panamaElement.querySelector(".time");
    let panamaTime = moment().tz("America/Panama");

    panamaDateElement.innerHTML = panamaTime.format("MMMM Do YYYY");
    panamaTimeElement.innerHTML = panamaTime.format("h:mm:ss SS [<small>]A[</small>]");

   let hong_kongElement = document.querySelector("#hong_kong");
   let hong_kongDateElement = hong_kongElement.querySelector(".date");
   let hong_kongTimeElement = hong_kongElement.querySelector(".time");
   let hong_kongTime = moment().tz("Asia/Hong_Kong");

   hong_kongDateElement.innerHTML = hong_kongTime.format("MMMM Do YYYY");
   hong_kongTimeElement.innerHTML = hong_kongTime.format("h:mm:ss SS [<small>]A[</small>]");
}

time();
setInterval(time, 1);