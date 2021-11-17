
// ----------------------------------------------------------------
//   Test menu for scenario cargaVentas48 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'cargaVentas48', 'Test cargaVentas48', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.cargaVentas48.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario cargaVentas48 Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: cargaVentas48
// ----------------------------------------------------------------
GLOBAL.scenario({ cargaVentas48: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(43200000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(600000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.getFilename_1, GLOBAL.steps.connectSQL_1);
	sc.step(GLOBAL.steps.connectSQL_1, GLOBAL.steps.Read_a_text_file_1);
	sc.step(GLOBAL.steps.Read_a_text_file_1, GLOBAL.steps.setList_1);
	sc.step(GLOBAL.steps.setList_1, GLOBAL.steps.Write_a_text_file_1);
	sc.step(GLOBAL.steps.Write_a_text_file_1, GLOBAL.steps.Start_SAPLogon760_1);
	sc.step(GLOBAL.steps.Start_SAPLogon760_1, GLOBAL.steps.pWindowSAPLogon76_man_1);
	sc.step(GLOBAL.steps.pWindowSAPLogon76_man_1, GLOBAL.steps.Declare_credential_1);
	sc.step(GLOBAL.steps.Declare_credential_1, GLOBAL.steps.Get_credential_1);
	sc.step(GLOBAL.steps.Get_credential_1, GLOBAL.steps.pSAPLogin_management_1);
	sc.step(GLOBAL.steps.pSAPLogin_management_1, GLOBAL.steps.pSAPEasyAccess_manage_2);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage_2, GLOBAL.steps.Disable_step_timeout_1);
	sc.step(GLOBAL.steps.Disable_step_timeout_1, GLOBAL.steps.pVentasYFacturasMas_m_2);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m_2, GLOBAL.steps.pPosDocumVisualiza_ma_1);
	sc.step(GLOBAL.steps.pPosDocumVisualiza_ma_1, GLOBAL.steps.pVentasYFacturasMas_m_1_1);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m_1_1, GLOBAL.steps.pSAPEasyAccess_manage_1_1);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage_1_1, GLOBAL.steps.pSalirDelSistema_mana_1);
	sc.step(GLOBAL.steps.pSalirDelSistema_mana_1, null);
}}, ctx.dataManagers.rootData).setId('4b269498-5e9a-4d00-9b23-62882fde8899') ;

// ----------------------------------------------------------------
//   Step: getFilename_1
// ----------------------------------------------------------------
GLOBAL.step({ getFilename_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', 'bba0ec92-8f5a-4652-ac92-c3f1bd65fa14') ;
	// Get filename
	sc.endStep(); // connectSQL_1
	return;
}});

// ----------------------------------------------------------------
//   Step: connectSQL_1
// ----------------------------------------------------------------
GLOBAL.step({ connectSQL_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', '8400087e-bd68-4761-a3ed-2fba0a1c91c3') ;
	// Ejecutar stored procedure
	sc.endStep(); // Read_a_text_file_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Read_a_text_file_1
// ----------------------------------------------------------------
GLOBAL.step({ Read_a_text_file_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', '4e01d4e1-7da6-4eee-8cc0-444b8ce7a50f') ;
	// Reads the content of a text file.
	var file = rootData.filename;
	rootData.lines = ctx.fso.file.read(file, e.file.encoding.UTF8);
	sc.endStep(); // setList_1
	return;
}});

// ----------------------------------------------------------------
//   Step: setList_1
// ----------------------------------------------------------------
GLOBAL.step({ setList_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', '0ba54f20-9036-4f63-ad0a-1f457dade938') ;
	// Genera archivo final
	sc.endStep(); // Write_a_text_file_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Write_a_text_file_1
// ----------------------------------------------------------------
GLOBAL.step({ Write_a_text_file_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', 'a9912ed3-0d98-45e8-a6c3-a9b2f18f129a') ;
	// Writes a text file.
	var file = rootData.filename;
	var txt = rootData.archivoTXT;
	ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
	sc.endStep(); // Start_SAPLogon760_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Start_SAPLogon760_1
// ----------------------------------------------------------------
GLOBAL.step({ Start_SAPLogon760_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', '23698a71-ba19-420a-b04d-c4164a0be538') ;
	// Starts an application.
	SAPLogon760.start();
	sc.endStep(); // pWindowSAPLogon76_man_1
	return;
}});

// ----------------------------------------------------------------
//   Step: pWindowSAPLogon76_man_1
// ----------------------------------------------------------------
GLOBAL.step({ pWindowSAPLogon76_man_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', '552a28bd-195e-49ed-aeeb-3be0148326ac') ;
	// Wait until the Page loads
	SAPLogon760.pWindowSAPLogon76.wait(function(ev) {
		SAPLogon760.pWindowSAPLogon76.stARTHAQAS.clickDouble();
		sc.endStep(); // Declare_credential_1
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Declare_credential_1
// ----------------------------------------------------------------
GLOBAL.step({ Declare_credential_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', '24fb34be-4526-4a35-9163-dfef7b3c2c05') ;
	// Declares a credential
	
	ctx.cryptography.credential({ logonQAS: {
		comment: "logonQAS",
		server: true
	}});
	sc.endStep(); // Get_credential_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_credential_1
// ----------------------------------------------------------------
GLOBAL.step({ Get_credential_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', '9ece25bf-625b-49cd-aaf7-b37a60920c9f') ;
	// Retrieves credential login and password
	
	ctx.cryptography.credentials.logonQAS.get(function(code, label, credential) {
		if (code == e.error.OK) {
			// get values for credential
			rootData.sapgui.uname = credential.userName.get();
			rootData.sapgui.pass = credential.password.get();
			sc.endStep(); // pSAPLogin_management_1
			return;
		}
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPLogin_management_1
// ----------------------------------------------------------------
GLOBAL.step({ pSAPLogin_management_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', 'aee33949-af31-40ab-a49c-8136af5787ed') ;
	// Wait until the Page loads
	SAPLogon760.pSAPLogin.wait(function(ev) {
		SAPLogon760.pSAPLogin.edMandante.set("300");
		SAPLogon760.pSAPLogin.edUsuarios.set(rootData.sapgui.uname);
		SAPLogon760.pSAPLogin.oClvAcc.set(rootData.sapgui.pass);
		SAPLogon760.pSAPLogin.edIdioma.set("ES");
		SAPLogon760.pSAPLogin.keyStroke(e.SAPScripting.key._Enter_);
		sc.endStep(); // pSAPEasyAccess_manage_2
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_2
// ----------------------------------------------------------------
GLOBAL.step({ pSAPEasyAccess_manage_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', 'dc095eb8-5550-43a3-8592-593d56460e8d') ;
	// Wait until the Page loads
	SAPLogon760.pSAPEasyAccess.wait(function(ev) {
		SAPLogon760.pSAPEasyAccess.oGuiOkCodeField.set("YSD_0001");
		SAPLogon760.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Enter_);
		sc.endStep(); // Disable_step_timeout_1
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Disable_step_timeout_1
// ----------------------------------------------------------------
GLOBAL.step({ Disable_step_timeout_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', '777f345b-21ba-42c2-8f63-260efb4c703f') ;
	// Used to disable step timeout.
	st.disableTimeout();
	sc.endStep(); // pVentasYFacturasMas_m_2
	return;
}});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_2
// ----------------------------------------------------------------
GLOBAL.step({ pVentasYFacturasMas_m_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', '5483cc17-8b45-469f-a6c6-0e0a4586b716') ;
	// Wait until the Page loads
	SAPLogon760.pVentasYFacturasMas.wait(function(ev) {
		SAPLogon760.pVentasYFacturasMas.oVentaPorLínea.set("X");
		SAPLogon760.pVentasYFacturasMas.edFichero.set(rootData.filename);
		SAPLogon760.pVentasYFacturasMas.btEjecutar.click();
		sc.endStep(); // pPosDocumVisualiza_ma_1
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pPosDocumVisualiza_ma_1
// ----------------------------------------------------------------
GLOBAL.step({ pPosDocumVisualiza_ma_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', 'f340fe1f-f6b3-468f-bd4b-fe4550af481d') ;
	// Wait until the Page loads
	SAPLogon760.pPosDocumVisualiza.wait(function(ev) {
		// Delays execution for some milliseconds.
		// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
		// It allows user interaction with Desktop Agent and other programs during the pause.
		// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react.
		ctx.wait(function(ev) {
			SAPLogon760.pPosDocumVisualiza.btAceptar.click();
			sc.endStep(); // pVentasYFacturasMas_m_1_1
			return;
		}, 1000);
	});
}});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_1_1
// ----------------------------------------------------------------
GLOBAL.step({ pVentasYFacturasMas_m_1_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', '2273325e-ce34-4afe-8f67-0b6f6c077ab8') ;
	// Wait until the Page loads
	SAPLogon760.pVentasYFacturasMas.wait(function(ev) {
		SAPLogon760.pVentasYFacturasMas.btIFinalizar.click();
		sc.endStep(); // pSAPEasyAccess_manage_1_1
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_1_1
// ----------------------------------------------------------------
GLOBAL.step({ pSAPEasyAccess_manage_1_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', 'db11c785-227e-46c3-86d3-bff93f230883') ;
	// Wait until the Page loads
	SAPLogon760.pSAPEasyAccess.wait(function(ev) {
		SAPLogon760.pSAPEasyAccess.btIFinalizar.click();
		sc.endStep(); // pSalirDelSistema_mana_1
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSalirDelSistema_mana_1
// ----------------------------------------------------------------
GLOBAL.step({ pSalirDelSistema_mana_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48', '0bdc1568-ca8e-40b8-9d8f-bd9172d853be') ;
	// Wait until the Page loads
	SAPLogon760.pSalirDelSistema.wait(function(ev) {
		SAPLogon760.pSalirDelSistema.btSí.click();
		sc.endStep(); // end Scenario
		return;
	});
}});
