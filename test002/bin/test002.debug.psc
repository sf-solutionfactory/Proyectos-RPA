<?xml version="1.0" encoding="utf-8"?>
<ConteXtorStudio Version="Desktop Studio 2.0.7.54" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" noNamespaceSchemaLocation="XsdStudio.xsd">
	<UpdatePackages />
	<Evolutions>
		<Evolution Version="1.0" Date="25/05/2021"><![CDATA[Project creation]]></Evolution>
		<Evolution Version="..." Date="..."><![CDATA[...]]></Evolution>
	</Evolutions>
	<PROCESSUS>
		<PROCESS Name="GLOBAL" Key="NoKey" Comment="Global Processus" CtxtId="61c6158e-a0e8-499d-bd2e-3863a3e29430">
			<_DECLAREVAR>
				<STRUCTUREDON Name="GLOBAL">
					<OBJDON Name="PrjVersion">1.0</OBJDON>
					<OBJDON Name="PrjClient"><![CDATA[Enco]]></OBJDON>
					<OBJDON Name="PrjName">test002</OBJDON>
					<OBJDON Name="PrjDate">25/05/2021</OBJDON>
					<OBJDON Name="PrjLabel"><![CDATA[test002]]></OBJDON>
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
				<SCRIPT Name="SAP UI5" Src="lib\sapui5\sapui5.js" Folder="Framework" />
				<SCRIPT Name="Entities" Src="entities.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="Declarations" Src="test002.resources.js" ReadOnly="Y" />
				<SCRIPT Name="Labels" Src="labels.js" />
				<SCRIPT Name="Global" Src="global.js" />
				<SCRIPT Name="newWorkflow" Src="newworkflow.js" IsWorkflowGenerated="Y" />
				<SCRIPT Src="loopexample.js" IsWorkflowGenerated="Y" />
				<SCRIPT Src="waitmultiple.js" IsWorkflowGenerated="Y" />
				<SCRIPT Src="switchoutput.js" IsWorkflowGenerated="Y" />
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
				<WORKFLOW Name="newWorkflow" Src="%workflows%\newWorkflow.xaml" CtxtId="d3cb5cd7-fa83-422a-9222-6efd9cd165a2" DisplayName="testTXT" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="testTXT" />
			</WORKFLOWS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</PROCESS>
		<PROCESS Name="POPUPS" CtxtId="e43a4915-177a-48f8-9081-8ad80c4ae018" Nature="POPUP">
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
		<APPLI Name="SAPHelpPortal" CtxtId="0fab8388-2037-452f-9d37-6d7f5f612bac" Nature="WEB3" TechnoSDK="V3" Sync="250">
			<CRITERE>
				<URL Scan="Full"><![CDATA[https://help.sap.com/viewer/index]]></URL>
			</CRITERE>
			<_DECLAREVAR>
				<STRUCTUREDON Name="SAPHelpPortal" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="pSAPHelpPortal" Comment="SAP Help Portal" CtxtId="9fbca501-45a4-4c0b-a665-eb4d91c80d12">
					<CRITERE>
						<TITLE Scan="Full"><![CDATA[SAP Help Portal]]></TITLE>
						<URL Scan="Full"><![CDATA[https://help.sap.com/viewer/index]]></URL>
					</CRITERE>
					<OBJETS>
						<OBJET Name="oSearchKeywords" CtxtId="e0351876-f6af-456c-b676-20eda3899a31" SpecIndex="1">
							<CRITERE>
								<TAG Name="INPUT" Scope="All" CapturedPos="4.R0R1R4R0R0R0R0R0R0R2R0R1R0">
									<ATT Name="name">
										<VALUE Scan="Full"><![CDATA[searchKeywords]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oSearchButton" CtxtId="a8bcfd3e-920b-42e6-afb0-e8887e15e9ef" SpecIndex="2">
							<CRITERE>
								<TAG Name="INPUT" Scope="All" CapturedPos="4.R0R1R4R0R0R0R0R0R0R2R0R2">
									<ATT Name="type">
										<VALUE Scan="Full"><![CDATA[submit]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btLogon" CtxtId="258d7415-c34b-458b-a261-77808865b2c9" SpecIndex="3">
							<CRITERE>
								<TAG Name="A" Scope="All" CapturedPos="4.R0R1R3R1R0R1R3R0">
									<ATT Name="Text">
										<VALUE Scan="Full"><![CDATA[]]></VALUE>
									</ATT>
									<ATT Name="title">
										<VALUE Scan="Full"><![CDATA[Log on]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSearchResultsSAP" Comment="Search Results - SAP Help Portal" CtxtId="dedb3524-5518-4e6f-9b06-2a732ad2b0aa">
					<CRITERE>
						<TITLE Scan="Full"><![CDATA[Search Results - SAP Help Portal]]></TITLE>
					</CRITERE>
					<OBJETS>
						<OBJET Name="oSearchValue_0" CtxtId="64ec1e4a-5068-45e1-9f87-538042eb9be6">
							<CRITERE>
								<TAG Name="DIV" Scope="All" CapturedPos="6.R0R1R2R0R2R0R0R2R2R0R0" Occurs="Y">
									<ATT Name="class">
										<VALUE Scan="Full"><![CDATA[search-result ng-scope]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btSearchName" CtxtId="7ddbb991-bccc-4b1f-adf4-165de94dda96" Ascendant="oSearchValue_0" SpecIndex="1">
							<CRITERE>
								<TAG Name="A" Scope="All" CapturedPos="6.R0R1R2R0R2R0R0R2R2R0R0R1R0R0" Range="0" />
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
			<WORKFLOWS>
				<WORKFLOW Name="LoopExample" Src="%workflows%\LoopExample.xaml" CtxtId="b8428264-7837-4473-bce6-fdb06283b348" DisplayName="LoopExample" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="LoopExample" />
				<WORKFLOW Name="waitMultiple" Src="%workflows%\waitMultiple.xaml" CtxtId="2d789720-2595-4ce2-9f00-eaa27d2fc459" DisplayName="waitMultiple" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="waitMultiple" />
				<WORKFLOW Name="switchOutput" Src="%workflows%\switchOutput.xaml" CtxtId="e53b5124-dd28-4a6d-8b8c-b160e8ab4c9c" DisplayName="switchOutput" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="switchOutput" />
			</WORKFLOWS>
		</APPLI>
	</APPLICATIONS>
	<CONTEXT Id="b453a7ea-5273-491f-81be-16dc688b77a8" />
</ConteXtorStudio>