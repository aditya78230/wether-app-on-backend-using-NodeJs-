
var request= require('request')
let key='b3aaa0b3323c0baab93aff38f75b44cb'
module.exports=function(location, callback){
let api= `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`

request({
    url:api,
    json:true
},function(error,response,body){
    if(error){
        callback('something went wrong');
    }else{
        let weatherMain = body.weather[0].main;
        callback(`Its ${body.main.temp} in ${body.name} and weather is ${weatherMain} and Max ${body.main.temp_max} and humidity ${body.main.humidity} and Wind Speed ${body.wind.speed}`);
    }
})
}
