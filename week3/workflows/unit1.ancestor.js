
// ----------------------------------------------------------------
//   Test menu for scenario unit1 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'unit1', 'Test unit1', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.unit1.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario unit1 Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: unit1
// ----------------------------------------------------------------
GLOBAL.scenario({ unit1: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.ssStep1);
}}, ctx.dataManagers.rootData).setId('285fdded-fe99-41f7-9363-d0ec3f351bbb') ;

// ----------------------------------------------------------------
//   Step: ssStep1
// ----------------------------------------------------------------
GLOBAL.step({ ssStep1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('unit1', 'edba5d66-1705-4439-9bbb-e356429137df') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // end Scenario
	return;
}});
