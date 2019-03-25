/****************************************************************************************************************************************

*

* Created by: Cristina Codoban

*

* Description: login

*

*

*******************************************************************************************************************************************/

describe ('spec_JobsPage', function(){
	
	var jobsPage = require('../03.Pages/JobsPage.js');
	var testdata = require('../04.InputData/Login_InputData.json');
	
	testdata.forEach (function(data){
		
		it ('jobs button', function(){
			
			jobsPage.JobsPageSuccess(data.URL);
			
		}); // close it
		
}); // close testdata
	
	
	
});