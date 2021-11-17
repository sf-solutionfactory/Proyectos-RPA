
// ----------------------------------------------------------------
//   Test menu for scenario newWorkflow 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'newWorkflow', 'Test newWorkflow', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			POPUPS.scenarios.newWorkflow.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario newWorkflow Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: newWorkflow
// ----------------------------------------------------------------
POPUPS.scenario({ newWorkflow: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(POPUPS.steps.Display_msgbox_hm);
}}, ctx.dataManagers.rootData).setId('2a32c222-ad76-4070-8003-5db13554d599') ;

// ----------------------------------------------------------------
//   Step: Display_msgbox_hm
// ----------------------------------------------------------------
POPUPS.step({ Display_msgbox_hm: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWorkflow', '2ae8d957-3e07-442e-a668-a884f122d1f2') ;
	// Displays a message box. If the "Wait closing" option is selected, waits until the end user closes it.
	// Creates the popup according to selected template, sets title and message and displays it.
	var hm = ctx.popup('hm', e.popup.template.Ok);
	hm.open({ title: 'Hello world', message: 'Hola mundo'});
	// Wait until the end user closes the popup.
	hm.waitResult(function(res) {
	// End user has closed the popup, continue monitoring.
		sc.endStep(); // end Scenario
		return;
	});
}});
