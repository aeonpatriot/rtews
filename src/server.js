// import { SerialPort } from 'serialport'
// import { ReadlineParser } from 'serialport'
// import { http } from 'http'
// import { Server } from 'socket.io'
// import { fs } from 'fs'
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const http = require('http');
const { Server } = require('socket.io')
const fs = require('fs');
var index = fs.readFileSync('./public/index.html');

var port = new SerialPort({
  path:'COM7',
  baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
})

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

var app = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(index);
})

const io = new Server(app, {})

io.on('connection', function(socket) {
    
  console.log('Node is listening to port');
  
});


parser.on('data', function(data) {
  let current = new Date()
  console.log(data);
  console.log(current);
  // if(data <= 1000) {
    io.emit('sensorData', {
      name: 'sensorData',
      value: data,
      time: current.toLocaleTimeString()
    });
  // }
})

app.listen(3030)