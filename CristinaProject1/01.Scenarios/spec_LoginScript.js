/****************************************************************************************************************************************

*

* Created by: Cristina Codoban

*

* Description: login

*

*

*******************************************************************************************************************************************/

describe ('spec_LoginScript', function(){
	
	var loginPage = require('../03.Pages/LoginPage.js');
	var testdata = require('../04.InputData/Login_InputData.json');
	
	testdata.forEach (function(data){
	
	// login cu succes 
	it ('login successfully', function(){
		
		loginPage.loginSuccess(data.URL,data.username,data.password,data.email);
		
	}); // close it
	
	it ('login - blank username', function (){
		
		loginPage.loginNoSuccess (data.URL, "", data.password);
		
		
	}); // close it
	
	
	it ('login - blank password', function (){
		
		loginPage.loginNoSuccess (data.URL, data.username, "");
		
		
	}); // close it
	
	
	it ('login - blank username and blank password', function (){
		
		loginPage.loginNoSuccess (data.URL, "", "");
		
		
	}); // close it
	
	}); // close testdata
	
	
	
});