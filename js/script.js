

/** Start Document */
$(document).ready(function(){

	/**PART 1*/
	//include Crockford's supplant

	if (!String.prototype.supplant) {
	    String.prototype.supplant = function (o) {
	        return this.replace(
	            /\{([^{}]*)\}/g,
	            function (a, b) {
	                var r = o[b];
	                return typeof r === 'string' || typeof r === 'number' ? r : a;
	            }
	        );
	    };
	}


	//declare person objects and personList array

	var person1 = {firstName: 'Marvin', age: 42, color: 'green'};
	var person2 = {firstName: 'Zaphod', age: 42000000000, color: 'peachpuff'};
	var person3 = {firstName: 'Gollum', age: 589, color: 'green'};

	var personList = [person1, person3];



	var sayHello = function() {
		alert('Hello, ' + this.firstName);
	};
	// call sayHello
	sayHello.call(person1); //don't close sayHello. Call the function, not the result of the function.

	var greetOneAnother = function(personA, personB) {
		// console.log(this.firstName)
		 console.log(personA.firstName, personB.firstName, this.firstName)

		 console.log("{0}".supplant([personB.firstName]))
	 alert("{0}, meet {1} and {2}".supplant([this.firstName, personA.firstName, personB.firstName]));

	};

	// apply greetOneAnother
	greetOneAnother.apply(person2, personList)


	/**PART 1*/

	// declare button DOM element variables
	firstButton = $('.first-btn');
	secondButton = $('.second-btn');
	thirdButton = $('.third-btn');

	// declare button DOM element variables
	var buttonText = ""


	var initializeMessageArea = function(){
		$('.msg-repo').empty()
	}
	var renderMessage = function(text){
		$('.msg-repo').append(text)
	}

	var addTextClickHandler = function(){
		initializeMessageArea();
		buttonText = $(this).text()
		console.log(this)

		renderMessage(buttonText);
	}


	//don't call function, just refer to it. otherwise "this" will be beholden to the window
	$('#land a').on("click", addTextClickHandler); 

	//call event handler function on first button
	addTextClickHandler.call($(firstButton));
	//call event handler function on second button
	addTextClickHandler.call($(secondButton));
	//call event handler function on third button
	addTextClickHandler.call($(thirdButton));


}); //end document





