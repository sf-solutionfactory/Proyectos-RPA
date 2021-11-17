
// ----------------------------------------------------------------
//   Test menu for scenario Run 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'Run', 'Test Run', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.Run.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario Run Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: Run
// ----------------------------------------------------------------
GLOBAL.scenario({ Run: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	// Initialize Loop counters
	sc.localData.Startloop = 0;
	
	sc.step(GLOBAL.steps.Initialize_Excel, GLOBAL.steps.Open_existing_Excel_f);
	sc.step(GLOBAL.steps.Open_existing_Excel_f, GLOBAL.steps.pWindowMicrosoftEx_ma);
	sc.step(GLOBAL.steps.pWindowMicrosoftEx_ma, GLOBAL.steps.Activate_worksheet);
	sc.step(GLOBAL.steps.Activate_worksheet, GLOBAL.steps.Start_loop_2);
	sc.step(GLOBAL.steps.Start_loop_2, GLOBAL.steps.Exit_loop_2);
	sc.step(GLOBAL.steps.Exit_loop_2, GLOBAL.steps.Loops_to_the_start_bl_2, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Exit_loop_2, GLOBAL.steps.Get_values);
	sc.step(GLOBAL.steps.Get_values, GLOBAL.steps.Loops_to_the_start_bl_2, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Get_values, GLOBAL.steps.Delay_10_ms);
	sc.step(GLOBAL.steps.Delay_10_ms, GLOBAL.steps.Loops_to_the_start_bl_2, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Delay_10_ms, GLOBAL.steps.Loops_to_the_start_bl_2);
	sc.step(GLOBAL.steps.Loops_to_the_start_bl_2, GLOBAL.steps.Start_loop_2, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Loops_to_the_start_bl_2, GLOBAL.steps.End_Excel);
	sc.step(GLOBAL.steps.End_Excel, null);
}}, ctx.dataManagers.rootData).setId('9c3161ab-c810-4100-95c9-479ddf631419') ;

// ----------------------------------------------------------------
//   Step: pWindowMicrosoftEx_ma
// ----------------------------------------------------------------
GLOBAL.step({ pWindowMicrosoftEx_ma: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('Run', '4f07750d-71bc-4c8c-8cb6-50ed5e92b053') ;
	// Wait until the Page loads
	MicrosoftExcelRep.pWindowMicrosoftEx.wait(function(ev) {
		sc.endStep(); // Reuse_Activateworkshe
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Start_loop_2
// ----------------------------------------------------------------
GLOBAL.step({ Start_loop_2: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('Run', '7be63e83-b936-4daf-b9be-af75d593a196') ;
	// Starting instruction for a loop.
	if (sc.localData.Startloop < 0) sc.localData.Startloop = 0;
	sc.endStep(); // Exit_loop_2
	return;
}});

// ----------------------------------------------------------------
//   Step: Exit_loop_2
// ----------------------------------------------------------------
GLOBAL.step({ Exit_loop_2: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('Run', '6682a7a9-5222-4edb-8896-b6a9b91ff95a') ;
	// Test block to exit from a loop.
	if (sc.localData.Startloop == ctx.excel.sheet.getLastRow('A1')-2)
	{
		sc.localData.Startloop = -1 ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // Reuse_Getvalues
	return;
}});

// ----------------------------------------------------------------
//   Step: Loops_to_the_start_bl_2
// ----------------------------------------------------------------
GLOBAL.step({ Loops_to_the_start_bl_2: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('Run', 'd6bbac96-957c-43fb-9048-a633cf02d123') ;
	// Loops to the start block.
	if (sc.localData.Startloop != -1)
	{
		sc.localData.Startloop++ ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // End_Excel
	return;
}});

// ----------------------------------------------------------------
//   Step: End_Excel
// ----------------------------------------------------------------
GLOBAL.step({ End_Excel: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('Run', '4be1b4cd-7cde-41fe-a9f0-342b4a1e40d6') ;
	// End Excel.
	ctx.excel.end();
	sc.endStep(); // end Scenario
	return;
}});
