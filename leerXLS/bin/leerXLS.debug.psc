<?xml version="1.0" encoding="utf-8"?>
<ConteXtorStudio Version="Desktop Studio 2.0.7.54" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" noNamespaceSchemaLocation="XsdStudio.xsd">
	<UpdatePackages />
	<Evolutions>
		<Evolution Version="1.0" Date="01/06/2021"><![CDATA[Project creation]]></Evolution>
		<Evolution Version="..." Date="..."><![CDATA[...]]></Evolution>
	</Evolutions>
	<PROCESSUS>
		<PROCESS Name="GLOBAL" Key="NoKey" Comment="Global Processus" CtxtId="4930ab97-4ac7-4a41-8644-8adf51962c54">
			<_DECLAREVAR>
				<STRUCTUREDON Name="GLOBAL">
					<OBJDON Name="PrjVersion">1.9</OBJDON>
					<OBJDON Name="PrjClient"><![CDATA[ENCO]]></OBJDON>
					<OBJDON Name="PrjName">leerXLS</OBJDON>
					<OBJDON Name="PrjDate">01/06/2021</OBJDON>
					<OBJDON Name="PrjLabel"><![CDATA[Leer XLS]]></OBJDON>
					<OBJDON Name="PrjComment"><![CDATA[]]></OBJDON>
					<OBJDON Name="LicenceURL" />
					<STRUCTUREDON Name="Xc_MessBoxHtml">
						<OBJDON Name="Style">style="font-size:12pt;font-family:'Arial'"</OBJDON>
						<OBJDON Name="ErrColor">white</OBJDON>
						<OBJDON Name="InfoColor">white</OBJDON>
						<OBJDON Name="ChoiceColor">white</OBJDON>
						<OBJDON Name="WarningColor">white</OBJDON>
						<OBJDON Name="ErrIcon">Critical.gif</OBJDON>
						<OBJDON Name="InfoIcon">Info.gif</OBJDON>
						<OBJDON Name="ChoiceIcon">Pencil.gif</OBJDON>
						<OBJDON Name="WarningIcon">Warning.gif</OBJDON>
						<OBJDON Name="StyleButton">style="font-size:12px;font-family:'Arial';width:80px"</OBJDON>
						<OBJDON Name="StyleText">style="font-size=11pt;font-family='Arial'"</OBJDON>
						<OBJDON Name="IconSize">32</OBJDON>
					</STRUCTUREDON>
				</STRUCTUREDON>
			</_DECLAREVAR>
			<SCRIPTS>
				<SCRIPT Name="Constants" Src="lib\common\ctx.enum.js" Folder="Framework" />
				<SCRIPT Name="Ctx Core" Src="lib\ctx\ctx.core.js" Folder="Framework" />
				<SCRIPT Name="Ctx XML" Src="lib\ctx\ctx.xml.js" Folder="Framework" />
				<SCRIPT Name="Ctx Scenario" Src="lib\ctx\ctx.scenario.js" Folder="Framework" />
				<SCRIPT Name="Ctx Request" Src="lib\ctx\ctx.request.js" Folder="Framework" />
				<SCRIPT Name="Ctx Language" Src="lib\ctx\ctx.language.js" Folder="Framework" />
				<SCRIPT Name="Ctx Item" Src="lib\ctx\ctx.item.js" Folder="Framework" />
				<SCRIPT Name="Ctx Page" Src="lib\ctx\ctx.page.js" Folder="Framework" />
				<SCRIPT Name="Ctx Application" Src="lib\ctx\ctx.application.js" Folder="Framework" />
				<SCRIPT Name="Ctx Systray" Src="lib\ctx\ctx.systray.js" Folder="Framework" />
				<SCRIPT Name="Ctx Popup" Src="lib\ctx\ctx.popup.js" Folder="Framework" />
				<SCRIPT Name="Ctx Popup Bootstrap" Src="lib\ctx\ctx.popup.bootbox.js" Folder="Framework" />
				<SCRIPT Name="FSO library" Src="lib\utils\fso.js" Folder="Framework" />
				<SCRIPT Name="WMI library" Src="lib\utils\wmi.js" Folder="Framework" />
				<SCRIPT Name="WScript library" Src="lib\utils\wscript.js" Folder="Framework" />
				<SCRIPT Name="Ctx Diagnostic" Src="lib\ctx\ctx.diagnostic.js" Folder="Framework" />
				<SCRIPT Name="Ctx Galaxy" Src="lib\galaxy\galaxy.m2m.js" Folder="Framework" />
				<SCRIPT Name="Excel" Comment="Microsoft Excel Integration" Folder="Microsoft Office" Src="lib\office\excel.js" />
				<SCRIPT Name="SAP" Comment="SAP GUI Scripting" Folder="CRM Applications" Src="lib\sap\sapscripting.js" />
				<SCRIPT Name="SAP UI5" Src="lib\sapui5\sapui5.js" Folder="Framework" />
				<SCRIPT Name="Entities" Src="entities.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="Declarations" Src="leerxls.resources.js" ReadOnly="Y" />
				<SCRIPT Name="Labels" Src="labels.js" />
				<SCRIPT Name="Global" Src="global.js" />
				<SCRIPT Name="cargaventas" Src="cargaventas.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="cargaVentasSQL" Src="cargaventassql.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="cargaVentas48hrs" Src="cargaventas48hrs.js" IsWorkflowGenerated="Y" />
			</SCRIPTS>
			<RESOURCES>
				<RESOURCE Name="popup" Src="%sdk%\templates\resources\popup\" Dest="popup" />
				<RESOURCE Name="agent16px" Src="%sdk%\templates\resources\bmp\agent.png" Dest="bmp" />
				<RESOURCE Name="accept16px" Src="%sdk%\templates\resources\bmp\accept.png" Dest="bmp" />
				<RESOURCE Name="cancel16px" Src="%sdk%\templates\resources\bmp\cancel.png" Dest="bmp" />
				<RESOURCE Name="help16px" Src="%sdk%\templates\resources\bmp\help.png" Dest="bmp" />
				<RESOURCE Name="information16px" Src="%sdk%\templates\resources\bmp\information.png" Dest="bmp" />
				<RESOURCE Name="repeat16px" Src="%sdk%\templates\resources\bmp\repeat.png" Dest="bmp" />
				<RESOURCE Name="stop16px" Src="%sdk%\templates\resources\bmp\stop.png" Dest="bmp" />
				<RESOURCE Name="warning16px" Src="%sdk%\templates\resources\bmp\warning.png" Dest="bmp" />
				<RESOURCE Name="record16px" Src="%sdk%\templates\resources\bmp\record.png" Dest="bmp" />
				<RESOURCE Name="agent32px" Src="%sdk%\templates\resources\bmp32\agent.png" Dest="bmp32" />
				<RESOURCE Name="accept32px" Src="%sdk%\templates\resources\bmp32\accept.png" Dest="bmp32" />
				<RESOURCE Name="cancel32px" Src="%sdk%\templates\resources\bmp32\cancel.png" Dest="bmp32" />
				<RESOURCE Name="help32px" Src="%sdk%\templates\resources\bmp32\help.png" Dest="bmp32" />
				<RESOURCE Name="information32px" Src="%sdk%\templates\resources\bmp32\information.png" Dest="bmp32" />
				<RESOURCE Name="user32px" Src="%sdk%\templates\resources\bmp32\user.png" Dest="bmp32" />
				<RESOURCE Name="warning32px" Src="%sdk%\templates\resources\bmp32\warning.png" Dest="bmp32" />
				<RESOURCE Name="agent64px" Src="%sdk%\templates\resources\bmp64\agent.png" Dest="bmp64" />
				<RESOURCE Name="hello64px" Src="%sdk%\templates\resources\bmp64\hello.png" Dest="bmp64" />
				<RESOURCE Name="hello128px" Src="%sdk%\templates\resources\bmp64\hello128.png" Dest="bmp64" />
				<RESOURCE Name="gif" Src="%sdk%\templates\resources\gif\" Dest="gif" />
			</RESOURCES>
			<_ECRANS />
			<WORKFLOWS>
				<WORKFLOW Name="cargaVentas" Src="%workflows%\cargaventas.xaml" CtxtId="37dded21-4ac8-4f09-bc09-a4d0a00b8e05" DisplayName="cargaVentas" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="cargaVentas" />
				<WORKFLOW Name="cargaVentasSQL" Src="%workflows%\cargaVentasSQL.xaml" CtxtId="1abe1288-dd5b-4d43-a52d-6e201c1025fd" DisplayName="cargaVentasSQL" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="cargaVentasSQL" />
				<WORKFLOW Name="cargaVentas48hrs" Comment="Carga ventas contado y público general" Src="%workflows%\cargaVentas48hrs.xaml" CtxtId="96359b69-c55a-4b31-857b-b5aa77bf939d" DisplayName="cargaVentas48hrs" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="cargaVentas48hrs" />
			</WORKFLOWS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</PROCESS>
		<PROCESS Name="POPUPS" CtxtId="74919813-0cd8-4d4f-ac83-1afde6db4d66" Nature="POPUP">
			<SCRIPTS />
			<SCENARII>
				<Steps />
			</SCENARII>
			<ACTIONS />
			<EVENTS />
			<_DECLAREVAR>
				<STRUCTUREDON Name="POPUPS" />
			</_DECLAREVAR>
			<_ECRANS />
		</PROCESS>
	</PROCESSUS>
	<APPLICATIONS>
		<APPLI Name="MicrosoftExcel" CtxtId="807d9ab1-cd32-47a8-a434-1108498eaef0" Nature="UIAUTOMATION" TechnoSDK="V3" Sync="0" PendingDelay="0">
			<SCRIPTS />
			<CRITERE>
				<EXE Scan="Full"><![CDATA[EXCEL.EXE]]></EXE>
			</CRITERE>
			<_DECLAREVAR>
				<STRUCTUREDON Name="MicrosoftExcel" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="pWindowMicrosoftEx" Comment="Window - Microsoft Excel - ReporteENCO.xlsm" CtxtId="4db17b23-dae3-4537-9abe-0ff5246b8aa4" SubpagesType="Multiple" RefreshMode="Window">
					<CRITERE>
						<EXE Scan="Full"><![CDATA[EXCEL.EXE]]></EXE>
					</CRITERE>
					<TRACK_EVENTS>
						<TRACK_EVENT Name="REFRESH(WINDOWOPENED(DESCENDANTS))" />
					</TRACK_EVENTS>
					<OBJETS>
						<OBJET Name="btMacros" CtxtId="6e6374a1-f6dc-461d-b4da-0cf740a43d21" SpecIndex="1">
							<CRITERE>
								<TAG Name="Button" Scope="All" CapturedPos="1.R0R1R0R0R0R0R0R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[Macros]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
					<_ECRANS>
						<PAGE Name="pWindowMacro" Comment="Window - Macro" CtxtId="8a7e7073-c668-4eb2-9a92-cb9a98023a73" SubpagesType="Multiple" RefreshMode="Window">
							<CRITERE>
								<Value Scan="Full"><![CDATA[Macro]]></Value>
							</CRITERE>
							<TRACK_EVENTS>
								<TRACK_EVENT Name="REFRESH(WINDOWOPENED(DESCENDANTS))" />
							</TRACK_EVENTS>
							<OBJETS>
								<OBJET Name="oCrearObjetoTabla" CtxtId="82052f14-f520-4f66-bdac-7e540a2b6f7a">
									<CRITERE>
										<TAG Name="Pane" Scope="All" CapturedPos="4.R0R0R0">
											<ATT Name="AutomationId">
												<VALUE Scan="Full"><![CDATA[17]]></VALUE>
											</ATT>
										</TAG>
									</CRITERE>
								</OBJET>
								<OBJET Name="oReporteDetallado" CtxtId="5b0b865d-c46d-4cf7-85fd-de1f7d9909a2" SpecIndex="1">
									<CRITERE>
										<TAG Name="ListItem" Scope="All" CapturedPos="4.R0R0R5R6">
											<ATT Name="Name">
												<VALUE Scan="Full"><![CDATA[ReporteDetallado]]></VALUE>
											</ATT>
										</TAG>
									</CRITERE>
								</OBJET>
								<OBJET Name="oReporteSap" CtxtId="2e9eeea2-4012-49c3-bba3-065bccbdc4b9">
									<CRITERE>
										<TAG Name="ListItem" Scope="All" CapturedPos="17.R0R0R5R10">
											<ATT Name="Name">
												<VALUE Scan="Full"><![CDATA[ReporteSap]]></VALUE>
											</ATT>
										</TAG>
									</CRITERE>
								</OBJET>
							</OBJETS>
						</PAGE>
						<PAGE Name="pWindowReporteador" Comment="Window - Reporteador" CtxtId="f95bebb7-19c0-4109-9414-79347f7e6ff4" SubpagesType="Multiple" RefreshMode="Window">
							<CRITERE>
								<Name Scan="Full"><![CDATA[Reporteador]]></Name>
								<Value Scan="Full"><![CDATA[Reporteador]]></Value>
							</CRITERE>
							<TRACK_EVENTS>
								<TRACK_EVENT Name="REFRESH(WINDOWOPENED(DESCENDANTS))" />
							</TRACK_EVENTS>
							<OBJETS>
								<OBJET Name="edFechaF" CtxtId="8210a0eb-f724-4b82-bba4-c85f4d4d6cd2">
									<CRITERE>
										<TAG Name="Edit" Scope="All" CapturedPos="5.R0R0R0R0R4">
											<ATT Name="Name">
												<VALUE Scan="Full"><![CDATA[Fecha Final]]></VALUE>
											</ATT>
											<ATT Name="Range">
												<VALUE Scan="Full"><![CDATA[R0R0R4]]></VALUE>
											</ATT>
										</TAG>
									</CRITERE>
								</OBJET>
								<OBJET Name="edFechaI" CtxtId="ee3ed76a-79b0-4303-b9fa-7ce1ec5410dc">
									<CRITERE>
										<TAG Name="Edit" Scope="All" CapturedPos="5.R0R0R0R0R5">
											<ATT Name="Range">
												<VALUE Scan="Full"><![CDATA[R0R0R5]]></VALUE>
											</ATT>
											<ATT Name="Name">
												<VALUE Scan="Full"><![CDATA[]]></VALUE>
											</ATT>
										</TAG>
									</CRITERE>
								</OBJET>
								<OBJET Name="btAceptar" CtxtId="42b513b0-1d45-4ffc-98f0-211c99461036">
									<CRITERE>
										<TAG Name="Button" Scope="All" CapturedPos="5.R0R0R0R2">
											<ATT Name="Name">
												<VALUE Scan="Full"><![CDATA[Aceptar]]></VALUE>
											</ATT>
										</TAG>
									</CRITERE>
								</OBJET>
								<OBJET Name="btCancelar" CtxtId="cce01e4d-8b61-4aa3-903e-f78c5bbd2deb">
									<CRITERE>
										<TAG Name="Button" Scope="All" CapturedPos="5.R0R0R0R3">
											<ATT Name="Name">
												<VALUE Scan="Full"><![CDATA[Cancelar]]></VALUE>
											</ATT>
										</TAG>
									</CRITERE>
								</OBJET>
							</OBJETS>
						</PAGE>
						<PAGE Name="pWindowMessage" Comment="Window - Microsoft Excel" CtxtId="b75ab917-3f9a-47bf-b2ce-4d20eef1d201" SubpagesType="Multiple" RefreshMode="Window">
							<CRITERE>
								<Value Scan="Full"><![CDATA[Microsoft Excel]]></Value>
								<Name Scan="Full"><![CDATA[Microsoft Excel]]></Name>
								<ClassName Scan="Full"><![CDATA[#32770]]></ClassName>
								<Deepness Scan="LTOE"><![CDATA[2]]></Deepness>
							</CRITERE>
							<TRACK_EVENTS>
								<TRACK_EVENT Name="REFRESH(WINDOWOPENED(DESCENDANTS))" />
							</TRACK_EVENTS>
							<OBJETS>
								<OBJET Name="btAceptar" CtxtId="6ab4b699-9ba6-495d-9965-6f3d9157cb67" SpecIndex="1">
									<CRITERE>
										<TAG Name="Button" Scope="All" CapturedPos="7.R0R0R0R0">
											<ATT Name="AutomationId">
												<VALUE Scan="Full"><![CDATA[2]]></VALUE>
											</ATT>
											<ATT Name="Name">
												<VALUE Scan="Full"><![CDATA[Aceptar]]></VALUE>
											</ATT>
										</TAG>
									</CRITERE>
								</OBJET>
							</OBJETS>
						</PAGE>
					</_ECRANS>
				</PAGE>
			</_ECRANS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</APPLI>
		<APPLI Name="SAPLogon760" CtxtId="168532f4-ee5a-41a2-8dee-91cda9289e5f" Nature="UIAUTOMATION" TechnoSDK="V3" Sync="0" PendingDelay="0">
			<SCRIPTS />
			<CRITERE>
				<EXE Scan="Full"><![CDATA[SAPLOGON.EXE]]></EXE>
			</CRITERE>
			<_DECLAREVAR>
				<STRUCTUREDON Name="SAPLogon760" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="pWindowSAPLogon76" Comment="Window - SAP Logon 760" CtxtId="23d6384e-7aeb-4f65-bb33-c2e335eb25f3" SubpagesType="Multiple" RefreshMode="Window">
					<CRITERE>
						<EXE Scan="Full"><![CDATA[SAPLOGON.EXE]]></EXE>
						<Value Scan="start-with"><![CDATA[SAP Logon 7]]></Value>
					</CRITERE>
					<TRACK_EVENTS>
						<TRACK_EVENT Name="REFRESH(WINDOWOPENED(DESCENDANTS))" />
					</TRACK_EVENTS>
					<OBJETS>
						<OBJET Name="btAccederAlSistema" CtxtId="95ab9e70-284a-408a-b10b-1ea44c300095" SpecIndex="2">
							<CRITERE>
								<TAG Name="Button" Scope="All" CapturedPos="9.R0R0">
									<ATT Name="AutomationId">
										<VALUE Scan="Full"><![CDATA[1068]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="stARTHAQAS" CtxtId="5e5d693b-32ce-40eb-bb33-aa735669512c" SpecIndex="1">
							<CRITERE>
								<TAG Name="Text" Scope="All" CapturedPos="11.R0R10R0R1R0R0R0R0R0R3R0">
									<ATT Name="Name">
										<VALUE Scan="end-with"><![CDATA[QAS]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSAPLogin" Comment="GuiMainWindow - SAP" CtxtId="04a8eca8-5689-4d83-8c78-b32137de6e41" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[SAP]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="edMandante" CtxtId="46d0a814-33c6-4835-8bf2-7cebe6fc77c7" CustomType="GuiTextField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="12.R0R4R1">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-MANDT]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edUsuarios" CtxtId="f2674001-d333-474b-89c4-549acaabd4a5" CustomType="GuiTextField" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="12.R0R4R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BNAME]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oClvAcc" CtxtId="6d15db1c-2bd6-482e-b98a-08eaa3bfd0a6" CustomType="GuiPasswordField" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiPasswordField" Scope="All" CapturedPos="12.R0R4R5">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BCODE]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edIdioma" CtxtId="786d0016-aab6-4f68-aac7-3aa748288f65" CustomType="GuiTextField" SpecIndex="4">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="12.R0R4R7">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-LANGU]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSAPEasyAccess" Comment="GuiMainWindow - SAP Easy Access" CtxtId="f07459ee-dbb6-40ea-a16b-08dae3f36002" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[SAP Easy Access]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="oGuiOkCodeField" CtxtId="ab51b75c-e618-47a7-8d26-5b7844064237" CustomType="GuiOkCodeField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiOkCodeField" Scope="All" CapturedPos="13.R0R1R4">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[okcd]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btIFinalizar" CtxtId="9be32afd-bc16-4964-a0bf-ef88e1756848" CustomType="GuiButton" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="13.R0R1R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[15]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pVentasYFacturasMas" Comment="GuiMainWindow - Ventas y Facturas masiva" CtxtId="42158740-79f2-4212-9b57-581f6f8d9ff2" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[Ventas y Facturas masiva]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="edFichero" CtxtId="ae4e8a90-96b6-4c5a-b59e-db23d7563174" CustomType="GuiCTextField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="14.R0R4R2">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_PATH]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btEjecutar" CtxtId="037ecfcc-0a80-4b64-a96f-f0d3d77da10c" CustomType="GuiButton" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="14.R0R3R1">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[8]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btIFinalizar" CtxtId="6839270d-0bb0-4211-8c51-67a06f66357d" CustomType="GuiButton" SpecIndex="4">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="14.R0R1R2">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[15]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oVentaPorLínea" CtxtId="a318e72e-53f7-4cd5-90d7-4fe9236e9cd4" CustomType="GuiCheckBox" SpecIndex="5">
							<CRITERE>
								<TAG Name="GuiCheckBox" Scope="All" CapturedPos="19.R0R4R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_LINE]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oSoloCarga" CtxtId="f6a024fe-a042-4f23-8b4a-8ad0bef46d41" CustomType="GuiCheckBox">
							<CRITERE>
								<TAG Name="GuiCheckBox" Scope="All" CapturedPos="21.R0R4R4">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_RPA]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pPosDocumVisualiza" Comment="GuiModalWindow - Pos.docum.: Visualizar mensajes" CtxtId="940c9ba5-e89d-49e8-b375-f09f4808a79e" CustomType="GuiModalWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[Pos.docum.: Visualizar mensajes]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="oTabla" CtxtId="cb23e12d-e811-4419-9d7f-bb5a5124323c" CustomType="GuiLabel">
							<CRITERE>
								<TAG Name="GuiLabel" Scope="All" CapturedPos="15.R0R1R0" Occurs="Y">
									<ATT Name="Type">
										<VALUE Scan="Full"><![CDATA[GuiLabel]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btAceptar" CtxtId="aa7e7438-87d5-4ec2-bd8c-4943d1effa65" CustomType="GuiButton" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="15.R0R0R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[0]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btCancelar" CtxtId="24b7e4ed-c6f8-4c57-b462-b02a3618995a" CustomType="GuiButton">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="15.R0R0R19">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[12]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSalirDelSistema" Comment="GuiModalWindow - Salir del sistema" CtxtId="c162d66d-3c21-44e4-a15a-9bc21c40663c" CustomType="GuiModalWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[Salir del sistema]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="btSí" CtxtId="91f8be19-44f7-4335-ab60-8def53a6b056" CustomType="GuiButton" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="16.R0R1R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[SPOP-OPTION1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btNo" CtxtId="4b3fe131-9fc9-4bf3-b9ec-31399a3d881c" CustomType="GuiButton">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="16.R0R1R4">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[SPOP-OPTION2]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
			</_ECRANS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</APPLI>
	</APPLICATIONS>
	<CONTEXT Id="7b08d380-d64a-48a4-9cef-2e7ad04c50a7" />
</ConteXtorStudio>