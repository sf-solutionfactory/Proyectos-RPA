
// ----------------------------------------------------------------
//   Test menu for scenario carga_SQL_Manual 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'carga_SQL_Manual', 'Test carga_SQL_Manual', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();

			// Initialize your data here.
			GLOBAL.scenarios.carga_SQL_Manual.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario carga_SQL_Manual Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: carga_SQL_Manual
// ----------------------------------------------------------------
GLOBAL.scenario( {
	carga_SQL_Manual: function (ev, sc) {
		var rootData = sc.data;

		sc.setMode(e.scenario.mode.clearIfRunning);
		sc.setScenarioTimeout(12000000); // Default timeout for global scenario.
		sc.onError(function (sc, st, ex) {
			sc.endScenario();
		}); // Default error handler.
		sc.onTimeout(600000, function (sc, st) {
			sc.endScenario();
		}); // Default timeout handler for each step.
		sc.step(GLOBAL.steps.getFilenameMM, GLOBAL.steps.getSettingsMM);
		sc.step(GLOBAL.steps.getSettingsMM, GLOBAL.steps.connectSQL_MM);
		sc.step(GLOBAL.steps.connectSQL_MM, GLOBAL.steps.Read_txtMM);
		sc.step(GLOBAL.steps.Read_txtMM, GLOBAL.steps.setListMM);
		sc.step(GLOBAL.steps.setListMM, GLOBAL.steps.Write_txtMM);
		sc.step(GLOBAL.steps.Write_txtMM, null);
	}
}, ctx.dataManagers.rootData).setId('1a4d8ad1-450e-49b1-aea0-f7377233c85d');

// ----------------------------------------------------------------
//   Step: getFilenameMM
// ----------------------------------------------------------------
GLOBAL.step( {
	getFilenameMM: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSQL_Manual', 'f2324cf4-681d-45d6-8926-a23a32132a97');
		// Describe functionality to be implemented in JavaScript later in the project.
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
		var ruta = getRuta("C:\\LAYOUT\\in\\");
		rootData.filename = ruta + "LayoutENCO" + rootData.datetime + "_MM.txt";
		ctx.fso.file.write(rootData.filename, "", e.file.encoding.UTF8);

		sc.endStep(); // getSettingsMM
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: getSettingsMM
// ----------------------------------------------------------------
GLOBAL.step( {
	getSettingsMM: function (ev, sc, st) {
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
												sc.endStep(); // connectSQL_MM
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
//   Step: connectSQL_MM
// ----------------------------------------------------------------
GLOBAL.step( {
	connectSQL_MM: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSQL_Manual', '00f184ce-06b7-4bca-849c-972f41d85290');
		// Consulta a SQL

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
						sc.endStep(); // Read_txtMM
						return ;
					});
				}else if (tipoConsulta == "A") {
					var obj = ctx.exec(command);
				}
				sc.endStep(); // Read_txtMM
				return ;
			}catch (ex) {
				ctx.log(ex.message, e.logIconType.Error);
				sc.endStep(); // Read_txtMM
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

				sc.endStep(); // Read_txtL
				return ;
			}catch (ex) {
				ctx.log(ex.message, e.logIconType.Error);
				sc.endStep(); // Read_txtMM
				return ;
			}
		}
	}
});

// ----------------------------------------------------------------
//   Step: Read_txtMM
// ----------------------------------------------------------------
GLOBAL.step( {
	Read_txtMM: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSQL_Manual', 'd652eec8-0e35-46d7-9452-2c3c0e8a10d3');
		// Leer archivo generado
				if (rootData.tipoConsulta == "S") {

		}else {
			var file = rootData.filename;
			rootData.lines = ctx.fso.file.read(file, e.file.encoding.UTF8);
		}
		sc.endStep(); // setListMM
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: setListMM
// ----------------------------------------------------------------
GLOBAL.step( {
	setListMM: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSQL_Manual', '38176da5-42f3-426f-90cd-c83d0f43caad');
		// Genera aarchivo TXT
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
		sc.endStep(); // Write_txtMM
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Write_txtMM
// ----------------------------------------------------------------
GLOBAL.step( {
	Write_txtMM: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSQL_Manual', '5002060b-64c9-4ba9-a26d-84121613fedf');
		// Writes a text file.
		var file = rootData.filename;
		var txt = rootData.archivoTXT;
		ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
		sc.endStep(); // end Scenario
		return ;
	}
});
