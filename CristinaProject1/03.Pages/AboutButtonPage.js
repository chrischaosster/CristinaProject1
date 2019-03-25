/****************************************************************************************************************************************

*

* Created by: Cristina Codoban

*

* Description: login page

*

*

*******************************************************************************************************************************************/

module.exports = ( function(aboutButtonPage){
	
	aboutButtonPage.aboutButtonFunction = function(URL){
		
		//load page
		browser.get(URL);
		
		// scroll catre 
		aboutButtonPage.scrollElemFinderIntoView(aboutButtonPage.aboutButton);
		browser.sleep(10000);
		
		//click About
		aboutButtonPage.clickAboutButton();
	};
		
		return aboutButtonPage;
	})(require('../02.Functions/basePageObj.js'));
		