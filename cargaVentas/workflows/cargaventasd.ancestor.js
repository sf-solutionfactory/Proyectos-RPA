﻿
// ----------------------------------------------------------------
//   Test menu for scenario cargaVentasD 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'cargaVentasD', 'Test cargaVentasD', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.cargaVentasD.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario cargaVentasD Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: cargaVentasD
// ----------------------------------------------------------------
GLOBAL.scenario({ cargaVentasD: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(43200000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(600000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.getFilename, GLOBAL.steps.connectSQL);
	sc.step(GLOBAL.steps.connectSQL, GLOBAL.steps.Read_a_text_file);
	sc.step(GLOBAL.steps.Read_a_text_file, GLOBAL.steps.setList);
	sc.step(GLOBAL.steps.setList, GLOBAL.steps.Write_a_text_file);
	sc.step(GLOBAL.steps.Write_a_text_file, GLOBAL.steps.Start_SAPLogon760);
	sc.step(GLOBAL.steps.Start_SAPLogon760, GLOBAL.steps.pWindowSAPLogon76_man);
	sc.step(GLOBAL.steps.pWindowSAPLogon76_man, GLOBAL.steps.Declare_credential);
	sc.step(GLOBAL.steps.Declare_credential, GLOBAL.steps.Get_credential);
	sc.step(GLOBAL.steps.Get_credential, GLOBAL.steps.pSAPLogin_management);
	sc.step(GLOBAL.steps.pSAPLogin_management, GLOBAL.steps.pSAPEasyAccess_manage);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage, GLOBAL.steps.Disable_step_timeout);
	sc.step(GLOBAL.steps.Disable_step_timeout, GLOBAL.steps.pVentasYFacturasMas_m);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m, GLOBAL.steps.pPosDocumVisualiza_ma);
	sc.step(GLOBAL.steps.pPosDocumVisualiza_ma, GLOBAL.steps.pVentasYFacturasMas_m_1);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m_1, GLOBAL.steps.pSAPEasyAccess_manage_1);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage_1, GLOBAL.steps.pSalirDelSistema_mana);
	sc.step(GLOBAL.steps.pSalirDelSistema_mana, null);
}}, ctx.dataManagers.rootData).setId('524713ab-bf57-48d9-9692-7630c30836fd') ;

// ----------------------------------------------------------------
//   Step: getFilename
// ----------------------------------------------------------------
GLOBAL.step({ getFilename: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasD', 'aa178c72-fc09-4ab7-874b-02a53d896474') ;
	// Get filename
	sc.endStep(); // connectSQL
	return;
}});

// ----------------------------------------------------------------
//   Step: connectSQL
// ----------------------------------------------------------------
GLOBAL.step({ connectSQL: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasD', '967a89e3-3ec5-4b2c-8adb-a62e27d97aa6') ;
	// Ejecutar stored procedure
	sc.endStep(); // Read_a_text_file
	return;
}});

// ----------------------------------------------------------------
//   Step: Read_a_text_file
// ----------------------------------------------------------------
GLOBAL.step({ Read_a_text_file: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasD', '6ad997cd-cbac-4f30-9cb4-922db4fa0426') ;
	// Reads the content of a text file.
	var file = rootData.filename;
	rootData.lines = ctx.fso.file.read(file, e.file.encoding.UTF8);
	sc.endStep(); // setList
	return;
}});

// ----------------------------------------------------------------
//   Step: setList
// ----------------------------------------------------------------
GLOBAL.step({ setList: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasD', 'ecc75ecb-9a65-4319-812c-5bc923bd6e68') ;
	// Genera archivo final
	sc.endStep(); // Write_a_text_file
	return;
}});

// ----------------------------------------------------------------
//   Step: Write_a_text_file
// ----------------------------------------------------------------
GLOBAL.step({ Write_a_text_file: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasD', '2129ec15-2d2c-470e-ac47-204eb1217595') ;
	// Writes a text file.
	var file = rootData.filename;
	var txt = rootData.archivoTXT;
	ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
	sc.endStep(); // Start_SAPLogon760
	return;
}});

// ----------------------------------------------------------------
//   Step: Start_SAPLogon760
// ----------------------------------------------------------------
GLOBAL.step({ Start_SAPLogon760: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasD', '74356520-ca90-4278-83d2-f71f26f3815b') ;
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
	ctx.workflow('cargaVentasD', '8683d86c-70be-4e19-a920-c6296aa51525') ;
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
	ctx.workflow('cargaVentasD', 'b7b1810e-0fea-4396-b0c2-4ab3153e1638') ;
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
	ctx.workflow('cargaVentasD', 'a6e232f3-9dc8-4eff-b6d1-2d0e33fb3633') ;
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
	ctx.workflow('cargaVentasD', 'e7ef2efd-b676-429f-8195-361517a8ae6d') ;
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
	ctx.workflow('cargaVentasD', 'd09523ce-2991-45a2-93df-7b596a6cf88d') ;
	// Wait until the Page loads
	SAPLogon760.pSAPEasyAccess.wait(function(ev) {
		SAPLogon760.pSAPEasyAccess.oGuiOkCodeField.set("YSD_0001");
		SAPLogon760.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Enter_);
		sc.endStep(); // Disable_step_timeout
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Disable_step_timeout
// ----------------------------------------------------------------
GLOBAL.step({ Disable_step_timeout: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasD', '9edc2357-adfb-4464-a7e6-934d518b4470') ;
	// Used to disable step timeout.
	st.disableTimeout();
	sc.endStep(); // pVentasYFacturasMas_m
	return;
}});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m
// ----------------------------------------------------------------
GLOBAL.step({ pVentasYFacturasMas_m: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasD', '7a672a59-6e3d-45fd-acca-2dd6900596b6') ;
	// Wait until the Page loads
	SAPLogon760.pVentasYFacturasMas.wait(function(ev) {
		SAPLogon760.pVentasYFacturasMas.oVentaPorLínea.set("X");
		SAPLogon760.pVentasYFacturasMas.oSoloCarga.set("X");
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
	ctx.workflow('cargaVentasD', 'cce09916-f54e-4545-ab05-6947e94a4611') ;
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
	ctx.workflow('cargaVentasD', 'f884b5a5-04ce-4721-8d39-489e6435a198') ;
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
	ctx.workflow('cargaVentasD', '3c350777-f295-4654-8ff7-64c8a24f6ac7') ;
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
	ctx.workflow('cargaVentasD', 'fd4adb8f-f45f-434e-aee5-a04e4b2ac127') ;
	// Wait until the Page loads
	SAPLogon760.pSalirDelSistema.wait(function(ev) {
		SAPLogon760.pSalirDelSistema.btSí.click();
		sc.endStep(); // end Scenario
		return;
	});
}});
