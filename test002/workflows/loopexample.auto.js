
// ----------------------------------------------------------------
//   Test menu for scenario LoopExample 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'LoopExample', 'Test LoopExample', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			SAPHelpPortal.scenarios.LoopExample.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario LoopExample Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: LoopExample
// ----------------------------------------------------------------
SAPHelpPortal.scenario({ LoopExample: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	// Initialize Loop counters
	sc.localData.Startloop = 0;
	
	sc.step(SAPHelpPortal.steps.pSAPHelpPortal_manage, SAPHelpPortal.steps.Start_loop);
	sc.step(SAPHelpPortal.steps.Start_loop, SAPHelpPortal.steps.Exit_loop);
	sc.step(SAPHelpPortal.steps.Exit_loop, SAPHelpPortal.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(SAPHelpPortal.steps.Exit_loop, SAPHelpPortal.steps.pSearchResultsSAP_man);
	sc.step(SAPHelpPortal.steps.pSearchResultsSAP_man, SAPHelpPortal.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(SAPHelpPortal.steps.pSearchResultsSAP_man, SAPHelpPortal.steps.Loops_to_the_start_bl);
	sc.step(SAPHelpPortal.steps.Loops_to_the_start_bl, SAPHelpPortal.steps.Start_loop, 'NEXT_LOOP');
}}, ctx.dataManagers.rootData).setId('b8428264-7837-4473-bce6-fdb06283b348') ;

// ----------------------------------------------------------------
//   Step: pSAPHelpPortal_manage
// ----------------------------------------------------------------
SAPHelpPortal.step({ pSAPHelpPortal_manage: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('LoopExample', '7e7ea2cf-314e-4e44-8e4a-34cb0586245f') ;
	// Wait until the Page loads
	SAPHelpPortal.pSAPHelpPortal.wait(function(ev) {
		SAPHelpPortal.pSAPHelpPortal.oSearchKeywords.set("RPA");
		SAPHelpPortal.pSAPHelpPortal.oSearchButton.click();
		sc.endStep(); // Start_loop
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Start_loop
// ----------------------------------------------------------------
SAPHelpPortal.step({ Start_loop: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('LoopExample', '93a35b1f-deef-4611-9216-ff65fac62e18') ;
	// Starting instruction for a loop.
	if (sc.localData.Startloop < 0) sc.localData.Startloop = 0;
	sc.endStep(); // Exit_loop
	return;
}});

// ----------------------------------------------------------------
//   Step: Exit_loop
// ----------------------------------------------------------------
SAPHelpPortal.step({ Exit_loop: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('LoopExample', '6e26bb34-b650-4ed3-aac5-c758f7588ad6') ;
	// Test block to exit from a loop.
	if (!SAPHelpPortal.pSearchResultsSAP.oSearchValue_0.i(sc.localData.Startloop).exist())
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
SAPHelpPortal.step({ pSearchResultsSAP_man: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('LoopExample', 'e106fe62-a262-41ce-9ca2-a6e657226db0') ;
	// Wait until the Page loads
	SAPHelpPortal.pSearchResultsSAP.wait(function(ev) {
		rootData.searchResult.searchName[sc.localData.Startloop] = SAPHelpPortal.pSearchResultsSAP.btSearchName.i(sc.localData.Startloop).get();
		sc.endStep(); // Loops_to_the_start_bl
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Loops_to_the_start_bl
// ----------------------------------------------------------------
SAPHelpPortal.step({ Loops_to_the_start_bl: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('LoopExample', '9862970e-8268-40c9-bbfb-56dc7cb21be2') ;
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
