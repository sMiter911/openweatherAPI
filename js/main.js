
var d = new Date()
var days = ["Monday", "Tuesday", "Wednesdat", "Thursday", "Friday", "Saturday", "Sunday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML = days[d.getDay()] + ',' + d.getDate() + '<sup>th</sup> of ' + months[d.getMonth()] + ' ' + d.getFullYear() ;

//Create a request variable and assign the XMLHttpRequest object to it
var request  = new XMLHttpRequest();

// Open a ne connection the GET request on the URL endpoint
request.open('GET', 
'http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=7e7d0722167129bd515d24a5b8665b28&q=Johannesburg,za&units=metric&mode=json', 
true)

request.onload = () => {

    if (request.readyState === 4){
        if (request.status === 200){
            //console.log(request.responseText)
            var response = JSON.parse(request.responseText)
            console.log(response.main.temp)
            document.getElementById('temp').textContent = response.main.temp +'°c'
        }else{
            console.error(request.statusText)
        }
    }
}
request.error = () => {
    console.error(request.statusText)
}

// send the request
request.send();