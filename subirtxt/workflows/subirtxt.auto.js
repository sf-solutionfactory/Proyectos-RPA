
// ----------------------------------------------------------------
//   Test menu for scenario subirTXT 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'subirTXT', 'Test subirTXT', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.subirTXT.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario subirTXT Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: subirTXT
// ----------------------------------------------------------------
GLOBAL.scenario({ subirTXT: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.Open_existing_Excel_f, GLOBAL.steps.Get_values);
	sc.step(GLOBAL.steps.Get_values, null);
}}, ctx.dataManagers.rootData).setId('aa6e25fe-8e0b-4504-8b38-ad4aba2dde6f') ;

// ----------------------------------------------------------------
//   Step: Open_existing_Excel_f
// ----------------------------------------------------------------
GLOBAL.step({ Open_existing_Excel_f: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('subirTXT', 'a69938f1-88f5-463f-9c99-26f39950ef83') ;
	// Open existing Excel file.
	ctx.excel.file.open("C:\\LAYOUT\\LayoutENCO.xlsx");
	sc.endStep(); // Get_values
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_values
// ----------------------------------------------------------------
GLOBAL.step({ Get_values: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('subirTXT', 'b0dbe309-9e69-4a57-bb07-4427cf2e6521') ;
	// Get values from range on the active worksheet.
	rootData.Excel = ctx.excel.sheet.getFullRangeValues("A",2,"AK",1000, undefined);
	sc.endStep(); // end Scenario
	return;
}});
