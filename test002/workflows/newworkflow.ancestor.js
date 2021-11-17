
// ----------------------------------------------------------------
//   Test menu for scenario testTXT 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'testTXT', 'Test testTXT', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.testTXT.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario testTXT Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: testTXT
// ----------------------------------------------------------------
GLOBAL.scenario({ testTXT: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.Read_a_text_file, GLOBAL.steps.Write_a_text_file);
	sc.step(GLOBAL.steps.Write_a_text_file, GLOBAL.steps.Display_msgbox_Msg);
	sc.step(GLOBAL.steps.Display_msgbox_Msg, null);
}}, ctx.dataManagers.rootData).setId('d3cb5cd7-fa83-422a-9222-6efd9cd165a2') ;

// ----------------------------------------------------------------
//   Step: Read_a_text_file
// ----------------------------------------------------------------
GLOBAL.step({ Read_a_text_file: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWorkflow', '97b14698-a981-4f6e-90df-a0e4f4aacbfa') ;
	// Reads the content of a text file.
	var file = "C:\\Users\\rogel\\Downloads\\LayoutENCO.txt";
	rootData.txtFile.Line[0] = ctx.fso.file.read(file, e.file.encoding.UTF8);
	sc.endStep(); // Write_a_text_file
	return;
}});

// ----------------------------------------------------------------
//   Step: Write_a_text_file
// ----------------------------------------------------------------
GLOBAL.step({ Write_a_text_file: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWorkflow', '9f139e94-9da4-46ce-bf34-f2e9690907c4') ;
	// Writes a text file.
	var file = ctx.options.path.log + "\\sample.txt";
	var txt = rootData.txtFile.Line[0];
	ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
	sc.endStep(); // Display_msgbox_Msg
	return;
}});

// ----------------------------------------------------------------
//   Step: Display_msgbox_Msg
// ----------------------------------------------------------------
GLOBAL.step({ Display_msgbox_Msg: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWorkflow', '6e49c12d-c771-4124-a7c9-0b56067d6397') ;
	// Displays a message box. If the "Wait closing" option is selected, waits until the end user closes it.
	// Creates the popup according to selected template, sets title and message and displays it.
	var Msg = ctx.popup('Msg', e.popup.template.Ok);
	Msg.open({ title: 'Mensaje', message: 'Es correcto'});
	// Wait until the end user closes the popup.
	Msg.waitResult(function(res) {
	// End user has closed the popup, continue monitoring.
		sc.endStep(); // end Scenario
		return;
	});
}});
