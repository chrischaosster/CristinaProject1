/****************************************************************************************************************************************

*

* Created by: Cristina Codoban

*

* Description:

*

*

*******************************************************************************************************************************************/

module.exports = (function (){
	var that = {};
	// login button
	that.loginButtonClick = function(){
		return element (by.xpath('/html/body/nav/div/ul[2]/li[5]/a')).click();
	};
	
	// username field
	that.typeUsernameField = function (username){
		element (by.id("username")).clear();
		return element (by.id("username")).sendKeys(username);
		// return $('[id="username"]').sendKeys(username);
	};
	
	// password field
	that.typePasswordField = function (password){
		element (by.id("password")).clear();
		return element (by.id("password")).sendKeys(password);
	};
	// uncheck stay logged in
	that.uncheckStayLoggedIn = function () {
		return $('[for="remember"]').click();
	
	};
	that.clickLogin = function (){
		return element(by.id("login-button")).click();
	};
	
	//click on arrow button to expand
	that.clickSettingsButton = function () {
		return element (by.xpath('/html/body/div[11]/div/div[3]/div[2]/div[3]/div/div[4]/i[2]')).click();
	};						///html/body/div[11]/div/div[3]/div[2]/div[3]/div/div[4]/i[2]
	
	//get text from email address field
	that.verifyEmail = function () {
		return element (by.xpath('//*[@id=":4x"]/div[3]')).getText(); 
		};
		
	// signout button
	that.signOutButton = function (){
		
		return element (by.xpath('//*[@id=":58"]/div')).click();
	};
	
	that.loginAgainButton = function(){
		return element (by.xpath('/html/body/main/header/div/a')).isPresent();
	};
	// add task field
	that.fillNewTaskField = function(taskname){
		element(by.xpath('/html/body/div[11]/div/div[5]/div[3]/div/div[2]/div[7]/div[2]/div[1]/div[2]/div')).clear();
		return element(by.xpath('/html/body/div[11]/div/div[5]/div[3]/div/div[2]/div[7]/div[2]/div[1]/div[2]/div')).sendKeys(taskname);
	};
	// click button Add Task
	that.addTaskButtonClick = function(){
		return element (by.xpath('/html/body/div[11]/div/div[5]/div[3]/div/div[2]/div[7]/div[2]/button')).click();
	};
	// click checkbox next to Task
	that.checkTheTask = function(){
		return element(by.xpath('//*[@id=":27"]/div[3]/span')).click();
	};
	// click More button
	that.clickMoreButton = function(){
		return element(by.xpath('//*[@id=":1t"]/div')).click();
	};
	that.clickDeleteButton = function(){
		return element(by.xpath('//*[@id=":4z"]/div')).click();
	};
	// scroll
	that.scrollElemFinderIntoView = function(elemFinder){
		var promise = browser.executeScript(function(elem) {
			elem.scrollIntoView(false);
		}, elemFinder);
		return promise;		
	};
	// get elem About button by xpath
	that.aboutButton = element(by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[2]/a'));
	
	// click About button
	that.clickAboutButton = function(){
		return element(by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[2]/a')).click();
	};
	
	
	that.clickRememberTheMilkButton = function(){
		return element (by.xpath('/html/body/nav/div/a')).click();
	};
	
	// get elem Jobs button by xpath
	that.jobsButton = element (by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[3]/a'));
	
	// click Jobs button
	that.clickJobsButton = function(){
		//return element (by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[3]/a')).click();
		return element (by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[3]/a')).click();
	};
	
	//get text from Jobs field
	that.verifyJobs = function(){
			return element (by.xpath('/html/body/main/header/div/a/h1')).isPresent();
		};
		
	// get elem Tour button by xpath
	that.tourButton = element(by.xpath('/html/body/footer/div/div[2]/div[1]/ul[2]/li[2]/a'));
	
	// click Tour button
	
	that.tourButtonClick = function(){
		return element (by.xpath('/html/body/footer/div/div[2]/div[1]/ul[2]/li[2]/a')).click();
	};
	
	that.verifyTours = function(){
		return element (by.xpath('/html/body/main/header/div/a/h1')).isPresent();
	};
	
	
	// get elem The Dairy button by xpath
	that.theDairyButton = element(by.xpath('/html/body/footer/div/div[2]/div[2]/ul[1]/li[4]/a'));
	
	// click The Dairy button
	
	that.theDairyButtonClick = function(){
		return element (by.xpath('/html/body/footer/div/div[2]/div[2]/ul[1]/li[4]/a')).click();
	};
	
	that.verifyTheDairy = function(){
		return element (by.xpath('/html/body/main/header/div/a/h1')).isPresent();
	};
	
	
	
	
	return that;
})();