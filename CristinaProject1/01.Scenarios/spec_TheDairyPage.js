/****************************************************************************************************************************************

*

* Created by: Cristina Codoban

*

* Description: login

*

*

*******************************************************************************************************************************************/

describe ('spec_TheDairyPage', function(){
	
	var theDairyPage = require('../03.Pages/TheDairyPage.js');
	var testdata = require('../04.InputData/Login_InputData.json');
	
	testdata.forEach (function(data){
		
		it ('the dairy button', function(){
			
			theDairyPage.theDairyPageSuccess(data.URL);
			
		}); // close it
		
}); // close testdata
	
	
	
});