(function (window) {

var byeSpeaker = {};
var Speaker= "Good Bye";


byeSpeaker.speak = function (name) {
	console.log(Speaker + " " + name);
}

window.byeSpeaker = byeSpeaker;

})(window); 



