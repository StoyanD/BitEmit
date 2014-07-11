/**
 * Created by stoyan on 7/11/14.
 */
var BitEmit = require('./bitemit').BitEmit;


function Bitstamp(){

};

Bitstamp.prototype = new BitEmit();

exports.Bitstamp = Bitstamp;