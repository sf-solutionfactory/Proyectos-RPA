<?xml version="1.0" encoding="utf-8"?>
<ConteXtorStudio Version="Desktop Studio 2.0.7.54" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" noNamespaceSchemaLocation="XsdStudio.xsd">
	<UpdatePackages />
	<Evolutions>
		<Evolution Version="1.0" Date="01/06/2021"><![CDATA[Project creation]]></Evolution>
		<Evolution Version="..." Date="..."><![CDATA[...]]></Evolution>
	</Evolutions>
	<PROCESSUS>
		<PROCESS Name="GLOBAL" Key="NoKey" Comment="Global Processus" CtxtId="0c876fdd-077f-4fb1-9794-174359d39e56">
			<_DECLAREVAR>
				<STRUCTUREDON Name="GLOBAL">
					<OBJDON Name="PrjVersion">1.0</OBJDON>
					<OBJDON Name="PrjClient"><![CDATA[ENCO]]></OBJDON>
					<OBJDON Name="PrjName">Loop001</OBJDON>
					<OBJDON Name="PrjDate">01/06/2021</OBJDON>
					<OBJDON Name="PrjLabel"><![CDATA[Loop001]]></OBJDON>
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
				<SCRIPT Name="Constants" Src="Loop001.min.js" Folder="Framework" />
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
				<WORKFLOW Name="WorkFlow" Src="%workflows%\WorkFlow.xaml" CtxtId="b3fbaaac-2747-4b81-8ece-9acb618d8baf" DisplayName="WorkFlow" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="WorkFlow" />
			</WORKFLOWS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</PROCESS>
		<PROCESS Name="POPUPS" CtxtId="e388d40e-2fbf-4ca6-bfc1-be446c3033cc" Nature="POPUP">
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
		<APPLI Name="SearchResultsSAP" CtxtId="2da7569e-575b-4655-9900-ab1ce671d6b2" Nature="WEB3" TechnoSDK="V3" Sync="250">
			<SCRIPTS />
			<CRITERE>
				<DOMAIN Scan="Full"><![CDATA[help.sap.com]]></DOMAIN>
			</CRITERE>
			<_DECLAREVAR>
				<STRUCTUREDON Name="SearchResultsSAP" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="pSearchResultsSAP" Comment="Search Results - SAP Help Portal" CtxtId="65f097d3-4bc2-49f3-b6d6-fe0af73afb20">
					<CRITERE>
						<TITLE Scan="Full"><![CDATA[Search Results - SAP Help Portal]]></TITLE>
						<DOMAIN Scan="Full"><![CDATA[help.sap.com]]></DOMAIN>
					</CRITERE>
					<OBJETS>
						<OBJET Name="oSearchKeywords" CtxtId="c0e27381-ba38-4b58-9b54-5f85e0808709" SpecIndex="1">
							<CRITERE>
								<TAG Name="INPUT" Scope="All" CapturedPos="24.R0R1R2R0R0R0R1R0R1R0">
									<ATT Name="name">
										<VALUE Scan="Full"><![CDATA[searchKeywords]]></VALUE>
									</ATT>
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[searchKeywords]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oSearch_ct_0" CtxtId="adcdfd54-09d6-473c-832d-033cdae32455">
							<CRITERE>
								<TAG Name="DIV" Scope="All" CapturedPos="24.R0R1R2R0R2R0R0R2R2R0R0" Occurs="Y">
									<ATT Name="class">
										<VALUE Scan="Full"><![CDATA[search-result ng-scope]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btSearchName" CtxtId="17da3ddc-c6f2-4f17-88ac-98075e9f110f" Ascendant="oSearch_ct_0" SpecIndex="2">
							<CRITERE>
								<TAG Name="A" Scope="All" CapturedPos="24.R0R1R2R0R2R0R0R2R2R0R0R1R0R0" Range="0">
									<ATT Name="class">
										<VALUE Scan="Full"><![CDATA[ng-binding]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
			</_ECRANS>
		</APPLI>
	</APPLICATIONS>
	<CONTEXT Id="5f61fea1-f9a1-40c5-876c-de4fe529606b" />
</ConteXtorStudio>