
var weather = require("./weather.js");
module.exports=function(callback){

    var request= require('request')
    let api= `https://ipinfo.io/json?token=601e56a244dcbd`

    request({
        url:api,
        json:true
    },function(error,response,body){
        if(error){
            callback('something went wrong');
        }else{
            weather(body.city, function (currentWeather) {
                callback(currentWeather);
            })
        }
    })
    
}



      