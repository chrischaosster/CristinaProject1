/****************************************************************************************************************************************

*

* Created by: Cristina Codoban

*

* Description: login page

*

*

*******************************************************************************************************************************************/

module.exports = ( function(loginPage){
	
	loginPage.loginSuccess = function(URL,username,password,email){
		
		//load page
		browser.get(URL);
		
		// click pe login
		loginPage.loginButtonClick();
		// browser.sleep(3000);
		//insert email or username
		loginPage.typeUsernameField (username);
		// browser.sleep(3000);
		//insert password
		loginPage.typePasswordField(password);
		// browser.sleep(3000);
		// uncheck stay logged in
		loginPage.uncheckStayLoggedIn();
		// click login
		loginPage.clickLogin();
		browser.sleep(3000);
		
		browser.ignoreSynchronization = true;
		//browser.waitForAngular();
		browser.sleep(3000);
		//browser.refresh();
		
		//verify login
		loginPage.clickSettingsButton ();		
		expect(loginPage.verifyEmail()).toEqual(email);
		
		// verify that the login was successfull
		
		
	};
	
	//--------------------------------------------------------------------//
	loginPage.loginNoSuccess = function (URL, username, password){
		
		//load page
		browser.get (URL);
		
		//click login button
		loginPage.loginButtonClick ();
		
		//fill email or user name
		loginPage.typeUserNameField (username);
		
		//fill password
		loginPage.typePasswordField (password);
		
		//uncheck stay logged in
		loginPage.uncheckStayLoggedIn ();
			
	};
	//--------------------------------------------------------------------//
	
	loginPage.newLogin = function(URL,username,password){
		browser.get(URL);
		
		// click pe login
		loginPage.loginButtonClick();
		
		// browser.sleep(3000);
		//insert email or username
		loginPage.typeUsernameField (username);
		
		// browser.sleep(3000);
		//insert password
		loginPage.typePasswordField(password);
		

		// uncheck stay logged in
		loginPage.uncheckStayLoggedIn();
		
		// click login
		loginPage.clickLogin();
		
		browser.ignoreSynchronization = true;
		//browser.waitForAngular();
		browser.sleep(3000);
		//browser.refresh();
	}
	
	return loginPage;
})(require('../02.Functions/basePageObj.js'));