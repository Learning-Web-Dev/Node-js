const EventEmitter = require("events");

const myEmitter = new EventEmitter();

//callback
const handleEmitter = (name) => console.log(`Hello ${name}`);

myEmitter.on("greet", handleEmitter);

module.exports = { myEmitter };
