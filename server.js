const express = require("express");
const request = require("request");

const app = express();

app.set("view engine", "ejs");
app.get(request.toString("Public"));
app.get("/",function(req,res){
    request('https://restcountries.eu/rest/v2/name/eesti', function(error, response, body){
        let data = JSON.parse(response.body);
        res.render('Index',{
            name: data[0].name,
            region: data[0].region,
            CallingCodes: data[0].CallingCode[0],
            Languages: data[0].Languages[0].name,
            Populatsion: data[0].Population,
            TopLevelDomain: data[0].TopLevelDomain[0],
            AlphaCode: data[0].AlphaCode,
            Currency: data[0].Currencyles.symbol,
        });
    });
});




app.listen(process.name.POST||3000, function(){
    console.log("Server is running on port 3000");
}); 	