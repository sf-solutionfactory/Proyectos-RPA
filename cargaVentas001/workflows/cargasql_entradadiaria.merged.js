
// ----------------------------------------------------------------
//   Test menu for scenario carga_EntradaDiaria 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'carga_SQL_EntradaDiaria', 'Test carga_SQL_EntradaDiaria', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();

			// Initialize your data here.
			GLOBAL.scenarios.carga_EntradaDiaria.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario carga_EntradaDiaria Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: carga_EntradaDiaria
// ----------------------------------------------------------------
GLOBAL.scenario( {
	carga_EntradaDiaria: function (ev, sc) {
		var rootData = sc.data;

		sc.setMode(e.scenario.mode.clearIfRunning);
		sc.setScenarioTimeout(12000000); // Default timeout for global scenario.
		sc.onError(function (sc, st, ex) {
			sc.endScenario();
		}); // Default error handler.
		sc.onTimeout(600000, function (sc, st) {
			sc.endScenario();
		}); // Default timeout handler for each step.
		sc.step(GLOBAL.steps.getFilenameE, GLOBAL.steps.getSettingsE);
		sc.step(GLOBAL.steps.getSettingsE, GLOBAL.steps.connectSQL_E);
		sc.step(GLOBAL.steps.connectSQL_E, GLOBAL.steps.Read_txtE);
		sc.step(GLOBAL.steps.Read_txtE, GLOBAL.steps.setListE);
		sc.step(GLOBAL.steps.setListE, GLOBAL.steps.Write_txtE);
		sc.step(GLOBAL.steps.Write_txtE, null);
	}
}, ctx.dataManagers.rootData).setId('1211ae62-343f-499f-becc-78f859ced3d7');

// ----------------------------------------------------------------
//   Step: getFilenameE
// ----------------------------------------------------------------
GLOBAL.step( {
	getFilenameE: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSQL_EntradaDiaria', '870173cd-f2d1-4382-903d-122e675c512c');
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
		rootData.filename = ruta + "LayoutENCO" + rootData.datetime + "_EE.txt";
		ctx.fso.file.write(rootData.filename, "", e.file.encoding.UTF8);
		
		sc.endStep(); // getSettingsE
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: getSettingsE
// ----------------------------------------------------------------
GLOBAL.step( {
	getSettingsE: function (ev, sc, st) {
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
												sc.endStep(); // connectSQL_E
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
//   Step: connectSQL_E
// ----------------------------------------------------------------
GLOBAL.step( {
	connectSQL_E: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSQL_EntradaDiaria', '2a69dfea-8cd6-40fc-b215-2652eb4fe4a2');
		// Consulta a SQL
		var tipoConsulta = rootData.tipoConsulta;
		if (tipoConsulta == "C" || tipoConsulta == "A") {
			var command = 'sqlcmd ' +
								'-S 104.210.223.37,4785 ' +
								'-U "UserSp" ' +
								'-P "Inicio1#" ' +
								'-d "Pagos" -h-1 ' +
								'-s ";" -W ' +
								'-o ' + rootData.filename + ' ' +
								'-Q "exec Reportesap @idEstacion= null, @Fechaini=\'' + rootData.datetimeIni + '\', @fechafin =\'' + rootData.datetime + '\'"';
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
				var cn = new ActiveXObject("ADODB.Connection");
				cn.CommandTimeout = 60000;
				cn.ConnectionTimeout = 160000;
				var strConn = "Provider=SQLOLEDB;Server=104.210.223.37,4785;Database=Pagos;UID=UserSp;PWD=Inicio1#;";
				cn.Open(strConn);
				var rs = new ActiveXObject("ADODB.Recordset");
				var SQL = 'exec Reportesap @idEstacion=null, @Fechaini=\'' + rootData.datetimeIni + '\', @fechafin =\'' + rootData.datetime + '\'';

				rs.Open(SQL, cn);
				var index = 0;
				var archivoTXT = "";
				while (rs.EOF != true) {
					var txt = "";
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

					rs.MoveNext();
					index++;
				}
				rs.Close();
				cn.Close();



				rootData.archivoTXT = archivoTXT;

				sc.endStep(); // Read_txtE
				return ;
			}catch (ex) {
				ctx.log(ex.message, e.logIconType.Error);
				sc.endStep(); // Read_txtE
				return ;
			}
		}
	}
});

// ----------------------------------------------------------------
//   Step: Read_txtE
// ----------------------------------------------------------------
GLOBAL.step( {
	Read_txtE: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSQL_EntradaDiaria', '1013e5fa-40ed-4e47-b8c4-9bde4fd24f1f');
		// Leer archivo generado
		if (rootData.tipoConsulta == "S") {

		}else {
			var file = rootData.filename;
			rootData.lines = ctx.fso.file.read(file, e.file.encoding.UTF8);
		}
		sc.endStep(); // setListE
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: setListE
// ----------------------------------------------------------------
GLOBAL.step( {
	setListE: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSQL_EntradaDiaria', '333f1dfd-ce4e-49a4-993a-c22342394a59');
		// Genera aarchivo TXT
		if (rootData.tipoConsulta == "S") {

		}else {
			var lines = rootData.lines.split('\n');
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
		}
		sc.endStep(); // Write_txtE
		return ;
	}
});

// ----------------------------------------------------------------
//   Step: Write_txtE
// ----------------------------------------------------------------
GLOBAL.step( {
	Write_txtE: function (ev, sc, st) {
		var rootData = sc.data;
		ctx.workflow('cargaSQL_EntradaDiaria', '5a5dd0b7-620c-4cb7-a95d-0b60e877a6f4');
		// Writes a text file.
		var file = rootData.filename;
		var txt = rootData.archivoTXT;
		ctx.fso.file.write(file, txt, e.file.encoding.UTF8);
		sc.endStep(); // end Scenario
		return ;
	}
});

