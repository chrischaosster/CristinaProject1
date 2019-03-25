var Jasmine2HtmlReporter = require('C:/Users/User1064/eclipse-workspace/CristinaProject1/node_modules/protractor-jasmine2-html-reporter');
var timeStamp = new Date().getTime();

exports.config = {
		
		// seleniumAddress : 'http//localhost:4444/wd/hub',
		
		directConnect : true,
		
		capabilities : {
			'browserName' : 'chrome'
		},
		
		framework : 'jasmine',
		
		onPrepare : function(){
			
			browser.driver.manage().window().maximize();
			jasmine.getEnv().addReporter(
					new Jasmine2HtmlReporter({
						savePath : 'C:/Users/User1064/eclipse-workspace/CristinaProject1/target/screenshots',
						showSummary : true,
						showQuickLinks : true,
						showConfiguration : true,
						screenshotFolder : true,
						takeScreenshots : true,
						takeScreenshotsOnlyOnFailures : true,
						fixedScreenshotName : true,
						ignoreSkippedSpecs : true,
						consolidate : true,
						consolidateAll : true,
						preserveDirectory : true,
						fileName : 'Protractor-Execution-Report-' + timeStamp
					})
			);
		},
		
		jasmineNodeOpts : {
			showColors : true,
			isVerbose : true,
			realtimeFailure : true,
			includeStackTrace : true,
			defaultTimeoutInterval : 500000
		},
		
		 // specs : ['../CristinaProject1/01.Scenarios/spec_LoginScript.js']
		 // specs : ['../CristinaProject1/01.Scenarios/spec_SignOutScript.js']
		  //  specs : ['../CristinaProject1/01.Scenarios/spec_AddNewTask.js']
		 //  specs : ['../CristinaProject1/01.Scenarios/spec_AboutButtonPage.js']
		 //  specs : ['../CristinaProject1/01.Scenarios/spec_JobsPage.js']
		//    specs : ['../CristinaProject1/01.Scenarios/spec_TourPage.js']
		//	specs : ['../CristinaProject1/01.Scenarios/spec_TheDairyPage.js']
		    specs : ['../CristinaProject1/01.Scenarios/spec_VerifyLoginPage.js']
		// specs : ['../Cristina_Codoban/01.Scenarios/spec_SignUpForFreePage.js']
		
		/* suites : {
			suite : [
				'../',
				'../'
			]
		}, */
}