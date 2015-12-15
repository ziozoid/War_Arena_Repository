function GenericWarArenaClass(options){

	var defaults = {};

	var self = $.extend(this, defaults, options );

	return self;
}

GenericWarArenaClass.prototype._init = function() {
	var self = this;

	self._startParseDotCom();

	self._bindings();
};

GenericWarArenaClass.prototype._startParseDotCom = function() {
	
	var self = this;

	//Init parse 
	Parse.initialize("X40dbrzWhZyZtwWnMZkNKOnxzo67ZWo1dTgAbfny", "ScczXRqkq6BW4sDGrxgtAEfdIZN2oACq3WC3zV8u");

};

GenericWarArenaClass.prototype._bindings = function() {
	
	var self = this;
	// Form bindings
	$("#submit_form").off("click").on("click", function(e){

		e.preventDefault();

		var name = $("#wa_name").val();
		var pass = $("#wa_psw").val();

		self._retrieveUser(name, pass);
	});
};

GenericWarArenaClass.prototype._retrieveUser = function(name, pass) {

	Parse.User.logIn(name, pass, {
	  success: function(user) {
	    // Do stuff after successful login.
	    alert("Conectado")
	    console.log("ob", Parse.Session);
	  },
	  error: function(user, error) {
	    // The login failed. Check error to see why.
	  	alert(error.message);

	  	console.log("error", error);
	  }
	});
};