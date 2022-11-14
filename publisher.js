const amqp = require('amqplib/callback_api');
var Express = require("express");
var Multer = require("multer");
var Minio = require("minio");
var BodyParser = require("body-parser");
var app = Express();

app.use(BodyParser.json({limit: "4mb"}));

var minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'VA32187YqIICQ76Z',
    secretKey: 'yKd0HVTMSVyOqYEvpQGHaMDlmNca5eoJ'
});



app.post("/upload", Multer({storage: Multer.memoryStorage()}).single("upload"), function(request, response) {
    minioClient.putObject("test", request.file.originalname, request.file.buffer, function(error, etag) {
        if(error) {
            return console.log(error);
        }
        let imageUrl = minioClient.protocol + '//' + minioClient.host + ':' + minioClient.port+ '/' + 'test' + '/' + request.file.originalname
        amqp.connect(`amqp://localhost`,(err,connection)=>{
    if(err){
        throw err;
    }
    connection.createChannel((err,channel)=>{
        if(err){
            throw err;
        }
        let queueName = 'technical';
        let message = imageUrl;
        channel.assertQueue(queueName,{
            durable:false
        })
        channel.sendToQueue(queueName,Buffer.from(message));
        console.log(`message :${message}`)
        setTimeout(() => {
            connection.close();
        }, 1000);
    })
})
        response.send(imageUrl);
    });
});

minioClient.bucketExists("test", function(error) {
    if(error) {
        return console.log(error);
    }
    var server = app.listen(3000, function() {
        console.log("Listening on port %s...", server.address().port);
    });
});