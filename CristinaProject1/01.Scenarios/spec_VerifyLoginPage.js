/****************************************************************************************************************************************

*

* Created by: Cristina Codoban

*

* Description: login

*

*

*******************************************************************************************************************************************/

describe ('spec_VerifyLoginPage', function(){
	
	var verifyLoginPage = require('../03.Pages/VerifyLoginPage.js');
	var testdata = require('../04.InputData/Login_InputData.json');
	
	testdata.forEach (function(data){
	
	// login cu succes 
	it ('login successfully', function(){
		
		verifyLoginPage.verifyLoginPageSuccess(data.URL,data.username,data.password,data.email);
		
	}); // close it
}); // close testdata
	
	
	
});