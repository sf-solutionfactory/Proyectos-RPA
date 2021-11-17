<?xml version="1.0" encoding="utf-8"?>
<ConteXtorStudio Version="Desktop Studio 2.0.7.54" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" noNamespaceSchemaLocation="XsdStudio.xsd">
	<UpdatePackages />
	<Evolutions>
		<Evolution Version="1.0" Date="28/06/2021"><![CDATA[Project creation]]></Evolution>
		<Evolution Version="..." Date="..."><![CDATA[...]]></Evolution>
	</Evolutions>
	<PROCESSUS>
		<PROCESS Name="GLOBAL" Key="NoKey" Comment="Global Processus" CtxtId="a92c120a-90fd-498a-afb6-20611dbe8426">
			<_DECLAREVAR>
				<STRUCTUREDON Name="GLOBAL">
					<OBJDON Name="PrjVersion">1.0</OBJDON>
					<OBJDON Name="PrjClient"><![CDATA[ENCO]]></OBJDON>
					<OBJDON Name="PrjName">SQL001</OBJDON>
					<OBJDON Name="PrjDate">28/06/2021</OBJDON>
					<OBJDON Name="PrjLabel"><![CDATA[Ejecutar procedimiento]]></OBJDON>
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
				<SCRIPT Name="Constants" Src="SQL001.min.js" Folder="Framework" />
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
				<WORKFLOW Name="cargarVentas" Src="%workflows%\cargarVentas.xaml" CtxtId="8b73def4-3064-45a2-8283-8d7c021df268" DisplayName="cargarVentas" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="cargarVentas" />
			</WORKFLOWS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</PROCESS>
		<PROCESS Name="POPUPS" CtxtId="211a4b66-3b60-4949-8943-902201c1ed4a" Nature="POPUP">
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
		<APPLI Name="MicrosoftSQLServer" CtxtId="cebfc7eb-76a2-4fa1-933b-0b1f729046c1" Nature="UIAUTOMATION" TechnoSDK="V3" Sync="0" PendingDelay="0">
			<SCRIPTS />
			<CRITERE>
				<EXE Scan="Full"><![CDATA[SSMS.EXE]]></EXE>
				<TITLE Scan="Full"><![CDATA[Microsoft SQL Server Management Studio]]></TITLE>
			</CRITERE>
			<_DECLAREVAR>
				<STRUCTUREDON Name="MicrosoftSQLServer" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="pWindowConnectToS" Comment="Window - Connect to Server" CtxtId="90e73486-f940-4300-b281-845b402d7992" SubpagesType="Multiple" RefreshMode="Window">
					<CRITERE>
						<Name Scan="Full"><![CDATA[Connect to Server]]></Name>
						<AutomationId Scan="Full"><![CDATA[ConnectionDialog]]></AutomationId>
						<TAG Scan="Full"><![CDATA[Window]]></TAG>
						<Range Scan="Full"><![CDATA[R0]]></Range>
					</CRITERE>
					<TRACK_EVENTS>
						<TRACK_EVENT Name="REFRESH(WINDOWOPENED(DESCENDANTS))" />
					</TRACK_EVENTS>
					<OBJETS>
						<OBJET Name="btConnect" CtxtId="ee2d5c9b-2f48-4639-a4a4-42bb58bf5a9b" SpecIndex="1">
							<CRITERE>
								<TAG Name="Button" Scope="All" CapturedPos="5.R0R1">
									<ATT Name="AutomationId">
										<VALUE Scan="Full"><![CDATA[connect]]></VALUE>
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
		<APPLI Name="CWindowsCMD" CtxtId="7aa63fac-1562-410d-a1ca-e160cb673ffd" Nature="UIAUTOMATION" TechnoSDK="V3" Sync="0" PendingDelay="0">
			<SCRIPTS />
			<CRITERE>
				<TITLE Scan="Part"><![CDATA[cmd.exe]]></TITLE>
			</CRITERE>
			<_DECLAREVAR>
				<STRUCTUREDON Name="CWindowsCMD" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="pWindowCMD" Comment="Window - C:\Windows\SysWOW64\cmd.exe" CtxtId="ec32f8f7-3d9d-41c2-a37c-f28b7c5e2676" SubpagesType="Single" RefreshMode="Window" MultiInstance="Y">
					<CRITERE>
						<Range Scan="Full"><![CDATA[R0]]></Range>
						<Name Scan="Full"><![CDATA[C:\Windows\SysWOW64\cmd.exe]]></Name>
					</CRITERE>
					<TRACK_EVENTS>
						<TRACK_EVENT Name="REFRESH(WINDOWOPENED(DESCENDANTS))" />
					</TRACK_EVENTS>
					<OBJETS>
						<OBJET Name="oTextArea" CtxtId="9a5b1699-20ca-4e86-a471-913e6cdda95b" SpecIndex="1">
							<CRITERE>
								<TAG Name="Document" Scope="All" CapturedPos="9.R0R2">
									<ATT Name="AutomationId">
										<VALUE Scan="Full"><![CDATA[Text Area]]></VALUE>
									</ATT>
									<ATT Name="Range">
										<VALUE Scan="Full"><![CDATA[R2]]></VALUE>
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
	<CONTEXT Id="e7fa3437-a79b-4ae8-aac7-59de617fac18" />
</ConteXtorStudio>