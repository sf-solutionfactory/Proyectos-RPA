<?xml version="1.0" encoding="utf-8"?>
<ConteXtorStudio Version="Desktop Studio 2.0.7.54" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" noNamespaceSchemaLocation="XsdStudio.xsd">
	<UpdatePackages />
	<Evolutions>
		<Evolution Version="1.0" Date="08/02/2022"><![CDATA[Project creation]]></Evolution>
		<Evolution Version="..." Date="..."><![CDATA[...]]></Evolution>
	</Evolutions>
	<PROCESSUS>
		<PROCESS Name="GLOBAL" Key="NoKey" Comment="Global Processus" CtxtId="5c3e8e40-73ba-4b1a-b7e0-0e4dad3b858b">
			<_DECLAREVAR>
				<STRUCTUREDON Name="GLOBAL">
					<OBJDON Name="PrjVersion">1.12</OBJDON>
					<OBJDON Name="PrjClient"><![CDATA[ENCO]]></OBJDON>
					<OBJDON Name="PrjName">cargaVentas001</OBJDON>
					<OBJDON Name="PrjDate">08/02/2022</OBJDON>
					<OBJDON Name="PrjLabel"><![CDATA[Carga de ventas Server]]></OBJDON>
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
				<SCRIPT Name="SAP" Comment="SAP GUI Scripting" Folder="CRM Applications" Src="lib\sap\sapscripting.js" />
				<SCRIPT Name="SAP UI5" Src="lib\sapui5\sapui5.js" Folder="Framework" />
				<SCRIPT Name="Entities" Src="entities.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="Declarations" Src="cargaventas001.resources.js" ReadOnly="Y" />
				<SCRIPT Name="Labels" Src="labels.js" />
				<SCRIPT Name="Global" Src="global.js" />
				<SCRIPT Name="cargasql_pg" Src="cargasql_pg.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="cargasql_manual" Src="cargasql_manual.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="cargasql_diaria" Src="cargasql_diaria.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="cargasql_lunes" Src="cargasql_lunes.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="cargasql_entradadiaria" Src="cargasql_entradadiaria.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="cargasap_manual" Src="cargasap_manual.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="cargasap_diaria" Src="cargasap_diaria.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="cargasap_lunes" Src="cargasap_lunes.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="cargasap_entradadiaria" Src="cargasap_entradadiaria.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="cargasap_pg" Src="cargasap_pg.js" IsWorkflowGenerated="Y" />
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
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
			<WORKFLOWS>
				<WORKFLOW Name="cargaSQL_PG" Comment="Público general para 48 horas pasadas" Src="%workflows%\cargasql_pg.xaml" CtxtId="de0b4542-caed-4885-a0e0-bb30ad0e818a" DisplayName="carga_SQL_PG" StepTimeout="600" ScenarioTimeout="12000" GeneratedScenarioName="carga_SQL_PG" />
				<WORKFLOW Name="cargaSQL_Manual" Comment="Carga por parámetros configurables" Src="%workflows%\cargasql_manual.xaml" CtxtId="1a4d8ad1-450e-49b1-aea0-f7377233c85d" DisplayName="carga_SQL_Manual" StepTimeout="600" ScenarioTimeout="12000" GeneratedScenarioName="carga_SQL_Manual" />
				<WORKFLOW Name="cargaSQL_Diaria" Comment="Carga cada 3 horas - Solo a tabla Z" Src="%workflows%\cargasql_diaria.xaml" CtxtId="ea6bf57f-91f9-490a-a1f2-6c9705133ecc" DisplayName="carga_Diaria" StepTimeout="600" ScenarioTimeout="12000" GeneratedScenarioName="carga_Diaria" />
				<WORKFLOW Name="cargaSQL_Lunes" Comment="Carga de entradas de fin de semana" Src="%workflows%\cargasql_lunes.xaml" CtxtId="abb643a7-c0c2-435c-9d53-4fd314515183" DisplayName="carga_Lunes" StepTimeout="600" ScenarioTimeout="12000" GeneratedScenarioName="carga_Lunes" />
				<WORKFLOW Name="cargaSQL_EntradaDiaria" Comment="Carga de entrada de mercancías crédito" Src="%workflows%\cargasql_entradadiaria.xaml" CtxtId="1211ae62-343f-499f-becc-78f859ced3d7" DisplayName="carga_EntradaDiaria" StepTimeout="600" ScenarioTimeout="12000" GeneratedScenarioName="carga_EntradaDiaria" />
				<WORKFLOW Name="cargaSAP_Manual" Src="%workflows%\cargasap_manual.xaml" CtxtId="bf1c73c4-710f-4aee-b105-6e37a74ac704" DisplayName="carga_SAP_Manual" StepTimeout="600" ScenarioTimeout="12000" GeneratedScenarioName="carga_SAP_Manual" />
				<WORKFLOW Name="cargaSAP_Diaria" Src="%workflows%\cargasap_diaria.xaml" CtxtId="319e5962-781d-4355-9796-80cfd5ce652b" DisplayName="carga_SAP_Diaria" StepTimeout="600" ScenarioTimeout="12000" GeneratedScenarioName="carga_SAP_Diaria" />
				<WORKFLOW Name="cargaSAP_Lunes" Src="%workflows%\cargasap_lunes.xaml" CtxtId="7257e4ef-f4d4-4b8c-b13e-b326ee089a6a" DisplayName="carga_SAP_Lunes" StepTimeout="600" ScenarioTimeout="12000" GeneratedScenarioName="carga_SAP_Lunes" />
				<WORKFLOW Name="cargaSAP_EntradaDiaria" Src="%workflows%\cargasap_entradadiaria.xaml" CtxtId="ccb5342f-7efd-4166-9770-e3c685bc102a" DisplayName="carga_SAP_EntradaDiaria" StepTimeout="600" ScenarioTimeout="12000" GeneratedScenarioName="carga_SAP_EntradaDiaria" />
				<WORKFLOW Name="cargaSAP_PG" Src="%workflows%\cargasap_pg.xaml" CtxtId="876a344b-0c1e-4e57-a970-6807d084df32" DisplayName="carga_SAP_PG" StepTimeout="600" ScenarioTimeout="12000" GeneratedScenarioName="carga_SAP_PG" />
			</WORKFLOWS>
		</PROCESS>
		<PROCESS Name="POPUPS" CtxtId="e46d1367-f306-41a9-89e9-80a7fde2cc26" Nature="POPUP">
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
		<APPLI Name="SAPLogon750" CtxtId="95408ecb-e53a-4fff-89db-1b69a4315736" Nature="UIAUTOMATION" TechnoSDK="V3" Sync="0" PendingDelay="0">
			<SCRIPTS />
			<CRITERE>
				<EXE Scan="Full"><![CDATA[SAPLOGON.EXE]]></EXE>
			</CRITERE>
			<_DECLAREVAR>
				<STRUCTUREDON Name="SAPLogon750" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="pWindowSAPLogon75" Comment="Window - SAP Logon 750" CtxtId="a8651eb9-3044-40f6-a092-cb332d3810f3" SubpagesType="Multiple" RefreshMode="Window">
					<CRITERE>
						<Name Scan="start-with"><![CDATA[SAP Logon 7]]></Name>
						<Value Scan="start-with"><![CDATA[SAP Logon 7]]></Value>
					</CRITERE>
					<TRACK_EVENTS>
						<TRACK_EVENT Name="REFRESH(WINDOWOPENED(DESCENDANTS))" />
					</TRACK_EVENTS>
					<OBJETS>
						<OBJET Name="stQAS" CtxtId="25a24fb0-e6c9-4bc3-9f5e-5a8e473f6182" SpecIndex="1">
							<CRITERE>
								<TAG Name="Text" Scope="All" CapturedPos="1.R0R10R0R1R0R0R0R0R0R4R0">
									<ATT Name="Value">
										<VALUE Scan="Part"><![CDATA[QAS]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="stPRD" CtxtId="8925993f-d7e4-4ef8-ba75-81944e735372">
							<CRITERE>
								<TAG Name="Text" Scope="All" CapturedPos="1.R0R10R0R1R0R0R0R0R0R3R0">
									<ATT Name="Name">
										<VALUE Scan="Part"><![CDATA[PRD]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btAccederAlSistema" CtxtId="9c81c054-0ffb-4ae0-8575-bab18aedb8c7">
							<CRITERE>
								<TAG Name="Button" Scope="All" CapturedPos="1.R0R0">
									<ATT Name="AutomationId">
										<VALUE Scan="Full"><![CDATA[1068]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSAPLogin" Comment="GuiMainWindow - SAP" CtxtId="9a330cc0-313c-4613-aea2-0a2e7fc476ab" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[SAP]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="edMandante" CtxtId="88839f4c-a899-4e75-ae09-142003c7cc34" CustomType="GuiTextField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="2.R0R4R1">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-MANDT]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edUsuarios" CtxtId="c7aead83-7141-4cb4-9f68-ac3936ad0beb" CustomType="GuiTextField" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="2.R0R4R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BNAME]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oClvAcc" CtxtId="18de99ea-3401-47fc-93dc-a51bac7684da" CustomType="GuiPasswordField" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiPasswordField" Scope="All" CapturedPos="2.R0R4R5">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BCODE]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edIdioma" CtxtId="96741402-e8c4-4119-8e3a-f750685e5934" CustomType="GuiTextField" SpecIndex="4">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="2.R0R4R7">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-LANGU]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSAPEasyAccess" Comment="GuiMainWindow - SAP Easy Access" CtxtId="b510b556-bd2c-46d7-ab63-6f25b8a41a60" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[SAP Easy Access]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="oGuiOkCodeField" CtxtId="01827a40-22e3-4a34-88ef-1056f0488700" CustomType="GuiOkCodeField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiOkCodeField" Scope="All" CapturedPos="3.R0R1R4">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[okcd]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btIFinalizar" CtxtId="f3356ecc-f891-4821-a7a6-5074912b88a2" CustomType="GuiButton" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="3.R0R1R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[15]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pVentasYFacturasMas" Comment="GuiMainWindow - Ventas y Facturas masiva" CtxtId="be073dff-d2b2-4da4-953e-6e3b9912db35" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[Ventas y Facturas masiva]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="edFichero" CtxtId="b1d2c808-051b-44aa-8970-5a28e1f75e1b" CustomType="GuiCTextField" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="4.R0R4R2">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_PATH]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oSoloCarga" CtxtId="950997a6-92a7-412d-ab89-f62cec72a4ea" CustomType="GuiCTextField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="4.R0R4R4">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_RPA]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oVentaPorLínea" CtxtId="ce32b483-1da1-46ac-8306-d1f18c4516d8" CustomType="GuiCheckBox" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiCheckBox" Scope="All" CapturedPos="4.R0R4R5">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_LINE]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btIFinalizar" CtxtId="2a31e1de-12af-48dc-8190-e9874e4b191d" CustomType="GuiButton" SpecIndex="5">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="4.R0R1R2">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[15]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btEjecutar" CtxtId="d4c7a030-bae2-49e8-adbb-c0b12e7c7cdf" CustomType="GuiButton" SpecIndex="4">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="4.R0R3R1">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[8]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pPosDocumVisualiza" Comment="GuiModalWindow - Pos.docum.: Visualizar mensajes" CtxtId="361e23f7-d53d-453d-b475-2d77d5f35a35" CustomType="GuiModalWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[Pos.docum.: Visualizar mensajes]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="btAceptar" CtxtId="8a09c44f-edee-438e-bf4a-50dfc9164213" CustomType="GuiButton" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="5.R0R0R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[0]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btCancelar" CtxtId="950cb0cd-b0ef-4f37-beb3-c5131d37b01b" CustomType="GuiButton">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="5.R0R0R19">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[12]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oTable" CtxtId="eeda7273-e087-4dff-abac-3ba0da37de8a" CustomType="GuiLabel">
							<CRITERE>
								<TAG Name="GuiLabel" Scope="All" CapturedPos="5.R0R1R0" Occurs="Y">
									<ATT Name="Type">
										<VALUE Scan="Full"><![CDATA[GuiLabel]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSalirDelSistema" Comment="GuiModalWindow - Salir del sistema" CtxtId="b6a80817-63b4-4b5f-a4c8-14324b2ccede" CustomType="GuiModalWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[Salir del sistema]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="btSí" CtxtId="2dca36b2-8ece-417b-aeff-e63a37b21444" CustomType="GuiButton" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="6.R0R1R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[SPOP-OPTION1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btNo" CtxtId="adb0ab76-8aad-4bcb-ad83-61fed4a05849" CustomType="GuiButton">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="6.R0R1R4">
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
	<CONTEXT Id="53b73126-cfb6-486f-853e-86b09d4fcc73" />
</ConteXtorStudio>