
// ----------------------------------------------------------------
//   Test menu for scenario cargaVentasD 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'cargaVentasD', 'Test cargaVentasD', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();

			// Initialize your data here.
			GLOBAL.scenarios.cargaVentasD.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario cargaVentasD Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: cargaVentasD
// ----------------------------------------------------------------
GLOBAL.scenario( {
	cargaVentasD: function (ev, sc) {
		var rootData = sc.data;

		sc.setMode(e.scenario.mode.clearIfRunning);
		sc.setScenarioTimeout(43200000); // Default timeout for global scenario.
		sc.onError(function (sc, st, ex) {
			sc.endScenario();
		}); // Default error handler.
		sc.onTimeout(600000, function (sc, st) {
				sc.endScenario();
		}); // Default timeout handler for each step.
		sc.step(GLOBAL.steps.getFilename, GLOBAL.steps.connectSQL);
		sc.step(GLOBAL.steps.connectSQL, GLOBAL.steps.Read_a_text_file);
		sc.step(GLOBAL.steps.Read_a_text_file, GLOBAL.steps.setList);
		sc.step(GLOBAL.steps.setList, GLOBAL.steps.Write_a_text_file);
		sc.step(GLOBAL.steps.Write_a_text_file, GLOBAL.steps.Start_SAPLogon760);
		sc.step(GLOBAL.steps.Start_SAPLogon760, GLOBAL.steps.pWindowSAPLogon76_man);
		sc.step(GLOBAL.steps.pWindowSAPLogon76_man, GLOBAL.steps.Declare_credential);
		sc.step(GLOBAL.steps.Declare_credential, GLOBAL.steps.Get_credential);
		sc.step(GLOBAL.steps.Get_credential, GLOBAL.steps.pSAPLogin_management);
		sc.step(GLOBAL.steps.pSAPLogin_management, GLOBAL.steps.pSAPEasyAccess_manage);
		sc.step(GLOBAL.steps.pSAPEasyAccess_manage, GLOBAL.steps.Disable_step_timeout);
		sc.step(GLOBAL.steps.Disable_step_timeout, GLOBAL.steps.pVentasYFacturasMas_m);
		sc.step(GLOBAL.steps.pVentasYFacturasMas_m, GLOBAL.steps.pPosDocumVisualiza_ma);
		sc.step(GLOBAL.steps.pPosDocumVisualiza_ma, GLOBAL.steps.pVentasYFacturasMas_m_1);
		sc.step(GLOBAL.steps.pVentasYFacturasMas_m_1, GLOBAL.steps.pSAPEasyAccess_manage_1);
		sc.step(GLOBAL.steps.pSAPEasyAccess_manage_1, GLOBAL.steps.pSalirDelSistema_mana);
		sc.step(GLOBAL.steps.pSalirDelSistema_mana, null);
	}
}, ctx.dataManagers.rootData).setId('524713ab-bf57-48d9-9692-7630c30836fd');

// ----------------------------------------------------------------
//   Step: getFilename
// ----------------------------------------------------------------
GLOBAL.step( {
	getFilename: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', 'aa178c72-fc09-4ab7-874b-02a53d896474');
		// Get filename
		ctx.log("PASO: Get_filename", e.logIconType.Info);
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
		}else if (date.getHours() == 13) { //Si son las 13 horas, se hacen las entradas diarias
			rootData.tipoCarga = "E";
			date = date.addDays(-1);
			dateIni = date.addDays(-1)
		}else if (date.getHours() == 17) { //Si son las 17 horas, se hacen las entradas de fin de semana
			rootData.tipoCarga = "E";
			date = date.addDays(-1);
			dateIni = date.addDays(-2);
			//		}else if (date.getHours() == 19) { //Si son las 18 horas, se hacen las entradas de Viernes
			//			rootData.tipoCarga = "E";
			//			date = date.addDays(-1);
			//			dateIni = date.addDays(-3);
			//			date = dateIni;
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
		if (rootData.tipoCarga == "E") {
			rootData.filename = "C:\\LAYOUT\\LayoutENCO" + rootData.datetime + "_EE.txt";
		}else {
			rootData.filename = "C:\\LAYOUT\\LayoutENCO" + rootData.datetime + "_DD.txt";
		}
		ctx.fso.file.write(rootData.filename, "", e.file.encoding.UTF8);
		sc.endStep(); // connectSQL
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: connectSQL
// ----------------------------------------------------------------
GLOBAL.step( {
	connectSQL: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', '967a89e3-3ec5-4b2c-8adb-a62e27d97aa6');
		// Ejecutar stored procedure
				ctx.log("PASO:SQL 001", e.logIconType.Info);
				var command = 'sqlcmd ' +
										'-S 104.210.223.37,4785 ' +
										'-U "UserSp" ' +
										'-P "Inicio1#" ' +
										'-d "Pagos" -h-1 ' +
										'-s ";" -W ' +
										'-o ' + rootData.filename + ' -t 600 ' +
										'-Q "exec Reportesap @idEstacion= null, @Fechaini=\'' + rootData.datetimeIni + '\', @fechafin =\'' + rootData.datetime + '\'"';
				ctx.log("PASO:SQL 002", e.logIconType.Info);
				ctx.log("Info:" + command, e.logIconType.Data);
				try {
		//			ctx.exec(command, 600000, function (res) { // timeout 30 sec
		//				// do some stuff once you get the response
					  ctx.log("PASO:SQL 003", e.logIconType.Info);
		//				sc.endStep(); // Read_a_text_file
		//				return ;
		//			});
					var obj = ctx.exec(command);
					sc.endStep(); // Read_a_text_file
					return ;
				}catch (ex) {
					ctx.log(ex.message, e.logIconType.Warning);
					sc.endStep(); // end Scenario
					return ;
				}
	}
});

// ----------------------------------------------------------------
//   Step: Read_a_text_file
// ----------------------------------------------------------------
GLOBAL.step( {
	Read_a_text_file: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', '6ad997cd-cbac-4f30-9cb4-922db4fa0426');
		// Reads the content of a text file.
		var file = rootData.filename;
		ctx.log("PASO: Read_file", e.logIconType.Info);
		rootData.lines = ctx.fso.file.read(file, e.file.encoding.UTF8);
		sc.endStep(); // setList
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: setList
// ----------------------------------------------------------------
GLOBAL.step( {
	setList: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', 'ecc75ecb-9a65-4319-812c-5bc923bd6e68');
		// Genera archivo final
		var lines = rootData.lines.split('\n');
		ctx.log("PASO: Set_List", e.logIconType.Info);
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
		ctx.log("DataLast:" + txt, e.logIconType.Info);
		sc.endStep(); // Write_a_text_file
		return ;
	}
});


//// ----------------------------------------------------------------
////   Step: connectSQL
//// ----------------------------------------------------------------
//GLOBAL.step( {
//	connectSQL: function (ev, sc, st) {
//		var rootData = sc.data;
//		ctx.workflow('cargaVentasD', '967a89e3-3ec5-4b2c-8adb-a62e27d97aa6');
//		// Ejecutar stored procedure
//		try {
//			var cn = new ActiveXObject("ADODB.Connection");
//			cn.CommandTimeout = 60000;
//			cn.ConnectionTimeout = 160000;
//			var strConn = "Provider=SQLOLEDB;Server=104.210.223.37,4785;Database=Pagos;UID=UserSp;PWD=Inicio1#;";
//			cn.Open(strConn);
//			var rs = new ActiveXObject("ADODB.Recordset");
//			var SQL = 'exec Reportesap @idEstacion=null, @Fechaini=\'' + rootData.datetime + '\', @fechafin =\'' + rootData.datetime + '\'';

//			rs.Open(SQL, cn);
//			var index = 0;
//			var archivoTXT = "";
//			while (rs.EOF != true) {
//				var txt = "";
//				txt = txt + texto(rs("FECHA DE EMISIÓN DEL DOCUMENTO").value) + "\t";
//				txt = txt + texto(rs("REFERENCIA FACTURA").value) + "\t";
//				txt = txt + texto(rs("CLASE DE DOCUMENTO").value) + "\t";
//				txt = txt + texto(rs("ORGANIZACIÓN DE VENTAS").value) + "\t";
//				txt = txt + texto(rs("CANAL").value) + "\t";
//				txt = txt + texto(rs("SECTOR").value) + "\t";
//				txt = txt + texto(rs("DOCUMENTO REFERENCIA").value) + "\t";
//				txt = txt + texto(rs("OFICINA DE VENTAS").value) + "\t";
//				txt = txt + texto(rs("GRUPO DE VENDEDORES").value) + "\t";
//				txt = txt + texto(rs("MOTIVO DEL PEDIDO").value) + "\t";
//				txt = txt + texto(rs("TEXTO LARGO: ZE01 <CICLO>").value) + "\t";
//				txt = txt + texto(rs("TEXTO LARGO: ZE01 <NUM CRÉDITO>").value) + "\t";
//				txt = txt + texto(rs("TEXTO LARGO: ZE01 <NUM CLIENTE CONSWARE>").value) + "\t";
//				txt = txt + texto(rs("TEXTO LARGO: ZE01 <PLACA>").value) + "\t";
//				txt = txt + texto(rs("TEXTO LARGO: ZE02 <SERIE>").value) + "\t";
//				txt = txt + texto(rs("TEXTO LARGO: ZE02 <FOLIO>").value) + "\t";
//				txt = txt + texto(rs("TEXTO LARGO: ZE02 <UUID>").value) + "\t";
//				txt = txt + texto(rs("TEXTO LARGO: Z010 <UUID RELACIONADOS>").value) + "\t";
//				txt = txt + texto(rs("USO CFDI").value) + "\t";
//				txt = txt + texto(rs("METODO DE PAGO").value) + "\t";
//				txt = txt + texto(rs("SOLICITANTE").value) + "\t";
//				txt = txt + texto(rs("CLIENTE").value) + "\t";
//				txt = txt + texto(rs("NOMBRE_FLOTA").value) + "\t";
//				txt = txt + texto(rs("POSICION").value) + "\t";
//				txt = txt + texto(rs("NÚMERO DE MATERIAL").value) + "\t";
//				txt = txt + texto(rs("codigo_factura").value) + "\t";
//				txt = txt + numero(rs("LITROS_BONOS").value) + "\t";
//				txt = txt + numero(rs("LITROS_EFECTIVO").value) + "\t";
//				txt = txt + numero(rs("CANTIDAD").value) + "\t";
//				txt = txt + texto(rs("UNIDAD DEL PRODUCTO").value) + "\t";
//				txt = txt + texto(rs("REFERENCIA DE MATERIAL DEL CLIENTE").value) + "\t";
//				txt = txt + texto(rs("CENTRO").value) + "\t";
//				txt = txt + texto(rs("CENTRO BENEFICIO").value) + "\t";
//				txt = txt + texto(rs("ALMACÉN").value) + "\t";
//				txt = txt + numero(rs("CLASE DE CONDICIÓN PR00").value) + "\t";
//				txt = txt + numero(rs("DESCUENTO").value) + "\t";
//				txt = txt + numero(rs("CLASE DE CONDICIÓN MWST").value) + "\t";
//				txt = txt + texto(rs("UNIDAD DE PRECIO DE LA CONDICION").value) + "\t";
//				txt = txt + texto(rs("MONEDA").value) + "\t";
//				txt = txt + texto(rs("FECHA BASE").value) + "\t";
//				txt = txt + texto(rs("TÉRMINOS DE PAGO").value) + "\t";
//				txt = txt + texto(rs("DETALLE SUB CONCEPTO").value) + "\t";
//				txt = txt + texto(rs("Tipo").value) + "\t";
//				txt = txt + texto(rs("TIPO").value) + "\t";

//				archivoTXT = archivoTXT + txt + "\n";
//				//			ctx.log(archivoTXT, e.logIconType.Info);

//				rs.MoveNext();
//				index++;
//			}
//			rs.Close();
//			cn.Close();

//			rootData.archivoTXT = archivoTXT;

//			sc.endStep(); // Read_a_text_file
//			return ;
//		}catch (ex) {
//			ctx.log(ex.message, e.logIconType.Error);
//			sc.endStep(); // end Scenario
//			return ;
//		}
//	}
//});

//// ----------------------------------------------------------------
////   Step: Read_a_text_file
//// ----------------------------------------------------------------
//GLOBAL.step( {
//	Read_a_text_file: function (ev, sc, st) {
//		var rootData = sc.data;
//		ctx.workflow('cargaVentasD', '6ad997cd-cbac-4f30-9cb4-922db4fa0426');
//		// Reads the content of a text file.
		
//		sc.endStep(); // setList
//		return ;
//	}
//});

//// ----------------------------------------------------------------
////   Step: setList
//// ----------------------------------------------------------------
//GLOBAL.step( {
//	setList: function (ev, sc, st) {
//		var rootData = sc.data;
//		ctx.workflow('cargaVentasD', 'ecc75ecb-9a65-4319-812c-5bc923bd6e68');
//		// Genera archivo final
		
//		sc.endStep(); // Write_a_text_file
//		return ;
//	}
//});

// ----------------------------------------------------------------
//   Step: Write_a_text_file
// ----------------------------------------------------------------
GLOBAL.step( {
	Write_a_text_file: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', '2129ec15-2d2c-470e-ac47-204eb1217595');
		// Writes a text file.
		ctx.log("PASO: Write_File", e.logIconType.Info);
		var file = rootData.filename;
		var txt = rootData.archivoTXT;
		ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
		sc.endStep(); // Start_SAPLogon760
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Start_SAPLogon760
// ----------------------------------------------------------------
GLOBAL.step( {
	Start_SAPLogon760: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', '74356520-ca90-4278-83d2-f71f26f3815b');
		// Starts an application.
		ctx.log("PASO: Start SAPLogon", e.logIconType.Info);
		SAPLogon760.start();
		sc.endStep(); // pWindowSAPLogon76_man
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: pWindowSAPLogon76_man
// ----------------------------------------------------------------
GLOBAL.step( {
	pWindowSAPLogon76_man: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', '8683d86c-70be-4e19-a920-c6296aa51525');
		// Wait until the Page loads
		ctx.log("PASO: Clic_Ambiente", e.logIconType.Info);
		SAPLogon760.pWindowSAPLogon76.wait(function (ev) {
			SAPLogon760.pWindowSAPLogon76.stARTHAQAS.clickDouble();
			sc.endStep(); // Declare_credential
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: Declare_credential
// ----------------------------------------------------------------
GLOBAL.step( {
	Declare_credential: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', 'b7b1810e-0fea-4396-b0c2-4ab3153e1638');
		// Declares a credential

		ctx.log("PASO: Credential", e.logIconType.Info);
		ctx.cryptography.credential( {
			logonQAS: {
				comment: "logonQAS",
				server: true
			}
		});
		sc.endStep(); // Get_credential
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Get_credential
// ----------------------------------------------------------------
GLOBAL.step( {
	Get_credential: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', 'a6e232f3-9dc8-4eff-b6d1-2d0e33fb3633');
		// Retrieves credential login and password

		ctx.cryptography.credentials.logonQAS.get(function (code, label, credential) {
			if (code == e.error.OK) {
				// get values for credential
				rootData.sapgui.uname = credential.userName.get();
				rootData.sapgui.pass = credential.password.get();
				sc.endStep(); // pSAPLogin_management
				return ;
			}
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPLogin_management
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPLogin_management: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', 'e7ef2efd-b676-429f-8195-361517a8ae6d');
		// Wait until the Page loads
		ctx.log("PASO: SAP Login", e.logIconType.Info);
		SAPLogon760.pSAPLogin.wait(function (ev) {
			SAPLogon760.pSAPLogin.edMandante.set("300");
			SAPLogon760.pSAPLogin.edUsuarios.set(rootData.sapgui.uname);
			SAPLogon760.pSAPLogin.oClvAcc.set(rootData.sapgui.pass);
			SAPLogon760.pSAPLogin.edIdioma.set("ES");
			SAPLogon760.pSAPLogin.keyStroke(e.SAPScripting.key._Enter_);
			sc.endStep(); // pSAPEasyAccess_manage
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPEasyAccess_manage: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', 'd09523ce-2991-45a2-93df-7b596a6cf88d');
		// Wait until the Page loads
		ctx.log("PASO: SAP TCODE", e.logIconType.Info);
		SAPLogon760.pSAPEasyAccess.wait(function (ev) {
			SAPLogon760.pSAPEasyAccess.oGuiOkCodeField.set("YSD_0001");
			SAPLogon760.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Enter_);
			sc.endStep(); // Disable_step_timeout
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: Disable_step_timeout
// ----------------------------------------------------------------
GLOBAL.step( {
	Disable_step_timeout: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', '9edc2357-adfb-4464-a7e6-934d518b4470');
		// Used to disable step timeout.
		ctx.log("PASO: Disable timeout", e.logIconType.Info);
		st.disableTimeout();
		sc.endStep(); // pVentasYFacturasMas_m
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m
// ----------------------------------------------------------------
GLOBAL.step( {
	pVentasYFacturasMas_m: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', '7a672a59-6e3d-45fd-acca-2dd6900596b6');
		st.disableTimeout();//ADD RSG
		// Wait until the Page loads
		ctx.log("PASO: SAP Execute", e.logIconType.Info);
		SAPLogon760.pVentasYFacturasMas.wait(function (ev) {
			SAPLogon760.pVentasYFacturasMas.oVentaPorLínea.set("X");
			if (rootData.tipoCarga == "E") {
				SAPLogon760.pVentasYFacturasMas.oSoloCarga.set("E");
			}else {
				SAPLogon760.pVentasYFacturasMas.oSoloCarga.set("C");
			}
			SAPLogon760.pVentasYFacturasMas.edFichero.set(rootData.filename);
			SAPLogon760.pVentasYFacturasMas.btEjecutar.click();
			sc.endStep(); // pPosDocumVisualiza_ma
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pPosDocumVisualiza_ma
// ----------------------------------------------------------------
GLOBAL.step( {
	pPosDocumVisualiza_ma: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', 'cce09916-f54e-4545-ab05-6947e94a4611');
		// Wait until the Page loads
		ctx.log("PASO: SAP Log mensajes", e.logIconType.Info);
		st.disableTimeout();
		SAPLogon760.pPosDocumVisualiza.wait(function (ev) {
			// Delays execution for some milliseconds.
			// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
			// It allows user interaction with Desktop Agent and other programs during the pause.
			// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react.
			ctx.wait(function (ev) {
				SAPLogon760.pPosDocumVisualiza.btAceptar.click();
				sc.endStep(); // pVentasYFacturasMas_m_1
				return ;
			}, 1000);
		});
	}
});

// ----------------------------------------------------------------
//   Step: pVentasYFacturasMas_m_1
// ----------------------------------------------------------------
GLOBAL.step( {
	pVentasYFacturasMas_m_1: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', 'f884b5a5-04ce-4721-8d39-489e6435a198');
		// Wait until the Page loads
		ctx.log("PASO: SAP Salir", e.logIconType.Info);
		SAPLogon760.pVentasYFacturasMas.wait(function (ev) {
			SAPLogon760.pVentasYFacturasMas.btIFinalizar.click();
			SAPLogon760.pVentasYFacturasMas.keyStroke(e.SAPScripting.key._Shift__F3_);
			sc.endStep(); // pSAPEasyAccess_manage_1
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage_1
// ----------------------------------------------------------------
GLOBAL.step( {
	pSAPEasyAccess_manage_1: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', '3c350777-f295-4654-8ff7-64c8a24f6ac7');
		// Wait until the Page loads
		ctx.log("PASO: SAP Finalizar", e.logIconType.Info);
		SAPLogon760.pSAPEasyAccess.wait(function (ev) {
			SAPLogon760.pSAPEasyAccess.btIFinalizar.click();
			SAPLogon760.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Shift__F3_);
			sc.endStep(); // pSalirDelSistema_mana
			return ;
		});
	}
});

// ----------------------------------------------------------------
//   Step: pSalirDelSistema_mana
// ----------------------------------------------------------------
GLOBAL.step( {
	pSalirDelSistema_mana: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaVentasD', 'fd4adb8f-f45f-434e-aee5-a04e4b2ac127');
		// Wait until the Page loads
		ctx.log("PASO: SAP mensaje salir", e.logIconType.Info);
		SAPLogon760.pSalirDelSistema.wait(function (ev) {
			SAPLogon760.pSalirDelSistema.btSí.click();
			sc.endStep(); // end Scenario
			return ;
		});
	}
});
