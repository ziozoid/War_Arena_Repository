function WaLoginClass(){	
	var self = this;

	self._init();
}

WaLoginClass.prototype._init = function() {
	
	var self = this;

	self._retriveElements();

};

WaLoginClass.prototype._bindings = function() {
	
	var self = this;
	// Form bindings
	$("#submit_form").off("click").on("click", function(e){

		e.preventDefault();

		var name = $("#wa_name").val();
		var pass = $("#wa_psw").val();

		self._retrieveUser(name, pass);
	});
};

WaLoginClass.prototype._retriveElements = function() {

	var self = this;
	
	var Elements = Parse.Object.extend("LoginTable");
	var query = new Parse.Query(Elements);

	var container = $("<form>")
					.attr("id", "wa_login_form");

	query.find({
		success: function (results) {
            for (var i = 0; i < results.length; i++) {		      
		      container.append(self._drawElement(results[i]));
		    }

		    $(".centeres_content").append(container);
		    self._bindings();           
        },
	    error: function (error) {
	    	console.log("error", error);
	    }
	})
};

WaLoginClass.prototype._retrieveUser = function(name, pass) {

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

WaLoginClass.prototype._drawElement = function(object) {
	
	var self = this;

	var element = $("<"+object.get("elem")+">")
				  .attr({
				  	"id": object.get("el_id"),
				  	"type": object.get("type"),
				  	"placeholder": object.get("placeholder")
				  })
				  .addClass(object.get("classes"))
				  .text(object.get("text"))

	return element;
};
