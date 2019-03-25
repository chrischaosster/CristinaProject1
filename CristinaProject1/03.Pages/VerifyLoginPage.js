/****************************************************************************************************************************************

*

* Created by: Cristina Codoban

*

* Description: The Dairy page

*

*

*******************************************************************************************************************************************/

module.exports = ( function(verifyLoginPage){
	
	verifyLoginPage.verifyLoginPageSuccess = function(URL,username,password,email){
		
		//load page
		browser.get(URL);
		// click on Remember the milk button
		verifyLoginPage.clickRememberTheMilkButton();
		
		// click login
		verifyLoginPage.loginButtonClick();
		
		// browser.sleep(3000);
		//insert email or username
		verifyLoginPage.typeUsernameField (username);
		
		// browser.sleep(3000);
		//insert password
		verifyLoginPage.typePasswordField(password);
		

		// uncheck stay logged in
		verifyLoginPage.uncheckStayLoggedIn();
		
		// click login
		verifyLoginPage.clickLogin();
		
		browser.ignoreSynchronization = true;
		//browser.waitForAngular();
		browser.sleep(3000);
		//browser.refresh();
		
		// verify that the user logged in
		//verify login
		verifyLoginPage.clickSettingsButton ();		
		expect(verifyLoginPage.verifyEmail()).toEqual(email);
		
		//click sign out
		verifyLoginPage.signOutButton();
		//check login button
		expect (verifyLoginPage.loginAgainButton()).toBeTruthy();
		
	};
		
	return verifyLoginPage;
})(require('../02.Functions/basePageObj.js'));	