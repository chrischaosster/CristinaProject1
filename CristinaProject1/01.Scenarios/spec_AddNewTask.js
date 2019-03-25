/****************************************************************************************************************************************

*

* Created by: Cristina Codoban

*

* Description: login

*

*

*******************************************************************************************************************************************/

describe('spec_AddNewTask.js', function(){
	

	var loginPage = require('../03.Pages/LoginPage.js');
	var logoutFunction = require('../03.Pages/LogoutPage.js');
	var addNewTask = require('../03.Pages/AddNewTask.js');
	var testdata = require('../04.InputData/Login_InputData.json');
	var taskname = "Task1"+(new Date().getMilliseconds());
	var taskname2 = "Task2"+(new Date().getMilliseconds());
	
		testdata.forEach (function(data){
			//login function
			beforeEach (function() {
				loginPage.newLogin(data.URL,data.username,data.password);
			});
			// logout function
			afterEach(function(){
				logoutFunction.newLogOut();
			});
			
			// addNewTask function
			it('Add New Task', function(){
				addNewTask.newTask(taskname);
				
			}); //close it
			
	}); //close testdata
	
});