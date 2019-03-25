/****************************************************************************************************************************************

*

* Created by: Cristina Codoban

*

* Description: Jobs page

*

*

*******************************************************************************************************************************************/

module.exports = ( function(jobsPage){
	
	jobsPage.JobsPageSuccess = function(URL){
		
		//load page
		browser.get(URL);
		// click on Remember the milk button
		//jobsPage.clickRememberTheMilkButton();
		//scroll to Jobs button
		jobsPage.scrollElemFinderIntoView(jobsPage.jobsButton);
		browser.sleep(5000);
		//click pe Jobs button
		jobsPage.clickJobsButton();
		browser.sleep(5000);
		// verify Jobs page
		expect(jobsPage.verifyJobs).toBeTruthy();
		
	};
		
	return jobsPage;
})(require('../02.Functions/basePageObj.js'));	