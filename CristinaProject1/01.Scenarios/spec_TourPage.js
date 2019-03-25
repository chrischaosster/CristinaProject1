/****************************************************************************************************************************************

*

* Created by: Cristina Codoban

*

* Description: login

*

*

*******************************************************************************************************************************************/

describe ('spec_ToursPage', function(){
	
	var tourPage = require('../03.Pages/TourPage.js');
	var testdata = require('../04.InputData/Login_InputData.json');
	
	testdata.forEach (function(data){
		
		it ('tours button', function(){
			
			tourPage.TourPageSuccess(data.URL);
			
		}); // close it
		
}); // close testdata
	
	
	
});