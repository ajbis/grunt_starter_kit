(function(){
	window.App = {};
	window.main;

	window.App.prototype.init = function(){
		var helloWorld = "Hello World!";
		alert(helloWorld);
	}
	
	window.main = new window.App();
	window.main.init();
})();

