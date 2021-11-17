
// ----------------------------------------------------------------
//   Test menu for scenario newWorkflow 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'newWorkflow', 'Test newWorkflow', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.newWorkflow.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario newWorkflow Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: newWorkflow
// ----------------------------------------------------------------
GLOBAL.scenario({ newWorkflow: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.Display_msgbox_holam);
}}, ctx.dataManagers.rootData).setId('a20d26a4-733b-45a9-9897-bcda91b06f90') ;

// ----------------------------------------------------------------
//   Step: Display_msgbox_holam
// ----------------------------------------------------------------
GLOBAL.step({ Display_msgbox_holam: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWorkflow', '28c30fa7-4542-48a0-993f-426d640d0116') ;
	// Displays a message box. If the "Wait closing" option is selected, waits until the end user closes it.
	// Creates the popup according to selected template, sets title and message and displays it.
	var holamundo = ctx.popup('holamundo', e.popup.template.Ok);
	holamundo.open({ title: 'Hola Mundo', message: 'Hello World!'});
	// Wait until the end user closes the popup.
	holamundo.waitResult(function(res) {
	// End user has closed the popup, continue monitoring.
		sc.endStep(); // end Scenario
		return;
	});
}});
