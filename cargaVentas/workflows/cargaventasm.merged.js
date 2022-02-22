
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
		sc.onTimeout(650000, function (sc, st) {
			sc.endScenario();
		}); // Default timeout handler for each step.
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
		var date = new Date();
		var mes = date.getMonth() + 1;
		if (mes < 10) {
			mes = "0" + mes;
		}
		var dia = date.getDate() - 0;
		if (dia < 10) {
			dia = "0" + dia;
		}
		rootData.datetime = date.getFullYear().toString() + mes + dia;
		rootData.fechaActual = dia + "/" + mes + "/" + date.getFullYear();
		rootData.fechaActual = date.getFullYear() + mes + dia;
		rootData.filename = "C:\\LAYOUT\\LayoutENCO" + rootData.datetime + "_MM.txt";
		ctx.fso.file.write(rootData.filename, "", e.file.encoding.UTF8);
		sc.endStep(); // Declare_setting
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Declare_setting
// ----------------------------------------------------------------
GLOBAL.step( {
	Declare_setting: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', 'dccb90fe-2346-4152-acc1-de63336909fc');
		// Declares a setting

		ctx.setting( {
			fechaInicio: {
				comment: "Fecha inicio",
				server: true
			}
		});

		ctx.setting( {
			idCentro: {
				comment: "idCentro",
				server: true
			}
		});
		sc.endStep(); // Declare_setting_1
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Declare_setting_1
// ----------------------------------------------------------------
GLOBAL.step( {
	Declare_setting_1: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', '3b7ae552-18df-4334-a833-57adee8f495b');
		// Declares a setting

		ctx.setting( {
			fechaFin: {
				comment: "Fecha Final",
				server: true
			}
		});
		sc.endStep(); // Declare_setting_2
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Declare_setting_2
// ----------------------------------------------------------------
GLOBAL.step( {
	Declare_setting_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', 'd97d2856-8cc3-4254-88fc-32253efd4ad6');
		// Declares a setting

		ctx.setting( {
			soloCarga: {
				comment: "Indicar X en solo carga",
				server: true
			}
		});

		ctx.setting( {
			tipoConsulta: {
				comment: "Tipo de carga",
				server: true
			}
		});
		sc.endStep(); // Get_setting
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Get_setting
// ----------------------------------------------------------------
GLOBAL.step( {
	Get_setting: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', 'f2829b3d-d899-46b9-9405-7c69dee1b36a');
		// Retrieves the value of a setting

		ctx.settings.tipoConsulta.get(function (code, label, setting) {
			if (code == e.error.OK) {
				// get value from setting.value
				rootData.tipoConsulta = setting.value;
			}
		});

		ctx.settings.idCentro.get(function (code, label, setting) {
			if (code == e.error.OK) {
				// get value from setting.value
				rootData.Manual.idCentro = setting.value;
				//				sc.endStep(); // Get_setting_1
				//				return ;
			}
		});
		ctx.settings.fechaInicio.get(function (code, label, setting) {
			if (code == e.error.OK) {
				// get value from setting.value
				rootData.Manual.fechaIni = setting.value;
				sc.endStep(); // Get_setting_1
				return ;
			}
		});
	}
});

// ----------------------------------------------------------------
//   Step: Get_setting_1
// ----------------------------------------------------------------
GLOBAL.step( {
	Get_setting_1: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', 'aa0677d3-572b-4e8c-b1f0-a9f073bc0cd4');
		// Retrieves the value of a setting

		ctx.settings.fechaFin.get(function (code, label, setting) {
			if (code == e.error.OK) {
				// get value from setting.value
				rootData.Manual.fechaFin = setting.value;
				sc.endStep(); // Get_setting_2
				return ;
			}
		});
	}
});

// ----------------------------------------------------------------
//   Step: Get_setting_2
// ----------------------------------------------------------------
GLOBAL.step( {
	Get_setting_2: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasM', '0d3a9c05-20e3-4261-80d3-a39be7bb622d');
		// Retrieves the value of a setting

		ctx.settings.soloCarga.get(function (code, label, setting) {
			if (code == e.error.OK) {
				// get value from setting.value
				rootData.Manual.soloCarga = setting.value;
				sc.endStep(); // connectSQL_2
				return ;
			}
		});
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
		//	  st.disableTimeout();
		var tipoConsulta = rootData.tipoConsulta;
		if (tipoConsulta == "C" || tipoConsulta == "A") {
			var command = 'sqlcmd ' +
								'-S 104.210.223.37,4785 ' +
								'-U "UserSp" ' +
								'-P "Inicio1#" ' +
								'-d "Pagos" -h-1 ' +
								'-s ";" -W ' +
								'-o ' + rootData.filename + ' -t 500 ';
			var Estacion = "null";
			if (rootData.Manual.fechaIni != "") {
				command = command +
								'-Q "exec Reportesap @idEstacion= ' + Estacion + ', @Fechaini=\'' + rootData.Manual.fechaIni + '\', @fechafin =\'' + rootData.Manual.fechaFin + '\'"';
			}else {
				command = command +
								'-Q "exec Reportesap @idEstacion= ' + Estacion + ', @Fechaini=\'' + rootData.datetime + '\', @fechafin =\'' + rootData.datetime + '\'"';
			}
			try {
				if (tipoConsulta == "C") {
					ctx.exec(command, 300000, function (res) { // timeout 30 sec
						// do some stuff once you get the response
						sc.endStep(); // Read_a_text_file
						return ;
					});
				}else if (tipoConsulta == "A") {
					var obj = ctx.exec(command);
				}
				sc.endStep(); // Read_a_text_file
				return ;
			}catch (ex) {
				ctx.log(ex.message, e.logIconType.Error);
				sc.endStep(); // end Scenario
				return ;
			}
		}else if (tipoConsulta == "S") {
			try {
				var centro = '\'' + rootData.Manual.idCentro + '\'';
				centro = rootData.Manual.idCentro + "";
				centro = centro.toUpperCase();
				//			st.disableTimeout();


				var cn = new ActiveXObject("ADODB.Connection");
				cn.CommandTimeout = 60000;
				cn.ConnectionTimeout = 160000;
				var strConn = "Provider=SQLOLEDB;Server=104.210.223.37,4785;Database=Pagos;UID=UserSp;PWD=Inicio1#;";
				cn.Open(strConn);
				var rs = new ActiveXObject("ADODB.Recordset");
				if (rootData.Manual.fechaIni != "") {
					var SQL = 'exec Reportesap @idEstacion=null, @Fechaini=\'' + rootData.Manual.fechaIni + '\', @fechafin =\'' + rootData.Manual.fechaFin + '\'';
				}else {
					var SQL = 'exec Reportesap @idEstacion=null, @Fechaini=\'' + rootData.datetime + '\', @fechafin =\'' + rootData.datetime + '\'';
				}

				rs.Open(SQL, cn);
				var index = 0;
				var archivoTXT = "";
				while (rs.EOF != true) {
					var txt = "";
					var temp = texto(rs("CENTRO").value);
					if (temp == centro || centro == "null" || centro == "NULL") {
						txt = txt + texto(rs("FECHA DE EMISIÓN DEL DOCUMENTO").value) + "\t";
						txt = txt + texto(rs("REFERENCIA FACTURA").value) + "\t";
						txt = txt + texto(rs("CLASE DE DOCUMENTO").value) + "\t";
						txt = txt + texto(rs("ORGANIZACIÓN DE VENTAS").value) + "\t";
						txt = txt + texto(rs("CANAL").value) + "\t";
						txt = txt + texto(rs("SECTOR").value) + "\t";
						txt = txt + texto(rs("DOCUMENTO REFERENCIA").value) + "\t";
						txt = txt + texto(rs("OFICINA DE VENTAS").value) + "\t";
						txt = txt + texto(rs("GRUPO DE VENDEDORES").value) + "\t";
						txt = txt + texto(rs("MOTIVO DEL PEDIDO").value) + "\t";
						txt = txt + texto(rs("TEXTO LARGO: ZE01 <CICLO>").value) + "\t";
						txt = txt + texto(rs("TEXTO LARGO: ZE01 <NUM CRÉDITO>").value) + "\t";
						txt = txt + texto(rs("TEXTO LARGO: ZE01 <NUM CLIENTE CONSWARE>").value) + "\t";
						txt = txt + texto(rs("TEXTO LARGO: ZE01 <PLACA>").value) + "\t";
						txt = txt + texto(rs("TEXTO LARGO: ZE02 <SERIE>").value) + "\t";
						txt = txt + texto(rs("TEXTO LARGO: ZE02 <FOLIO>").value) + "\t";
						txt = txt + texto(rs("TEXTO LARGO: ZE02 <UUID>").value) + "\t";
						txt = txt + texto(rs("TEXTO LARGO: Z010 <UUID RELACIONADOS>").value) + "\t";
						txt = txt + texto(rs("USO CFDI").value) + "\t";
						txt = txt + texto(rs("METODO DE PAGO").value) + "\t";
						txt = txt + texto(rs("SOLICITANTE").value) + "\t";
						txt = txt + texto(rs("CLIENTE").value) + "\t";
						txt = txt + texto(rs("NOMBRE_FLOTA").value) + "\t";
						txt = txt + texto(rs("POSICION").value) + "\t";
						txt = txt + texto(rs("NÚMERO DE MATERIAL").value) + "\t";
						txt = txt + texto(rs("codigo_factura").value) + "\t";
						txt = txt + numero(rs("LITROS_BONOS").value) + "\t";
						txt = txt + numero(rs("LITROS_EFECTIVO").value) + "\t";
						txt = txt + numero(rs("CANTIDAD").value) + "\t";
						txt = txt + texto(rs("UNIDAD DEL PRODUCTO").value) + "\t";
						txt = txt + texto(rs("REFERENCIA DE MATERIAL DEL CLIENTE").value) + "\t";
						txt = txt + texto(rs("CENTRO").value) + "\t";
						txt = txt + texto(rs("CENTRO BENEFICIO").value) + "\t";
						txt = txt + texto(rs("ALMACÉN").value) + "\t";
						txt = txt + numero(rs("CLASE DE CONDICIÓN PR00").value) + "\t";
						txt = txt + numero(rs("DESCUENTO").value) + "\t";
						txt = txt + numero(rs("CLASE DE CONDICIÓN MWST").value) + "\t";
						txt = txt + texto(rs("UNIDAD DE PRECIO DE LA CONDICION").value) + "\t";
						txt = txt + texto(rs("MONEDA").value) + "\t";
						txt = txt + texto(rs("FECHA BASE").value) + "\t";
						txt = txt + texto(rs("TÉRMINOS DE PAGO").value) + "\t";
						txt = txt + texto(rs("DETALLE SUB CONCEPTO").value) + "\t";
						txt = txt + texto(rs("Tipo").value) + "\t";
						txt = txt + texto(rs("TIPO").value) + "\t";

						archivoTXT = archivoTXT + txt + "\n";
					}

					rs.MoveNext();
					index++;
				}
				rs.Close();
				cn.Close();



				rootData.archivoTXT = archivoTXT;

				sc.endStep(); // Read_a_text_file
				return ;
			}catch (ex) {
				ctx.log(ex.message, e.logIconType.Error);
				sc.endStep(); // end Scenario
				return ;
			}
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
		if (rootData.tipoConsulta == "S") {

		}else {
			var file = rootData.filename;
			rootData.lines = ctx.fso.file.read(file, e.file.encoding.UTF8);
		}
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
		if (rootData.tipoConsulta == "S") {

		}else {
			var lines = rootData.lines.split('\n');
			rootData.Lines = "";
			var centro = '\'' + rootData.Manual.idCentro + '\'';
			centro = rootData.Manual.idCentro + "";
			centro = centro.toUpperCase();
			for (var i = 0; i < lines.length; i++) {
				var txt = "";
				//var line = lines[i].split('\t');
				var line = lines[i].split(';');
				if (line[31] == centro || centro == "null" || centro == "NULL") {
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
			}
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
			if (rootData.Manual.soloCarga == "C") {
				SAPLogon760.pVentasYFacturasMas.oSoloCarga.set("C");
			}
			if (rootData.Manual.soloCarga == "E") {
				SAPLogon760.pVentasYFacturasMas.oSoloCarga.set("E");
			}
			if (rootData.Manual.soloCarga == "P") {
				SAPLogon760.pVentasYFacturasMas.oSoloCarga.set("P");
			}
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
			SAPLogon760.pVentasYFacturasMas.keyStroke(e.SAPScripting.key._Shift__F3_);
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
			SAPLogon760.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Shift__F3_);
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


function texto(text) {
	var ret = "";
	if (text == "null" || text == "NULL" || text == null) {
		ret = "";
	}else {
		ret = text;
	}

	return ret;
}

function numero(text) {
	var ret = "";
	if (text == "null" || text == "NULL") {
		ret = 0;
	}else {
		ret = Number(text);
	}

	return ret;
}
