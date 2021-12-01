
// ----------------------------------------------------------------
//   Test menu for scenario cargaVentasM 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'cargaVentasM', 'Test cargaVentasM', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.cargaVentasM.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario cargaVentasM Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: cargaVentasM
// ----------------------------------------------------------------
GLOBAL.scenario({ cargaVentasM: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(43200000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(16600000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.getFilename_2, GLOBAL.steps.Declare_setting);
	sc.step(GLOBAL.steps.Declare_setting, GLOBAL.steps.Declare_setting_1);
	sc.step(GLOBAL.steps.Declare_setting_1, GLOBAL.steps.Declare_setting_2);
	sc.step(GLOBAL.steps.Declare_setting_2, GLOBAL.steps.Get_setting);
	sc.step(GLOBAL.steps.Get_setting, GLOBAL.steps.Get_setting_1);
	sc.step(GLOBAL.steps.Get_setting_1, GLOBAL.steps.Get_setting_2);
	sc.step(GLOBAL.steps.Get_setting_2, GLOBAL.steps.connectSQL_2);
	sc.step(GLOBAL.steps.connectSQL_2, GLOBAL.steps.Read_a_text_file_2);
	sc.step(GLOBAL.steps.Read_a_text_file_2, GLOBAL.steps.setList_2);
	sc.step(GLOBAL.steps.setList_2, GLOBAL.steps.Write_a_text_file_2);
	sc.step(GLOBAL.steps.Write_a_text_file_2, GLOBAL.steps.Start_SAPLogon760_2);
	sc.step(GLOBAL.steps.Start_SAPLogon760_2, GLOBAL.steps.pWindowSAPLogon76_man_2);
	sc.step(GLOBAL.steps.pWindowSAPLogon76_man_2, GLOBAL.steps.Declare_credential_2);
	sc.step(GLOBAL.steps.Declare_credential_2, GLOBAL.steps.Get_credential_2);
	sc.step(GLOBAL.steps.Get_credential_2, GLOBAL.steps.pSAPLogin_management_2);
	sc.step(GLOBAL.steps.pSAPLogin_management_2, GLOBAL.steps.pSAPEasyAccess_manage_3);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage_3, GLOBAL.steps.Disable_step_timeout_2);
	sc.step(GLOBAL.steps.Disable_step_timeout_2, GLOBAL.steps.pVentasYFacturasMas_m_3);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m_3, GLOBAL.steps.pPosDocumVisualiza_ma_2);
	sc.step(GLOBAL.steps.pPosDocumVisualiza_ma_2, GLOBAL.steps.pVentasYFacturasMas_m_1_2);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m_1_2, GLOBAL.steps.pSAPEasyAccess_manage_1_2);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage_1_2, GLOBAL.steps.pSalirDelSistema_mana_2);
	sc.step(GLOBAL.steps.pSalirDelSistema_mana_2, null);
}}, ctx.dataManagers.rootData).setId('eced6a0b-ed93-431f-9bba-59805119fffe') ;

// ----------------------------------------------------------------
//   Step: getFilename_2
// ----------------------------------------------------------------
GLOBAL.step({ getFilename_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasM', 'bd856692-e2a1-4232-89df-162b950f23d6') ;
	// Get filename
	sc.endStep(); // Declare_setting
	return;
}});

// ----------------------------------------------------------------
//   Step: Declare_setting
// ----------------------------------------------------------------
GLOBAL.step({ Declare_setting: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasM', 'dccb90fe-2346-4152-acc1-de63336909fc') ;
	// Declares a setting
	
	ctx.setting({ fechaInicio: {
		comment: "Fecha inicio",
		server: true
	}});
	sc.endStep(); // Declare_setting_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Declare_setting_1
// ----------------------------------------------------------------
GLOBAL.step({ Declare_setting_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasM', '3b7ae552-18df-4334-a833-57adee8f495b') ;
	// Declares a setting
	
	ctx.setting({ fechaFin: {
		comment: "Fecha Final",
		server: true
	}});
	sc.endStep(); // Declare_setting_2
	return;
}});

// ----------------------------------------------------------------
//   Step: Declare_setting_2
// ----------------------------------------------------------------
GLOBAL.step({ Declare_setting_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasM', 'd97d2856-8cc3-4254-88fc-32253efd4ad6') ;
	// Declares a setting
	
	ctx.setting({ soloCarga: {
		comment: "Indicar X en solo carga",
		server: true
	}});
	sc.endStep(); // Get_setting
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_setting
// ----------------------------------------------------------------
GLOBAL.step({ Get_setting: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasM', 'f2829b3d-d899-46b9-9405-7c69dee1b36a') ;
	// Retrieves the value of a setting
	
	ctx.settings.fechaInicio.get(function(code, label, setting) {
		if (code == e.error.OK) {
			// get value from setting.value
			rootData.Manual.fechaIni = setting.value;
			sc.endStep(); // Get_setting_1
			return;
		}
	});
}});

// ----------------------------------------------------------------
//   Step: Get_setting_1
// ----------------------------------------------------------------
GLOBAL.step({ Get_setting_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasM', 'aa0677d3-572b-4e8c-b1f0-a9f073bc0cd4') ;
	// Retrieves the value of a setting
	
	ctx.settings.fechaFin.get(function(code, label, setting) {
		if (code == e.error.OK) {
			// get value from setting.value
			rootData.Manual.fechaFin = setting.value;
			sc.endStep(); // Get_setting_2
			return;
		}
	});
}});

// ----------------------------------------------------------------
//   Step: Get_setting_2
// ----------------------------------------------------------------
GLOBAL.step({ Get_setting_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasM', '0d3a9c05-20e3-4261-80d3-a39be7bb622d') ;
	// Retrieves the value of a setting
	
	ctx.settings.soloCarga.get(function(code, label, setting) {
		if (code == e.error.OK) {
			// get value from setting.value
			rootData.Manual.soloCarga = setting.value;
			sc.endStep(); // connectSQL_2
			return;
		}
	});
}});

// ----------------------------------------------------------------
//   Step: connectSQL_2
// ----------------------------------------------------------------
GLOBAL.step({ connectSQL_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasM', '021aef34-ba77-4bf6-8488-50a0b817edc4') ;
	// Ejecutar stored procedure
	sc.endStep(); // Read_a_text_file_2
	return;
}});

// ----------------------------------------------------------------
//   Step: Read_a_text_file_2
// ----------------------------------------------------------------
GLOBAL.step({ Read_a_text_file_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasM', 'b43518f7-cb23-4fcd-a490-274859618a7d') ;
	// Reads the content of a text file.
	var file = rootData.filename;
	rootData.lines = ctx.fso.file.read(file, e.file.encoding.UTF8);
	sc.endStep(); // setList_2
	return;
}});

// ----------------------------------------------------------------
//   Step: setList_2
// ----------------------------------------------------------------
GLOBAL.step({ setList_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasM', '14bbe514-5439-4e5d-81e8-55d208e5b654') ;
	// Genera archivo final
	sc.endStep(); // Write_a_text_file_2
	return;
}});

// ----------------------------------------------------------------
//   Step: Write_a_text_file_2
// ----------------------------------------------------------------
GLOBAL.step({ Write_a_text_file_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasM', 'faf1c0fd-f9f3-4cdb-85de-a8dc06997004') ;
	// Writes a text file.
	var file = rootData.filename;
	var txt = rootData.archivoTXT;
	ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
	sc.endStep(); // Start_SAPLogon760_2
	return;
}});

// ----------------------------------------------------------------
//   Step: Start_SAPLogon760_2
// ----------------------------------------------------------------
GLOBAL.step({ Start_SAPLogon760_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasM', '14583375-c3a7-4b6a-9a1e-f63041529968') ;
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
	ctx.workflow('cargaVentasM', '722fa44a-17f8-471b-95ad-a335a9d86c3e') ;
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
	ctx.workflow('cargaVentasM', '8f63a30c-3719-4b6a-8435-ac43b43f4832') ;
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
	ctx.workflow('cargaVentasM', '15a14120-5cfa-48a7-9b5f-3e3dc3e59909') ;
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
	ctx.workflow('cargaVentasM', '5aa04c03-0fb2-4c20-8af0-eb3e34401f15') ;
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
	ctx.workflow('cargaVentasM', 'b136acab-5bd1-49c4-ab90-724c4e0eb6be') ;
	// Wait until the Page loads
	SAPLogon760.pSAPEasyAccess.wait(function(ev) {
		SAPLogon760.pSAPEasyAccess.oGuiOkCodeField.set("YSD_0001");
		SAPLogon760.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Enter_);
		sc.endStep(); // Disable_step_timeout_2
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Disable_step_timeout_2
// ----------------------------------------------------------------
GLOBAL.step({ Disable_step_timeout_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaVentasM', 'bfd46aaf-9b86-48dd-ae81-5e2952635311') ;
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
	ctx.workflow('cargaVentasM', 'b0a60582-ee89-4a70-9093-cc0b9f11d786') ;
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
	ctx.workflow('cargaVentasM', '00b2778d-524b-4a9a-b86c-0ef939a55e95') ;
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
	ctx.workflow('cargaVentasM', 'fad14370-d7fb-4149-8496-552cb74e2f94') ;
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
	ctx.workflow('cargaVentasM', 'd67d10b8-4b0b-4997-bfc7-f5fa457565aa') ;
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
	ctx.workflow('cargaVentasM', '203fae11-2b7b-4ef9-8bb5-994aaad2bb63') ;
	// Wait until the Page loads
	SAPLogon760.pSalirDelSistema.wait(function(ev) {
		SAPLogon760.pSalirDelSistema.btSí.click();
		sc.endStep(); // end Scenario
		return;
	});
}});
