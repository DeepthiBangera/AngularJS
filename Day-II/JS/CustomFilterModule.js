//CustomFilterModule

 
// Code defining custom module consisting of a filter
// The module needs to be included as dependency for using the filter, initCap
//
var CustomFilterModule=angular.module('CustomFilterModule', [])
       .filter( 'initCap', function() {
    	   return function( input ) {
    		   				return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    	   					}
       	}
);

CustomFilterModule.filter("reverseText", function() {

    //Defining the filter function
     return function(input) {

             var result = "";
             input = input || "";

            for (var i=0; i<input.length; i++) {
                   result = input.charAt(i) + result;
             }

            return result;
     };
});

//Setup the filter
CustomFilterModule.filter('ordinal', function() {

  // Create the return function
  // set the required parameter name to **number**
  return function(number) {

    // Ensure that the passed in data is a number
    if(isNaN(number) || number < 1) {

      // If the data is not a number or is less than one (thus not having a cardinal value) return it unmodified.
      return number;

    } else {

      // If the data we are applying the filter to is a number, perform the actions to check it's ordinal suffix and apply it.

      var lastDigit = number % 10;

      if(lastDigit === 1) {
        return number + 'st'
      } else if(lastDigit === 2) {
        return number + 'nd'
      } else if (lastDigit === 3) {
        return number + 'rd'
      } else if (lastDigit > 3) {
        return number + 'th'
      }

    }
  }
});

CustomFilterModule.filter('staticLanguage', function(){
	  return function(input){
	    var out = [];
	    angular.forEach(input, function(language){
	      if(language.type === 'static'){
	        out.push(language)
	      }
	    })
	    return out;
	  }
	});

