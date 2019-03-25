/****************************************************************************************************************************************

*

* Created by: Cristina Codoban

*

* Description: login

*

*

*******************************************************************************************************************************************/

describe ('spec_AboutButtonPage', function(){
	
	var aboutButtonPage = require('../03.Pages/AboutButtonPage.js');
	var testdata = require('../04.InputData/Login_InputData.json');
	
	testdata.forEach (function(data){
		
		it ('about button', function(){
			
			aboutButtonPage.aboutButtonFunction(data.URL);
			
		}); // close it
		
}); // close testdata
	
	
	
});