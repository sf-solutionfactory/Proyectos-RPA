
// ----------------------------------------------------------------
//   Test menu for scenario carga_SAP_Manual 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'carga_SAP_Manual', 'Test carga_SAP_Manual', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.carga_SAP_Manual.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario carga_SAP_Manual Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: carga_SAP_Manual
// ----------------------------------------------------------------
GLOBAL.scenario({ carga_SAP_Manual: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(12000000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(600000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.getSettingsM, GLOBAL.steps.getFilenameM);
	sc.step(GLOBAL.steps.getFilenameM, GLOBAL.steps.Read_txtM);
	sc.step(GLOBAL.steps.Read_txtM, GLOBAL.steps.setListM);
	sc.step(GLOBAL.steps.setListM, GLOBAL.steps.Write_txtM);
	sc.step(GLOBAL.steps.Write_txtM, GLOBAL.steps.Start_SAPLogon750M);
	sc.step(GLOBAL.steps.Start_SAPLogon750M, GLOBAL.steps.pWindowSAPLogon75_man);
	sc.step(GLOBAL.steps.pWindowSAPLogon75_man, GLOBAL.steps.Declare_credentialM);
	sc.step(GLOBAL.steps.Declare_credentialM, GLOBAL.steps.Get_credentialM);
	sc.step(GLOBAL.steps.Get_credentialM, GLOBAL.steps.pSAPLogin_managementM);
	sc.step(GLOBAL.steps.pSAPLogin_managementM, GLOBAL.steps.pSAPEasyAccess_manage);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage, GLOBAL.steps.Disable_step_timeoutM);
	sc.step(GLOBAL.steps.Disable_step_timeoutM, GLOBAL.steps.pVentasYFacturasMas_m);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m, GLOBAL.steps.pPosDocumVisualiza_ma);
	sc.step(GLOBAL.steps.pPosDocumVisualiza_ma, GLOBAL.steps.pVentasYFacturasMas_m_1);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m_1, GLOBAL.steps.pSAPEasyAccess_manage_1);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage_1, GLOBAL.steps.pSalirDelSistema_mana);
	sc.step(GLOBAL.steps.pSalirDelSistema_mana, null);
}}, ctx.dataManagers.rootData).setId('bf1c73c4-710f-4aee-b105-6e37a74ac704') ;

// ----------------------------------------------------------------
//   Step: getSettingsM
// ----------------------------------------------------------------
GLOBAL.step({ getSettingsM: function(ev, sc, st) {
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
											sc.endStep(); // getFilenameM
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
//   Step: getFilenameM
// ----------------------------------------------------------------
GLOBAL.step({ getFilenameM: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSAP_Manual', 'd2d1666d-9f23-46d9-8e34-f88b387de6fe') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // Read_txtM
	return;
}});

// ----------------------------------------------------------------
//   Step: Read_txtM
// ----------------------------------------------------------------
GLOBAL.step({ Read_txtM: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSAP_Manual', 'f62dc949-1543-416c-b4d1-4fee2e4db1f6') ;
	// Leer archivo generado
	sc.endStep(); // setListM
	return;
}});

// ----------------------------------------------------------------
//   Step: setListM
// ----------------------------------------------------------------
GLOBAL.step({ setListM: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSAP_Manual', '6e8253c9-fca8-4e93-9350-7642239fbd38') ;
	// Genera aarchivo TXT
	sc.endStep(); // Write_txtM
	return;
}});

// ----------------------------------------------------------------
//   Step: Write_txtM
// ----------------------------------------------------------------
GLOBAL.step({ Write_txtM: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSAP_Manual', '354dc902-f0c6-4749-b22b-590dcb710514') ;
	// Writes a text file.
	var file = rootData.filename;
	var txt = rootData.archivoTXT;
	ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
	sc.endStep(); // Start_SAPLogon750M
	return;
}});

// ----------------------------------------------------------------
//   Step: Start_SAPLogon750M
// ----------------------------------------------------------------
GLOBAL.step({ Start_SAPLogon750M: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSAP_Manual', '9324b819-702f-47a7-b359-55ba96c08ad2') ;
	// Starts an application.
	SAPLogon750.start();
	sc.endStep(); // pWindowSAPLogon75_man
	return;
}});

// ----------------------------------------------------------------
//   Step: pWindowSAPLogon75_man
// ----------------------------------------------------------------
GLOBAL.step({ pWindowSAPLogon75_man: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSAP_Manual', '4e6a48f0-3927-4d32-a6c8-ced375adf989') ;
	// Wait until the Page loads
	SAPLogon750.pWindowSAPLogon75.wait(function(ev) {
		SAPLogon750.pWindowSAPLogon75.stQAS.clickDouble();
		sc.endStep(); // Declare_credentialM
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Declare_credentialM
// ----------------------------------------------------------------
GLOBAL.step({ Declare_credentialM: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSAP_Manual', '9928813e-7b77-44f4-8600-82cf5f27dfc8') ;
	// Declares a credential
	
	ctx.cryptography.credential({ logonQAS: {
		comment: "logonQAS",
		server: true
	}});
	sc.endStep(); // Get_credentialM
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_credentialM
// ----------------------------------------------------------------
GLOBAL.step({ Get_credentialM: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSAP_Manual', '62d8c37a-521d-4529-a4f4-2f7adf2e3a4b') ;
	// Retrieves credential login and password
	
	ctx.cryptography.credentials.logonQAS.get(function(code, label, credential) {
		if (code == e.error.OK) {
			// get values for credential
			rootData.sapgui.uname = credential.userName.get();
			rootData.sapgui.pass = credential.password.get();
			sc.endStep(); // pSAPLogin_managementM
			return;
		}
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPLogin_managementM
// ----------------------------------------------------------------
GLOBAL.step({ pSAPLogin_managementM: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSAP_Manual', 'cc8d254e-b660-4fef-8953-40de04557607') ;
	// Wait until the Page loads
	SAPLogon750.pSAPLogin.wait(function(ev) {
		SAPLogon750.pSAPLogin.edMandante.set("300");
		SAPLogon750.pSAPLogin.edUsuarios.set(rootData.sapgui.uname, true);
		SAPLogon750.pSAPLogin.oClvAcc.set(rootData.sapgui.pass, true);
		SAPLogon750.pSAPLogin.edIdioma.set("ES");
		SAPLogon750.pSAPLogin.keyStroke(e.SAPScripting.key._Enter_);
		sc.endStep(); // pSAPEasyAccess_manage
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage
// ----------------------------------------------------------------
GLOBAL.step({ pSAPEasyAccess_manage: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSAP_Manual', 'f33dc54f-45cb-4063-85a1-1eba9d980f66') ;
	// Wait until the Page loads
	SAPLogon750.pSAPEasyAccess.wait(function(ev) {
		SAPLogon750.pSAPEasyAccess.oGuiOkCodeField.set("YSD_0001");
		SAPLogon750.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Enter_);
		sc.endStep(); // Disable_step_timeoutM
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Disable_step_timeoutM
// ----------------------------------------------------------------
GLOBAL.step({ Disable_step_timeoutM: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSAP_Manual', 'e71c0c24-1953-4c15-8e5d-1957308d1be7') ;
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
	ctx.workflow('cargaSAP_Manual', 'f667867d-c074-4347-9d41-0c62f8df773e') ;
	// Wait until the Page loads
	SAPLogon750.pVentasYFacturasMas.wait(function(ev) {
		SAPLogon750.pVentasYFacturasMas.oSoloCarga.set(rootData.Manual.soloCarga);
		SAPLogon750.pVentasYFacturasMas.oVentaPorLínea.set("X");
		SAPLogon750.pVentasYFacturasMas.edFichero.set(rootData.filename);
		SAPLogon750.pVentasYFacturasMas.btEjecutar.click();
		sc.endStep(); // pPosDocumVisualiza_ma
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pPosDocumVisualiza_ma
// ----------------------------------------------------------------
GLOBAL.step({ pPosDocumVisualiza_ma: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSAP_Manual', 'db619cfe-c6a1-4adc-8a13-8c77a8d41b47') ;
	// Wait until the Page loads
	SAPLogon750.pPosDocumVisualiza.wait(function(ev) {
		SAPLogon750.pPosDocumVisualiza.btAceptar.click();
		sc.endStep(); // pVentasYFacturasMas_m_1
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_1
// ----------------------------------------------------------------
GLOBAL.step({ pVentasYFacturasMas_m_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSAP_Manual', 'f52faa5e-07e0-4064-b63c-5fd9b251298b') ;
	// Wait until the Page loads
	SAPLogon750.pVentasYFacturasMas.wait(function(ev) {
		SAPLogon750.pVentasYFacturasMas.btIFinalizar.click();
		sc.endStep(); // pSAPEasyAccess_manage_1
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_1
// ----------------------------------------------------------------
GLOBAL.step({ pSAPEasyAccess_manage_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSAP_Manual', '88abb9a8-b71b-497b-b14d-222da30def1a') ;
	// Wait until the Page loads
	SAPLogon750.pSAPEasyAccess.wait(function(ev) {
		SAPLogon750.pSAPEasyAccess.btIFinalizar.click();
		sc.endStep(); // pSalirDelSistema_mana
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSalirDelSistema_mana
// ----------------------------------------------------------------
GLOBAL.step({ pSalirDelSistema_mana: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('cargaSAP_Manual', 'fc69ff87-c648-46e1-bbf4-b561e690ca76') ;
	// Wait until the Page loads
	SAPLogon750.pSalirDelSistema.wait(function(ev) {
		SAPLogon750.pSalirDelSistema.btSí.click();
		sc.endStep(); // end Scenario
		return;
	});
}});
