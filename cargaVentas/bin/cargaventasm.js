
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
GLOBAL.scenario( {
	cargaVentasM: function (ev, sc) {
		var rootData = sc.data;

		sc.setMode(e.scenario.mode.clearIfRunning);
		sc.setScenarioTimeout(43200000); // Default timeout for global scenario.
		sc.onError(function (sc, st, ex) {
			sc.endScenario();
		}); // Default error handler.
		sc.onTimeout(600000, function (sc, st) {
			sc.endScenario();
		}); // Default timeout handler for each step.
		sc.step(GLOBAL.steps.getFilename_2, GLOBAL.steps.connectSQL_2);
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
	}
}, ctx.dataManagers.rootData).setId('eced6a0b-ed93-431f-9bba-59805119fffe');

// ----------------------------------------------------------------
//   Step: getFilename_2
// ----------------------------------------------------------------
GLOBAL.step( {
	getFilename_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', 'bd856692-e2a1-4232-89df-162b950f23d6');
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
		rootData.filename = "C:\\LAYOUT\\LayoutENCO" + rootData.datetime + "_MM.txt";
		sc.endStep(); // connectSQL_2
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: connectSQL_2
// ----------------------------------------------------------------
GLOBAL.step( {
	connectSQL_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', '021aef34-ba77-4bf6-8488-50a0b817edc4');
		// Ejecutar stored procedure
		var command = 'sqlcmd ' +
								'-S 104.210.223.37,4785 ' +
								'-U "UserSp" ' +
								'-P "Inicio1#" ' +
								'-d "Pagos" -h-1 ' +
		//'-s "\t" -W ' +
								'-s ";" -W ' +
								'-o ' + rootData.filename + ' ' +
								//'-Q "exec Reportesap @idestacion= null, @Fechaini=\'' + rootData.datetime + '\', @fechafin =\'' + rootData.datetime + '\'"';
								'-Q "exec Reportesap @idestacion= null, @Fechaini=\'20211104\', @fechafin =\'20211104\'"';
		try {
			ctx.exec(command, 30000, function (res) { // timeout 30 sec
				// do some stuff once you get the response
				sc.endStep(); // Read_a_text_file
				return ;
			});
		}catch (ex) {
			ctx.log(ex.message, e.logIconType.Error);
			sc.endStep(); // end Scenario
			return ;
		}
	}
});

// ----------------------------------------------------------------
//   Step: Read_a_text_file_2
// ----------------------------------------------------------------
GLOBAL.step( {
	Read_a_text_file_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', 'b43518f7-cb23-4fcd-a490-274859618a7d');
		// Reads the content of a text file.
		var file = rootData.filename;
		rootData.lines = ctx.fso.file.read(file, e.file.encoding.UTF8);
		sc.endStep(); // setList_2
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: setList_2
// ----------------------------------------------------------------
GLOBAL.step( {
	setList_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', '14bbe514-5439-4e5d-81e8-55d208e5b654');
		// Genera archivo final
		var lines = rootData.lines.split('\n');
		rootData.Lines = "";
		for (var i = 0; i < lines.length; i++) {
			//for (var i = 0; i < 11; i++) {
			var txt = "";
			//var line = lines[i].split('\t');
			var line = lines[i].split(';');
			for (var j = 0; j < line.length - 1; j++) {
				if (line[j] == "NULL") {
					line[j] = "";
				}
				if (line[j] == "2.9999999999999999E-2") {
					line[j] = Number(line[j]) + " ";
				}
				if (line[j] == "8.9999999999999997E-2") {
					line[j] = Number(line[j]) + " ";
				}
				if (j == 27 || j == 28 || j == 26 || j == 34 || j == 35 || j == 36) {
					//txt = txt + "0002004768\t";
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
		sc.endStep(); // Write_a_text_file_2
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Write_a_text_file_2
// ----------------------------------------------------------------
GLOBAL.step( {
	Write_a_text_file_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', 'faf1c0fd-f9f3-4cdb-85de-a8dc06997004');
		// Writes a text file.
		var file = rootData.filename;
		var txt = rootData.archivoTXT;
		ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
		sc.endStep(); // Start_SAPLogon760_2
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Start_SAPLogon760_2
// ----------------------------------------------------------------
GLOBAL.step( {
	Start_SAPLogon760_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', '14583375-c3a7-4b6a-9a1e-f63041529968');
		// Starts an application.
		SAPLogon760.start();
		sc.endStep(); // pWindowSAPLogon76_man_2
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: pWindowSAPLogon76_man_2
// ----------------------------------------------------------------
GLOBAL.step( {
	pWindowSAPLogon76_man_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', '722fa44a-17f8-471b-95ad-a335a9d86c3e');
		// Wait until the Page loads
		SAPLogon760.pWindowSAPLogon76.wait(function (ev) {
			SAPLogon760.pWindowSAPLogon76.stARTHAQAS.clickDouble();
			sc.endStep(); // Declare_credential_2
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: Declare_credential_2
// ----------------------------------------------------------------
GLOBAL.step( {
	Declare_credential_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', '8f63a30c-3719-4b6a-8435-ac43b43f4832');
		// Declares a credential

		ctx.cryptography.credential( {
			logonQAS: {
				comment: "logonQAS",
				server: true
			}
		});
		sc.endStep(); // Get_credential_2
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Get_credential_2
// ----------------------------------------------------------------
GLOBAL.step( {
	Get_credential_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', '15a14120-5cfa-48a7-9b5f-3e3dc3e59909');
		// Retrieves credential login and password

		ctx.cryptography.credentials.logonQAS.get(function (code, label, credential) {
			if (code == e.error.OK) {
				// get values for credential
				rootData.sapgui.uname = credential.userName.get();
				rootData.sapgui.pass = credential.password.get();
				sc.endStep(); // pSAPLogin_management_2
				return ;
			}
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPLogin_management_2
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPLogin_management_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', '5aa04c03-0fb2-4c20-8af0-eb3e34401f15');
		// Wait until the Page loads
		SAPLogon760.pSAPLogin.wait(function (ev) {
			SAPLogon760.pSAPLogin.edMandante.set("300");
			SAPLogon760.pSAPLogin.edUsuarios.set(rootData.sapgui.uname);
			SAPLogon760.pSAPLogin.oClvAcc.set(rootData.sapgui.pass);
			SAPLogon760.pSAPLogin.edIdioma.set("ES");
			SAPLogon760.pSAPLogin.keyStroke(e.SAPScripting.key._Enter_);
			sc.endStep(); // pSAPEasyAccess_manage_3
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_3
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPEasyAccess_manage_3: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', 'b136acab-5bd1-49c4-ab90-724c4e0eb6be');
		// Wait until the Page loads
		SAPLogon760.pSAPEasyAccess.wait(function (ev) {
			SAPLogon760.pSAPEasyAccess.oGuiOkCodeField.set("YSD_0001");
			SAPLogon760.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Enter_);
			sc.endStep(); // Disable_step_timeout_2
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: Disable_step_timeout_2
// ----------------------------------------------------------------
GLOBAL.step( {
	Disable_step_timeout_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', 'bfd46aaf-9b86-48dd-ae81-5e2952635311');
		// Used to disable step timeout.
		st.disableTimeout();
		sc.endStep(); // pVentasYFacturasMas_m_3
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_3
// ----------------------------------------------------------------
GLOBAL.step( {
	pVentasYFacturasMas_m_3: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', 'b0a60582-ee89-4a70-9093-cc0b9f11d786');
		// Wait until the Page loads
		SAPLogon760.pVentasYFacturasMas.wait(function (ev) {
			SAPLogon760.pVentasYFacturasMas.oVentaPorLínea.set("X");
			SAPLogon760.pVentasYFacturasMas.oSoloCarga.set("X");
			SAPLogon760.pVentasYFacturasMas.edFichero.set(rootData.filename);
			SAPLogon760.pVentasYFacturasMas.btEjecutar.click();
			sc.endStep(); // pPosDocumVisualiza_ma_2
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pPosDocumVisualiza_ma_2
// ----------------------------------------------------------------
GLOBAL.step( {
	pPosDocumVisualiza_ma_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', '00b2778d-524b-4a9a-b86c-0ef939a55e95');
		// Wait until the Page loads
		st.disableTimeout();
		SAPLogon760.pPosDocumVisualiza.wait(function (ev) {
			// Delays execution for some milliseconds.
			// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
			// It allows user interaction with Desktop Agent and other programs during the pause.
			// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react.
			ctx.wait(function (ev) {
				SAPLogon760.pPosDocumVisualiza.btAceptar.click();
				sc.endStep(); // pVentasYFacturasMas_m_1_2
				return ;
			}, 1000);
		});
	}
});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_1_2
// ----------------------------------------------------------------
GLOBAL.step( {
	pVentasYFacturasMas_m_1_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', 'fad14370-d7fb-4149-8496-552cb74e2f94');
		// Wait until the Page loads
		SAPLogon760.pVentasYFacturasMas.wait(function (ev) {
			SAPLogon760.pVentasYFacturasMas.btIFinalizar.click();
			sc.endStep(); // pSAPEasyAccess_manage_1_2
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_1_2
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPEasyAccess_manage_1_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', 'd67d10b8-4b0b-4997-bfc7-f5fa457565aa');
		// Wait until the Page loads
		SAPLogon760.pSAPEasyAccess.wait(function (ev) {
			SAPLogon760.pSAPEasyAccess.btIFinalizar.click();
			sc.endStep(); // pSalirDelSistema_mana_2
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSalirDelSistema_mana_2
// ----------------------------------------------------------------
GLOBAL.step( {
	pSalirDelSistema_mana_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', '203fae11-2b7b-4ef9-8bb5-994aaad2bb63');
		// Wait until the Page loads
		SAPLogon760.pSalirDelSistema.wait(function (ev) {
			SAPLogon760.pSalirDelSistema.btSí.click();
			sc.endStep(); // end Scenario
			return ;
		});
	}
});
