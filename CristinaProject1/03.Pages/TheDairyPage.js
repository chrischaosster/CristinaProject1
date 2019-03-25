/****************************************************************************************************************************************

*

* Created by: Cristina Codoban

*

* Description: The Dairy page

*

*

*******************************************************************************************************************************************/

module.exports = ( function(theDairyPage){
	
	theDairyPage.theDairyPageSuccess = function(URL){
		
		//load page
		browser.get(URL);
		// click on Remember the milk button
		//jobsPage.clickRememberTheMilkButton();
		//scroll to The Dairy button
		theDairyPage.scrollElemFinderIntoView(theDairyPage.theDairyButton);
		browser.sleep(5000);
		//click pe Jobs button
		theDairyPage.theDairyButtonClick();
		browser.sleep(5000);
		// verify Jobs page
		expect(theDairyPage.verifyTheDairy).toBeTruthy();
		
	};
		
	return theDairyPage;
})(require('../02.Functions/basePageObj.js'));	