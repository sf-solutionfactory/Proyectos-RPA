
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
	// Initialize Loop counters
	sc.localData.Startloop = 0;
	
	sc.step(GLOBAL.steps.Initialize_Excel, GLOBAL.steps.Open_existing_Excel_f);
	sc.step(GLOBAL.steps.Open_existing_Excel_f, GLOBAL.steps.Activate_worksheet);
	sc.step(GLOBAL.steps.Activate_worksheet, GLOBAL.steps.Start_loop_1);
	sc.step(GLOBAL.steps.Start_loop_1, GLOBAL.steps.Exit_loop_1);
	sc.step(GLOBAL.steps.Exit_loop_1, GLOBAL.steps.Loops_to_the_start_bl_1, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Exit_loop_1, GLOBAL.steps.Get_values);
	sc.step(GLOBAL.steps.Get_values, GLOBAL.steps.Loops_to_the_start_bl_1, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Get_values, GLOBAL.steps.Delay_10_ms);
	sc.step(GLOBAL.steps.Delay_10_ms, GLOBAL.steps.Loops_to_the_start_bl_1, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Delay_10_ms, GLOBAL.steps.Loops_to_the_start_bl_1);
	sc.step(GLOBAL.steps.Loops_to_the_start_bl_1, GLOBAL.steps.Start_loop_1, 'NEXT_LOOP');
}}, ctx.dataManagers.rootData).setId('cdc77664-3348-43fc-a739-94e775e7bc3e') ;

// ----------------------------------------------------------------
//   Step: Initialize_Excel
// ----------------------------------------------------------------
GLOBAL.step({ Initialize_Excel: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('leerXLS', '6516299b-438e-42ff-a637-d3942bac9e4b') ;
	// Initializes Excel Library with different modes.
	ctx.options.excel.newXlsInstance = false;
	ctx.options.excel.visible = true;
	ctx.options.excel.displayAlerts = false;
	ctx.excel.initialize();
	sc.endStep(); // Open_existing_Excel_f
	return;
}});

// ----------------------------------------------------------------
//   Step: Open_existing_Excel_f
// ----------------------------------------------------------------
GLOBAL.step({ Open_existing_Excel_f: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('leerXLS', '7276e510-0194-4eb9-bd6a-7a5bff4e997a') ;
	// Open existing Excel file.
	ctx.excel.file.open("C:\\LAYOUT\\ReporteENCO.xlsm");
	sc.endStep(); // Activate_worksheet
	return;
}});

// ----------------------------------------------------------------
//   Step: Activate_worksheet
// ----------------------------------------------------------------
GLOBAL.step({ Activate_worksheet: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('leerXLS', '00ae98bc-63df-42ee-8211-bf08a93dd407') ;
	// Activate an Excel worksheet from the active workbook.
	ctx.excel.sheet.activate('Reporte');
	sc.endStep(); // Start_loop_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Start_loop_1
// ----------------------------------------------------------------
GLOBAL.step({ Start_loop_1: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('leerXLS', 'e1e2f53b-e3b6-4ad4-a0eb-1edf4df24aeb') ;
	// Starting instruction for a loop.
	if (sc.localData.Startloop < 0) sc.localData.Startloop = 0;
	sc.endStep(); // Exit_loop_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Exit_loop_1
// ----------------------------------------------------------------
GLOBAL.step({ Exit_loop_1: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('leerXLS', 'b1b53eda-2b9e-48ea-82d4-e52734154782') ;
	// Test block to exit from a loop.
	if (sc.localData.Startloop == ctx.excel.sheet.getLastRow('A1')-2)
	{
		sc.localData.Startloop = -1 ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	else
	{
		if (rootData.Items.length <= sc.localData.Startloop)
			rootData.Items[sc.localData.Startloop] = ctx.dataManagers.rootData_Items.create() ;
	}
	sc.endStep(); // Get_values
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_values
// ----------------------------------------------------------------
GLOBAL.step({ Get_values: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('leerXLS', '6ee8f02f-eafd-4688-acf2-489ebdb8b9a9') ;
	// Get values from range on the active worksheet.
	rootData.Items[sc.localData.Startloop] = ctx.excel.sheet.getFullRangeValues('A',sc.localData.Startloop+2,'D',sc.localData.Startloop+2, undefined);
	ctx.log(rootData.Items[sc.localData.Startloop][0][0] + ";" + rootData.Items[sc.localData.Startloop][0][1]);
	sc.endStep(); // Delay_10_ms
	return;
}});

// ----------------------------------------------------------------
//   Step: Delay_10_ms
// ----------------------------------------------------------------
GLOBAL.step({ Delay_10_ms: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('leerXLS', 'fde9e0b1-6307-4560-be26-a944f4550de1') ;
	// Delays execution for some milliseconds.
	// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
	// It allows user interaction with Desktop Agent and other programs during the pause.
	// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react.
	ctx.wait(function(ev) {
		sc.endStep(); // Loops_to_the_start_bl_1
		return;
	}, 10);
}});

// ----------------------------------------------------------------
//   Step: Loops_to_the_start_bl_1
// ----------------------------------------------------------------
GLOBAL.step({ Loops_to_the_start_bl_1: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('leerXLS', '5722004b-d6e6-4cb1-af4c-e8d50b4a6e17') ;
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
