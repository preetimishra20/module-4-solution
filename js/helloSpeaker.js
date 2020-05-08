(function (window) {

var helloSpeaker = {};
var Speaker = "Hello";


helloSpeaker.speak = function (name) {
	console.log(Speaker + " " + name);
}

window.helloSpeaker = helloSpeaker;

})(window);

