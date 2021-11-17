
// ----------------------------------------------------------------
//   Test menu for scenario conectar 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'conectar', 'Test conectar', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.conectar.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario conectar Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: conectar
// ----------------------------------------------------------------
GLOBAL.scenario({ conectar: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.Custom);
}}, ctx.dataManagers.rootData).setId('b8033d3e-d6f5-4b13-87e5-8833b50af330') ;

// ----------------------------------------------------------------
//   Step: Custom
// ----------------------------------------------------------------
GLOBAL.step({ Custom: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('conectar', '1c85f989-02cc-4080-9c91-1399feb86345') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // end Scenario
	return;
}});
