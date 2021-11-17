
// ----------------------------------------------------------------
//   Test menu for scenario subirArchivo 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'subirArchivo', 'Test subirArchivo', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.subirArchivo.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario subirArchivo Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: subirArchivo
// ----------------------------------------------------------------
GLOBAL.scenario({ subirArchivo: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	// Initialize Loop counters
	sc.localData.Startloop = 0;
	
	sc.step(GLOBAL.steps.Start_SAPLogon760, GLOBAL.steps.pWindowSAPLogon76_man);
	sc.step(GLOBAL.steps.pWindowSAPLogon76_man, GLOBAL.steps.Get_credential);
	sc.step(GLOBAL.steps.Get_credential, GLOBAL.steps.pSAPLogin_management);
	sc.step(GLOBAL.steps.pSAPLogin_management, GLOBAL.steps.pSAPEasyAccess_manage);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage, GLOBAL.steps.pVentasYFacturasMas_m);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m, GLOBAL.steps.pPosDocumVisualiza_ma);
	sc.step(GLOBAL.steps.pPosDocumVisualiza_ma, GLOBAL.steps.Start_loop);
	sc.step(GLOBAL.steps.Start_loop, GLOBAL.steps.Exit_loop);
	sc.step(GLOBAL.steps.Exit_loop, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Exit_loop, GLOBAL.steps.pPosDocumVisualiza_ma_1);
	sc.step(GLOBAL.steps.pPosDocumVisualiza_ma_1, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.pPosDocumVisualiza_ma_1, GLOBAL.steps.Loops_to_the_start_bl);
	sc.step(GLOBAL.steps.Loops_to_the_start_bl, GLOBAL.steps.Start_loop, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Loops_to_the_start_bl, GLOBAL.steps.pPosDocumVisualiza_ma_2);
	sc.step(GLOBAL.steps.pPosDocumVisualiza_ma_2, GLOBAL.steps.pVentasYFacturasMas_m_1);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m_1, GLOBAL.steps.pSAPEasyAccess_manage_1);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage_1, GLOBAL.steps.pSalirDelSistema_mana);
	sc.step(GLOBAL.steps.pSalirDelSistema_mana, null);
}}, ctx.dataManagers.rootData).setId('9c213bae-806b-4563-bba5-102961de7256') ;

// ----------------------------------------------------------------
//   Step: Start_SAPLogon760
// ----------------------------------------------------------------
GLOBAL.step({ Start_SAPLogon760: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('subirArchivo', '011d7d47-fca8-4c08-ac8b-6d14ece87d8c') ;
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
	ctx.workflow('subirArchivo', 'daf7af1b-f69b-44af-87ae-22acc2877251') ;
	// Wait until the Page loads
	SAPLogon760.pWindowSAPLogon76.wait(function(ev) {
		SAPLogon760.pWindowSAPLogon76.oARTHAQAS.click();
		SAPLogon760.pWindowSAPLogon76.btAccederAlSistema.click();
		sc.endStep(); // Get_credential
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Get_credential
// ----------------------------------------------------------------
GLOBAL.step({ Get_credential: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('subirArchivo', 'b79fe0ce-adcb-4ecd-b919-ee55cde4803b') ;
	// Retrieves credential login and password
	
	ctx.cryptography.credentials.logonQAS.get(function(code, label, credential) {
		if (code == e.error.OK) {
			// get values for credential
			rootData.credencial.uname = credential.userName.get();
			rootData.credencial.password = credential.password.get();
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
	ctx.workflow('subirArchivo', '037a1ff3-f979-4c5c-8201-4e61db88d940') ;
	// Wait until the Page loads
	SAPLogon760.pSAPLogin.wait(function(ev) {
		SAPLogon760.pSAPLogin.edMandante.set("300");
		// Conditionally executes a block of actions if the specified check of an expression evaluates to TRUE.
		if (rootData.credencial.uname == "")
		{
			SAPLogon760.pSAPLogin.edUsuarios.set("FROJAS");
			SAPLogon760.pSAPLogin.oClvAcc.set("P455w0rd");
		}
		else
		{
			SAPLogon760.pSAPLogin.edUsuarios.set(rootData.credencial.uname);
			SAPLogon760.pSAPLogin.oClvAcc.set(rootData.credencial.password);
		}
		SAPLogon760.pSAPLogin.edIdioma.set("ES");
		SAPLogon760.pSAPLogin.keyStroke(e.SAPScripting.key._Enter_);
		sc.endStep(); // pSAPEasyAccess_manage
		return;
		sc.endStep(); // pSAPEasyAccess_manage
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage
// ----------------------------------------------------------------
GLOBAL.step({ pSAPEasyAccess_manage: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('subirArchivo', '326cddcc-49e0-4d2c-adca-869e0ee95db4') ;
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
	ctx.workflow('subirArchivo', 'd336f102-ca74-4d37-878b-b1522716285e') ;
	// Wait until the Page loads
	SAPLogon760.pVentasYFacturasMas.wait(function(ev) {
		SAPLogon760.pVentasYFacturasMas.edFichero.set("C:\\LAYOUT\\LayoutENCO.txt");
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
	ctx.workflow('subirArchivo', 'cc46c8d4-ac81-4508-811a-da05e03dcd7b') ;
	// Wait until the Page loads
	SAPLogon760.pPosDocumVisualiza.wait(function(ev) {
		sc.endStep(); // Start_loop
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Start_loop
// ----------------------------------------------------------------
GLOBAL.step({ Start_loop: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('subirArchivo', '57750d03-1ed9-4e3a-b967-d7d20827839e') ;
	// Starting instruction for a loop.
	if (sc.localData.Startloop < 0) sc.localData.Startloop = 0;
	sc.endStep(); // Exit_loop
	return;
}});

// ----------------------------------------------------------------
//   Step: Exit_loop
// ----------------------------------------------------------------
GLOBAL.step({ Exit_loop: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('subirArchivo', 'ae6385c4-a4a3-466f-8591-70c5c8d2ff87') ;
	// Test block to exit from a loop.
	if (!SAPLogon760.pPosDocumVisualiza.oTabla.i(sc.localData.Startloop).exist())
	{
		sc.localData.Startloop = -1 ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // pPosDocumVisualiza_ma_1
	return;
}});

// ----------------------------------------------------------------
//   Step: pPosDocumVisualiza_ma_1
// ----------------------------------------------------------------
GLOBAL.step({ pPosDocumVisualiza_ma_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('subirArchivo', '30bf3a8c-dcf5-41c5-aae9-40325086bc8a') ;
	// Wait until the Page loads
	SAPLogon760.pPosDocumVisualiza.wait(function(ev) {
		rootData.SAPLogon760Data.pPosDocumVisualizaData.oTabla = SAPLogon760.pPosDocumVisualiza.oTabla.i(sc.localData.Startloop).get();
		sc.endStep(); // Loops_to_the_start_bl
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Loops_to_the_start_bl
// ----------------------------------------------------------------
GLOBAL.step({ Loops_to_the_start_bl: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('subirArchivo', '99ceea00-37b1-412a-9b15-43c984b8f164') ;
	// Loops to the start block.
	if (sc.localData.Startloop != -1)
	{
		sc.localData.Startloop++ ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // pPosDocumVisualiza_ma_2
	return;
}});

// ----------------------------------------------------------------
//   Step: pPosDocumVisualiza_ma_2
// ----------------------------------------------------------------
GLOBAL.step({ pPosDocumVisualiza_ma_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('subirArchivo', '52adbb40-63b2-48a4-aafc-7352686d413a') ;
	// Wait until the Page loads
	SAPLogon760.pPosDocumVisualiza.wait(function(ev) {
		SAPLogon760.pPosDocumVisualiza.btAceptar.click();
		sc.endStep(); // pVentasYFacturasMas_m_1
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_1
// ----------------------------------------------------------------
GLOBAL.step({ pVentasYFacturasMas_m_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('subirArchivo', 'e800efbb-b1c7-4dc0-bc56-77b5878726e1') ;
	// Wait until the Page loads
	SAPLogon760.pVentasYFacturasMas.wait(function(ev) {
		SAPLogon760.pVentasYFacturasMas.btBack.click();
		sc.endStep(); // pSAPEasyAccess_manage_1
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_1
// ----------------------------------------------------------------
GLOBAL.step({ pSAPEasyAccess_manage_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('subirArchivo', 'b0696dac-50b2-4493-ac1a-a4b8898db0a5') ;
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
	ctx.workflow('subirArchivo', '6f86f536-f156-433b-aeb9-bf1c38bca491') ;
	// Wait until the Page loads
	SAPLogon760.pSalirDelSistema.wait(function(ev) {
		SAPLogon760.pSalirDelSistema.btSí.click();
		sc.endStep(); // end Scenario
		return;
	});
}});

// ******************************************************************************************
// *************************** Out of Scenario treatments ***********************************
// ******************************************************************************************

//---------------------------------------------------
// Declare credential
//---------------------------------------------------
ctx.workflow('subirArchivo', 'ed331827-ccff-4506-9596-daeac40b3f00') ;
// Declares a credential

ctx.cryptography.credential({ logonQAS: {
	comment: "Login QAS",
	server: true
}});
