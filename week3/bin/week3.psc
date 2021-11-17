﻿<?xml version="1.0" encoding="utf-8"?>
<ConteXtorStudio Version="Desktop Studio 2.0.7.54" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="XsdStudio.xsd">
	<UpdatePackages />
	<Evolutions>
		<Evolution Version="1.0" Date="28/05/2021"><![CDATA[Project creation]]></Evolution>
		<Evolution Version="..." Date="..."><![CDATA[...]]></Evolution>
	</Evolutions>
	<PROCESSUS>
		<PROCESS Name="GLOBAL" Key="NoKey" Comment="Global Processus" CtxtId="3ccd9194-5a7b-4549-abf1-62e9f47c654c">
			<_DECLAREVAR>
				<STRUCTUREDON Name="GLOBAL">
					<OBJDON Name="PrjVersion">1.0</OBJDON>
					<OBJDON Name="PrjClient"><![CDATA[ENCO]]></OBJDON>
					<OBJDON Name="PrjName">week3</OBJDON>
					<OBJDON Name="PrjDate">28/05/2021</OBJDON>
					<OBJDON Name="PrjLabel"><![CDATA[week3]]></OBJDON>
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
				<SCRIPT Name="Constants" Src="week3.min.js" Folder="Framework" />
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
				<WORKFLOW Name="unit1" Src="%workflows%\unit1.xaml" CtxtId="285fdded-fe99-41f7-9363-d0ec3f351bbb" DisplayName="unit1" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="unit1" />
			</WORKFLOWS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</PROCESS>
		<PROCESS Name="POPUPS" CtxtId="a55a0b22-8bfc-4bd3-b8a0-e300bd6e49e1" Nature="POPUP">
			<SCRIPTS />
			<SCENARII />
			<ACTIONS />
			<EVENTS />
			<_DECLAREVAR>
				<STRUCTUREDON Name="POPUPS" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="testPopUp" CtxtId="0e91df10-bd43-4cc6-bddf-9ce55bdafa1b" Template="popup.pscm" Type="POPUP" Comment="file://C:\Users\rogel\Documents\SAP\Intelligent RPA\Desktop Studio\week3\bin\testPopUp\popup.html?DesignMode=true ShowGrid=true TestMode=true">
					<OBJETS>
						<OBJET Name="container1" CtxtId="f85e75ec-6c6a-47ad-afa1-82f9b681ac09" Technical="Y" ImagePath="fa/vcard-o.png" OrderBy="1">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[container1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="select1" CtxtId="d126aa70-9630-4834-913e-74794ef6ed9b" ImagePath="fa/terminal.png" OrderBy="2">
							<CRITERE>
								<TAG Name="SELECT" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[select1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="text2" CtxtId="bb1b8c39-dff3-41b9-82e6-811733c04adc" ImagePath="fa/terminal.png" OrderBy="3">
							<CRITERE>
								<TAG Name="INPUT" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[text2]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="password1" CtxtId="19f8c235-ddb0-4c3d-95e8-f20d215188d0" ImagePath="fa/lock.png" OrderBy="4">
							<CRITERE>
								<TAG Name="INPUT" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[password1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="row2" CtxtId="b5643122-f9ca-46f1-a202-cce8ce621d25" Technical="Y" ImagePath="fa/bars.png" OrderBy="5">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[row2]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="col3" CtxtId="ea7ad09c-023f-4dc1-8675-c6cb9cb48e13" Technical="Y" ParentName="row2" ImagePath="fa/ellipsis-h.png" OrderBy="6">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[col3]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="button1" CtxtId="822253e3-7699-4d79-a2b9-22539a5a310e" ParentName="col3" ImagePath="fa/hand-o-up.png" OrderBy="7">
							<CRITERE>
								<TAG Name="BUTTON" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[button1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="col4" CtxtId="9c373c6f-92f9-4a25-ab77-3c20691d987c" Technical="Y" ParentName="row2" ImagePath="fa/ellipsis-h.png" OrderBy="8">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[col4]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="button2" CtxtId="7df58d70-294b-406c-8a4b-a31be7d4a0d3" ParentName="col4" ImagePath="fa/hand-o-up.png" OrderBy="9">
							<CRITERE>
								<TAG Name="BUTTON" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[button2]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="col5" CtxtId="3b7fdefd-9b74-4945-b019-eb5976d09d11" Technical="Y" ParentName="row2" ImagePath="fa/ellipsis-h.png" OrderBy="10">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[col5]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="dropdown1" CtxtId="135b7be2-701c-402b-95b4-b83455321f27" ParentName="col5" ImagePath="fa/toggle-down.png" OrderBy="11">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[dropdown1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="html" CtxtId="681480db-df68-4304-9293-2bc508807ac7" Technical="Y" ParentName="dropdown1" ImagePath="fa/angle-down.png" OrderBy="12">
							<CRITERE>
								<TAG Name="LI" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[html]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="css" CtxtId="951ee284-7a7f-406a-9853-10ee85c97fe5" Technical="Y" ParentName="dropdown1" ImagePath="fa/angle-down.png" OrderBy="13">
							<CRITERE>
								<TAG Name="LI" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[css]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="js" CtxtId="3ceeafda-665c-4530-b88e-9758d0c83619" Technical="Y" ParentName="dropdown1" ImagePath="fa/angle-down.png" OrderBy="14">
							<CRITERE>
								<TAG Name="LI" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[js]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="about" CtxtId="6415a485-3d1e-4447-ba6e-866a26ffd4d5" Technical="Y" ParentName="dropdown1" ImagePath="fa/angle-down.png" OrderBy="15">
							<CRITERE>
								<TAG Name="LI" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[about]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
			</_ECRANS>
		</PROCESS>
	</PROCESSUS>
	<APPLICATIONS />
	<CONTEXT Id="439c25d1-b9f8-42ac-80f3-11acc860abd2" />
</ConteXtorStudio>