
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
	sc.localData.Startloop_1 = 0;
	
	sc.step(GLOBAL.steps.Initialize_Excel, GLOBAL.steps.Open_existing_Excel_f);
	sc.step(GLOBAL.steps.Open_existing_Excel_f, GLOBAL.steps.Start_loop);
	sc.step(GLOBAL.steps.Start_loop, GLOBAL.steps.Exit_loop2);
	sc.step(GLOBAL.steps.Exit_loop2, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Exit_loop2, GLOBAL.steps.Start_loop_1);
	sc.step(GLOBAL.steps.Start_loop_1, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Start_loop_1, GLOBAL.steps.Exit_loop2_1);
	sc.step(GLOBAL.steps.Exit_loop2_1, GLOBAL.steps.Loops_to_the_start_bl_1, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Exit_loop2_1, GLOBAL.steps.Sequence);
	sc.step(GLOBAL.steps.Sequence, GLOBAL.steps.Loops_to_the_start_bl_1, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Sequence, GLOBAL.steps.Delay_100_ms);
	sc.step(GLOBAL.steps.Delay_100_ms, GLOBAL.steps.Loops_to_the_start_bl_1, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Delay_100_ms, GLOBAL.steps.Loops_to_the_start_bl_1);
	sc.step(GLOBAL.steps.Loops_to_the_start_bl_1, GLOBAL.steps.Start_loop_1, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Loops_to_the_start_bl_1, GLOBAL.steps.Loops_to_the_start_bl);
	sc.step(GLOBAL.steps.Loops_to_the_start_bl, GLOBAL.steps.Start_loop, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Loops_to_the_start_bl, GLOBAL.steps.Display_Values);
	sc.step(GLOBAL.steps.Display_Values, GLOBAL.steps.End_Excel);
	sc.step(GLOBAL.steps.End_Excel, null);
}}, ctx.dataManagers.rootData).setId('43b90a5d-296a-4cb9-a885-8698174018cf') ;

// ----------------------------------------------------------------
//   Step: Initialize_Excel
// ----------------------------------------------------------------
GLOBAL.step({ Initialize_Excel: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWorkflow', '593e3cb8-37ba-4a28-b783-14506909db45') ;
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
	ctx.workflow('newWorkflow', 'ba693ae1-c701-46d6-b1c4-4d29f9b4ce3e') ;
	// Open existing Excel file.
	ctx.excel.file.open("C:\\LAYOUT\\LayoutENCO.xlsx");
	sc.endStep(); // Start_loop
	return;
}});

// ----------------------------------------------------------------
//   Step: Start_loop
// ----------------------------------------------------------------
GLOBAL.step({ Start_loop: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('newWorkflow', '1e6b4a1a-4a7f-4072-a69f-4ca2ebd6007b') ;
	// Starting instruction for a loop.
	if (sc.localData.Startloop < 0) sc.localData.Startloop = 0;
	sc.endStep(); // Exit_loop2
	return;
}});

// ----------------------------------------------------------------
//   Step: Exit_loop2
// ----------------------------------------------------------------
GLOBAL.step({ Exit_loop2: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('newWorkflow', '871b1cad-e084-41fb-8748-2a0b801ad3e9') ;
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
	sc.endStep(); // Start_loop_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Start_loop_1
// ----------------------------------------------------------------
GLOBAL.step({ Start_loop_1: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('newWorkflow', '5beab0cf-7d1d-443b-9ad2-85a63a36f345') ;
	// Starting instruction for a loop.
	if (sc.localData.Startloop_1 < 0) sc.localData.Startloop_1 = 0;
	sc.endStep(); // Exit_loop2_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Exit_loop2_1
// ----------------------------------------------------------------
GLOBAL.step({ Exit_loop2_1: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('newWorkflow', 'b9cc038a-b6db-405d-8af0-74a6142517a9') ;
	// Test block to exit from a loop.
	if (sc.localData.Startloop_1 == ctx.excel.sheet.getLastColumn('A1')-1)
	{
		sc.localData.Startloop_1 = -1 ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // Sequence
	return;
}});

// ----------------------------------------------------------------
//   Step: Sequence
// ----------------------------------------------------------------
GLOBAL.step({ Sequence: function(ev, sc, st) {
	var rootData = sc.data;
	// Conditionally executes a block of actions if the specified check of an expression evaluates to TRUE.
	if (sc.localData.Startloop_1 == 0)
	{
		// Describe functionality to be implemented in JavaScript later in the project.
	}
	// Obtener letra de columna
	// Get one value from a cell
	rootData.Items[sc.localData.Startloop].Values[sc.localData.Startloop_1] = ctx.excel.sheet.getCell(sc.localData.Startloop+2, numToLetter(sc.localData.Startloop_1+1));
	sc.endStep(); // Delay_100_ms
	return;
}});

// ----------------------------------------------------------------
//   Step: Delay_100_ms
// ----------------------------------------------------------------
GLOBAL.step({ Delay_100_ms: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWorkflow', '3e27f7b9-7936-4526-a814-00ad191fde80') ;
	// Delays execution for some milliseconds.
	// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
	// It allows user interaction with Desktop Agent and other programs during the pause.
	// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react.
	ctx.wait(function(ev) {
		sc.endStep(); // Loops_to_the_start_bl_1
		return;
	}, 100);
}});

// ----------------------------------------------------------------
//   Step: Loops_to_the_start_bl_1
// ----------------------------------------------------------------
GLOBAL.step({ Loops_to_the_start_bl_1: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('newWorkflow', 'ed9420e9-5497-46f6-bd0d-2840d40fafbc') ;
	// Loops to the start block.
	if (sc.localData.Startloop_1 != -1)
	{
		sc.localData.Startloop_1++ ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // Loops_to_the_start_bl
	return;
}});

// ----------------------------------------------------------------
//   Step: Loops_to_the_start_bl
// ----------------------------------------------------------------
GLOBAL.step({ Loops_to_the_start_bl: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('newWorkflow', '3b665cb2-33de-4cfa-9365-b4132fccaac5') ;
	// Loops to the start block.
	if (sc.localData.Startloop != -1)
	{
		sc.localData.Startloop++ ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // Display_Values
	return;
}});

// ----------------------------------------------------------------
//   Step: Display_Values
// ----------------------------------------------------------------
GLOBAL.step({ Display_Values: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWorkflow', 'ee64a5a8-e0ed-4630-b957-e24ca361d721') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // End_Excel
	return;
}});

// ----------------------------------------------------------------
//   Step: End_Excel
// ----------------------------------------------------------------
GLOBAL.step({ End_Excel: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWorkflow', 'ab6207b1-8e0b-42a8-a15b-1cf5699bbdc4') ;
	// End Excel.
	ctx.excel.end();
	sc.endStep(); // end Scenario
	return;
}});
