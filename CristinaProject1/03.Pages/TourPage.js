/****************************************************************************************************************************************

*

* Created by: Cristina Codoban

*

* Description: Jobs page

*

*

*******************************************************************************************************************************************/

module.exports = ( function(tourPage){
	
	tourPage.TourPageSuccess = function(URL){
		
		//load page
		browser.get(URL);
		// click on Remember the milk button
	//	tourPage.clickRememberTheMilkButton();
		//scroll to Jobs button
		tourPage.scrollElemFinderIntoView(tourPage.tourButton);
		browser.sleep(10000);
		//click pe Jobs button
		tourPage.tourButtonClick();
		// verify Jobs page
		browser.sleep(5000);
		// verify Jobs page
		expect(tourPage.verifyTours).toBeTruthy();
		
	};
		
	return tourPage;
})(require('../02.Functions/basePageObj.js'));	