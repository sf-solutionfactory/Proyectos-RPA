<?xml version="1.0" encoding="utf-8"?>
<ConteXtorStudio Version="Desktop Studio 2.0.7.54" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" noNamespaceSchemaLocation="XsdStudio.xsd">
	<UpdatePackages />
	<Evolutions>
		<Evolution Version="1.0" Date="11/10/2021"><![CDATA[Project creation]]></Evolution>
		<Evolution Version="..." Date="..."><![CDATA[...]]></Evolution>
	</Evolutions>
	<PROCESSUS>
		<PROCESS Name="GLOBAL" Key="NoKey" Comment="Global Processus" CtxtId="978a5bc5-d626-4f38-9291-82fb52fd8170">
			<_DECLAREVAR>
				<STRUCTUREDON Name="GLOBAL">
					<OBJDON Name="PrjVersion">1.4</OBJDON>
					<OBJDON Name="PrjClient"><![CDATA[ENCO]]></OBJDON>
					<OBJDON Name="PrjName">cargaVentas</OBJDON>
					<OBJDON Name="PrjDate">11/10/2021</OBJDON>
					<OBJDON Name="PrjLabel"><![CDATA[Robot de carga de ventas]]></OBJDON>
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
				<SCRIPT Name="Constants" Src="cargaVentas.min.js" Folder="Framework" />
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
				<WORKFLOW Name="cargaVentasD" Comment="Carga de ventas diario" Src="%workflows%\cargaVentasD.xaml" CtxtId="524713ab-bf57-48d9-9692-7630c30836fd" DisplayName="cargaVentasD" StepTimeout="600" ScenarioTimeout="43200" GeneratedScenarioName="cargaVentasD" />
				<WORKFLOW Name="cargaVentas48" Comment="Carga ventas diario" Src="%workflows%\cargaVentas48.xaml" CtxtId="4b269498-5e9a-4d00-9b23-62882fde8899" DisplayName="cargaVentas48" StepTimeout="600" ScenarioTimeout="43200" GeneratedScenarioName="cargaVentas48" />
				<WORKFLOW Name="cargaVentasM" Comment="Carga Ventas Manualmente" Src="%workflows%\cargaVentasM.xaml" CtxtId="eced6a0b-ed93-431f-9bba-59805119fffe" DisplayName="cargaVentasM" StepTimeout="600" ScenarioTimeout="43200" GeneratedScenarioName="cargaVentasM" />
			</WORKFLOWS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</PROCESS>
		<PROCESS Name="POPUPS" CtxtId="2582b3db-355c-46dc-a835-7d272d899cb6" Nature="POPUP">
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
		<APPLI Name="SAPLogon760" CtxtId="387e9562-217d-4db6-ac30-4ddf8aa2c424" Nature="UIAUTOMATION" TechnoSDK="V3" Sync="0" PendingDelay="0">
			<SCRIPTS />
			<CRITERE>
				<EXE Scan="Full"><![CDATA[SAPLOGON.EXE]]></EXE>
			</CRITERE>
			<_DECLAREVAR>
				<STRUCTUREDON Name="SAPLogon760" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="pWindowSAPLogon76" Comment="Window - SAP Logon 760" CtxtId="efe79d62-f11c-4acb-99df-7d348e1d0f05" SubpagesType="Multiple" RefreshMode="Window">
					<CRITERE>
						<Name Scan="start-with"><![CDATA[SAP Logon 7]]></Name>
						<EXE Scan="Full"><![CDATA[SAPLOGON.EXE]]></EXE>
					</CRITERE>
					<TRACK_EVENTS>
						<TRACK_EVENT Name="REFRESH(WINDOWOPENED(DESCENDANTS))" />
					</TRACK_EVENTS>
					<OBJETS>
						<OBJET Name="stARTHAQAS" CtxtId="ad504763-c0b9-4f3f-8935-08d5edab0fdb" SpecIndex="1">
							<CRITERE>
								<TAG Name="Text" Scope="All" CapturedPos="23.R0R10R0R1R0R0R0R0R0R3R0">
									<ATT Name="Name">
										<VALUE Scan="end-with"><![CDATA[QAS]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btAccederAlSistema" CtxtId="022bdfc1-dd24-4913-a302-6026a8d9f213">
							<CRITERE>
								<TAG Name="Button" Scope="All" CapturedPos="23.R0R0">
									<ATT Name="AutomationId">
										<VALUE Scan="Full"><![CDATA[1068]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSAPLogin" Comment="GuiMainWindow - SAP" CtxtId="23ad662b-fccf-4f56-aaf4-a7c2e67811d5" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[SAP]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="edMandante" CtxtId="50bae326-61a9-4d75-9d19-a121139b3f87" CustomType="GuiTextField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="24.R0R4R1">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-MANDT]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edUsuarios" CtxtId="fc800088-4511-4534-9ee6-fa94afd47f78" CustomType="GuiTextField" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="24.R0R4R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BNAME]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oClvAcc" CtxtId="f1521899-bfc0-41af-8bb9-959ac570b36f" CustomType="GuiPasswordField" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiPasswordField" Scope="All" CapturedPos="24.R0R4R5">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BCODE]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edIdioma" CtxtId="0adbc56d-9c78-4a2a-b4af-36ac7e6378d2" CustomType="GuiTextField" SpecIndex="4">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="24.R0R4R7">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-LANGU]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSAPEasyAccess" Comment="GuiMainWindow - SAP Easy Access" CtxtId="1e320d14-d570-426c-9868-c6c41a4702a0" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[SAP Easy Access]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="oGuiOkCodeField" CtxtId="e0d2787b-e91c-4f99-b676-fc292dd8dcea" CustomType="GuiOkCodeField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiOkCodeField" Scope="All" CapturedPos="25.R0R1R4">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[okcd]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btIFinalizar" CtxtId="8ce6edbb-fd43-411e-a261-4f9bb5702dad" CustomType="GuiButton" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="25.R0R1R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[15]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pVentasYFacturasMas" Comment="GuiMainWindow - Ventas y Facturas masiva" CtxtId="e3958b3a-d465-4c3a-9123-0b5324367168" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[Ventas y Facturas masiva]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="edFichero" CtxtId="905a4415-ea17-4c97-8f24-b4471ee6f518" CustomType="GuiCTextField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="26.R0R4R2">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_PATH]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btEjecutar" CtxtId="aed814c2-a197-4c2c-bfa6-acd410e80bdb" CustomType="GuiButton" SpecIndex="4">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="26.R0R3R1">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[8]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btIFinalizar" CtxtId="2d100cbc-d4df-4547-845e-c39e717c98ae" CustomType="GuiButton" SpecIndex="5">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="26.R0R1R2">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[15]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oVentaPorLínea" CtxtId="c8f04f61-adab-4c6e-a263-f69fb5c6472f" CustomType="GuiCheckBox" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiCheckBox" Scope="All" CapturedPos="26.R0R4R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_LINE]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oSoloCarga" CtxtId="0faafb88-2cfd-49ed-90a8-e1e2d2ff9ea2" CustomType="GuiCheckBox" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiCheckBox" Scope="All" CapturedPos="26.R0R4R4">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_RPA]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pPosDocumVisualiza" Comment="GuiModalWindow - Pos.docum.: Visualizar mensajes" CtxtId="12399176-749c-4ee5-b525-314fb1f7b2e7" CustomType="GuiModalWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[Pos.docum.: Visualizar mensajes]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="btAceptar" CtxtId="9f4d9ecd-6033-41ef-a9f6-ae43a02d1493" CustomType="GuiButton" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="27.R0R0R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[0]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btCancelar" CtxtId="d6646334-21c1-40de-8563-7263bf1114d3" CustomType="GuiButton">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="27.R0R0R19">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[12]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oTabla" CtxtId="67e5872f-1cd1-45a4-9c58-f1e2ff4ac8c3" CustomType="GuiLabel">
							<CRITERE>
								<TAG Name="GuiLabel" Scope="All" CapturedPos="27.R0R1R0" Occurs="Y">
									<ATT Name="Type">
										<VALUE Scan="Full"><![CDATA[GuiLabel]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSalirDelSistema" Comment="GuiModalWindow - Salir del sistema" CtxtId="c9a031b9-561a-465e-ac40-5fcff9c77f56" CustomType="GuiModalWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[Salir del sistema]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="btSí" CtxtId="d156bc7f-8eb2-40eb-bb09-0ff86cc6c99f" CustomType="GuiButton" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="28.R0R1R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[SPOP-OPTION1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btNo" CtxtId="03c145e4-059e-438a-9585-7085bd52f365" CustomType="GuiButton">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="28.R0R1R4">
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
	<CONTEXT Id="c6525e84-fe0f-4790-bfd4-fa6d7c558dc8" />
</ConteXtorStudio>