
// ----------------------------------------------------------------
//   Test menu for scenario carga_Diaria 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'carga_Diaria', 'Test carga_Diaria', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.carga_Diaria.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario carga_Diaria Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: carga_Diaria
// ----------------------------------------------------------------
GLOBAL.scenario({ carga_Diaria: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(12000000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(600000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.getFilenameD, GLOBAL.steps.getSettingsD);
	sc.step(GLOBAL.steps.getSettingsD, GLOBAL.steps.connectSQL_D);
	sc.step(GLOBAL.steps.connectSQL_D, GLOBAL.steps.Read_txtD);
	sc.step(GLOBAL.steps.Read_txtD, GLOBAL.steps.setListD);
	sc.step(GLOBAL.steps.setListD, GLOBAL.steps.Write_txtD);
	sc.step(GLOBAL.steps.Write_txtD, null);
}}, ctx.dataManagers.rootData).setId('ea6bf57f-91f9-490a-a1f2-6c9705133ecc') ;

// ----------------------------------------------------------------
//   Step: getFilenameD
// ----------------------------------------------------------------
GLOBAL.step({ getFilenameD: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_Diaria', '24b83adb-f66b-4cf6-9730-33af71452f0e') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // getSettingsD
	return;
}});

// ----------------------------------------------------------------
//   Step: getSettingsD
// ----------------------------------------------------------------
GLOBAL.step({ getSettingsD: function(ev, sc, st) {
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
											sc.endStep(); // connectSQL_D
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
//   Step: connectSQL_D
// ----------------------------------------------------------------
GLOBAL.step({ connectSQL_D: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_Diaria', 'bd356ea7-5f8e-4958-a7b9-df18dd060b9e') ;
	// Consulta a SQL
	sc.endStep(); // Read_txtD
	return;
}});

// ----------------------------------------------------------------
//   Step: Read_txtD
// ----------------------------------------------------------------
GLOBAL.step({ Read_txtD: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_Diaria', 'd8daafe2-ad49-4fa2-a0aa-3bc750fd7c0c') ;
	// Leer archivo generado
	sc.endStep(); // setListD
	return;
}});

// ----------------------------------------------------------------
//   Step: setListD
// ----------------------------------------------------------------
GLOBAL.step({ setListD: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_Diaria', '8b8da3ad-b558-4e96-a0ea-d51ec5380fd9') ;
	// Genera aarchivo TXT
	sc.endStep(); // Write_txtD
	return;
}});

// ----------------------------------------------------------------
//   Step: Write_txtD
// ----------------------------------------------------------------
GLOBAL.step({ Write_txtD: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSQL_Diaria', 'd3e40d1b-2f53-4826-969b-623a7f72f6d2') ;
	// Writes a text file.
	var file = rootData.filename;
	var txt = rootData.archivoTXT;
	ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
	sc.endStep(); // end Scenario
	return;
}});
