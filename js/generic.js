function GenericWarArenaClass(options){

	var defaults = {};

	var self = $.extend(this, defaults, options );

	return self;
}

GenericWarArenaClass.prototype._init = function() {
	var self = this;

	self.type = self.type || self._retrieveType("type"); 

	self._startParseDotCom();

	self._initType();
};

GenericWarArenaClass.prototype._initType = function() {
	
	var self = this;
	var new_class = null;

	switch(self.type){
		case "login":
			new_class = new WaLoginClass();
		break;
		
		case "add":
			new_class = new WaAddClass();
		break;
		
		case "view":
			new_class = new WaViewProfileClass();
		break;
		
		case "list":
			new_class = new WaListClass();
		break;
		
		case "exit":
			new_class = new WaExitClass();
		break;
		
		default:
			new_class = new WaLoginClass();
		break;

	}
};

GenericWarArenaClass.prototype._startParseDotCom = function() {	
	var self = this;
	//Init parse 
	Parse.initialize("X40dbrzWhZyZtwWnMZkNKOnxzo67ZWo1dTgAbfny", "ScczXRqkq6BW4sDGrxgtAEfdIZN2oACq3WC3zV8u");
};

GenericWarArenaClass.prototype._retrieveType = function(name) {
	
	var self = this

	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

