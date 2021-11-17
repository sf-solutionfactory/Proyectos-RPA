
// ----------------------------------------------------------------
//   Test menu for scenario subirtxt 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'subirtxt', 'Test subirtxt', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.subirtxt.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario subirtxt Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: subirtxt
// ----------------------------------------------------------------
GLOBAL.scenario({ subirtxt: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	// Initialize Loop counters
	sc.localData.Startloop = 0;
	
	sc.step(GLOBAL.steps.Start_SAPLogon760, GLOBAL.steps.pWindowSAPLogon76_man);
	sc.step(GLOBAL.steps.pWindowSAPLogon76_man, GLOBAL.steps.Declare_credential);
	sc.step(GLOBAL.steps.Declare_credential, GLOBAL.steps.pSAPLogin_management);
	sc.step(GLOBAL.steps.pSAPLogin_management, GLOBAL.steps.pSAPEasyAccess_manage);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage, GLOBAL.steps.pVentasYFacturasMas_m);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m, GLOBAL.steps.pPosMensajes_manageme);
	sc.step(GLOBAL.steps.pPosMensajes_manageme, GLOBAL.steps.Start_loop);
	sc.step(GLOBAL.steps.Start_loop, GLOBAL.steps.Exit_loop);
	sc.step(GLOBAL.steps.Exit_loop, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Exit_loop, GLOBAL.steps.pPosMensajes_manageme_1);
	sc.step(GLOBAL.steps.pPosMensajes_manageme_1, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.pPosMensajes_manageme_1, GLOBAL.steps.Loops_to_the_start_bl);
	sc.step(GLOBAL.steps.Loops_to_the_start_bl, GLOBAL.steps.Start_loop, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Loops_to_the_start_bl, GLOBAL.steps.pPosMensajes_manageme_2);
	sc.step(GLOBAL.steps.pPosMensajes_manageme_2, GLOBAL.steps.pVentasYFacturasMas_m_1);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m_1, GLOBAL.steps.pSAPEasyAccess_manage_1);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage_1, GLOBAL.steps.pSalirDelSistema_mana);
	sc.step(GLOBAL.steps.pSalirDelSistema_mana, null);
}}, ctx.dataManagers.rootData).setId('3659b183-e5eb-4588-870b-ec8098ac1fd5') ;

// ----------------------------------------------------------------
//   Step: Start_SAPLogon760
// ----------------------------------------------------------------
GLOBAL.step({ Start_SAPLogon760: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('subirtxt', 'db17397f-b7bc-494f-ba42-fdc3a04cec6d') ;
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
	ctx.workflow('subirtxt', '41399861-afaa-4409-a424-09f665e4fed1') ;
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
	ctx.workflow('subirtxt', 'ed331827-ccff-4506-9596-daeac40b3f00') ;
	// Declares a credential
	
	ctx.cryptography.credential({ logonQAS: {
		comment: "Login QAS",
		server: true
	}});
	sc.endStep(); // pSAPLogin_management
	return;
}});

// ----------------------------------------------------------------
//   Step: pSAPLogin_management
// ----------------------------------------------------------------
GLOBAL.step({ pSAPLogin_management: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('subirtxt', '26c7dd7b-1c10-4757-af1e-fec9278e4f3e') ;
	// Wait until the Page loads
	SAPLogon760.pSAPLogin.wait(function(ev) {
		SAPLogon760.pSAPLogin.edMandante.set("300");
		// log uname
		ctx.log(credential.userName.get());
		SAPLogon760.pSAPLogin.edUsuarios.set(credential.userName.get());
		SAPLogon760.pSAPLogin.oClvAcc.set(credential.password.get());
		SAPLogon760.pSAPLogin.edIdioma.set("ES");
		// Sends a key sequence to a page.
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
	ctx.workflow('subirtxt', 'e7ef7f8d-ef85-4e96-b071-55d5910554b4') ;
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
	ctx.workflow('subirtxt', 'de5cdfa9-9849-495b-94e5-a8c1773e4e59') ;
	// Wait until the Page loads
	SAPLogon760.pVentasYFacturasMas.wait(function(ev) {
		SAPLogon760.pVentasYFacturasMas.edFichero.set("C:\\LAYOUT\\LayoutENCO.txt");
		SAPLogon760.pVentasYFacturasMas.btEjecutar.click();
		sc.endStep(); // pPosMensajes_manageme
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pPosMensajes_manageme
// ----------------------------------------------------------------
GLOBAL.step({ pPosMensajes_manageme: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('subirtxt', '5d5096a6-5d2b-4bd3-b08d-f7be3cc303dc') ;
	// Wait until the Page loads
	SAPLogon760.pPosMensajes.wait(function(ev) {
		rootData.SAPLogon760Data.pPosMensajesData.oTip = SAPLogon760.pPosMensajes.oTip.getAll();
		rootData.SAPLogon760Data.pPosMensajesData.oTip = SAPLogon760.pPosMensajes.oTip.i(0).get();
		sc.endStep(); // Start_loop
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Start_loop
// ----------------------------------------------------------------
GLOBAL.step({ Start_loop: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('subirtxt', '57750d03-1ed9-4e3a-b967-d7d20827839e') ;
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
	
	ctx.workflow('subirtxt', 'ae6385c4-a4a3-466f-8591-70c5c8d2ff87') ;
	// Test block to exit from a loop.
	if (!SAPLogon760.pPosMensajes.oTip.i(sc.localData.Startloop).exist())
	{
		sc.localData.Startloop = -1 ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // pPosMensajes_manageme_1
	return;
}});

// ----------------------------------------------------------------
//   Step: pPosMensajes_manageme_1
// ----------------------------------------------------------------
GLOBAL.step({ pPosMensajes_manageme_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('subirtxt', '7db07ee9-ebe8-461b-bdc3-ecf1230c0174') ;
	// Wait until the Page loads
	SAPLogon760.pPosMensajes.wait(function(ev) {
		rootData.SAPLogon760Data.pPosMensajesData.oTip = SAPLogon760.pPosMensajes.oTip.getAll();
		rootData.SAPLogon760Data.pPosMensajesData.oTip = SAPLogon760.pPosMensajes.oTip.i(sc.localData.Startloop).get();
		ctx.log(rootData.SAPLogon760Data.pPosMensajesData.oTip);//ADD
		sc.endStep(); // Loops_to_the_start_bl
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Loops_to_the_start_bl
// ----------------------------------------------------------------
GLOBAL.step({ Loops_to_the_start_bl: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('subirtxt', '99ceea00-37b1-412a-9b15-43c984b8f164') ;
	// Loops to the start block.
	if (sc.localData.Startloop != -1)
	{
		sc.localData.Startloop++ ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // pPosMensajes_manageme_2
	return;
}});

// ----------------------------------------------------------------
//   Step: pPosMensajes_manageme_2
// ----------------------------------------------------------------
GLOBAL.step({ pPosMensajes_manageme_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('subirtxt', '1fbaf77b-8232-4aed-9df6-ec945894aa41') ;
	// Wait until the Page loads
	SAPLogon760.pPosMensajes.wait(function(ev) {
		SAPLogon760.pPosMensajes.btAceptar.click();
		sc.endStep(); // pVentasYFacturasMas_m_1
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_1
// ----------------------------------------------------------------
GLOBAL.step({ pVentasYFacturasMas_m_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('subirtxt', 'bb23261b-36d2-49d1-8a5d-06cac4592bdf') ;
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
	ctx.workflow('subirtxt', '72042a5c-7103-4fc3-aa0a-d27115205408') ;
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
	ctx.workflow('subirtxt', 'f21857a0-400e-4161-9188-9a9a22fe7dab') ;
	// Wait until the Page loads
	SAPLogon760.pSalirDelSistema.wait(function(ev) {
		SAPLogon760.pSalirDelSistema.btSí.click();
		sc.endStep(); // end Scenario
		return;
	});
}});
