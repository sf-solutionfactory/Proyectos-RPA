
// ----------------------------------------------------------------
//   Test menu for scenario carga_SQL_PG 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'carga_SQL_PG', 'Test carga_SQL_PG', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.carga_SQL_PG.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario carga_SQL_PG Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: carga_SQL_PG
// ----------------------------------------------------------------
GLOBAL.scenario({ carga_SQL_PG: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(12000000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(600000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.getFilenameP, GLOBAL.steps.getSettingsP);
	sc.step(GLOBAL.steps.getSettingsP, GLOBAL.steps.connectSQL_P);
	sc.step(GLOBAL.steps.connectSQL_P, GLOBAL.steps.Read_txtP);
	sc.step(GLOBAL.steps.Read_txtP, GLOBAL.steps.setListP);
	sc.step(GLOBAL.steps.setListP, GLOBAL.steps.Write_txtP);
	sc.step(GLOBAL.steps.Write_txtP, null);
}}, ctx.dataManagers.rootData).setId('de0b4542-caed-4885-a0e0-bb30ad0e818a') ;

// ----------------------------------------------------------------
//   Step: getFilenameP
// ----------------------------------------------------------------
GLOBAL.step({ getFilenameP: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_PG', 'aeeffd87-42da-4aea-8df6-d99f58017155') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // getSettingsP
	return;
}});

// ----------------------------------------------------------------
//   Step: getSettingsP
// ----------------------------------------------------------------
GLOBAL.step({ getSettingsP: function(ev, sc, st) {
	var rootData = sc.data;
	// Declares a setting
	
	ctx.setting({ fechaInicio: {
		comment: "Fecha Inicio",
		server: true
	}});
	// Declares a setting
	
	ctx.setting({ fechaFin: {
		comment: "Fecha fin",
		server: true
	}});
	// Declares a setting
	
	ctx.setting({ soloCarga: {
		comment: "solo Carga",
		server: true
	}});
	// Declares a setting
	
	ctx.setting({ idCentro: {
		comment: "idCentro",
		server: true
	}});
	// Declares a setting
	
	ctx.setting({ tipoConsulta: {
		comment: "tipoConsulta",
		server: true
	}});
	// Retrieves the value of a setting
	
	ctx.settings.fechaInicio.get(function(code, label, setting) {
		if (code == e.error.OK) {
			// get value from setting.value
			rootData.Manual.fechaIni = setting.value;
			// Retrieves the value of a setting
			
			ctx.settings.fechaFin.get(function(code, label, setting) {
				if (code == e.error.OK) {
					// get value from setting.value
					rootData.Manual.fechaFin = setting.value;
					// Retrieves the value of a setting
					
					ctx.settings.soloCarga.get(function(code, label, setting) {
						if (code == e.error.OK) {
							// get value from setting.value
							rootData.Manual.soloCarga = setting.value;
							// Retrieves the value of a setting
							
							ctx.settings.idCentro.get(function(code, label, setting) {
								if (code == e.error.OK) {
									// get value from setting.value
									rootData.Manual.idCentro = setting.value;
									// Retrieves the value of a setting
									
									ctx.settings.tipoConsulta.get(function(code, label, setting) {
										if (code == e.error.OK) {
											// get value from setting.value
											rootData.tipoConsulta = setting.value;
											sc.endStep(); // connectSQL_P
											return;
										}
									});
								}
							});
						}
					});
				}
			});
		}
	});
}});

// ----------------------------------------------------------------
//   Step: connectSQL_P
// ----------------------------------------------------------------
GLOBAL.step({ connectSQL_P: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_PG', '725803d9-a9f9-45e7-b448-ac4d768e8f5d') ;
	// Consulta a SQL
	sc.endStep(); // Read_txtP
	return;
}});

// ----------------------------------------------------------------
//   Step: Read_txtP
// ----------------------------------------------------------------
GLOBAL.step({ Read_txtP: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_PG', '7d3cbe08-f7ca-4d08-a89c-0c158655e07e') ;
	// Leer archivo generado
	sc.endStep(); // setListP
	return;
}});

// ----------------------------------------------------------------
//   Step: setListP
// ----------------------------------------------------------------
GLOBAL.step({ setListP: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_PG', '6749b3fe-182d-4a2b-a0ab-2ef8a8cf5f3c') ;
	// Genera aarchivo TXT
	sc.endStep(); // Write_txtP
	return;
}});

// ----------------------------------------------------------------
//   Step: Write_txtP
// ----------------------------------------------------------------
GLOBAL.step({ Write_txtP: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_PG', 'd2193bb8-8574-4bbd-a88f-3b538a354c94') ;
	// Writes a text file.
	var file = rootData.filename;
	var txt = rootData.archivoTXT;
	ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
	sc.endStep(); // end Scenario
	return;
}});
