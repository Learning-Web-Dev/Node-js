var url = require("url");
var adr = "http://localhost:8080/default.html?year=2017&month=february";

/* 
Syntax :
--------
url.parse(url_string, parse_query_string, slashes_host)

Description of the parameters :
--------------------------------
    * url_string : <string> It is the URL string.
    * parse_query_string : <boolean> It is a boolean value. By default, its value is false. If it is set to true, then the query string is also parsed into an object. Otherwise, the query string is returned as an unparsed string.
    * slashes_host : <boolean> It is a boolean value. By default, its value is false. If it is set to true, then the token in between // and first / is considered host.

Ref Link : https://www.scaler.com/topics/nodejs/urls-and-query-strings-modules-in-nodejs/
*/

var q = url.parse(adr, true);

const newUrl = new url.URL(adr);

console.log("New URL : ", newUrl); //returns url array in JSON Format

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
