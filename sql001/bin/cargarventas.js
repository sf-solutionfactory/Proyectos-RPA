
// ----------------------------------------------------------------
//   Test menu for scenario cargarVentas 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'cargarVentas', 'Test cargarVentas', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.cargarVentas.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario cargarVentas Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: cargarVentas
// ----------------------------------------------------------------
GLOBAL.scenario({ cargarVentas: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.getLines, GLOBAL.steps.Display_msgbox_fin);
	sc.step(GLOBAL.steps.Display_msgbox_fin, null);
}}, ctx.dataManagers.rootData).setId('8b73def4-3064-45a2-8283-8d7c021df268') ;

// ----------------------------------------------------------------
//   Step: getLines
// ----------------------------------------------------------------
GLOBAL.step({ getLines: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargarVentas', '67ef241a-cf5e-4eaa-a1ca-2a2c84564d8c') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	var command = 'sqlcmd '+
								'-S 104.210.223.37,4785 '+
								'-U "UserSp" '+
								'-P "Inicio1#" '
								'-d "Pagos" -h-1 '+
								'-o C:\\LAYOUT\\sql004.txt '+
								'-Q "exec Reportesap @idestacion= null, @Fechaini=\'20210630\', @fechafin =\'20210630\'"';
		try {
			ctx.exec(command, 30000, function (res) { // timeout 30 sec
				// do some stuff once you get the response
				sc.endStep(); // Display_msgbox_fin
				return ;
			});
		}catch (ex) {
			ctx.log(ex.message, e.logIconType.Error);
			sc.endStep(); // end Scenario
			return ;
		}
//	sc.endStep(); // Display_msgbox_fin
//	return;
}});

// ----------------------------------------------------------------
//   Step: Display_msgbox_fin
// ----------------------------------------------------------------
GLOBAL.step({ Display_msgbox_fin: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargarVentas', 'f608cd85-1b58-4bc4-8163-e3ca4f06c89b') ;
	// Displays a message box. If the "Wait closing" option is selected, waits until the end user closes it.
	// Creates the popup according to selected template, sets title and message and displays it.
	var fin = ctx.popup('fin', e.popup.template.Ok);
	fin.open({ title: 'Base de datos', message: 'Datos obtenidos correctamente'});
	// Wait until the end user closes the popup.
	fin.waitResult(function(res) {
	// End user has closed the popup, continue monitoring.
		sc.endStep(); // end Scenario
		return;
	});
}});
