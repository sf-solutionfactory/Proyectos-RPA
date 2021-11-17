
// ----------------------------------------------------------------
//   Test menu for scenario switchOutput 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'switchOutput', 'Test switchOutput', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			SAPHelpPortal.scenarios.switchOutput.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario switchOutput Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: switchOutput
// ----------------------------------------------------------------
SAPHelpPortal.scenario({ switchOutput: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(SAPHelpPortal.steps.pSAPHelpPortal_manage_2, SAPHelpPortal.steps.pSAPHelpPortal_manage_1_1, 'Login');
	sc.step(SAPHelpPortal.steps.pSAPHelpPortal_manage_2, SAPHelpPortal.steps.pSearchResultsSAP_man_2, 'Search');
	sc.step(SAPHelpPortal.steps.pSAPHelpPortal_manage_1_1, null);
	sc.step(SAPHelpPortal.steps.pSearchResultsSAP_man_2, null);
}}, ctx.dataManagers.rootData).setId('e53b5124-dd28-4a6d-8b8c-b160e8ab4c9c') ;

// ----------------------------------------------------------------
//   Step: pSAPHelpPortal_manage_2
// ----------------------------------------------------------------
SAPHelpPortal.step({ pSAPHelpPortal_manage_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('switchOutput', '13402c0b-5e4f-4977-933c-263040d26e5f') ;
	// Wait until the Page loads
	SAPHelpPortal.pSAPHelpPortal.wait(function(ev) {
		// Conditionally executes a block of actions if the specified check of an expression evaluates to TRUE.
		if (SAPHelpPortal.pSAPHelpPortal.btLogon.exist())
		{
			SAPHelpPortal.pSAPHelpPortal.btLogon.click();
			sc.endStep('Login'); // pSAPHelpPortal_manage_1_1
			return;
		}
		else
		{
			sc.endStep('Search'); // pSearchResultsSAP_man_2
			return;
		}
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPHelpPortal_manage_1_1
// ----------------------------------------------------------------
SAPHelpPortal.step({ pSAPHelpPortal_manage_1_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('switchOutput', '933e5be6-e58c-4b86-85df-4cfce90022d2') ;
	// Wait until the Page loads
	SAPHelpPortal.pSAPHelpPortal.wait(function(ev) {
		sc.endStep(); // end Scenario
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSearchResultsSAP_man_2
// ----------------------------------------------------------------
SAPHelpPortal.step({ pSearchResultsSAP_man_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('switchOutput', '962b95b2-f052-4762-9e2e-a75ec2d270ea') ;
	// Wait until the Page loads
	SAPHelpPortal.pSearchResultsSAP.wait(function(ev) {
		sc.endStep(); // end Scenario
		return;
	});
}});
