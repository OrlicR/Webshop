var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get("/podaci", function(request, response){
    return response.send({messasge:"ok"});
})

app.get("/podaci/:id", function(request, response){
    var id = request.params.id;
    return response.send({messasge: id+ " sve je ok"});
})

app.post("/podaci", function(request, response){
    var podaci = request.body.podatak;
    return response.send({message:" sve je ok"});
})

app.post("/korisnik", function(request, response){
    var ime = request.body.ime;
    var prezime = request.body.prezime;

    return response.send({korisnik: "CREATE "+ime+" " +prezime});
})

app.put("/korisnik/:id", function(request, response){
    var id = request.params.id;
    var adresa = request.body.adresa;
    return response.send({korisnik: "UPDATE "+id+" nova adresa:" +adresa});
})

app.delete("/korisnik/:id", function(request, response){
    var id = request.params.id;
    return response.send({korisnik: "DELETE "+id});
})


app.get("/korisnik/", function(request, response){
    return response.send({korisnik: "READ "});
})

app.get("/korisnik/:id", function(request, response){
    var id = request.params.id;
    return response.send({korisnik: "READ "+id});
})

// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
