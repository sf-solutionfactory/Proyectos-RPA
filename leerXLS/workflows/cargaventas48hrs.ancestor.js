
// ----------------------------------------------------------------
//   Test menu for scenario cargaVentas48hrs 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'cargaVentas48hrs', 'Test cargaVentas48hrs', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.cargaVentas48hrs.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario cargaVentas48hrs Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: cargaVentas48hrs
// ----------------------------------------------------------------
GLOBAL.scenario({ cargaVentas48hrs: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.getFilename_2, GLOBAL.steps.connectSQL_1);
	sc.step(GLOBAL.steps.connectSQL_1, GLOBAL.steps.Read_a_text_file_1);
	sc.step(GLOBAL.steps.Read_a_text_file_1, GLOBAL.steps.formaLista_1);
	sc.step(GLOBAL.steps.formaLista_1, GLOBAL.steps.Write_a_text_file_3);
	sc.step(GLOBAL.steps.Write_a_text_file_3, GLOBAL.steps.Start_SAPLogon760_2);
	sc.step(GLOBAL.steps.Start_SAPLogon760_2, GLOBAL.steps.pWindowSAPLogon76_man_2);
	sc.step(GLOBAL.steps.pWindowSAPLogon76_man_2, GLOBAL.steps.Declare_credential_2);
	sc.step(GLOBAL.steps.Declare_credential_2, GLOBAL.steps.Get_credential_2);
	sc.step(GLOBAL.steps.Get_credential_2, GLOBAL.steps.pSAPLogin_management_2);
	sc.step(GLOBAL.steps.pSAPLogin_management_2, GLOBAL.steps.pSAPEasyAccess_manage_3);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage_3, GLOBAL.steps.Disable_step_timeout_1);
	sc.step(GLOBAL.steps.Disable_step_timeout_1, GLOBAL.steps.pVentasYFacturasMas_m_3);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m_3, GLOBAL.steps.pPosDocumVisualiza_ma_2);
	sc.step(GLOBAL.steps.pPosDocumVisualiza_ma_2, GLOBAL.steps.pVentasYFacturasMas_m_1_2);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m_1_2, GLOBAL.steps.pSAPEasyAccess_manage_1_2);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage_1_2, GLOBAL.steps.pSalirDelSistema_mana_2);
	sc.step(GLOBAL.steps.pSalirDelSistema_mana_2, null);
}}, ctx.dataManagers.rootData).setId('96359b69-c55a-4b31-857b-b5aa77bf939d') ;

// ----------------------------------------------------------------
//   Step: getFilename_2
// ----------------------------------------------------------------
GLOBAL.step({ getFilename_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', '3e3f3adf-82e8-48a6-ab6b-4f4c435aaa1c') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // connectSQL_1
	return;
}});

// ----------------------------------------------------------------
//   Step: connectSQL_1
// ----------------------------------------------------------------
GLOBAL.step({ connectSQL_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', 'b91f5373-7500-4896-9eb6-808c432cc0c6') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // Read_a_text_file_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Read_a_text_file_1
// ----------------------------------------------------------------
GLOBAL.step({ Read_a_text_file_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', 'cfb9dea5-14da-4f98-bbcb-42137737b3f0') ;
	// Reads the content of a text file.
	var file = rootData.filename;
	rootData.Lines = ctx.fso.file.read(file, e.file.encoding.UTF8);
	sc.endStep(); // formaLista_1
	return;
}});

// ----------------------------------------------------------------
//   Step: formaLista_1
// ----------------------------------------------------------------
GLOBAL.step({ formaLista_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', '189d2195-6d5c-4ce3-b006-69bcba4c09fa') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // Write_a_text_file_3
	return;
}});

// ----------------------------------------------------------------
//   Step: Write_a_text_file_3
// ----------------------------------------------------------------
GLOBAL.step({ Write_a_text_file_3: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', '03a90efa-c865-44b0-8f76-c9b34ea82249') ;
	// Writes a text file.
	var file = rootData.filename;
	var txt = rootData.texto;
	ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
	sc.endStep(); // Start_SAPLogon760_2
	return;
}});

// ----------------------------------------------------------------
//   Step: Start_SAPLogon760_2
// ----------------------------------------------------------------
GLOBAL.step({ Start_SAPLogon760_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', '4fc7a763-7529-4c0a-b26d-78b6be25b60c') ;
	// Starts an application.
	SAPLogon760.start();
	sc.endStep(); // pWindowSAPLogon76_man_2
	return;
}});

// ----------------------------------------------------------------
//   Step: pWindowSAPLogon76_man_2
// ----------------------------------------------------------------
GLOBAL.step({ pWindowSAPLogon76_man_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', '987f3f92-4519-4cfa-acea-1f2e307dd0e5') ;
	// Wait until the Page loads
	SAPLogon760.pWindowSAPLogon76.wait(function(ev) {
		SAPLogon760.pWindowSAPLogon76.stARTHAQAS.clickDouble();
		sc.endStep(); // Declare_credential_2
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Declare_credential_2
// ----------------------------------------------------------------
GLOBAL.step({ Declare_credential_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', '666acfd6-757f-424c-83aa-0ef54899e301') ;
	// Declares a credential
	
	ctx.cryptography.credential({ logonQAS: {
		comment: "logonQAS",
		server: true
	}});
	sc.endStep(); // Get_credential_2
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_credential_2
// ----------------------------------------------------------------
GLOBAL.step({ Get_credential_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', '4dac6dfd-c64a-46d2-a6ac-cbf13d338eac') ;
	// Retrieves credential login and password
	
	ctx.cryptography.credentials.logonQAS.get(function(code, label, credential) {
		if (code == e.error.OK) {
			// get values for credential
			rootData.sapgui.uname = credential.userName.get();
			rootData.sapgui.pass = credential.password.get();
			sc.endStep(); // pSAPLogin_management_2
			return;
		}
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPLogin_management_2
// ----------------------------------------------------------------
GLOBAL.step({ pSAPLogin_management_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', 'b5cb8e50-ad5e-4eda-a8c2-a6c295d3a48d') ;
	// Wait until the Page loads
	SAPLogon760.pSAPLogin.wait(function(ev) {
		SAPLogon760.pSAPLogin.edMandante.set("300");
		SAPLogon760.pSAPLogin.edUsuarios.set(rootData.sapgui.uname);
		SAPLogon760.pSAPLogin.oClvAcc.set(rootData.sapgui.pass);
		SAPLogon760.pSAPLogin.edIdioma.set("ES");
		SAPLogon760.pSAPLogin.keyStroke(e.SAPScripting.key._Enter_);
		sc.endStep(); // pSAPEasyAccess_manage_3
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_3
// ----------------------------------------------------------------
GLOBAL.step({ pSAPEasyAccess_manage_3: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', '0c18e79c-c4c4-486b-8051-38716f977d07') ;
	// Wait until the Page loads
	SAPLogon760.pSAPEasyAccess.wait(function(ev) {
		SAPLogon760.pSAPEasyAccess.oGuiOkCodeField.set("ZSD_0001");
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
	ctx.workflow('cargaVentas48hrs', '3679e4dd-7741-4200-8b1f-e117a67442dc') ;
	// Used to disable step timeout.
	st.disableTimeout();
	sc.endStep(); // pVentasYFacturasMas_m_3
	return;
}});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_3
// ----------------------------------------------------------------
GLOBAL.step({ pVentasYFacturasMas_m_3: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', '8f4b8e8a-a54d-443f-bf84-602f54e21a0a') ;
	// Wait until the Page loads
	SAPLogon760.pVentasYFacturasMas.wait(function(ev) {
		SAPLogon760.pVentasYFacturasMas.oVentaPorLínea.set("X");
		SAPLogon760.pVentasYFacturasMas.edFichero.set(rootData.filename);
		SAPLogon760.pVentasYFacturasMas.btEjecutar.click();
		sc.endStep(); // pPosDocumVisualiza_ma_2
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pPosDocumVisualiza_ma_2
// ----------------------------------------------------------------
GLOBAL.step({ pPosDocumVisualiza_ma_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', '6e0cc687-bca3-4dc6-8f34-551ab913ff9f') ;
	// Wait until the Page loads
	SAPLogon760.pPosDocumVisualiza.wait(function(ev) {
		// Delays execution for some milliseconds.
		// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
		// It allows user interaction with Desktop Agent and other programs during the pause.
		// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react.
		ctx.wait(function(ev) {
			SAPLogon760.pPosDocumVisualiza.btAceptar.click();
			sc.endStep(); // pVentasYFacturasMas_m_1_2
			return;
		}, 1000);
	});
}});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_1_2
// ----------------------------------------------------------------
GLOBAL.step({ pVentasYFacturasMas_m_1_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', 'b0ffea55-d38e-444c-840b-c79928738552') ;
	// Wait until the Page loads
	SAPLogon760.pVentasYFacturasMas.wait(function(ev) {
		SAPLogon760.pVentasYFacturasMas.btIFinalizar.click();
		sc.endStep(); // pSAPEasyAccess_manage_1_2
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_1_2
// ----------------------------------------------------------------
GLOBAL.step({ pSAPEasyAccess_manage_1_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', '30e92157-3266-417b-9354-d86a0e5845b7') ;
	// Wait until the Page loads
	SAPLogon760.pSAPEasyAccess.wait(function(ev) {
		SAPLogon760.pSAPEasyAccess.btIFinalizar.click();
		sc.endStep(); // pSalirDelSistema_mana_2
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSalirDelSistema_mana_2
// ----------------------------------------------------------------
GLOBAL.step({ pSalirDelSistema_mana_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentas48hrs', '06098c82-01eb-45fa-a7ce-14c5df967d16') ;
	// Wait until the Page loads
	SAPLogon760.pSalirDelSistema.wait(function(ev) {
		SAPLogon760.pSalirDelSistema.btSí.click();
		sc.endStep(); // end Scenario
		return;
	});
}});
