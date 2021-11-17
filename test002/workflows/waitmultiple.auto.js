
// ----------------------------------------------------------------
//   Test menu for scenario waitMultiple 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'waitMultiple', 'Test waitMultiple', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			SAPHelpPortal.scenarios.waitMultiple.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario waitMultiple Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: waitMultiple
// ----------------------------------------------------------------
SAPHelpPortal.scenario({ waitMultiple: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(SAPHelpPortal.steps.Write_log, SAPHelpPortal.steps.pSAPHelpPortal_manage_1, 'Default');
	sc.step(SAPHelpPortal.steps.Write_log, SAPHelpPortal.steps.pSearchResultsSAP_man_1, 'Search');
	sc.step(SAPHelpPortal.steps.pSAPHelpPortal_manage_1, SAPHelpPortal.steps.pSearchResultsSAP_man_1);
	sc.step(SAPHelpPortal.steps.pSearchResultsSAP_man_1, null);
}}, ctx.dataManagers.rootData).setId('2d789720-2595-4ce2-9f00-eaa27d2fc459') ;

// ----------------------------------------------------------------
//   Step: Write_log
// ----------------------------------------------------------------
SAPHelpPortal.step({ Write_log: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('waitMultiple', 'b8b13d00-f2e4-4029-bf34-daaba7c23aeb') ;
	// Add a message to the log file and in the debug window along with a severity level.
	ctx.log("Ejemplo de wait multiple", e.logIconType.Info);
	// Wait until the Page loads
	SAPHelpPortal.pSAPHelpPortal.wait(function(ev) {
		sc.endStep('Default'); // pSAPHelpPortal management
		return;
	});
	// Wait until the Page loads
	SAPHelpPortal.pSearchResultsSAP.wait(function(ev) {
		sc.endStep('Search'); // pSearchResultsSAP management
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPHelpPortal_manage_1
// ----------------------------------------------------------------
SAPHelpPortal.step({ pSAPHelpPortal_manage_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('waitMultiple', '3f4b652f-e755-45bc-92aa-a2c2ec15c08b') ;
	// Wait until the Page loads
	SAPHelpPortal.pSAPHelpPortal.wait(function(ev) {
		SAPHelpPortal.pSAPHelpPortal.oSearchKeywords.set("RPA");
		SAPHelpPortal.pSAPHelpPortal.oSearchButton.click();
		sc.endStep(); // pSearchResultsSAP_man_1
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSearchResultsSAP_man_1
// ----------------------------------------------------------------
SAPHelpPortal.step({ pSearchResultsSAP_man_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('waitMultiple', 'e1b42353-dd97-4551-bca7-1fcb96ab139f') ;
	// Wait until the Page loads
	SAPHelpPortal.pSearchResultsSAP.wait(function(ev) {
		sc.endStep(); // end Scenario
		return;
	});
}});
