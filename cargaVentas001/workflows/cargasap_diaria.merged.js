
// ----------------------------------------------------------------
//   Test menu for scenario carga_SAP_Diaria 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'carga_SAP_Diaria', 'Test carga_SAP_Diaria', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();

			// Initialize your data here.
			GLOBAL.scenarios.carga_SAP_Diaria.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario carga_SAP_Diaria Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: carga_SAP_Diaria
// ----------------------------------------------------------------
GLOBAL.scenario( {
	carga_SAP_Diaria: function (ev, sc) {
		var rootData = sc.data;

		sc.setMode(e.scenario.mode.clearIfRunning);
		sc.setScenarioTimeout(12000000); // Default timeout for global scenario.
		sc.onError(function (sc, st, ex) {
			sc.endScenario();
		}); // Default error handler.
		sc.onTimeout(600000, function (sc, st) {
			sc.endScenario();
		}); // Default timeout handler for each step.
		sc.step(GLOBAL.steps.getSettingsDD, GLOBAL.steps.getFilenameDD);
		sc.step(GLOBAL.steps.getFilenameDD, GLOBAL.steps.Read_txtDD);
		sc.step(GLOBAL.steps.Read_txtDD, GLOBAL.steps.setListDD);
		sc.step(GLOBAL.steps.setListDD, GLOBAL.steps.Write_txtDD);
		sc.step(GLOBAL.steps.Write_txtDD, GLOBAL.steps.Start_SAPLogon750DD);
	sc.step(GLOBAL.steps.Start_SAPLogon750DD, GLOBAL.steps.pWindowSAPLogon75_man_1);
	sc.step(GLOBAL.steps.pWindowSAPLogon75_man_1, GLOBAL.steps.Declare_credentialDD);
		sc.step(GLOBAL.steps.Declare_credentialDD, GLOBAL.steps.Get_credentialDD);
		sc.step(GLOBAL.steps.Get_credentialDD, GLOBAL.steps.pSAPLogin_managementD);
		sc.step(GLOBAL.steps.pSAPLogin_managementD, GLOBAL.steps.pSAPEasyAccess_manage_2);
		sc.step(GLOBAL.steps.pSAPEasyAccess_manage_2, GLOBAL.steps.Disable_step_timeoutD);
		sc.step(GLOBAL.steps.Disable_step_timeoutD, GLOBAL.steps.pVentasYFacturasMas_m_2);
		sc.step(GLOBAL.steps.pVentasYFacturasMas_m_2, GLOBAL.steps.pPosDocumVisualiza_ma_1);
		sc.step(GLOBAL.steps.pPosDocumVisualiza_ma_1, GLOBAL.steps.pVentasYFacturasMas_m_1_1);
		sc.step(GLOBAL.steps.pVentasYFacturasMas_m_1_1, GLOBAL.steps.pSAPEasyAccess_manage_1_1);
		sc.step(GLOBAL.steps.pSAPEasyAccess_manage_1_1, GLOBAL.steps.pSalirDelSistema_mana_1);
		sc.step(GLOBAL.steps.pSalirDelSistema_mana_1, GLOBAL.steps.deleteFileDD);
		sc.step(GLOBAL.steps.deleteFileDD, null);
	}
}, ctx.dataManagers.rootData).setId('319e5962-781d-4355-9796-80cfd5ce652b');

// ----------------------------------------------------------------
//   Step: getSettingsDD
// ----------------------------------------------------------------
GLOBAL.step( {
	getSettingsDD: function (ev, sc, st) {
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
												sc.endStep(); // getFilenameDD
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
//   Step: getFilenameDD
// ----------------------------------------------------------------
GLOBAL.step( {
	getFilenameDD: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', 'ced5e406-1496-4cb9-a23c-a7ce77b9ee09');
		// Get filename
		Date.prototype.addDays = function (days) {
			var date = new Date(this.valueOf());
			date.setDate(date.getDate() + days);
			return date;
		}
		rootData.tipoCarga = "";

		var date = new Date();
		var dateIni;
		var hora = date.getHours();
		if (date.getHours() == 0) { //Si son las 00 horas, se consulta todo el día anterior
			date = date.addDays(-1);
			dateIni = date;
		}else {
			dateIni = date;
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
		rootData.filename = ruta + "LayoutENCO" + rootData.datetime + "_DD.txt";
		rootData.filenameO = rutao + "LayoutENCO" + rootData.datetime + date.getHours() + date.getMinutes() + "_DD.txt";
		//		ctx.fso.file.write(rootData.filename, "", e.file.encoding.UTF8);

		sc.endStep(); // Read_txtDD
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Read_txtDD
// ----------------------------------------------------------------
GLOBAL.step( {
	Read_txtDD: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', 'c6368b44-2ade-4089-a406-8187f6e57551');
		// Leer archivo generado
		var file = rootData.filename;
		rootData.lines = ctx.fso.file.read(file, e.file.encoding.UTF8);
		sc.endStep(); // setListDD
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: setListDD
// ----------------------------------------------------------------
GLOBAL.step( {
	setListDD: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', '7c21c118-4e60-4de9-9f2a-d65be3394d77');
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
		sc.endStep(); // Write_txtDD
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Write_txtDD
// ----------------------------------------------------------------
GLOBAL.step( {
	Write_txtDD: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', '5e57caf6-bd3c-4a7d-9593-d4b39704ee80');
		// Writes a text file.
		var file = rootData.filename;
		var txt = rootData.archivoTXT;
		ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
		ctx.fso.file.write(rootData.filenameO, txt, e.file.encoding.UTF8);
		sc.endStep(); // Start_SAPLogon750DD
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Start_SAPLogon750DD
// ----------------------------------------------------------------
GLOBAL.step( {
	Start_SAPLogon750DD: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', 'ed0c99c3-cbca-45db-a5a7-fb6d4c083c66');
		// Starts an application.
		SAPLogon750.start();
		sc.endStep(); // pWindowSAPLogon75_man_1
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: pWindowSAPLogon75_man_1
// ----------------------------------------------------------------
GLOBAL.step( {
	pWindowSAPLogon75_man_1: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', 'c27f0497-38de-46a5-a295-187c26fa3117');
		// Wait until the Page loads
		SAPLogon750.pWindowSAPLogon75.wait(function (ev) {
			SAPLogon750.pWindowSAPLogon75.stQAS.clickDouble();
//			SAPLogon750.pWindowSAPLogon75.btAccederAlSistema.click();
			sc.endStep(); // Declare_credentialDD
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: Declare_credentialDD
// ----------------------------------------------------------------
GLOBAL.step( {
	Declare_credentialDD: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', 'f49d5f10-ab8d-4d0b-b844-748946f65c7f');
		// Declares a credential

		ctx.cryptography.credential( {
			logonQAS: {
				comment: "logonQAS",
				server: true
			}
		});
		sc.endStep(); // Get_credentialDD
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Get_credentialDD
// ----------------------------------------------------------------
GLOBAL.step( {
	Get_credentialDD: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', 'aed26429-107b-4eb8-be6c-772f03e4f04e');
		// Retrieves credential login and password

		ctx.cryptography.credentials.logonQAS.get(function (code, label, credential) {
			if (code == e.error.OK) {
				// get values for credential
				rootData.sapgui.uname = credential.userName.get();
				rootData.sapgui.pass = credential.password.get();
				sc.endStep(); // pSAPLogin_managementD
				return ;
			}
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPLogin_managementD
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPLogin_managementD: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', 'b442a1a6-201b-45cd-b666-0b7b3c8cbcee');
		// Wait until the Page loads
		SAPLogon750.pSAPLogin.wait(function (ev) {
			SAPLogon750.pSAPLogin.edMandante.set("300");
			SAPLogon750.pSAPLogin.edUsuarios.set(rootData.sapgui.uname, true);
			SAPLogon750.pSAPLogin.oClvAcc.set(rootData.sapgui.pass, true);
			SAPLogon750.pSAPLogin.edIdioma.set("ES");
			SAPLogon750.pSAPLogin.keyStroke(e.SAPScripting.key._Enter_);
			sc.endStep(); // pSAPEasyAccess_manage_2
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_2
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPEasyAccess_manage_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', '4a8daf1a-dbfa-42d4-bdab-deb5318714fa');
		// Wait until the Page loads
		SAPLogon750.pSAPEasyAccess.wait(function (ev) {
			SAPLogon750.pSAPEasyAccess.oGuiOkCodeField.set("YSD_0001");
			SAPLogon750.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Enter_);
			sc.endStep(); // Disable_step_timeoutD
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: Disable_step_timeoutD
// ----------------------------------------------------------------
GLOBAL.step( {
	Disable_step_timeoutD: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', 'd4dbcf8a-fd69-4192-b515-12ea619d9d58');
		// Used to disable step timeout.
		st.disableTimeout();
		sc.endStep(); // pVentasYFacturasMas_m_2
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_2
// ----------------------------------------------------------------
GLOBAL.step( {
	pVentasYFacturasMas_m_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', '27f42bef-35f7-4025-8305-e7578d1c40f1');
		// Wait until the Page loads
		SAPLogon750.pVentasYFacturasMas.wait(function (ev) {
			SAPLogon750.pVentasYFacturasMas.oSoloCarga.set("C");
			SAPLogon750.pVentasYFacturasMas.oVentaPorLínea.set("X");
			SAPLogon750.pVentasYFacturasMas.edFichero.set(rootData.filename);
			SAPLogon750.pVentasYFacturasMas.btEjecutar.click();
			sc.endStep(); // pPosDocumVisualiza_ma_1
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pPosDocumVisualiza_ma_1
// ----------------------------------------------------------------
GLOBAL.step( {
	pPosDocumVisualiza_ma_1: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', 'f50d42ab-1909-4e79-b337-6f83578063f3');
		// Wait until the Page loads
		SAPLogon750.pPosDocumVisualiza.wait(function (ev) {
			SAPLogon750.pPosDocumVisualiza.btAceptar.click();
			sc.endStep(); // pVentasYFacturasMas_m_1_1
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_1_1
// ----------------------------------------------------------------
GLOBAL.step( {
	pVentasYFacturasMas_m_1_1: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', '7dff674f-49b5-4b98-9c55-06dfddb6427a');
		// Wait until the Page loads
		SAPLogon750.pVentasYFacturasMas.wait(function (ev) {
			SAPLogon750.pVentasYFacturasMas.btIFinalizar.click();
			SAPLogon750.pVentasYFacturasMas.keyStroke(e.SAPScripting.key._Shift__F3_);
			sc.endStep(); // pSAPEasyAccess_manage_1_1
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_1_1
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPEasyAccess_manage_1_1: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', '7127f1de-09ce-4605-b12c-03513763c614');
		// Wait until the Page loads
		SAPLogon750.pSAPEasyAccess.wait(function (ev) {
			SAPLogon750.pSAPEasyAccess.btIFinalizar.click();
			SAPLogon750.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Shift__F3_);
			sc.endStep(); // pSalirDelSistema_mana_1
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSalirDelSistema_mana_1
// ----------------------------------------------------------------
GLOBAL.step( {
	pSalirDelSistema_mana_1: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', '1cca97a6-8aeb-437e-9f6a-00753d54e627');
		// Wait until the Page loads
		SAPLogon750.pSalirDelSistema.wait(function (ev) {
			SAPLogon750.pSalirDelSistema.btSí.click();
			sc.endStep(); // end Scenario
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: DeleteFileDD
// ----------------------------------------------------------------
GLOBAL.step( {
	deleteFileDD: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSAP_Diaria', 'ddff62d6-03af-462d-84d8-7bd8845d5835');
		// Leer archivo generado
		var file = rootData.filename;
		ctx.fso.file.remove(file);
		sc.endStep(); // end
		return ;
	}
});
