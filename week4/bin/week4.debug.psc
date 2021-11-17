<?xml version="1.0" encoding="utf-8"?>
<ConteXtorStudio Version="Desktop Studio 2.0.7.54" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" noNamespaceSchemaLocation="XsdStudio.xsd">
	<UpdatePackages />
	<Evolutions>
		<Evolution Version="1.0" Date="28/05/2021"><![CDATA[Project creation]]></Evolution>
		<Evolution Version="..." Date="..."><![CDATA[...]]></Evolution>
	</Evolutions>
	<PROCESSUS>
		<PROCESS Name="GLOBAL" Key="NoKey" Comment="Global Processus" CtxtId="c0c68437-f864-41ac-bf3f-4bb052e714f7">
			<_DECLAREVAR>
				<STRUCTUREDON Name="GLOBAL">
					<OBJDON Name="PrjVersion">1.0</OBJDON>
					<OBJDON Name="PrjClient"><![CDATA[ENCO]]></OBJDON>
					<OBJDON Name="PrjName">week4</OBJDON>
					<OBJDON Name="PrjDate">28/05/2021</OBJDON>
					<OBJDON Name="PrjLabel"><![CDATA[week4]]></OBJDON>
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
				<SCRIPT Name="Declarations" Src="week4.resources.js" ReadOnly="Y" />
				<SCRIPT Name="Labels" Src="labels.js" />
				<SCRIPT Name="Global" Src="global.js" />
				<SCRIPT Src="opensap.js" IsWorkflowGenerated="Y" Name="opensap" />
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
				<WORKFLOW Name="openSAP" Src="%workflows%\opensap.xaml" CtxtId="068ec593-95e0-492d-b73f-333784e20958" DisplayName="newWorkflow" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="newWorkflow" />
			</WORKFLOWS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</PROCESS>
		<PROCESS Name="POPUPS" CtxtId="0b29f24e-a61a-4dce-9874-af3334161e7d" Nature="POPUP">
			<_DECLAREVAR>
				<STRUCTUREDON Name="POPUPS" />
			</_DECLAREVAR>
			<_ECRANS />
			<SCRIPTS />
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</PROCESS>
	</PROCESSUS>
	<APPLICATIONS>
		<APPLI Name="Saplogon" CtxtId="b70afaad-ecef-4199-ab83-b9c95e7fe517" Nature="UIAUTOMATION" TechnoSDK="V3" Sync="0" PendingDelay="0">
			<CRITERE>
				<EXE Scan="Full"><![CDATA[SAPLOGON.EXE]]></EXE>
			</CRITERE>
			<_DECLAREVAR>
				<STRUCTUREDON Name="Saplogon" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="pHome" Comment="Window - SAP Logon 760" CtxtId="0a4c92af-ac22-4f52-8a0e-6c9d1d6aefeb" SubpagesType="Multiple" RefreshMode="Window">
					<CRITERE>
						<Name Scan="Full"><![CDATA[SAP Logon 760]]></Name>
					</CRITERE>
					<TRACK_EVENTS>
						<TRACK_EVENT Name="REFRESH(WINDOWOPENED(DESCENDANTS))" />
					</TRACK_EVENTS>
					<OBJETS>
						<OBJET Name="oConnection" CtxtId="4011e8c1-f261-4463-bea6-08c088faa64b" SpecIndex="1" MustExist="Y">
							<CRITERE>
								<TAG Name="Text" Scope="All" CapturedPos="2.R0R10R0R1R0R0R0R0R0R4R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[ARTHA QAS]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSAPLogin" Comment="GuiMainWindow - SAP" CtxtId="ac8a0b41-9bae-46bc-90cf-edd345fb7bfd" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[SAP]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="edMandante" CtxtId="6f3a212e-c61d-4357-a956-b369b81be273" CustomType="GuiTextField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="4.R0R4R1">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-MANDT]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edUsuarios" CtxtId="25fdf4fe-980b-4c7e-8c13-1e3cb15efd96" CustomType="GuiTextField" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="4.R0R4R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BNAME]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oClvAcc" CtxtId="1d8c6619-59b4-4f17-8e0a-0451d534a413" CustomType="GuiPasswordField" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiPasswordField" Scope="All" CapturedPos="4.R0R4R5">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BCODE]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edIdioma" CtxtId="9b2bf908-54ac-413a-a407-c5accdc36555" CustomType="GuiTextField" SpecIndex="4">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="4.R0R4R7">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-LANGU]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btGuiButton" CtxtId="e7badced-ef59-42b4-808e-cdc502aacb79" CustomType="GuiButton" SpecIndex="5">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="4.R0R1R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[0]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSAPEasyAccess" Comment="GuiMainWindow - SAP Easy Access" CtxtId="25ea15d9-a8f0-4879-b2f7-3189e3c64168" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[SAP Easy Access]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="oGuiOkCodeField" CtxtId="357b666e-1cb0-41ab-81d0-97aa41027bf6" CustomType="GuiOkCodeField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiOkCodeField" Scope="All" CapturedPos="6.R0R1R17">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[okcd]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btGuiButton" CtxtId="3608d100-73a3-4130-8338-e86048f0a722" CustomType="GuiButton" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="6.R0R1R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[0]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
			</_ECRANS>
			<SCRIPTS />
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</APPLI>
	</APPLICATIONS>
	<CONTEXT Id="42c65068-55e4-4573-b7d7-fc178ff356a4" />
</ConteXtorStudio>