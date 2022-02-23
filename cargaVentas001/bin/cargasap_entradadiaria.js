
// ----------------------------------------------------------------
//   Test menu for scenario carga_SAP_EntradaDiaria 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'carga_SAP_EntradaDiaria', 'Test carga_SAP_EntradaDiaria', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();

			// Initialize your data here.
			GLOBAL.scenarios.carga_SAP_EntradaDiaria.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario carga_SAP_EntradaDiaria Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: carga_SAP_EntradaDiaria
// ----------------------------------------------------------------
GLOBAL.scenario( {
	carga_SAP_EntradaDiaria: function (ev, sc) {
		var rootData = sc.data;

		sc.setMode(e.scenario.mode.clearIfRunning);
		sc.setScenarioTimeout(12000000); // Default timeout for global scenario.
		sc.onError(function (sc, st, ex) {
			sc.endScenario();
		}); // Default error handler.
		sc.onTimeout(600000, function (sc, st) {
			sc.endScenario();
		}); // Default timeout handler for each step.
		sc.step(GLOBAL.steps.getSettingsEE, GLOBAL.steps.getFilenameEE);
		sc.step(GLOBAL.steps.getFilenameEE, GLOBAL.steps.Read_txtEE);
		sc.step(GLOBAL.steps.Read_txtEE, GLOBAL.steps.setListEE);
		sc.step(GLOBAL.steps.setListEE, GLOBAL.steps.Write_txtEE);
		sc.step(GLOBAL.steps.Write_txtEE, GLOBAL.steps.Start_SAPLogon750EE);
	sc.step(GLOBAL.steps.Start_SAPLogon750EE, GLOBAL.steps.pWindowSAPLogon75_man_3);
	sc.step(GLOBAL.steps.pWindowSAPLogon75_man_3, GLOBAL.steps.Declare_credentiaLEE);
		sc.step(GLOBAL.steps.Declare_credentiaLEE, GLOBAL.steps.Get_credentialEE);
		sc.step(GLOBAL.steps.Get_credentialEE, GLOBAL.steps.pSAPLogin_managementE);
	sc.step(GLOBAL.steps.pSAPLogin_managementE, GLOBAL.steps.pSAPEasyAccess_manage_4);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage_4, GLOBAL.steps.Disable_step_timeoutE);
	sc.step(GLOBAL.steps.Disable_step_timeoutE, GLOBAL.steps.pVentasYFacturasMas_m_4);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m_4, GLOBAL.steps.pPosDocumVisualiza_ma_3);
	sc.step(GLOBAL.steps.pPosDocumVisualiza_ma_3, GLOBAL.steps.pVentasYFacturasMas_m_1_3);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m_1_3, GLOBAL.steps.pSAPEasyAccess_manage_1_3);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage_1_3, GLOBAL.steps.pSalirDelSistema_mana_3);
		sc.step(GLOBAL.steps.pSalirDelSistema_mana_3, GLOBAL.steps.deleteFileEE);
		sc.step(GLOBAL.steps.deleteFileEE, null);
	}
}, ctx.dataManagers.rootData).setId('ccb5342f-7efd-4166-9770-e3c685bc102a');

// ----------------------------------------------------------------
//   Step: getSettingsEE
// ----------------------------------------------------------------
GLOBAL.step( {
	getSettingsEE: function (ev, sc, st) {
		var rootData = sc.data;
		// Declares a setting

		ctx.setting( {
			fechaInicio: {
				comment: "Fecha Inicio",
				server: true
			}
		});
		// Declares a setting

		ctx.setting( {
			fechaFin: {
				comment: "Fecha fin",
				server: true
			}
		});
		// Declares a setting

		ctx.setting( {
			soloCarga: {
				comment: "solo Carga",
				server: true
			}
		});
		// Declares a setting

		ctx.setting( {
			idCentro: {
				comment: "idCentro",
				server: true
			}
		});
		// Declares a setting

		ctx.setting( {
			tipoConsulta: {
				comment: "tipoConsulta",
				server: true
			}
		});
		// Retrieves the value of a setting

		ctx.settings.fechaInicio.get(function (code, label, setting) {
			if (code == e.error.OK) {
				// get value from setting.value
				rootData.Manual.fechaIni = setting.value;
				// Retrieves the value of a setting

				ctx.settings.fechaFin.get(function (code, label, setting) {
					if (code == e.error.OK) {
						// get value from setting.value
						rootData.Manual.fechaFin = setting.value;
						// Retrieves the value of a setting

						ctx.settings.soloCarga.get(function (code, label, setting) {
							if (code == e.error.OK) {
								// get value from setting.value
								rootData.Manual.soloCarga = setting.value;
								// Retrieves the value of a setting

								ctx.settings.idCentro.get(function (code, label, setting) {
									if (code == e.error.OK) {
										// get value from setting.value
										rootData.Manual.idCentro = setting.value;
										// Retrieves the value of a setting

										ctx.settings.tipoConsulta.get(function (code, label, setting) {
											if (code == e.error.OK) {
												// get value from setting.value
												rootData.tipoConsulta = setting.value;
												sc.endStep(); // getFilenameEE
												return ;
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
	}
});

// ----------------------------------------------------------------
//   Step: getFilenameEE
// ----------------------------------------------------------------
GLOBAL.step( {
	getFilenameEE: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', '6e215b3b-85e3-4203-88d2-07a2c1f01eb7');
		// Get filename
		Date.prototype.addDays = function (days) {
			var date = new Date(this.valueOf());
			date.setDate(date.getDate() + days);
			return date;
		}
		rootData.tipoCarga = "E";

		var date = new Date();
		var dateIni;
		var hora = date.getHours();
		if (date.getHours() == 0) { //Si son las 00 horas, se consulta todo el día anterior
			date = date.addDays(-1);
			dateIni = date;
		}else {
			date = date.addDays(-1);
			dateIni = date.addDays(-1)
		}
		var mes = dateIni.getMonth() + 1;
		if (mes < 10) {
			mes = "0" + mes;
		}
		var dia = dateIni.getDate() - 0;
		if (dia < 10) {
			dia = "0" + dia;
		}
		rootData.datetimeIni = dateIni.getFullYear().toString() + mes + dia;

		mes = date.getMonth() + 1;
		if (mes < 10) {
			mes = "0" + mes;
		}
		dia = date.getDate() - 0;
		if (dia < 10) {
			dia = "0" + dia;
		}
		rootData.datetime = date.getFullYear().toString() + mes + dia;
		rootData.fechaActual = dia + "/" + mes + "/" + date.getFullYear();
		rootData.fechaActual = date.getFullYear() + mes + dia;
		var ruta = getRuta("C:\\LAYOUT\\in\\");
		var rutao = getRuta("C:\\LAYOUT\\out\\");
		rootData.filename = ruta + "LayoutENCO" + rootData.datetime + "_EE.txt";
		rootData.filenameO = rutao + "LayoutENCO" + rootData.datetime + date.getHours() + date.getMinutes() + "_EE.txt";
		//		ctx.fso.file.write(rootData.filename, "", e.file.encoding.UTF8);

		sc.endStep(); // Read_txtEE
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Read_txtEE
// ----------------------------------------------------------------
GLOBAL.step( {
	Read_txtEE: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', '3eff62d6-03af-462d-84d8-7bd8845d5835');
		// Leer archivo generado
		var file = rootData.filename;
		rootData.lines = ctx.fso.file.read(file, e.file.encoding.UTF8);
		sc.endStep(); // setListEE
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: setListEE
// ----------------------------------------------------------------
GLOBAL.step( {
	setListEE: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', '43f07c12-4e4f-491a-8e9d-5b93057fc9d7');
		// Genera aarchivo TXT
		var lines = rootData.lines.split('\n');
		var splitL = false;
		for (var i = 0; i < 1; i++) {
			var line = lines[i].split(';');
			if (line.length > 30) {
				splitL = true;
			}
		}
		if (splitL) {
			rootData.Lines = "";
			for (var i = 0; i < lines.length; i++) {
				var txt = "";
				//var line = lines[i].split('\t');
				var line = lines[i].split(';');
				for (var j = 0; j < line.length - 1; j++) {
					if (line[j] == "NULL") {
						line[j] = "";
					}
					if (j == 27 || j == 28 || j == 26 || j == 34 || j == 35 || j == 36) {
						line[j] = Number(line[j]) + " ";
						if (line[j] == "NULL") {
							line[j] = "";
						}
						txt = txt + line[j] + "\t";
					}else {
						txt = txt + line[j] + "\t";
					}
				}
				rootData.archivoTXT = rootData.archivoTXT + txt + "\n";
			}
		}else {
			rootData.archivoTXT = rootData.lines;
		}
		sc.endStep(); // Write_txtLL
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Write_txtEE
// ----------------------------------------------------------------
GLOBAL.step( {
	Write_txtEE: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', '8b659189-44a4-497e-a22c-e0959f147dab');
		// Writes a text file.
		var file = rootData.filename;
		var txt = rootData.archivoTXT;
		ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
		ctx.fso.file.write(rootData.filenameO, txt, e.file.encoding.UTF8);
		sc.endStep(); // Start_SAPLogon750EE
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Start_SAPLogon750EE
// ----------------------------------------------------------------
GLOBAL.step( {
	Start_SAPLogon750EE: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', '0956c907-05a1-4e47-bf67-9d022847a23a');
		// Starts an application.
		SAPLogon750.start();
		sc.endStep(); // pWindowSAPLogon75_man_3
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: pWindowSAPLogon75_man_3
// ----------------------------------------------------------------
GLOBAL.step( {
	pWindowSAPLogon75_man_3: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', 'b71aae60-e988-466a-8308-a16c8587f6b5');
		// Wait until the Page loads
		SAPLogon750.pWindowSAPLogon75.wait(function (ev) {
			SAPLogon750.pWindowSAPLogon75.stQAS.clickDouble();
//			SAPLogon750.pWindowSAPLogon75.btAccederAlSistema.click();
			sc.endStep(); // Declare_credentiaLEE
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: Declare_credentiaLEE
// ----------------------------------------------------------------
GLOBAL.step( {
	Declare_credentiaLEE: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', 'acdcce0e-82d5-4c0a-bcab-10802410d475');
		// Declares a credential

		ctx.cryptography.credential( {
			logonQAS: {
				comment: "logonQAS",
				server: true
			}
		});
		sc.endStep(); // Get_credentialEE
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Get_credentialEE
// ----------------------------------------------------------------
GLOBAL.step( {
	Get_credentialEE: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', '41c00fb4-cc28-4be6-85cb-3bc171a5fe66');
		// Retrieves credential login and password

		ctx.cryptography.credentials.logonQAS.get(function (code, label, credential) {
			if (code == e.error.OK) {
				// get values for credential
				rootData.sapgui.uname = credential.userName.get();
				rootData.sapgui.pass = credential.password.get();
				sc.endStep(); // pSAPLogin_managementE
				return ;
			}
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPLogin_managementE
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPLogin_managementE: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', 'b8669f22-c8c4-4c08-8b73-0e634c17e8bb');
		// Wait until the Page loads
		SAPLogon750.pSAPLogin.wait(function (ev) {
//			SAPLogon750.pSAPLogin.edMandante.set("300");
			SAPLogon750.pSAPLogin.edUsuarios.set(rootData.sapgui.uname, true);
			SAPLogon750.pSAPLogin.oClvAcc.set(rootData.sapgui.pass, true);
//			SAPLogon750.pSAPLogin.edIdioma.set("ES");
			SAPLogon750.pSAPLogin.keyStroke(e.SAPScripting.key._Enter_);
			sc.endStep(); // pSAPEasyAccess_manage_4
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_4
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPEasyAccess_manage_4: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', 'c413ab8f-74c8-42a6-96fe-924d39eb4603');
		// Wait until the Page loads
		SAPLogon750.pSAPEasyAccess.wait(function (ev) {
			SAPLogon750.pSAPEasyAccess.oGuiOkCodeField.set("YSD_0001");
			SAPLogon750.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Enter_);
			sc.endStep(); // Disable_step_timeoutE
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: Disable_step_timeoutE
// ----------------------------------------------------------------
GLOBAL.step( {
	Disable_step_timeoutE: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', '508bd110-daec-4b8d-90b9-ed327eb7e772');
		// Used to disable step timeout.
		st.disableTimeout();
		sc.endStep(); // pVentasYFacturasMas_m_4
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_4
// ----------------------------------------------------------------
GLOBAL.step( {
	pVentasYFacturasMas_m_4: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', '2606d826-7f75-4117-8b31-b6ca3b6a54f5');
		// Wait until the Page loads
		SAPLogon750.pVentasYFacturasMas.wait(function (ev) {
			SAPLogon750.pVentasYFacturasMas.oSoloCarga.set("E");
			SAPLogon750.pVentasYFacturasMas.oVentaPorLínea.set("X");
			SAPLogon750.pVentasYFacturasMas.edFichero.set(rootData.filename);
			SAPLogon750.pVentasYFacturasMas.btEjecutar.click();
			sc.endStep(); // pPosDocumVisualiza_ma_3
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pPosDocumVisualiza_ma_3
// ----------------------------------------------------------------
GLOBAL.step( {
	pPosDocumVisualiza_ma_3: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', '33d711eb-a589-454a-be33-d02273db6875');
		// Wait until the Page loads
		SAPLogon750.pPosDocumVisualiza.wait(function (ev) {
			SAPLogon750.pPosDocumVisualiza.btAceptar.click();
			sc.endStep(); // pVentasYFacturasMas_m_1_3
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_1_3
// ----------------------------------------------------------------
GLOBAL.step( {
	pVentasYFacturasMas_m_1_3: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', '852f8855-eae5-4076-86ea-e2d4d74694e5');
		// Wait until the Page loads
		SAPLogon750.pVentasYFacturasMas.wait(function (ev) {
			SAPLogon750.pVentasYFacturasMas.btIFinalizar.click();
			SAPLogon750.pVentasYFacturasMas.keyStroke(e.SAPScripting.key._Shift__F3_);
			sc.endStep(); // pSAPEasyAccess_manage_1_3
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_1_3
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPEasyAccess_manage_1_3: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', 'eb55f4c0-b8e9-4a3e-9016-9efa80a27511');
		// Wait until the Page loads
		SAPLogon750.pSAPEasyAccess.wait(function (ev) {
			SAPLogon750.pSAPEasyAccess.btIFinalizar.click();
			SAPLogon750.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Shift__F3_);
			sc.endStep(); // pSalirDelSistema_mana_3
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSalirDelSistema_mana_3
// ----------------------------------------------------------------
GLOBAL.step( {
	pSalirDelSistema_mana_3: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', 'fd8d7677-aaf2-41a0-9bce-8a0f620e4d8e');
		// Wait until the Page loads
		SAPLogon750.pSalirDelSistema.wait(function (ev) {
			SAPLogon750.pSalirDelSistema.btSí.click();
			sc.endStep(); // end Scenario
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: DeleteFileEE
// ----------------------------------------------------------------
GLOBAL.step( {
	deleteFileEE: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_EntradaDiaria', 'eeff62d6-03af-462d-84d8-7bd8845d5835');
		// Leer archivo generado
		var file = rootData.filename;
		ctx.fso.file.remove(file);
		sc.endStep(); // end
		return ;
	}
});
