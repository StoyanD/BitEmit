/**
 * Created by stoyan on 7/11/14.
 */
var util = require('util')
  , EventEmitter = require('events').EventEmitter
  , request = require('request')
  , moment = require('moment');

function BitEmit(){
  if(!this._exchanges){
    this._exchanges = {};
  }

};

util.inherits(BitEmit, EventEmitter);


BitEmit.prototype.addExchage = function(type, cryptoOpt, listener){

};

BitEmit.prototype.removeExchage = function(type){

};

BitEmit.prototype.start = function(){

};

BitEmit.prototype.stop = function(){

};

BitEmit.prototype.addCrypto = function(exchange, listener){

};





exports.BitEmit = BitEmit;


