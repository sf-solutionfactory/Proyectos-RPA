
// ----------------------------------------------------------------
//   Test menu for scenario WorkFlow 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'WorkFlow', 'Test WorkFlow', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.WorkFlow.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario WorkFlow Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: WorkFlow
// ----------------------------------------------------------------
GLOBAL.scenario({ WorkFlow: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	// Initialize Loop counters
	sc.localData.Startloop = 0;
	
	sc.step(GLOBAL.steps.Start_loop, GLOBAL.steps.Exit_loop);
	sc.step(GLOBAL.steps.Exit_loop, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Exit_loop, GLOBAL.steps.pSearchResultsSAP_man);
	sc.step(GLOBAL.steps.pSearchResultsSAP_man, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.pSearchResultsSAP_man, GLOBAL.steps.Loops_to_the_start_bl);
	sc.step(GLOBAL.steps.Loops_to_the_start_bl, GLOBAL.steps.Start_loop, 'NEXT_LOOP');
}}, ctx.dataManagers.rootData).setId('b3fbaaac-2747-4b81-8ece-9acb618d8baf') ;

// ----------------------------------------------------------------
//   Step: Start_loop
// ----------------------------------------------------------------
GLOBAL.step({ Start_loop: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('WorkFlow', '0af0a06e-3841-441a-b0d4-1b5a3790c1df') ;
	// Starting instruction for a loop.
	if (sc.localData.Startloop < 0) sc.localData.Startloop = 0;
	sc.endStep(); // Exit_loop
	return;
}});

// ----------------------------------------------------------------
//   Step: Exit_loop
// ----------------------------------------------------------------
GLOBAL.step({ Exit_loop: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('WorkFlow', 'fa31b245-0276-418a-80fe-3e2447bc9e45') ;
	// Test block to exit from a loop.
	if (!SearchResultsSAP.pSearchResultsSAP.oSearch_ct_0.i(sc.localData.Startloop).exist())
	{
		sc.localData.Startloop = -1 ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // pSearchResultsSAP_man
	return;
}});

// ----------------------------------------------------------------
//   Step: pSearchResultsSAP_man
// ----------------------------------------------------------------
GLOBAL.step({ pSearchResultsSAP_man: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('WorkFlow', '451b7f18-c1f2-4644-b130-ab4fa9d2c106') ;
	// Wait until the Page loads
	SearchResultsSAP.pSearchResultsSAP.wait(function(ev) {
		// Delays execution for some milliseconds.
		// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
		// It allows user interaction with Desktop Agent and other programs during the pause.
		// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react.
		ctx.wait(function(ev) {
			rootData.SearchResultsSAPData.pSearchResultsSAPData.btSearchName = SearchResultsSAP.pSearchResultsSAP.btSearchName.i(sc.localData.Startloop).get();
			sc.endStep(); // Loops_to_the_start_bl
			return;
		}, 1000);
	});
}});

// ----------------------------------------------------------------
//   Step: Loops_to_the_start_bl
// ----------------------------------------------------------------
GLOBAL.step({ Loops_to_the_start_bl: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('WorkFlow', '7d85400f-29ae-4eb4-be3f-c33aebe8746e') ;
	// Loops to the start block.
	if (sc.localData.Startloop != -1)
	{
		sc.localData.Startloop++ ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // end Scenario
	return;
}});
