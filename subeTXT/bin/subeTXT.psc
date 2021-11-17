<?xml version="1.0" encoding="utf-8"?>
<ConteXtorStudio Version="Desktop Studio 2.0.7.54" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" noNamespaceSchemaLocation="XsdStudio.xsd">
	<UpdatePackages />
	<Evolutions>
		<Evolution Version="1.0" Date="07/06/2021"><![CDATA[Project creation]]></Evolution>
		<Evolution Version="..." Date="..."><![CDATA[...]]></Evolution>
	</Evolutions>
	<PROCESSUS>
		<PROCESS Name="GLOBAL" Key="NoKey" Comment="Global Processus" CtxtId="2878dfcf-104e-4dea-b977-105c68581239">
			<_DECLAREVAR>
				<STRUCTUREDON Name="GLOBAL">
					<OBJDON Name="PrjVersion">1.0</OBJDON>
					<OBJDON Name="PrjClient"><![CDATA[ENCO]]></OBJDON>
					<OBJDON Name="PrjName">subeTXT</OBJDON>
					<OBJDON Name="PrjDate">07/06/2021</OBJDON>
					<OBJDON Name="PrjLabel"><![CDATA[SubirTXT]]></OBJDON>
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
				<SCRIPT Name="Constants" Src="subeTXT.min.js" Folder="Framework" />
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
				<WORKFLOW Name="subirArchivo" Src="%workflows%\subirArchivo.xaml" CtxtId="9c213bae-806b-4563-bba5-102961de7256" DisplayName="subirArchivo" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="subirArchivo" />
			</WORKFLOWS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</PROCESS>
		<PROCESS Name="POPUPS" CtxtId="8b8c0d93-958a-4a0e-bd3e-17db0d618b2a" Nature="POPUP">
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
		<APPLI Name="SAPLogon760" CtxtId="c0b258ef-c1cc-4452-ac12-4c9461341e42" Nature="UIAUTOMATION" TechnoSDK="V3" Sync="0" PendingDelay="0">
			<SCRIPTS />
			<CRITERE>
				<EXE Scan="Full"><![CDATA[SAPLOGON.EXE]]></EXE>
			</CRITERE>
			<_DECLAREVAR>
				<STRUCTUREDON Name="SAPLogon760" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="pWindowSAPLogon76" Comment="Window - SAP Logon 760" CtxtId="64d6c576-dede-4c36-be04-2d9912b67bb6" SubpagesType="Multiple" RefreshMode="Window">
					<CRITERE>
						<Value Scan="Full"><![CDATA[SAP Logon 760]]></Value>
					</CRITERE>
					<TRACK_EVENTS>
						<TRACK_EVENT Name="REFRESH(WINDOWOPENED(DESCENDANTS))" />
					</TRACK_EVENTS>
					<OBJETS>
						<OBJET Name="oARTHAQAS" CtxtId="ee29390f-7edb-401e-8fe4-14792f7b4e50" SpecIndex="2">
							<CRITERE>
								<TAG Name="DataItem" Scope="All" CapturedPos="7.R0R10R0R1R0R0R0R0R0R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[ARTHA QAS]]></VALUE>
									</ATT>
									<ATT Name="Value">
										<VALUE Scan="Full"><![CDATA[ARTHA QAS]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btAccederAlSistema" CtxtId="a39cf239-6205-40fe-95fb-f87ab485b7fe" SpecIndex="3">
							<CRITERE>
								<TAG Name="Button" Scope="All" CapturedPos="7.R0R0">
									<ATT Name="AutomationId">
										<VALUE Scan="Full"><![CDATA[1068]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSAPLogin" Comment="GuiMainWindow - SAP" CtxtId="15a15d38-1015-4b9f-b894-f91a7dde38e7" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[SAP]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="edMandante" CtxtId="ff26882c-81d1-48be-a558-e8c3da57769a" CustomType="GuiTextField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="2.R0R4R1">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-MANDT]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edUsuarios" CtxtId="34785334-46a8-4057-b61a-a69e96db7cde" CustomType="GuiTextField" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="2.R0R4R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BNAME]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oClvAcc" CtxtId="3ac23515-7b77-4f37-96ce-c5538a27206d" CustomType="GuiPasswordField" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiPasswordField" Scope="All" CapturedPos="2.R0R4R5">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BCODE]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edIdioma" CtxtId="7092a354-68fa-4e99-8196-51cc9703c9e9" CustomType="GuiTextField" SpecIndex="4">
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
				<PAGE Name="pSAPEasyAccess" Comment="GuiMainWindow - SAP Easy Access" CtxtId="ca4847e9-fa14-4482-8891-39a4918932da" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[SAP Easy Access]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="oGuiOkCodeField" CtxtId="adc9aa21-8fa3-427d-b93e-706261fd8282" CustomType="GuiOkCodeField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiOkCodeField" Scope="All" CapturedPos="3.R0R1R4">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[okcd]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btIFinalizar" CtxtId="05935023-732f-47d2-98db-51d09ab89907" CustomType="GuiButton" SpecIndex="2">
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
				<PAGE Name="pVentasYFacturasMas" Comment="GuiMainWindow - Ventas y Facturas masiva" CtxtId="3db02bcf-10c1-4c17-aa52-386d8d8ef90f" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[Ventas y Facturas masiva]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="edFichero" CtxtId="dcf7e168-6360-4241-9d23-4c2d8ed7a5b6" CustomType="GuiCTextField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="4.R0R4R2">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_PATH]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btEjecutar" CtxtId="4dd693e5-734b-40b6-80a4-14c8809d14da" CustomType="GuiButton" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="4.R0R3R1">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[8]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btBack" CtxtId="115e89ef-c714-4199-9a93-1d42a220afaf" CustomType="GuiButton" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="4.R0R1R1">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[3]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pPosDocumVisualiza" Comment="GuiModalWindow - Pos.docum.: Visualizar mensajes" CtxtId="d1a4e6af-34fc-42f4-8500-aea38a9e23ed" CustomType="GuiModalWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[Pos.docum.: Visualizar mensajes]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="btAceptar" CtxtId="b8bb7f2a-6ed6-4a54-a466-e458139f19b6" CustomType="GuiButton" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="5.R0R0R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[0]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btCancelar" CtxtId="24b44a51-584d-4899-9c54-a09234908966" CustomType="GuiButton">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="5.R0R0R19">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[12]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oTabla" CtxtId="278cf448-c9c8-4176-a280-8ccc7c3a8c73" CustomType="GuiLabel" SpecIndex="1">
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
				<PAGE Name="pSalirDelSistema" Comment="GuiModalWindow - Salir del sistema" CtxtId="87a21d74-1e26-443e-b1b3-38fb2e962b80" CustomType="GuiModalWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[Salir del sistema]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="btSí" CtxtId="f1a71d0a-a0c9-44ad-9c1c-5bd8714adb9d" CustomType="GuiButton" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="6.R0R1R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[SPOP-OPTION1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btNo" CtxtId="5f0f3a6f-e9e1-4667-99a5-81fbd8f6190b" CustomType="GuiButton">
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
	<CONTEXT Id="c9380a74-3cf6-4441-b8a2-ff8eedc29718" />
</ConteXtorStudio>