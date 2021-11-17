
// ----------------------------------------------------------------
//   Test menu for scenario cargaVentas 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'cargaVentas', 'Test cargaVentas', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.cargaVentas.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario cargaVentas Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: cargaVentas
// ----------------------------------------------------------------
GLOBAL.scenario({ cargaVentas: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.getFilename, GLOBAL.steps.Initialize_Excel);
	sc.step(GLOBAL.steps.Initialize_Excel, GLOBAL.steps.Open_existing_Excel_f);
	sc.step(GLOBAL.steps.Open_existing_Excel_f, GLOBAL.steps.pWindowMicrosoftEx_ma);
	sc.step(GLOBAL.steps.pWindowMicrosoftEx_ma, GLOBAL.steps.pWindowMacro_manageme);
	sc.step(GLOBAL.steps.pWindowMacro_manageme, GLOBAL.steps.pWindowReporteador_ma);
	sc.step(GLOBAL.steps.pWindowReporteador_ma, GLOBAL.steps.pWindowMessage_manage);
	sc.step(GLOBAL.steps.pWindowMessage_manage, GLOBAL.steps.Activate_worksheet);
	sc.step(GLOBAL.steps.Activate_worksheet, GLOBAL.steps.Get_values);
	sc.step(GLOBAL.steps.Get_values, GLOBAL.steps.Leer_lista);
	sc.step(GLOBAL.steps.Leer_lista, GLOBAL.steps.Write_a_text_file);
	sc.step(GLOBAL.steps.Write_a_text_file, GLOBAL.steps.Custom);
	sc.step(GLOBAL.steps.Custom, GLOBAL.steps.Save_Excel_file);
	sc.step(GLOBAL.steps.Save_Excel_file, GLOBAL.steps.Close_Excel_file);
	sc.step(GLOBAL.steps.Close_Excel_file, GLOBAL.steps.End_Excel);
	sc.step(GLOBAL.steps.End_Excel, GLOBAL.steps.Write_a_text_file_1);
	sc.step(GLOBAL.steps.Write_a_text_file_1, GLOBAL.steps.Start_SAPLogon760);
	sc.step(GLOBAL.steps.Start_SAPLogon760, GLOBAL.steps.pWindowSAPLogon76_man);
	sc.step(GLOBAL.steps.pWindowSAPLogon76_man, GLOBAL.steps.Declare_credential);
	sc.step(GLOBAL.steps.Declare_credential, GLOBAL.steps.Get_credential);
	sc.step(GLOBAL.steps.Get_credential, GLOBAL.steps.pSAPLogin_management);
	sc.step(GLOBAL.steps.pSAPLogin_management, GLOBAL.steps.pSAPEasyAccess_manage);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage, GLOBAL.steps.pVentasYFacturasMas_m);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m, GLOBAL.steps.pPosDocumVisualiza_ma);
	sc.step(GLOBAL.steps.pPosDocumVisualiza_ma, GLOBAL.steps.pVentasYFacturasMas_m_1);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m_1, GLOBAL.steps.pSAPEasyAccess_manage_1);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage_1, GLOBAL.steps.pSalirDelSistema_mana);
	sc.step(GLOBAL.steps.pSalirDelSistema_mana, null);
}}, ctx.dataManagers.rootData).setId('37dded21-4ac8-4f09-bc09-a4d0a00b8e05') ;

// ----------------------------------------------------------------
//   Step: getFilename
// ----------------------------------------------------------------
GLOBAL.step({ getFilename: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '86cfe55f-848e-4a0c-870a-d777a177b9e1') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // Initialize_Excel
	return;
}});

// ----------------------------------------------------------------
//   Step: Initialize_Excel
// ----------------------------------------------------------------
GLOBAL.step({ Initialize_Excel: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '6516299b-438e-42ff-a637-d3942bac9e4b') ;
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
	ctx.workflow('cargaVentas', '7276e510-0194-4eb9-bd6a-7a5bff4e997a') ;
	// Open Excel file.
	ctx.excel.file.open("C:\\LAYOUT\\ReporteENCO.xlsm");
	sc.endStep(); // pWindowMicrosoftEx_ma
	return;
}});

// ----------------------------------------------------------------
//   Step: pWindowMicrosoftEx_ma
// ----------------------------------------------------------------
GLOBAL.step({ pWindowMicrosoftEx_ma: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '08cdf17d-5f59-407e-a9a1-4a619b3361d8') ;
	// Wait until the Page loads
	MicrosoftExcel.pWindowMicrosoftEx.wait(function(ev) {
		MicrosoftExcel.pWindowMicrosoftEx.btMacros.click();
		sc.endStep(); // pWindowMacro_manageme
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pWindowMacro_manageme
// ----------------------------------------------------------------
GLOBAL.step({ pWindowMacro_manageme: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', 'cc9d310e-a6e6-46ef-9712-010bb692f5c0') ;
	// Wait until the Page loads
	MicrosoftExcel.pWindowMacro.wait(function(ev) {
		MicrosoftExcel.pWindowMacro.oReporteSap.clickDouble();
		sc.endStep(); // pWindowReporteador_ma
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pWindowReporteador_ma
// ----------------------------------------------------------------
GLOBAL.step({ pWindowReporteador_ma: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '090f78b6-e15f-4cff-885f-a714fd4fa2ae') ;
	// Wait until the Page loads
	MicrosoftExcel.pWindowReporteador.wait(function(ev) {
		MicrosoftExcel.pWindowReporteador.edFechaI.set(rootData.fechaActual);
		MicrosoftExcel.pWindowReporteador.edFechaF.set(rootData.fechaActual);
		MicrosoftExcel.pWindowReporteador.btAceptar.click();
		sc.endStep(); // pWindowMessage_manage
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pWindowMessage_manage
// ----------------------------------------------------------------
GLOBAL.step({ pWindowMessage_manage: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', 'a04759d1-cdca-4600-9319-bc35266043f2') ;
	// Wait until the Page loads
	MicrosoftExcel.pWindowMessage.wait(function(ev) {
		MicrosoftExcel.pWindowMessage.btAceptar.click();
		sc.endStep(); // Activate_worksheet
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Activate_worksheet
// ----------------------------------------------------------------
GLOBAL.step({ Activate_worksheet: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '55b2a044-8ef6-4a94-9f3e-04914ebe5ba2') ;
	// Activate an Excel worksheet from the active workbook.
	ctx.excel.sheet.activate("Reporte");
	sc.endStep(); // Get_values
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_values
// ----------------------------------------------------------------
GLOBAL.step({ Get_values: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '4fe0274a-cdff-425d-8ec9-7570eaf66535') ;
	// Get values from range on the active worksheet.
	rootData.Items = ctx.excel.sheet.getFullRangeValues('A',1,'AK',ctx.excel.sheet.getLastRow('A1')-1, undefined);
	sc.endStep(); // Leer_lista
	return;
}});

// ----------------------------------------------------------------
//   Step: Leer_lista
// ----------------------------------------------------------------
GLOBAL.step({ Leer_lista: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '20c1fd0f-b8e9-4122-8d1e-33b2f5b65a59') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // Write_a_text_file
	return;
}});

// ----------------------------------------------------------------
//   Step: Write_a_text_file
// ----------------------------------------------------------------
GLOBAL.step({ Write_a_text_file: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', 'ab4b269c-320f-4ace-a39f-a55fa182fb5e') ;
	// Writes a text file.
	var file = rootData.filename;
	var txt = rootData.length;
	ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
	sc.endStep(); // Custom
	return;
}});

// ----------------------------------------------------------------
//   Step: Custom
// ----------------------------------------------------------------
GLOBAL.step({ Custom: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '1542d61d-223c-4f1d-b786-2c54571cf5e4') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // Save_Excel_file
	return;
}});

// ----------------------------------------------------------------
//   Step: Save_Excel_file
// ----------------------------------------------------------------
GLOBAL.step({ Save_Excel_file: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '543b5074-97ee-41fb-8fc5-c4ab651ec9f7') ;
	// Save Excel file.
	ctx.excel.file.save();
	sc.endStep(); // Close_Excel_file
	return;
}});

// ----------------------------------------------------------------
//   Step: Close_Excel_file
// ----------------------------------------------------------------
GLOBAL.step({ Close_Excel_file: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '1a4ca558-2399-4f76-90f6-54ff531d8377') ;
	// Close Excel file.
	ctx.excel.file.close();
	sc.endStep(); // End_Excel
	return;
}});

// ----------------------------------------------------------------
//   Step: End_Excel
// ----------------------------------------------------------------
GLOBAL.step({ End_Excel: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', 'ba0dc2b3-3968-4a86-a70a-b0bcaa649f9f') ;
	// End Excel.
	ctx.excel.end();
	sc.endStep(); // Write_a_text_file_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Write_a_text_file_1
// ----------------------------------------------------------------
GLOBAL.step({ Write_a_text_file_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', 'f706df91-0254-47f1-ab80-97fea402e493') ;
	// Writes a text file.
	var file = rootData.filename;
	var txt = rootData.texto;
	ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
	sc.endStep(); // Start_SAPLogon760
	return;
}});

// ----------------------------------------------------------------
//   Step: Start_SAPLogon760
// ----------------------------------------------------------------
GLOBAL.step({ Start_SAPLogon760: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '38790822-0291-43f5-b903-c4dba367aa3f') ;
	// Starts an application.
	SAPLogon760.start();
	sc.endStep(); // pWindowSAPLogon76_man
	return;
}});

// ----------------------------------------------------------------
//   Step: pWindowSAPLogon76_man
// ----------------------------------------------------------------
GLOBAL.step({ pWindowSAPLogon76_man: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', 'e9bbbcf8-f57f-433b-b7cf-e03fbeaec3da') ;
	// Wait until the Page loads
	SAPLogon760.pWindowSAPLogon76.wait(function(ev) {
		SAPLogon760.pWindowSAPLogon76.stARTHAQAS.clickDouble();
		sc.endStep(); // Declare_credential
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Declare_credential
// ----------------------------------------------------------------
GLOBAL.step({ Declare_credential: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '8c71aced-b1b3-4724-bba2-92fa4b57a0ca') ;
	// Declares a credential
	
	ctx.cryptography.credential({ logonQAS: {
		comment: "logonQAS",
		server: true
	}});
	sc.endStep(); // Get_credential
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_credential
// ----------------------------------------------------------------
GLOBAL.step({ Get_credential: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '9466411a-7345-4941-9141-613cc21445d7') ;
	// Retrieves credential login and password
	
	ctx.cryptography.credentials.logonQAS.get(function(code, label, credential) {
		if (code == e.error.OK) {
			// get values for credential
			rootData.sapgui.uname = credential.userName.get();
			rootData.sapgui.pass = credential.password.get();
			sc.endStep(); // pSAPLogin_management
			return;
		}
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPLogin_management
// ----------------------------------------------------------------
GLOBAL.step({ pSAPLogin_management: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', 'c3be00bf-a814-40f5-843f-f86efa060529') ;
	// Wait until the Page loads
	SAPLogon760.pSAPLogin.wait(function(ev) {
		SAPLogon760.pSAPLogin.edMandante.set("300");
		SAPLogon760.pSAPLogin.edUsuarios.set(rootData.sapgui.uname);
		SAPLogon760.pSAPLogin.oClvAcc.set(rootData.sapgui.pass);
		SAPLogon760.pSAPLogin.edIdioma.set("ES");
		SAPLogon760.pSAPLogin.keyStroke(e.SAPScripting.key._Enter_);
		sc.endStep(); // pSAPEasyAccess_manage
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage
// ----------------------------------------------------------------
GLOBAL.step({ pSAPEasyAccess_manage: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '3dd53dda-e569-4754-a439-b786b70105fa') ;
	// Wait until the Page loads
	SAPLogon760.pSAPEasyAccess.wait(function(ev) {
		SAPLogon760.pSAPEasyAccess.oGuiOkCodeField.set("ZSD_0001");
		SAPLogon760.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Enter_);
		sc.endStep(); // pVentasYFacturasMas_m
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m
// ----------------------------------------------------------------
GLOBAL.step({ pVentasYFacturasMas_m: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', 'b0b572f0-a6d1-4047-ae00-fc250b63bbe8') ;
	// Wait until the Page loads
	SAPLogon760.pVentasYFacturasMas.wait(function(ev) {
		SAPLogon760.pVentasYFacturasMas.oVentaPorLínea.set("X");
		SAPLogon760.pVentasYFacturasMas.edFichero.set(rootData.filename);
		SAPLogon760.pVentasYFacturasMas.btEjecutar.click();
		sc.endStep(); // pPosDocumVisualiza_ma
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pPosDocumVisualiza_ma
// ----------------------------------------------------------------
GLOBAL.step({ pPosDocumVisualiza_ma: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', 'e0c3d246-f32b-4d3b-9554-2db06f45b6f9') ;
	// Wait until the Page loads
	SAPLogon760.pPosDocumVisualiza.wait(function(ev) {
		// Delays execution for some milliseconds.
		// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
		// It allows user interaction with Desktop Agent and other programs during the pause.
		// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react.
		ctx.wait(function(ev) {
			SAPLogon760.pPosDocumVisualiza.btAceptar.click();
			sc.endStep(); // pVentasYFacturasMas_m_1
			return;
		}, 1000);
	});
}});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_1
// ----------------------------------------------------------------
GLOBAL.step({ pVentasYFacturasMas_m_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '0c2ccb03-b5cc-4df8-b60d-f7ac90c69598') ;
	// Wait until the Page loads
	SAPLogon760.pVentasYFacturasMas.wait(function(ev) {
		SAPLogon760.pVentasYFacturasMas.btIFinalizar.click();
		sc.endStep(); // pSAPEasyAccess_manage_1
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_1
// ----------------------------------------------------------------
GLOBAL.step({ pSAPEasyAccess_manage_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '999f8402-a480-4756-9fc9-eafddea92aeb') ;
	// Wait until the Page loads
	SAPLogon760.pSAPEasyAccess.wait(function(ev) {
		SAPLogon760.pSAPEasyAccess.btIFinalizar.click();
		sc.endStep(); // pSalirDelSistema_mana
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSalirDelSistema_mana
// ----------------------------------------------------------------
GLOBAL.step({ pSalirDelSistema_mana: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas', '8a0dd296-8a17-460d-be0b-caed251ae7fd') ;
	// Wait until the Page loads
	SAPLogon760.pSalirDelSistema.wait(function(ev) {
		SAPLogon760.pSalirDelSistema.btNo.click();
		sc.endStep(); // end Scenario
		return;
	});
}});
