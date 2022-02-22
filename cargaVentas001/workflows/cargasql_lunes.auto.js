
// ----------------------------------------------------------------
//   Test menu for scenario carga_Lunes 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'carga_Lunes', 'Test carga_Lunes', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.carga_Lunes.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario carga_Lunes Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: carga_Lunes
// ----------------------------------------------------------------
GLOBAL.scenario({ carga_Lunes: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(12000000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(600000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.getFilenameL, GLOBAL.steps.getSettingsL);
	sc.step(GLOBAL.steps.getSettingsL, GLOBAL.steps.connectSQL_L);
	sc.step(GLOBAL.steps.connectSQL_L, GLOBAL.steps.Read_txtL);
	sc.step(GLOBAL.steps.Read_txtL, GLOBAL.steps.setListL);
	sc.step(GLOBAL.steps.setListL, GLOBAL.steps.Write_txtL);
	sc.step(GLOBAL.steps.Write_txtL, null);
}}, ctx.dataManagers.rootData).setId('abb643a7-c0c2-435c-9d53-4fd314515183') ;

// ----------------------------------------------------------------
//   Step: getFilenameL
// ----------------------------------------------------------------
GLOBAL.step({ getFilenameL: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_Lunes', '47c86833-3b77-4c04-9cac-05bcc5bf5573') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // getSettingsL
	return;
}});

// ----------------------------------------------------------------
//   Step: getSettingsL
// ----------------------------------------------------------------
GLOBAL.step({ getSettingsL: function(ev, sc, st) {
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
											sc.endStep(); // connectSQL_L
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
//   Step: connectSQL_L
// ----------------------------------------------------------------
GLOBAL.step({ connectSQL_L: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_Lunes', '23a1b9c0-8184-4257-80c8-e28de3aa51d9') ;
	// Consulta a SQL
	sc.endStep(); // Read_txtL
	return;
}});

// ----------------------------------------------------------------
//   Step: Read_txtL
// ----------------------------------------------------------------
GLOBAL.step({ Read_txtL: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_Lunes', 'a4eb29c4-69d1-4b14-b5d5-82d620aba9e6') ;
	// Leer archivo generado
	sc.endStep(); // setListL
	return;
}});

// ----------------------------------------------------------------
//   Step: setListL
// ----------------------------------------------------------------
GLOBAL.step({ setListL: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_Lunes', '1e6d86d5-3532-4750-826c-6f20a5a4b139') ;
	// Genera aarchivo TXT
	sc.endStep(); // Write_txtL
	return;
}});

// ----------------------------------------------------------------
//   Step: Write_txtL
// ----------------------------------------------------------------
GLOBAL.step({ Write_txtL: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_Lunes', '37c5e78a-58d7-4212-a864-37ac8cdb251d') ;
	// Writes a text file.
	var file = rootData.filename;
	var txt = rootData.archivoTXT;
	ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
	sc.endStep(); // end Scenario
	return;
}});
