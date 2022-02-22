
// ----------------------------------------------------------------
//   Test menu for scenario carga_SAP_Lunes 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'carga_SAP_Lunes', 'Test carga_SAP_Lunes', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();

			// Initialize your data here.
			GLOBAL.scenarios.carga_SAP_Lunes.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario carga_SAP_Lunes Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: carga_SAP_Lunes
// ----------------------------------------------------------------
GLOBAL.scenario( {
	carga_SAP_Lunes: function (ev, sc) {
		var rootData = sc.data;

		sc.setMode(e.scenario.mode.clearIfRunning);
		sc.setScenarioTimeout(12000000); // Default timeout for global scenario.
		sc.onError(function (sc, st, ex) {
			sc.endScenario();
		}); // Default error handler.
		sc.onTimeout(600000, function (sc, st) {
			sc.endScenario();
		}); // Default timeout handler for each step.
		sc.step(GLOBAL.steps.getSettingsLL, GLOBAL.steps.getFilenameLL);
		sc.step(GLOBAL.steps.getFilenameLL, GLOBAL.steps.Read_txtLL);
		sc.step(GLOBAL.steps.Read_txtLL, GLOBAL.steps.setListLL);
		sc.step(GLOBAL.steps.setListLL, GLOBAL.steps.Write_txtLL);
		sc.step(GLOBAL.steps.Write_txtLL, GLOBAL.steps.Start_SAPLogon750LL);
	sc.step(GLOBAL.steps.Start_SAPLogon750LL, GLOBAL.steps.pWindowSAPLogon75_man_2);
	sc.step(GLOBAL.steps.pWindowSAPLogon75_man_2, GLOBAL.steps.Declare_credentialLL);
		sc.step(GLOBAL.steps.Declare_credentialLL, GLOBAL.steps.Get_credentialLL);
		sc.step(GLOBAL.steps.Get_credentialLL, GLOBAL.steps.pSAPLogin_managementL);
	sc.step(GLOBAL.steps.pSAPLogin_managementL, GLOBAL.steps.pSAPEasyAccess_manage_3);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage_3, GLOBAL.steps.Disable_step_timeoutL);
	sc.step(GLOBAL.steps.Disable_step_timeoutL, GLOBAL.steps.pVentasYFacturasMas_m_3);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m_3, GLOBAL.steps.pPosDocumVisualiza_ma_2);
	sc.step(GLOBAL.steps.pPosDocumVisualiza_ma_2, GLOBAL.steps.pVentasYFacturasMas_m_1_2);
	sc.step(GLOBAL.steps.pVentasYFacturasMas_m_1_2, GLOBAL.steps.pSAPEasyAccess_manage_1_2);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage_1_2, GLOBAL.steps.pSalirDelSistema_mana_2);
	sc.step(GLOBAL.steps.pSalirDelSistema_mana_2, GLOBAL.steps.deleteFileEL);
		sc.step(GLOBAL.steps.deleteFileEL, null);
	}
}, ctx.dataManagers.rootData).setId('7257e4ef-f4d4-4b8c-b13e-b326ee089a6a');

// ----------------------------------------------------------------
//   Step: getSettingsLL
// ----------------------------------------------------------------
GLOBAL.step( {
	getSettingsLL: function (ev, sc, st) {
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
												sc.endStep(); // getFilenameLL
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
//   Step: getFilenameLL
// ----------------------------------------------------------------
GLOBAL.step( {
	getFilenameLL: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', '84b2371f-e67f-4473-af51-c5d1f9e18c66');
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
			dateIni = date.addDays(-2);
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
		rootData.filename = ruta + "LayoutENCO" + rootData.datetime + "_EL.txt";
		rootData.filenameO = rutao + "LayoutENCO" + rootData.datetime + date.getHours() + date.getMinutes() + "_EL.txt";
//		ctx.fso.file.write(rootData.filename, "", e.file.encoding.UTF8);

		sc.endStep(); // Read_txtLL
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Read_txtLL
// ----------------------------------------------------------------
GLOBAL.step( {
	Read_txtLL: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', '22a074cb-4d20-4fbb-9460-ae9db9b2a939');
		// Leer archivo generado
		var file = rootData.filename;
		rootData.lines = ctx.fso.file.read(file, e.file.encoding.UTF8);
		sc.endStep(); // setListLL
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: setListLL
// ----------------------------------------------------------------
GLOBAL.step( {
	setListLL: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', '9a510c1a-6130-47f2-9485-e03c22065f2c');
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
//   Step: Write_txtLL
// ----------------------------------------------------------------
GLOBAL.step( {
	Write_txtLL: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', '00546821-7131-4c0e-9dbd-753a7cfadad2');
		// Writes a text file.
		var file = rootData.filename;
		var txt = rootData.archivoTXT;
		ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
		ctx.fso.file.write(rootData.filenameO, txt, e.file.encoding.UTF8);
		sc.endStep(); // Start_SAPLogon750LL
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Start_SAPLogon750LL
// ----------------------------------------------------------------
GLOBAL.step( {
	Start_SAPLogon750LL: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', '7a6b2c05-63f7-405f-8083-d1914661c9f1');
		// Starts an application.
		SAPLogon750.start();
	sc.endStep(); // pWindowSAPLogon75_man_2
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: pWindowSAPLogon75_man_1
// ----------------------------------------------------------------
GLOBAL.step({ //pWindowSAPLogon75_man_2: function(ev, sc, st) {
	pWindowSAPLogon75_man_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', '23c42312-c00a-485d-9d7d-39814caa5dfc');
		// Wait until the Page loads
		SAPLogon750.pWindowSAPLogon75.wait(function (ev) {
			SAPLogon750.pWindowSAPLogon75.stQAS.click();
			SAPLogon750.pWindowSAPLogon75.btAccederAlSistema.click();
			sc.endStep(); // Declare_credentialLL
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: Declare_credentialLL
// ----------------------------------------------------------------
GLOBAL.step( {
	Declare_credentialLL: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', '3913b99a-d2b7-43c6-8225-d8bc3d6acecc');
		// Declares a credential

		ctx.cryptography.credential( {
			logonQAS: {
				comment: "logonQAS",
				server: true
			}
		});
		sc.endStep(); // Get_credentialLL
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Get_credentialLL
// ----------------------------------------------------------------
GLOBAL.step( {
	Get_credentialLL: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', '784c67c7-5bad-486c-b878-fe3147a1ff2a');
		// Retrieves credential login and password

		ctx.cryptography.credentials.logonQAS.get(function (code, label, credential) {
			if (code == e.error.OK) {
				// get values for credential
				rootData.sapgui.uname = credential.userName.get();
				rootData.sapgui.pass = credential.password.get();
				sc.endStep(); // pSAPLogin_managementL
				return ;
			}
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPLogin_managementL
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPLogin_managementL: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', 'a493b92d-0c7b-464b-b3f0-d3a38f301a1f');
		// Wait until the Page loads
		SAPLogon750.pSAPLogin.wait(function (ev) {
			SAPLogon750.pSAPLogin.edMandante.set("300");
			SAPLogon750.pSAPLogin.edUsuarios.set(rootData.sapgui.uname, true);
			SAPLogon750.pSAPLogin.oClvAcc.set(rootData.sapgui.pass, true);
			SAPLogon750.pSAPLogin.edIdioma.set("ES");
			SAPLogon750.pSAPLogin.keyStroke(e.SAPScripting.key._Enter_);
		sc.endStep(); // pSAPEasyAccess_manage_3
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_2
// ----------------------------------------------------------------
GLOBAL.step({ //pSAPEasyAccess_manage_3: function(ev, sc, st) {
	pSAPEasyAccess_manage_3: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', '9dbfa3c0-4f24-49e5-a241-ee6a4a75f509');
		// Wait until the Page loads
		SAPLogon750.pSAPEasyAccess.wait(function (ev) {
			SAPLogon750.pSAPEasyAccess.oGuiOkCodeField.set("YSD_0001");
			SAPLogon750.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Enter_);
			sc.endStep(); // Disable_step_timeoutL
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: Disable_step_timeoutL
// ----------------------------------------------------------------
GLOBAL.step( {
	Disable_step_timeoutL: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', '134950d8-73d4-4d27-b93c-0d6851ef941f');
		// Used to disable step timeout.
		st.disableTimeout();
	sc.endStep(); // pVentasYFacturasMas_m_3
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_2
// ----------------------------------------------------------------
GLOBAL.step({ pVentasYFacturasMas_m_3: function(ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', '413fb83e-764a-45af-aa16-b8ad5adebd52');
		// Wait until the Page loads
		SAPLogon750.pVentasYFacturasMas.wait(function (ev) {
			SAPLogon750.pVentasYFacturasMas.oSoloCarga.set("E");
			SAPLogon750.pVentasYFacturasMas.oVentaPorLínea.set("X");
			SAPLogon750.pVentasYFacturasMas.edFichero.set(rootData.filename);
			SAPLogon750.pVentasYFacturasMas.btEjecutar.click();
		sc.endStep(); // pPosDocumVisualiza_ma_2
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pPosDocumVisualiza_ma_1
// ----------------------------------------------------------------
GLOBAL.step({ pPosDocumVisualiza_ma_2: function(ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', '5645fe9b-6c5e-4425-9e3e-a8c2cc4728aa');
		// Wait until the Page loads
		SAPLogon750.pPosDocumVisualiza.wait(function (ev) {
			SAPLogon750.pPosDocumVisualiza.btAceptar.click();
		sc.endStep(); // pVentasYFacturasMas_m_1_2
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_1_1
// ----------------------------------------------------------------
GLOBAL.step({ pVentasYFacturasMas_m_1_2: function(ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', 'e9e3ea03-0d7f-4645-a9ee-e187dd402625');
		// Wait until the Page loads
		SAPLogon750.pVentasYFacturasMas.wait(function (ev) {
			SAPLogon750.pVentasYFacturasMas.btIFinalizar.click();
		sc.endStep(); // pSAPEasyAccess_manage_1_2
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_1_1
// ----------------------------------------------------------------
GLOBAL.step({ pSAPEasyAccess_manage_1_2: function(ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', 'bdfcb991-5018-4bc0-8702-c31e669fb879');
		// Wait until the Page loads
		SAPLogon750.pSAPEasyAccess.wait(function (ev) {
			SAPLogon750.pSAPEasyAccess.btIFinalizar.click();
		sc.endStep(); // pSalirDelSistema_mana_2
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSalirDelSistema_mana_1
// ----------------------------------------------------------------
GLOBAL.step({ pSalirDelSistema_mana_2: function(ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', '5848eb2d-d147-4a2c-8c58-16154b232ce5');
		// Wait until the Page loads
		SAPLogon750.pSalirDelSistema.wait(function (ev) {
			SAPLogon750.pSalirDelSistema.btSí.click();
			sc.endStep(); // end Scenario
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: DeleteFileEL
// ----------------------------------------------------------------
GLOBAL.step( {
	deleteFileEL: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Lunes', 'aaff62d6-03af-462d-84d8-7bd8845d5835');
		// Leer archivo generado
		var file = rootData.filename;
		ctx.fso.file.remove(file);
		sc.endStep(); // end
		return ;
	}
});
