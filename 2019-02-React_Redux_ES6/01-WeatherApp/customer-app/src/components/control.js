
'use strict'

var ping = require('ping');
var request = require('request');
/*var redis = require('redis'),client = redis.createClient({
      host: process.env.REDIS_HOST || '127.0.0.1'
    });*/
// no va var client = redis.createClient(6379,'120.0.0.1');
var group = "Bot Cencosud"

function checkEasyPing(req, res){
    ping.sys.probe("www.easy.com.ar", function(isAlive){

        console.log(isAlive);

        if(isAlive){
            /*client.on('connect', function() {
              console.log("Conexion correcta");
            });
                    client.on('error', function (err) {
                console.log('Something went wrong ' + err);
            });*/

            /*client.set('NLC','Nahuel Costamagna',function(err) {
              if (err) {
                throw err;
              } else {
                return res.status(200).send({status: "OK"});
              }
            });*/
return res.status(200).send({status : "OK", isAlive});
            /*client.get('NLC',function(err,value) {
              if (err) {
                console.log(err);
                return res.status(200).send({status : "error", err});
              }else {
                console.log(value);
                return res.status(200).send({status : "OK", value});
              }*/
          //  });

          /*  client.set('NLC','Nahuel Costamagna',function(err) {
            if (err) {
              throw err;
            } else {
              client.get('NLC',function(err,value) {
                if (err) {
                  throw err;
                } else {
                  console.log(value);
                  return res.status(200).send({status: "OK", description: "El sitio se encuentra arriba correctamente"});
                }
              });
            }
          });*/

      }else{
          request.get('http://ncostamagna.com.ar/api/cencosud/alertBot?authorization=AREASYCOM&group=' + group + '&message=Los DNS del sitio *Easy.com.ar* no se encuentran disponibles, el sitio se encuentra caido')
          .on('response', function(response) {
            return res.status(200).send({isAlive, response});
          })
        }
    });
}

function checkEasySite(req, res){
  var message = "El sitio *Easy.com.ar* se encuentra caido, codigo de retorno: "
  request.get('https://www.easy.com.ar')
  .on('response', function(response) {
    console.log(response.statusCode)
    if(response.statusCode === 200){
      return res.status(200).send({response, message:"Sitio OK"});
    }else{

      request.get('http://ncostamagna.com.ar/api/cencosud/alertBot?authorization=AREASYCOM&group=' + group + '&message=' + message + response.statusCode)
      .on('response', function(msg) {
        return res.status(200).send({response, message:"Sitio Caido"});
      })
    }

  }).on('error', function(error) {
    request.get('http://ncostamagna.com.ar/api/cencosud/alertBot?authorization=AREASYCOM&group=' + group + '&message=' + message )
    .on('response', function(msg) {
      return res.status(200).send({error, message:"Sitio Caido"});
    })
  });
}

function checkBOCSite(req, res){
  var message = "El *BOC* se encuentra caido, codigo de retorno: "
  console.log('http://172.18.153.68:9080/EasyBOCentral/');
  request.get('http://172.18.153.68:9080/EasyBOCentral/')
  .on('response', function(response) {
    console.log(response.statusCode)
    if(response.statusCode === 200){
      return res.status(200).send({response, message:"Sitio OK"});
    }else{
      /*request.get('http://ncostamagna.com.ar/api/cencosud/alertBot?authorization=AREASYCOM&group=' + group + '&message=' + message + response.statusCode)
      .on('response', function(msg) {
        return res.status(200).send({response, message:"Sitio Caido"});
      })*/
    }

  }).on('error', function(error) {
    console.log(error.code)
    return res.status(200).send({error, message:"No responde"});
/*
    request.get('http://ncostamagna.com.ar/api/cencosud/alertBot?authorization=AREASYCOM&group=' + group + '&message=' + message + response.statusCode)
    .on('response', function(msg) {
      return res.status(200).send({response, message:"Sitio Caido"});
    })*/

  });
}

function checkFullIndex(req, res){
  var key = req.body.key;

  if(key == 'xn8mv67j'){
    var message = "Fallo del FullIndex"
      request.get('http://ncostamagna.com.ar/api/cencosud/alertBot?authorization=AREASYCOM&group=' + group + '&message=' + message )
      .on('response', function(msg) {
        return res.status(200).send({message});
      });
  }else{
    return res.status(400).send({message:"Auth no valida"});
  }
}
module.exports = {
		checkEasyPing,
    checkEasySite,
    checkFullIndex,
    checkBOCSite
};
