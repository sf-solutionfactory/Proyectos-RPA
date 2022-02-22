
// ----------------------------------------------------------------
//   Test menu for scenario carga_SQL_Manual 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'carga_SQL_Manual', 'Test carga_SQL_Manual', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.carga_SQL_Manual.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario carga_SQL_Manual Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: carga_SQL_Manual
// ----------------------------------------------------------------
GLOBAL.scenario({ carga_SQL_Manual: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(12000000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(600000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.getFilenameMM, GLOBAL.steps.getSettingsMM);
	sc.step(GLOBAL.steps.getSettingsMM, GLOBAL.steps.connectSQL_MM);
	sc.step(GLOBAL.steps.connectSQL_MM, GLOBAL.steps.Read_txtMM);
	sc.step(GLOBAL.steps.Read_txtMM, GLOBAL.steps.setListMM);
	sc.step(GLOBAL.steps.setListMM, GLOBAL.steps.Write_txtMM);
	sc.step(GLOBAL.steps.Write_txtMM, null);
}}, ctx.dataManagers.rootData).setId('1a4d8ad1-450e-49b1-aea0-f7377233c85d') ;

// ----------------------------------------------------------------
//   Step: getFilenameMM
// ----------------------------------------------------------------
GLOBAL.step({ getFilenameMM: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_Manual', 'f2324cf4-681d-45d6-8926-a23a32132a97') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // getSettingsMM
	return;
}});

// ----------------------------------------------------------------
//   Step: getSettingsMM
// ----------------------------------------------------------------
GLOBAL.step({ getSettingsMM: function(ev, sc, st) {
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
											sc.endStep(); // connectSQL_MM
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
//   Step: connectSQL_MM
// ----------------------------------------------------------------
GLOBAL.step({ connectSQL_MM: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_Manual', '00f184ce-06b7-4bca-849c-972f41d85290') ;
	// Consulta a SQL
	sc.endStep(); // Read_txtMM
	return;
}});

// ----------------------------------------------------------------
//   Step: Read_txtMM
// ----------------------------------------------------------------
GLOBAL.step({ Read_txtMM: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_Manual', 'd652eec8-0e35-46d7-9452-2c3c0e8a10d3') ;
	// Leer archivo generado
	sc.endStep(); // setListMM
	return;
}});

// ----------------------------------------------------------------
//   Step: setListMM
// ----------------------------------------------------------------
GLOBAL.step({ setListMM: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_Manual', '38176da5-42f3-426f-90cd-c83d0f43caad') ;
	// Genera aarchivo TXT
	sc.endStep(); // Write_txtMM
	return;
}});

// ----------------------------------------------------------------
//   Step: Write_txtMM
// ----------------------------------------------------------------
GLOBAL.step({ Write_txtMM: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_Manual', '5002060b-64c9-4ba9-a26d-84121613fedf') ;
	// Writes a text file.
	var file = rootData.filename;
	var txt = rootData.archivoTXT;
	ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
	sc.endStep(); // end Scenario
	return;
}});
