
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
	sc.step(GLOBAL.steps.pWindowMicrosoftEx_ma, GLOBAL.steps.pWindowMacro_manageme);
	sc.step(GLOBAL.steps.pWindowMacro_manageme, GLOBAL.steps.pWindowReporteador_ma);
	sc.step(GLOBAL.steps.pWindowReporteador_ma, GLOBAL.steps.pWindowMicrosoftEx1_m);
	sc.step(GLOBAL.steps.pWindowMicrosoftEx1_m, GLOBAL.steps.Activate_worksheet);
	sc.step(GLOBAL.steps.Activate_worksheet, GLOBAL.steps.Start_loop_2);
	sc.step(GLOBAL.steps.Start_loop_2, GLOBAL.steps.Exit_loop_2);
	sc.step(GLOBAL.steps.Exit_loop_2, GLOBAL.steps.Loops_to_the_start_bl_2, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Exit_loop_2, GLOBAL.steps.Get_values);
	sc.step(GLOBAL.steps.Get_values, GLOBAL.steps.Loops_to_the_start_bl_2, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Get_values, GLOBAL.steps.Delay_10_ms);
	sc.step(GLOBAL.steps.Delay_10_ms, GLOBAL.steps.Loops_to_the_start_bl_2, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Delay_10_ms, GLOBAL.steps.Loops_to_the_start_bl_2);
	sc.step(GLOBAL.steps.Loops_to_the_start_bl_2, GLOBAL.steps.Start_loop_2, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Loops_to_the_start_bl_2, GLOBAL.steps.Save_Excel_file);
	sc.step(GLOBAL.steps.Save_Excel_file, GLOBAL.steps.Close_Excel_file);
	sc.step(GLOBAL.steps.Close_Excel_file, GLOBAL.steps.End_Excel);
	sc.step(GLOBAL.steps.End_Excel, null);
}}, ctx.dataManagers.rootData).setId('9c3161ab-c810-4100-95c9-479ddf631419') ;

// ----------------------------------------------------------------
//   Step: pWindowMicrosoftEx_ma
// ----------------------------------------------------------------
GLOBAL.step({ pWindowMicrosoftEx_ma: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('Run', 'fe4671d4-6f67-4fd3-aa2d-97d84fa6264f') ;
	// Wait until the Page loads
	MicrosoftExcelRep.pWindowMicrosoftEx.wait(function(ev) {
		MicrosoftExcelRep.pWindowMicrosoftEx.btMacros.click();
		sc.endStep(); // pWindowMacro_manageme
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pWindowMacro_manageme
// ----------------------------------------------------------------
GLOBAL.step({ pWindowMacro_manageme: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('Run', 'e330a0c2-c6db-4e70-9a58-6d04bf7da944') ;
	// Wait until the Page loads
	MicrosoftExcelRep.pWindowMacro.wait(function(ev) {
		MicrosoftExcelRep.pWindowMacro.oReporteDetallado.clickDouble();
		sc.endStep(); // pWindowReporteador_ma
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pWindowReporteador_ma
// ----------------------------------------------------------------
GLOBAL.step({ pWindowReporteador_ma: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('Run', 'ec7c3426-1f0c-4da7-98d0-06204f78c8aa') ;
	// Wait until the Page loads
	MicrosoftExcelRep.pWindowReporteador.wait(function(ev) {
		// Set the content of an item.
		MicrosoftExcelRep.pWindowReporteador.edEdit.set("03/06/2021");
		// Set the content of an item.
		MicrosoftExcelRep.pWindowReporteador.edEdit1.set("03/06/2021");
		// Clicks on an item.
		MicrosoftExcelRep.pWindowReporteador.btAceptar.click();
		sc.endStep(); // pWindowMicrosoftEx1_m
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pWindowMicrosoftEx1_m
// ----------------------------------------------------------------
GLOBAL.step({ pWindowMicrosoftEx1_m: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('Run', '2bc92012-3169-4ae5-a907-705944f6db8b') ;
	// Wait until the Page loads
	MicrosoftExcelRep.pWindowMicrosoftEx1.wait(function(ev) {
		MicrosoftExcelRep.pWindowMicrosoftEx1.btAceptar.click();
		sc.endStep(); // Reuse_Activateworkshe
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Start_loop_2
// ----------------------------------------------------------------
GLOBAL.step({ Start_loop_2: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('Run', '02221770-3eed-452d-ad56-07b4222752f2') ;
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
	
	ctx.workflow('Run', '125779e7-ebbd-4179-bf2b-65e9e055318e') ;
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
	
	ctx.workflow('Run', '169d5d00-f36f-445f-9df4-aff957cc502b') ;
	// Loops to the start block.
	if (sc.localData.Startloop != -1)
	{
		sc.localData.Startloop++ ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // Save_Excel_file
	return;
}});

// ----------------------------------------------------------------
//   Step: Save_Excel_file
// ----------------------------------------------------------------
GLOBAL.step({ Save_Excel_file: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('Run', 'a29a387d-c4fe-48b7-9c97-00f614618e81') ;
	// Save Excel file.
	ctx.excel.file.save();
	sc.endStep(); // Close_Excel_file
	return;
}});

// ----------------------------------------------------------------
//   Step: Close_Excel_file
// ----------------------------------------------------------------
GLOBAL.step({ Close_Excel_file: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('Run', 'cf1bf2e7-0a68-47e2-a98b-0a8718293e11') ;
	// Close Excel file.
	ctx.excel.file.close();
	sc.endStep(); // End_Excel
	return;
}});

// ----------------------------------------------------------------
//   Step: End_Excel
// ----------------------------------------------------------------
GLOBAL.step({ End_Excel: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('Run', '9531dcc7-64c1-4544-b8d6-f457a67ae787') ;
	// End Excel.
	ctx.excel.end();
	sc.endStep(); // end Scenario
	return;
}});
