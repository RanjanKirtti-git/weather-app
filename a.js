let select=document.getElementById("city");
select.addEventListener("change",function(e){
    let ci=select.value;
    //console.log(ci);
    let xhr=new XMLHttpRequest();
    xhr.open('GET','https://api.openweathermap.org/data/2.5/weather?q='+ci+'&appid=2b154e7a5ddb69453c74a6ce343ee15d');
    xhr.onload=function()
    {
        let da=JSON.parse(xhr.response);    //converting json data to js object 
        console.log(da);
        let td=document.querySelectorAll('td');
        td[1].innerHTML=da.name;
        td[3].innerHTML=da.main.temp-273.15+" &#8451;";       //convert kelvin to celcius
        td[5].innerHTML=da.main.humidity+" %";
        td[7].innerHTML=da.main.pressure+" hPa";
        td[9].innerHTML=da.wind.speed+" m/s";
        td[11].innerHTML=da.clouds.all;
        td[13].innerHTML=formatAMPM(da.sys.sunrise);
        td[15].innerHTML=formatAMPM(da.sys.sunset);

    }
    xhr.send();
});

//this for converting unix timestamp to human-readable-time.
function formatAMPM(UNIX_timestamp) {

    var date = new Date(UNIX_timestamp * 1000);

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var secends = date.getSeconds();

    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    secends = secends < 10 ? '0' + secends : secends;
    var strTime = hours + ':' + minutes + ':' + secends + ' ' + ampm;

    return strTime;
}

// console.log(formatAMPM(1609069462));
