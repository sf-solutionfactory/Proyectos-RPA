
// ----------------------------------------------------------------
//   Test menu for scenario carga_EntradaDiaria 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'carga_EntradaDiaria', 'Test carga_EntradaDiaria', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.carga_EntradaDiaria.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario carga_EntradaDiaria Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: carga_EntradaDiaria
// ----------------------------------------------------------------
GLOBAL.scenario({ carga_EntradaDiaria: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(12000000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(600000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.getFilenameE, GLOBAL.steps.getSettingsE);
	sc.step(GLOBAL.steps.getSettingsE, GLOBAL.steps.connectSQL_E);
	sc.step(GLOBAL.steps.connectSQL_E, GLOBAL.steps.Read_txtE);
	sc.step(GLOBAL.steps.Read_txtE, GLOBAL.steps.setListE);
	sc.step(GLOBAL.steps.setListE, GLOBAL.steps.Write_txtE);
	sc.step(GLOBAL.steps.Write_txtE, null);
}}, ctx.dataManagers.rootData).setId('1211ae62-343f-499f-becc-78f859ced3d7') ;

// ----------------------------------------------------------------
//   Step: getFilenameE
// ----------------------------------------------------------------
GLOBAL.step({ getFilenameE: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_EntradaDiaria', '870173cd-f2d1-4382-903d-122e675c512c') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // getSettingsE
	return;
}});

// ----------------------------------------------------------------
//   Step: getSettingsE
// ----------------------------------------------------------------
GLOBAL.step({ getSettingsE: function(ev, sc, st) {
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
											sc.endStep(); // connectSQL_E
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
//   Step: connectSQL_E
// ----------------------------------------------------------------
GLOBAL.step({ connectSQL_E: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_EntradaDiaria', '2a69dfea-8cd6-40fc-b215-2652eb4fe4a2') ;
	// Consulta a SQL
	sc.endStep(); // Read_txtE
	return;
}});

// ----------------------------------------------------------------
//   Step: Read_txtE
// ----------------------------------------------------------------
GLOBAL.step({ Read_txtE: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_EntradaDiaria', '1013e5fa-40ed-4e47-b8c4-9bde4fd24f1f') ;
	// Leer archivo generado
	sc.endStep(); // setListE
	return;
}});

// ----------------------------------------------------------------
//   Step: setListE
// ----------------------------------------------------------------
GLOBAL.step({ setListE: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_EntradaDiaria', '333f1dfd-ce4e-49a4-993a-c22342394a59') ;
	// Genera aarchivo TXT
	sc.endStep(); // Write_txtE
	return;
}});

// ----------------------------------------------------------------
//   Step: Write_txtE
// ----------------------------------------------------------------
GLOBAL.step({ Write_txtE: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_EntradaDiaria', '5a5dd0b7-620c-4cb7-a95d-0b60e877a6f4') ;
	// Writes a text file.
	var file = rootData.filename;
	var txt = rootData.archivoTXT;
	ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
	sc.endStep(); // end Scenario
	return;
}});
