
// ----------------------------------------------------------------
//   Test menu for scenario carga_SAP_PG 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'carga_SAP_PG', 'Test carga_SAP_PG', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();

			// Initialize your data here.
			GLOBAL.scenarios.carga_SAP_PG.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario carga_SAP_PG Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: carga_SAP_PG
// ----------------------------------------------------------------
GLOBAL.scenario( {
	carga_SAP_PG: function (ev, sc) {
		var rootData = sc.data;

		sc.setMode(e.scenario.mode.clearIfRunning);
		sc.setScenarioTimeout(120000000); // Default timeout for global scenario.
		sc.onError(function (sc, st, ex) {
			sc.endScenario();
		}); // Default error handler.
		sc.onTimeout(600000, function (sc, st) {
			sc.endScenario();
		}); // Default timeout handler for each step.
		sc.step(GLOBAL.steps.getSettingsPG, GLOBAL.steps.getFilenamePG);
		sc.step(GLOBAL.steps.getFilenamePG, GLOBAL.steps.Read_txtPG);
		sc.step(GLOBAL.steps.Read_txtPG, GLOBAL.steps.setListPG);
		sc.step(GLOBAL.steps.setListPG, GLOBAL.steps.Write_txtPG);
		sc.step(GLOBAL.steps.Write_txtPG, GLOBAL.steps.Start_SAPLogon750PG);
		sc.step(GLOBAL.steps.Start_SAPLogon750PG, GLOBAL.steps.pWindowSAPLogon75_man_4);
		sc.step(GLOBAL.steps.pWindowSAPLogon75_man_4, GLOBAL.steps.Declare_credentialPG);
		sc.step(GLOBAL.steps.Declare_credentialPG, GLOBAL.steps.Get_credentialPG);
		sc.step(GLOBAL.steps.Get_credentialPG, GLOBAL.steps.pSAPLogin_managementP);
		sc.step(GLOBAL.steps.pSAPLogin_managementP, GLOBAL.steps.pSAPEasyAccess_manage_5);
		sc.step(GLOBAL.steps.pSAPEasyAccess_manage_5, GLOBAL.steps.Disable_step_timeoutP);
		sc.step(GLOBAL.steps.Disable_step_timeoutP, GLOBAL.steps.pVentasYFacturasMas_m_5);
		sc.step(GLOBAL.steps.pVentasYFacturasMas_m_5, GLOBAL.steps.pPosDocumVisualiza_ma_4);
		sc.step(GLOBAL.steps.pPosDocumVisualiza_ma_4, GLOBAL.steps.pVentasYFacturasMas_m_1_4);
		sc.step(GLOBAL.steps.pVentasYFacturasMas_m_1_4, GLOBAL.steps.pSAPEasyAccess_manage_1_4);
		sc.step(GLOBAL.steps.pSAPEasyAccess_manage_1_4, GLOBAL.steps.pSalirDelSistema_mana_4);
		sc.step(GLOBAL.steps.pSalirDelSistema_mana_4, GLOBAL.steps.deleteFilePG);
		sc.step(GLOBAL.steps.deleteFilePG, null);
	}
}, ctx.dataManagers.rootData).setId('876a344b-0c1e-4e57-a970-6807d084df32');

// ----------------------------------------------------------------
//   Step: getSettingsPG
// ----------------------------------------------------------------
GLOBAL.step( {
	getSettingsPG: function (ev, sc, st) {
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

		ctx.setting( {
			environmentType: {
				comment: "environmentType",
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

												ctx.settings.environmentType.get(function (code, label, setting) {
													if (code == e.error.OK) {
														// get value from setting.value
														rootData.environmentType = setting.value;

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
	}
});

// ----------------------------------------------------------------
//   Step: getFilenamePG
// ----------------------------------------------------------------
GLOBAL.step( {
	getFilenamePG: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', '9db6f908-2ca4-4792-b15b-a3dcf4b634fd');
		// Get filename
		Date.prototype.addDays = function (days) {
			var date = new Date(this.valueOf());
			date.setDate(date.getDate() + days);
			return date;
		}
		var date = new Date();
		date = date.addDays(-3);
		var mes = date.getMonth() + 1;
		if (mes < 10) {
			mes = "0" + mes;
		}
		var dia = date.getDate();
		if (dia < 10) {
			dia = "0" + dia;
		}
		rootData.datetime = date.getFullYear().toString() + mes + dia;
		rootData.fechaActual = dia + "/" + mes + "/" + date.getFullYear();
		rootData.fechaActual = date.getFullYear() + mes + dia;
		var ruta = getRuta("C:\\LAYOUT\\in\\");
		var rutao = getRuta("C:\\LAYOUT\\out\\");
		rootData.filename = ruta + "LayoutENCO" + rootData.datetime + "_PG.txt";
		rootData.filenameO = rutao + "LayoutENCO" + rootData.datetime + date.getHours() + date.getMinutes() + "_PG.txt";

		sc.endStep(); // Read_txtPG
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Read_txtPG
// ----------------------------------------------------------------
GLOBAL.step( {
	Read_txtPG: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', 'ecfa78b1-5eba-4cd2-8892-09b364651a37');
		// Leer archivo generado
		var file = rootData.filename;
		rootData.lines = ctx.fso.file.read(file, e.file.encoding.UTF8);
		sc.endStep(); // setListPG
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: setListPG
// ----------------------------------------------------------------
GLOBAL.step( {
	setListPG: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', '5002cf90-9a14-4b40-a00d-c62c773f62c3');
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
//   Step: Write_txtPG
// ----------------------------------------------------------------
GLOBAL.step( {
	Write_txtPG: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', '2f57e61c-01dc-4cf2-87ed-38f1f4546412');
		// Writes a text file.
		var file = rootData.filename;
		var txt = rootData.archivoTXT;
		ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
		ctx.fso.file.write(rootData.filenameO, txt, e.file.encoding.UTF8);
		sc.endStep(); // Start_SAPLogon750PG
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Start_SAPLogon750PG
// ----------------------------------------------------------------
GLOBAL.step( {
	Start_SAPLogon750PG: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', '74325632-6c5f-40f5-b08f-b20c43ad42a1');
		// Starts an application.
		SAPLogon750.start();
		sc.endStep(); // pWindowSAPLogon75_man_4
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: pWindowSAPLogon75_man_4
// ----------------------------------------------------------------
GLOBAL.step( {
	pWindowSAPLogon75_man_4: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', 'c951921f-7adc-4dd9-889b-d08cb466123b');
		// Wait until the Page loads
		SAPLogon750.pWindowSAPLogon75.wait(function (ev) {
			if (rootData.environmentType == "QAS") {
				SAPLogon750.pWindowSAPLogon75.stQAS.clickDouble();
			}else {
				SAPLogon750.pWindowSAPLogon75.stPRD.clickDouble();
			}
//			SAPLogon750.pWindowSAPLogon75.btAccederAlSistema.click();
			sc.endStep(); // Declare_credentialPG
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: Declare_credentialPG
// ----------------------------------------------------------------
GLOBAL.step( {
	Declare_credentialPG: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', '06b9c300-ceb1-4a78-a7a4-c1ec3a598fa8');
		// Declares a credential

		ctx.cryptography.credential( {
			logonSAP: {
				comment: "logonSAP",
				server: true
			}
		});
		sc.endStep(); // Get_credentialPG
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Get_credentialPG
// ----------------------------------------------------------------
GLOBAL.step( {
	Get_credentialPG: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', '6ef13de0-f87b-4583-aae6-88d7912431af');
		// Retrieves credential login and password

		ctx.cryptography.credentials.logonSAP.get(function (code, label, credential) {
			if (code == e.error.OK) {
				// get values for credential
				rootData.sapgui.uname = credential.userName.get();
				rootData.sapgui.pass = credential.password.get();
				sc.endStep(); // pSAPLogin_managementP
				return ;
			}
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPLogin_managementP
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPLogin_managementP: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', '3abc5289-b692-4beb-8d39-7219f5e51ebb');
		// Wait until the Page loads
		SAPLogon750.pSAPLogin.wait(function (ev) {
			SAPLogon750.pSAPLogin.edMandante.set("300");
			SAPLogon750.pSAPLogin.edUsuarios.set(rootData.sapgui.uname, true);
			SAPLogon750.pSAPLogin.oClvAcc.set(rootData.sapgui.pass, true);
			SAPLogon750.pSAPLogin.edIdioma.set("ES");
			SAPLogon750.pSAPLogin.keyStroke(e.SAPScripting.key._Enter_);
			sc.endStep(); // pSAPEasyAccess_manage_5
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_5
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPEasyAccess_manage_5: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', '5c639467-ddb6-4d21-a223-aa32e4b14d1b');
		// Wait until the Page loads
		SAPLogon750.pSAPEasyAccess.wait(function (ev) {
			SAPLogon750.pSAPEasyAccess.oGuiOkCodeField.set("YSD_0001");
			SAPLogon750.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Enter_);
			sc.endStep(); // Disable_step_timeoutP
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: Disable_step_timeoutP
// ----------------------------------------------------------------
GLOBAL.step( {
	Disable_step_timeoutP: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', 'c88956b9-3b74-4d78-a014-cf7502952ec5');
		// Used to disable step timeout.
		st.disableTimeout();
		sc.endStep(); // pVentasYFacturasMas_m_5
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_5
// ----------------------------------------------------------------
GLOBAL.step( {
	pVentasYFacturasMas_m_5: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', 'd7903757-9224-4bc8-bd58-1b143c16490d');
		// Wait until the Page loads
		SAPLogon750.pVentasYFacturasMas.wait(function (ev) {
			SAPLogon750.pVentasYFacturasMas.oSoloCarga.set("P");
			SAPLogon750.pVentasYFacturasMas.oVentaPorLínea.set("X");
			SAPLogon750.pVentasYFacturasMas.edFichero.set(rootData.filename);
			SAPLogon750.pVentasYFacturasMas.btEjecutar.click();
			sc.endStep(); // pPosDocumVisualiza_ma_4
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pPosDocumVisualiza_ma_4
// ----------------------------------------------------------------
GLOBAL.step( {
	pPosDocumVisualiza_ma_4: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', 'c2b87252-4429-46f0-bc0b-4a56e295514e');
		// Wait until the Page loads
		st.disableTimeout();
		SAPLogon750.pPosDocumVisualiza.wait(function (ev) {
			SAPLogon750.pPosDocumVisualiza.btAceptar.click();
			sc.endStep(); // pVentasYFacturasMas_m_1_4
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_1_4
// ----------------------------------------------------------------
GLOBAL.step( {
	pVentasYFacturasMas_m_1_4: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', 'f5e85167-4ab8-42a7-85e9-6d19a1a551a9');
		// Wait until the Page loads
		SAPLogon750.pVentasYFacturasMas.wait(function (ev) {
			SAPLogon750.pVentasYFacturasMas.btIFinalizar.click();
			SAPLogon750.pVentasYFacturasMas.keyStroke(e.SAPScripting.key._Shift__F3_);
			sc.endStep(); // pSAPEasyAccess_manage_1_4
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_1_4
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPEasyAccess_manage_1_4: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', 'f22cb02a-5390-418f-ba2b-810fc645149b');
		// Wait until the Page loads
		SAPLogon750.pSAPEasyAccess.wait(function (ev) {
			SAPLogon750.pSAPEasyAccess.btIFinalizar.click();
			SAPLogon750.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Shift__F3_);
			sc.endStep(); // pSalirDelSistema_mana_4
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSalirDelSistema_mana_4
// ----------------------------------------------------------------
GLOBAL.step( {
	pSalirDelSistema_mana_4: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', 'a1eac407-7ff8-438c-8db9-9d68b35b4913');
		// Wait until the Page loads
		SAPLogon750.pSalirDelSistema.wait(function (ev) {
			SAPLogon750.pSalirDelSistema.btSí.click();
			sc.endStep(); // end Scenario
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: DeleteFilePG
// ----------------------------------------------------------------
GLOBAL.step( {
	deleteFilePG: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_PG', 'bbff62d6-03af-462d-84d8-7bd8845d5835');
		// Leer archivo generado
		var file = rootData.filename;
		ctx.fso.file.remove(file);
		sc.endStep(); // end
		return ;
	}
});
