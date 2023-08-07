// Do not overwrite this file directly with \samplesV3\demoNewSystray\local\Systray\systray.js
//initialization called later in ctx.systray to allow sending localized labels to systray before item initialization
/*
* methods defined in systray.utils.js:
* function _validateInputNotEmpty(sInputId)
* function _findObjectInArrayById(aArray, sId, sIdKey)
* function _editObjectInArrayById(aArray, sId, sNewData)
* function _truncateTextIfOverLength(sText, length)
* function _removeDialogBoxOnButton(sBtnId)
* jQueryInsertTypes enumeration
* function _createConfirmationDialogBox(sModalID, sDialogText, sOKButtonText, sCancelButtonText, sOKButtonFunction, jQAppendOrAfter, sWhereToPutItID)
* function _addDialogBoxOnButton(sBtnId, sDialogText, sOKButtonText, sCancelButtonText, sOKButtonFunction)
* function _getConfirmationDialogBoxHTML(sBtnId, sDialogText, sOKButtonText, sCancelButtonText)
* function _removeInterrogationPoint(sText)
* function _editParameterInLabel(sText, ...params)
*/

//$(document).ready(initializeSystray); //uncomment only in \samplesV3\demoNewSystray\local\Systray\systray.js

var _aboutList = [];
var _aboutTableIds = {};
var _aAboutListProjectSpecificLines = [];
var _initialMenuList;
var _currentSubMenuList;
var _currentMenuId;
var _projectList;
var _currentProjectUid;
var _currentEnvironmenttUid;
var _previousSwitchProjectMode;
var _newSwitchProjectMode;
var _tenantList;
var _noTenantFile = false;
var _agentStatus;
var _agentStatusLocalized;
var _agentStatusLabel;
var _agentStatusDescription;
var _languageList;
var _oJobListMap = {};
var _selectedProjectId;
var _selectedTenantId;
var _selectedTenantName;
var _selectedTenantUrl;
var _isRecordingTraces = false;
var _isAlreadyChangeInSettingsPage = false;
var _currentSwitchAutoProjectValue = false;
var _isStudioMode = false;
var _isTrialMode = false;
var _isDefaultMode = false;
var _isAnonymous = false;
var _hasProxy = false;
var _userNameAnonymous;
var _machineNameAnonymous;
var _currentPageId = "";
var _environmentList;
var _proxyUsernameHasChanged = false;
var MAX_TENANT_LIST_ITEM_STRING_LENTH = 35;
var MAX_MAIN_MENU_LIST_ITEM_STRING_LENTH = 60;
var MAX_PROJECT_LIST_ITEM_STRING_LENTH = 40;
var MAX_JOB_PROGRESS_TABLE_ROW_NUMBER = 50;
var _iconMap = {};
var AGENT_STATUS_ICON_MAP = {
	"Warning": "agent-systray-status-icon-warning",
	"Idle": "agent-systray-status-icon-idle",
	"Error": "agent-systray-status-icon-error",
	"Ready": "agent-systray-status-icon-ready",
	"Running": "agent-systray-status-icon-running",
	"Paused": "agent-systray-status-icon-paused"
}
var settingTypes = {
	COMBOBOX: "combobox",
	CHECKBOX: "checkbox",
	RADIO: 'radio',
	INPUT: 'input',
	PASSWORD: 'password',
}
//When adding a new component in the Settings page, add it to this map to implement behavior
var _oSettingsMap = {
	"autoRestart": {
		"settingType": settingTypes.CHECKBOX, /* Setting type */
		"settingID": "chAutoRestart", /* UIDesigner Component ID */
		"settingValue": false, /* Actual value of the setting (different from UI value if setting has not been saved) */
		"sdkEventName": "AUTO_RESTART_AGENT", /* Name of the event sent to the SDK */
		"sdkEventDataName": 'isAutoRestartEnabled', /* Name of the data sent to the SDK */
		"settingInStudioModeOnly": false, /* if true, the setting will only be functional in studio mode */
		"waitNoError" : false,
		"listIdToGreyOut" : ['itemPasswordRestartAgent','itemRadioButtonWindowsPassword']
	},
	"windowsPassword": {
		"settingType": settingTypes.PASSWORD, /* Setting type */
		"settingID": 'itemPasswordRestartAgent', /* UIDesigner Component ID */
		"settingValue": '', /* Actual value of the setting (different from UI value if setting has not been saved) */
		"sdkEventName": 'SET_WINDOWS_PASSWORD', /* Name of the event sent to the SDK */
		"sdkEventDataName": 'windowsPassword', /* Name of the data sent to the SDK */
		"settingInStudioModeOnly": false ,/* if true, the setting will only be functional in studio mode */
		"waitNoError" : true
	},
	"radioWindowsPassword": {
		"settingType": settingTypes.RADIO, /* Setting type */
		"settingID": 'rdPutPassword', /* UIDesigner Component ID */
		"settingValue": false, /* Actual value of the setting (different from UI value if setting has not been saved) */
		"settingInStudioModeOnly": false ,/* if true, the setting will only be functional in studio mode */
		"listIdToGreyOut" : ['itemPasswordRestartAgent'],
		"waitNoError" : false
	},
	"itemcheckBoxProxy": {
		"settingType": settingTypes.CHECKBOX, /* Setting type */
		"settingID": 'chItemcheckBoxProxy', /* UIDesigner Component ID */
		"settingValue": false, /* Actual value of the setting (different from UI value if setting has not been saved) */
		"sdkEventName": 'PROXY_STORE', /* Name of the event sent to the SDK */
		"sdkEventDataName": 'isProxyChecked', /* Name of the data sent to the SDK */
		"settingInStudioModeOnly": false, /* if true, the setting will only be functional in studio mode */
		"waitNoError": false,
		"listIdToPutNotVisible": ['itemProxyUserName', 'itemProxyPassword']
	},
	"itemProxyUserName": {
		"settingType": settingTypes.INPUT, /* Setting type */
		"settingID": 'itemProxyUserName', /* UIDesigner Component ID */
		"settingValue": '', /* Actual value of the setting (different from UI value if setting has not been saved) */
		"sdkEventName": '', /* Name of the event sent to the SDK */ //SAPMLIPA-18514: In this case, event sending is treated separately
		"sdkEventDataName": '', /* Name of the data sent to the SDK */
		"settingInStudioModeOnly": false ,/* if true, the setting will only be functional in studio mode */
		"waitNoError": false
	},
	"itemProxyPassword": {
		"settingType": settingTypes.PASSWORD, /* Setting type */
		"settingID": 'itemProxyPassword', /* UIDesigner Component ID */
		"settingValue": '', /* Actual value of the setting (different from UI value if setting has not been saved) */
		"sdkEventName": '', /* Name of the event sent to the SDK */ //SAPMLIPA-18514: In this case, event sending is treated separately
		"sdkEventDataName": '', /* Name of the data sent to the SDK */
		"settingInStudioModeOnly": false ,/* if true, the setting will only be functional in studio mode */
		"waitNoError": true
	},
	"language": {
		"settingType": settingTypes.COMBOBOX,
		"settingID": "language",
		"settingValue": 'en',
		"sdkEventName": "SET_LANGUAGE",
		"sdkEventDataName": 'language',
		"settingInStudioModeOnly": false,
		"waitNoError" : false
	},
	"environment": {
		"settingType": settingTypes.COMBOBOX,
		"settingID": "envList",
		"settingValue": '',
		"sdkEventName": "SET_ENVIRONMENT",
		"sdkEventDataName": 'envUid',
		"settingInStudioModeOnly": true,
		"waitNoError" : false
	}
}


function initializeSystray() {
	// force 100% zoom on systray
	document.body.style.zoom = 1.0;
	if (!window.chrome || !window.chrome.webview) $("html").css('border-right-width', '4px');
	$(".dropdown-menu>li>a").removeAttr('href');//SAPMLIPA-22089 : remove 'javascript:void(0)' in bottom-left corner in chromiumhost=true
	$(window).trigger("focus");
	_disableBrowserActions();
	_fixButtonStyles();
	_initHelpButtons();
	_addDialogBoxes();
	_initEventHandlers();

	//* comment to see all panels
	if (_currentPageId) {
		_showPage(_currentPageId);
	} else {
		_toMainPage();
	}	//*/	
}

function _disableBrowserActions() {
	// disable default context menu
	document.oncontextmenu = function () {
		return false;
	}
	// disable F5
	function disableF5(e) {
		if ((e.which || e.keyCode) == 116) e.preventDefault();
	};
	//disable CTRL+mousescroll, ctrl+"-/+" (disable zooming)
	$(window).bind('mousewheel DOMMouseScroll', function (event) {
		if (event.ctrlKey == true) {
			event.preventDefault();
		}
	});
	function disableZoom(event) {
		if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
			event.preventDefault();
		}
	};
	$(document).on("keydown", disableF5);
	$(document).on("keydown", disableZoom);
}

function _initPlanModeAlert() {
	if (_planMode !==0) {

		if (_planMode == 1) {
			$(".trial-mode-alert > div").html('&nbsp;' + GLOBAL.labels.systray.trialVersion + '&nbsp;');

		}
		else if (_planMode == 2) {
			$(".trial-mode-alert > div").html('&nbsp;' + GLOBAL.labels.systray.evaluationVersion + '&nbsp;');
		}

		$(".trial-mode-alert > div").prepend('<i class="glyphicon glyphicon-info-sign"></i>');
		$(".trial-mode-alert > div").append('<a>' + GLOBAL.labels.systray.moreInfoOnProduct + '</a><br/>');
		$(".trial-mode-alert > div").append( GLOBAL.labels.systray.shutdownOnEvaluation );
		$(".trial-mode-alert > div > a").click(_onTrialLinkClick);
	}
}

function _refreshHelpButtons() {
	$(".agent-systray-help-button,.agent-systray-help-button-no-margin-left").popover({
		placement: 'auto top',
		trigger: 'focus',
		html: true,
		container: 'body'
	});
	//Fix popover positioning when it gets placed outside window
	$("[data-toggle='popover']").on('shown.bs.popover', function () {
		var popoverJQ = $("#" + $(this).attr('aria-describedby'));
		var currentLeft = parseInt(popoverJQ.css('left'));
		if (currentLeft === 0) {
			var popoverArrowJQ = $("#" + $(this).attr('aria-describedby') + " .arrow");
			var currentLeftArrow = parseInt(popoverArrowJQ.css('left'));
			popoverJQ.css({
				left: '5px'
			});
			popoverArrowJQ.css({
				left: (currentLeftArrow - 5) + 'px'
			});
		}
	});
}

function _initHelpButtons() {
	$("#btHelpProjectMode").attr('data-toggle', 'popover').attr('data-content', GLOBAL.labels.systray.projectSwitchModeHelp);
	$("#btHelpIncludeScreenshots").attr('data-toggle', 'popover').attr('data-content', GLOBAL.labels.systray.includeScreenshotsHelp);
	$("#btHelpAboutStatus").attr('data-toggle', 'popover');
	_refreshHelpButtons();
}

function _addDialogBoxes() {
	_addDialogBoxOnButton("btTenantRestart", GLOBAL.labels.systray.switchTenantText, GLOBAL.labels.buttons.ok, GLOBAL.labels.systray.cancel, _onRestartTenant);
	_addDialogBoxOnButton("btTenantDelete", GLOBAL.labels.systray.deleteTenantText, GLOBAL.labels.buttons.ok, GLOBAL.labels.systray.cancel, _onDeleteTenant);
	_initButtonQuitDialogBox();
	//Dialog box on "Start project" button
	_createConfirmationDialogBox('restartOnProject', GLOBAL.labels.systray.switchProjectText, GLOBAL.labels.buttons.ok, GLOBAL.labels.systray.cancel, _onSwitchProject, jQueryInsertTypes.APPEND, 'containerProjects');
	//Dialog box on "Stop project" button
	_createConfirmationDialogBox('switchDefaultProject', GLOBAL.labels.systray.restartOnDefaultProject, GLOBAL.labels.buttons.ok, GLOBAL.labels.systray.cancel, _onDefaultModeItemDialogOKClick, jQueryInsertTypes.APPEND, 'containerProjects');
	//Dialog boxes on "Attended/Unattended" project mode dropdown
	_createConfirmationDialogBox('manualSwitchProject', GLOBAL.labels.systray.switchToManualProjectSwitchMode, GLOBAL.labels.buttons.ok, GLOBAL.labels.systray.cancel, _onManualSwitchProjectModeDialogOKClick, jQueryInsertTypes.AFTER, 'projectModeSelect');
	_createConfirmationDialogBox('autoSwitchProject', GLOBAL.labels.systray.switchToAutoProjectSwitchMode, GLOBAL.labels.buttons.ok, GLOBAL.labels.systray.cancel, _onAutoSwitchProjectModeDialogOKClick, jQueryInsertTypes.AFTER, 'projectModeSelect');
	$('#manualSwitchProject_modal').on('hidden.bs.modal', function () { POPUPS.Systray.projectModeSelect.set(_previousSwitchProjectMode) });
	$('#autoSwitchProject_modal').on('hidden.bs.modal', function () { POPUPS.Systray.projectModeSelect.set(_previousSwitchProjectMode) });
}

/**
* Add a custom dialog box on "Shutdown/Restart" button
*/
function _initButtonQuitDialogBox() {
	$("#btQuit>a").attr('data-toggle', 'modal').attr('data-target', '#btQuit_modal');
	$("#btMoreActions").after('<div id="btQuit_modal" class="modal fade in agent-systray-modal" role="dialog">\
    <div class="modal-dialog" style="">\
			<div class="modal-dialog" style="">\
				<div class="modal-content" style="">\
					<div class="modal-body">\
						' + GLOBAL.labels.systray.shutdownAgentConfirmDialog + '\
					</div>\
					<div class="modal-footer">\
						<button type="button" class="btn btn-info btn-sm" id="btQuit_modal_shutdown">' + GLOBAL.labels.systray.shutdown + '</button>\
						<button type="button" class="btn btn-info btn-sm" id="btQuit_modal_restart" ' + (_isStudioMode ? 'disabled' : '') + '>' + GLOBAL.labels.systray.restart + '</button>\
						<button type="button" class="btn agent-systray-transparent-btn btn-sm" data-dismiss="modal">' + GLOBAL.labels.systray.cancel + '</button>\
					</div>\
				</div>\
			</div>\
  	</div>\
	</div>');
	$("#btQuit_modal_shutdown").click(_onShutdownAgentButton);
	$("#btQuit_modal_restart").click(_onRestartAgentButton);
}

function _fixButtonStyles() {
	//To work around css classes that are added automatically by ctx.popup.bootbox
	$(".agent-systray-transparent-btn").removeClass('btn-info');
	$(".agent-systray-transparent-btn-white").removeClass('btn-info');
	$(".agent-systray-transparent-btn-with-border").removeClass('btn-info');
	$(".agent-systray-transparent-btn-red-with-border").removeClass('btn-info');
	$(".agent-systray-transparent-btn-light-red-with-border").removeClass('btn-info');
	$(".agent-systray-transparent-btn-red").removeClass('btn-info');
	$(".agent-systray-help-button").removeClass('btn-info');
	$(".agent-systray-help-button-no-margin-left").removeClass('btn-info');
	$("button[data-toggle='dropdown'] > span.caret").remove();
	$("#btMoreActions").removeClass('dropdown').addClass('dropup');
	$(".agent-systray-toolbar-btn>i").removeClass('agent-systray-toolbar-btn');
	$(".agent-systray-help-button>i").removeClass('agent-systray-help-button');
	$(".agent-systray-help-button-no-margin-left>i").removeClass('agent-systray-help-button-no-margin-left');
}

/**
* Initialize callbacks on buttons, inputs, etc..
*/
function _initEventHandlers() {
	$("button").not(".agent-systray-modal button, .btn-project-item").unbind('click');
	$(".dropdown-menu a").unbind('click');
	//main page
	$("#btProjects").click({ sPageId: "pgProjects" }, _collapseAndCloseOthers);
	$("#btAbout").click({ sPageId: "pgAbout" }, _collapseAndCloseOthers);
	$("#btTenants").click(_onBtTenantClick);
	$("#btSettings").click({ sPageId: "pgSettings" }, _collapseAndCloseOthers);
	$("#btJobProgress").click({ sPageId: "pgJobProgress" }, _collapseAndCloseOthers);
	$("#btMoreActions").click(_removeDisplayedTooltips);
	//About page
	$("#btAboutBack").click(_toMainPage);
	$(".trial-mode-alert > div > a").click(_onTrialLinkClick);
	//Project Page
	$("#btProjectCancel").click(_toMainPage);
	$("#projectModeSelect").unbind('change');
	$("#projectModeSelect").on('change', _onProjectModeSelectChange);
	//Tenant Page
	$("#btTenantAdd").click({ sPageId: "pgTenantAddEdit" }, _collapseAndCloseOthers);
	$("#btTenantAdd").click(_onAddTenant);
	$("#btTenantEdit").click({ sPageId: "pgTenantAddEdit" }, _collapseAndCloseOthers);
	$("#btTenantEdit").click(_onEditTenant);
	$("#btTenantBack").click(_onBtTenantBack);
	$("#btTenantCancel").click({ sPageId: "pgTenants" }, _collapseAndCloseOthers);
	$("#tenantName").unbind('input');
	$("#tenantDomain").unbind('input');
	$("#tenantName").on('input', function () { _validateInputNotEmpty("tenantName") });
	$("#tenantDomain").on('input', function () { _validateInputNotEmpty("tenantDomain") });
	$("#btCancel_NoTenantFile").click(_onShutdownAgentButton);
	$("#btTenantSave").click(_onAddTenantSave);//to handle case of "no tenant at startup"
	//Job Progress page
	$("#btJobProgressCancel").click(_toMainPage);
	$("#btJobProgressDetailsCancel").click({ sPageId: "pgJobProgress" }, _collapseAndCloseOthers);
	//Settings page
	$("#pgSettings div[ctxtype='ctx.popup.bootstrap.type.checkbox']>div,#pgSettings select,#pgSettings div[ctxtype='ctx.popup.bootstrap.type.password'],#pgSettings div[ctxtype='ctx.popup.bootstrap.type.text']").unbind('change');
	$("#language").on("change", function () { POPUPS.Systray.alertSettingsChange.update({ visible: true });
											  POPUPS.Systray.alertBadPassword.update({ visible: false }); });
	$("#pgSettings div[ctxtype='ctx.popup.bootstrap.type.checkbox']>div,#pgSettings select").on("change", _onChangeInSettingsPage);
	$("#pgSettings div[ctxtype='ctx.popup.bootstrap.type.password'],#pgSettings div[ctxtype='ctx.popup.bootstrap.type.text']").on('keyup', _onChangeInSettingsPage);
	
	$("#btSettingsSave").click(_onSaveSettings);
	$("#btSettingsBack").click(_toMainPage);
	$("#chItemcheckBoxProxy").click(_onCheckProxyCheckbox);
	$("#itemProxyUserName").on('keyup', _onChangeProxyUsername);
	//to cancel default action when clicking on a 'a' tag, so as not to lose popup methods when clicking on a 'a' tag in mode IEHost=false
	$(".dropdown-menu a").click(function (ev) { ev.preventDefault(); });
	$("#itemPasswordRestartAgent").on("change", function () {POPUPS.Systray.alertBadPassword.update({ visible: false });
															if(!$("#chAutoRestart").prop('checked'))
																$("#itemPasswordRestartAgent").val("-1");
															_onChangeInSettingsPage()});
	$("#itemRadioButtonWindowsPassword").on("change", function () {POPUPS.Systray.alertBadPassword.update({ visible: false });
															if($("#rdRemoveWindowsPassword").prop('checked'))
															{
																$("#itemPasswordRestartAgent").val("");
																$("#itemPasswordRestartAgent").prop("disabled",true);
															}
															_onChangeInSettingsPage();});

														
}

function _bindBlurEvent() {
	//close popup when click outside
	$(window).unbind("blur");
	$(window).blur(_onSystrayFocusOut);
}

function _onSystrayFocusOut() {
	if (!_noTenantFile) {
		sendEventToSDK('HIDE_SYSTRAY', {});
	}
}

function _removeDisplayedTooltips() {
	//to remove any tooltip that remain when hovering away
	$(".tooltip").remove();
}

function _displayLoadingSpinner() {
	$("#page1 .modal").modal('hide');
	$("body").append('<div class="modal-backdrop fade in"></div>');
	$("body").addClass('spinner');
}

function _removeLoadingSpinner() {
	$(".modal-backdrop").remove();
	$("body").removeClass('spinner');
}

//--------------------------------Navigation Methods
function _collapseAndCloseOthers(ev) {
	_showPage(ev.data.sPageId);
}

/**
* to show a page item from 'page1' and hide all the others
* @param {string} sPageId the id of the page item from 'page1' to show, example: _showPage("pgSettings")
* @param {boolean} [noSlideDown] if true, the slideDown animation will not be done
*/
function _showPage(sPageId, noSlideDown) {
	_removeDisplayedTooltips()
	$("#page1 div[ctxparent='page1']").hide();
	if (noSlideDown) {
		$("#" + sPageId).show();
	} else {
		$("#" + sPageId).slideDown();
	}
	_currentPageId = sPageId;
}

function _toMainPage() {
	POPUPS.Systray.alertSettingsChange.update({ visible: false });
	_showPage('pgMain');
}


//--------------------------------Main Menu List Event Handler + Sub-Menu Navigation Methods
function _createFlatMenuArray(aMenuList, parentId, aArray) {
	parentId = parentId || '';
	var aFlatMenuArray = aArray || [];
	if (!parentId) {
		aFlatMenuArray.push({
			id: 'root',
			name: '',
			content: aMenuList
		});
	}
	var arrLength = aMenuList.length;
	if (arrLength > 0) {
		for (let i = 0; i < arrLength; i++) {
			if (aMenuList[i].content) {
				aFlatMenuArray.push({
					id: aMenuList[i].id,
					name: aMenuList[i].name,
					content: aMenuList[i].content,
					parent: parentId || 'root'
				});
				_createFlatMenuArray(aMenuList[i].content, aMenuList[i].id, aFlatMenuArray);
			} else {
				aFlatMenuArray.push({
					id: aMenuList[i].id,
					name: aMenuList[i].name,
					parent: parentId || 'root'
				});
			}
		}
	}

	return aFlatMenuArray;
}

function _showMenu(aMenuList, sMenuId) {
	_removeDisplayedTooltips();
	_aFlatMenuList = _createFlatMenuArray(_initialMenuList);
	_currentMenuId = sMenuId || 'root';
	var aFlatMenuList = _aFlatMenuList;
	var menuToShow = sMenuId ? _findObjectInArrayById(aFlatMenuList, sMenuId, "id") : null;
	if (_isStudioMode) {
		//SAPMLIPA-9742 - In Studio mode: append " - Test Mode" to systray title (only "About", "Projects", "Main" screens)
		POPUPS.Systray.itemMainTitle.set(menuToShow && menuToShow.name ? menuToShow.name : GLOBAL.labels.systray.desktopAgent + " - " + GLOBAL.labels.systray.testMode);
	} else {
		POPUPS.Systray.itemMainTitle.set(menuToShow && menuToShow.name ? menuToShow.name : GLOBAL.labels.systray.desktopAgent);
	}
	POPUPS.Systray.projectMenuList.update({ items: null });
	POPUPS.Systray.projectMenuList.update({ items: sMenuId ? _menuJSONToArray(menuToShow.content) : _menuJSONToArray(aMenuList) });
	$("#projectMenuList a").click({ flatMenuList: aFlatMenuList }, _onClickMenuItem);
	$("#projectMenuList a").removeAttr('href');
	_currentSubMenuList = sMenuId ? menuToShow.content : aMenuList;
	_addAllIcons();
	if (sMenuId && menuToShow.parent) {
		$("#btMainBack").show();
		$("#btMainBack").click({ flatMenuList: aFlatMenuList, parentMenuId: menuToShow.parent }, _onBtMainBack);
	} else {
		$("#btMainBack").hide();
		$("#btMainBack").unbind('click');
	}
}

function _onClickMenuItem(ev) {
	ev.preventDefault();//to cancel default action when clicking on a 'a' tag, so as not to lose popup methods when clicking on a 'a' tag in mode IEHost=false
	var clickedMenu = _findObjectInArrayById(ev.data.flatMenuList, this.id, "id");
	if (clickedMenu.content) {
		_showMenu(clickedMenu.content, this.id);
	} else {
		sendEventToSDK("LAUNCH_SCENARIO", {
			scenarioId: this.id
		});
	}
}

function _onBtMainBack(ev) {
	var menuParent = _findObjectInArrayById(ev.data.flatMenuList, ev.data.parentMenuId, "id");
	_showMenu(menuParent.content, ev.data.parentMenuId === 'root' ? null : ev.data.parentMenuId);
}

function _addAllIcons() {
	$("#projectMenuList a").prepend('<span class="agent-systray-scenario-list-custom-icon"/>');
	for (var i = 0; i < _currentSubMenuList.length; i++) {
		_addCustomLoadedImages(_currentSubMenuList[i]);
		_checkMenuItems(_currentSubMenuList[i]);//check takes priority over custom icon
		_addMenuArrows(_currentSubMenuList[i]);
	}
}

function _addCustomLoadedImages(subMenuItem) {
	var iconId = subMenuItem.icon;
	if (iconId && _iconMap[iconId]) {
		$("#" + subMenuItem.id + ">span.agent-systray-scenario-list-custom-icon").append('<img class="agent-systray-scenario-list-custom-icon">');
		$("#" + subMenuItem.id + " img.agent-systray-scenario-list-custom-icon").attr('src', _iconMap[iconId]);
	}
}

function _addMenuArrows(subMenuItem) {
	if (subMenuItem.content) {
		$("#" + subMenuItem.id + "").append('<i class="glyphicon glyphicon-chevron-right agent-systray-list-iconRight"/>');
	}
}

function _checkMenuItems(subMenuItem) {
	if (subMenuItem.checked) {
		$("#" + subMenuItem.id + ">.agent-systray-scenario-list-custom-icon").append('<i class="glyphicon glyphicon-ok"/>');
	} else {
		$("#" + subMenuItem.id + ">.agent-systray-scenario-list-custom-icon>.glyphicon-ok").remove();
	}
}

/**
* Transforms the menu list array into the correct format to use the ctx.popupItem update method
*/
function _menuJSONToArray(aMenuList) {
	var aArray = [];
	var menuListLength = aMenuList.length;
	if (menuListLength > 0) {
		for (let i = 0; i < menuListLength; i++) {
			aArray.push({
				id: aMenuList[i].id,
				value: _truncateTextIfOverLength(aMenuList[i].name, MAX_MAIN_MENU_LIST_ITEM_STRING_LENTH),
				disabled: aMenuList[i].disabled ? true : false
			});
		}
	}
	return aArray;
}

function _showMenuList(aMenuList, bIsStudioMode, bIsDefaultMode) {
	if (aMenuList && aMenuList.length > 0 && (bIsStudioMode || !bIsDefaultMode)) {
		$("#projectMenuList").show();
		$("#itemEmptyMenuListLabel").hide();
		_showMenu(aMenuList);
	} else {
		$("#projectMenuList").hide();
		var mainMenuEmptyLabel = bIsDefaultMode ? GLOBAL.labels.systray.defaultProjectMainMenuLabel : GLOBAL.labels.systray.projectWithNoMenuMainMenuLabel;
		POPUPS.Systray.itemEmptyMenuListLabel.set(mainMenuEmptyLabel);
		$("#itemEmptyMenuListLabel").show();
	}
}

//--------------------------------About page methods
function _hideProjectSpecificLinesAboutTable(bDefaultMode) {
	if (bDefaultMode) {
		var length = _aAboutListProjectSpecificLines.length;
		if (length > 0) {
			for (let i = 0; i < length; i++) {
				$('#tableAbout tr').eq(_aAboutListProjectSpecificLines[i]).hide();
			}
		}
	} else {
		$('#tableAbout tr').show();
	}
}

function _onTrialLinkClick() {
	sendEventToSDK("OPEN_HELP_PORTAL", { mode: _planMode});
}

function _addHelpButtonOnAboutTableRow(id, popoverContent) {
	var jqCell = $("#tableAbout td#" + id);
	if (jqCell.length > 0) {
		var htmlButton = '<button class="ctxlink btn btn-sm agent-systray-help-button" id="' + id + '_infoBtn" ctxtype="ctx.popup.bootstrap.type.button" type="button" data-toggle="popover" style="" data-original-title="" title="" data-content="' + popoverContent + '">'
		+ '<i class="glyphicon glyphicon-question-sign"></i>'
		+ '</button>';//needs to be done in jquery because we cannot add a button to a table cell through settings.js
		jqCell.append(htmlButton);
		_refreshHelpButtons();		
	}
}

//--------------------------------Project List Event Handlers
/**
* Callback when click on a project item in the project list
* Update the dialog box text to include the project name
*/
function _onClickProject(ev) {
	ev.preventDefault();//to cancel default action when clicking on a 'a' tag, so as not to lose popup methods when clicking on a 'a' tag in mode IEHost=false
	_selectedProjectId = this.id;
	var sProjectName = _findObjectInArrayById(_projectList, _selectedProjectId, "packageUniqueId").name;
	$("#restartOnProject_modal .modal-body").text(_editParameterInLabel(GLOBAL.labels.systray.switchProjectText, sProjectName));
	$(".agent-systray-project-list .agent-systray-list-group-item-clicked").removeClass('agent-systray-list-group-item-clicked');
	$(this).addClass('agent-systray-list-group-item-clicked');
}

function _addButtonsOnProjectListGroupItems() {
	$("#projectList a").each(function (index, value) {
		var projectId = this.id;
		if (projectId === _currentProjectUid + '_' + _currentEnvironmenttUid) {
			_addStopButtonOnProjectRow($(this));
		} else {
			_addStartButtonOnProjectRow($(this));
		}
	})
}

function _addStartButtonOnProjectRow(projectJQObj) {
	projectJQObj.append('<button class="btn btn-info btn-sm btn-project-item btn-start-project">' + GLOBAL.labels.systray.start + '</button>');
	var btnJQ = projectJQObj.find("button");
	btnJQ.click(function () {
		$("#restartOnProject_modal").modal('show');
	});
}

function _addStopButtonOnProjectRow(projectJQObj) {
	projectJQObj.append('<button class="btn agent-systray-btn-red btn-sm btn-project-item">' + GLOBAL.labels.systray.stop + '</button>');
	var btnJQ = projectJQObj.find("button");
	btnJQ.click(function () {
		$("#switchDefaultProject_modal").modal('show');
	});
}

/**
* Callback when click on "OK" in the dialog box after clicking on "Restart on Project"
* Sends an event to SDK to switch on the project
*/
function _onSwitchProject() {
	var selectedProject = _findObjectInArrayById(_projectList, _selectedProjectId, "packageUniqueId");
	var sProjectPackageUid = selectedProject.packageUid;

	var sEnvironmentUid = '';
	if (selectedProject.environmentUid) sEnvironmentUid = selectedProject.environmentUid;
	else sEnvironmentUid = selectedProject.environmentClassifier;

	sendEventToSDK("RESTART_ON_PROJECT", {
		packageVersionUid: selectedProject.packageVersionUid,
		packageUid: sProjectPackageUid,
		environmentUid: sEnvironmentUid
	});
	_displayLoadingSpinner();
}

/**
* Callback called when clicking on OK in the dialog box when stopping a project
*/
function _onDefaultModeItemDialogOKClick() {
	_setSwitchAutoProject(false);
	sendEventToSDK("RESTART_ON_PROJECT", {
		packageVersionUid: '',
		packageUid: ''
	});
	_displayLoadingSpinner();
}

/**
* Callback called when clicking on OK in the dialog box when switching to 'manual' mode in 'project switching mode'
*/
function _onManualSwitchProjectModeDialogOKClick() {
	_switchToManualMode();
	$("#manualSwitchProject_modal").modal('hide');
	_displayLoadingSpinner();
}

/**
* Callback called when clicking on OK in the dialog box when switching to 'auto' mode in 'project switching mode'
*/
function _onAutoSwitchProjectModeDialogOKClick() {
	_switchToAutomaticMode();
	$("#autoSwitchProject_modal").modal('hide');
	_displayLoadingSpinner();
}

/**
* Callback called when there is a change in the 'project switching mode' combobox
*/
function _onProjectModeSelectChange() {
	var mode = POPUPS.Systray.projectModeSelect.get();
	_newSwitchProjectMode = mode;
	if (mode === 'manual') {
		$('#manualSwitchProject_modal').modal('show');
	} else if (mode === 'auto') {
		$("#autoSwitchProject_modal").modal('show');
	}
}

function _setSwitchAutoProject(bIsAutoSwitchProject) {
	_currentSwitchAutoProjectValue = bIsAutoSwitchProject;
	sendEventToSDK("SWITCH_AUTO_PROJECT", {
		isAutoSwitchEnabled: _currentSwitchAutoProjectValue
	});
}

function _switchToManualMode() {
	_setSwitchAutoProject(false);
	_previousSwitchProjectMode = 'manual';
	sendEventToSDK("SWITCH_MANUAL_AUTO", { unattended: false });
}

function _switchToAutomaticMode() {
	_setSwitchAutoProject(true);
	_previousSwitchProjectMode = 'auto';
	sendEventToSDK("SWITCH_MANUAL_AUTO", { unattended: true });
}

/*
* To initialize the project page (e.g. set "project switch mode" dropdown initial value and hide "start project" buttons if automatic mode)
*/
function _initializeProjectPage(bAutoSwitch) {
	POPUPS.Systray.projectModeSelect.set(bAutoSwitch ? 'auto' : 'manual');
	_previousSwitchProjectMode = bAutoSwitch ? 'auto' : 'manual';
	_enableProjectList(!bAutoSwitch);
}

function _enableProjectList(bEnable) {
	if (bEnable) {
		$("#projectList .btn-project-item").show();
		$("#projectList .badge").hide();
		$("#projectList").removeClass('disabled');
	} else {
		$("#projectList .btn-project-item").hide();
		$("#projectList .badge").show();
		$("#projectList").addClass('disabled');
	}
}

//--------------------------------Tenant list methods
function _onBtTenantClick() {
	var aTenantActive = _tenantList.filter(function (tenant) { return tenant.active });
	if (aTenantActive.length == 1) {
		_selectedTenantId = aTenantActive[0].id;
		_selectedTenantName = aTenantActive[0].name;
		_selectedTenantUrl = aTenantActive[0].url;
		$("#btTenantEdit").prop('disabled', false);
		_highlightSelectedTenant($(".agent-systray-tenant-li a#" + _selectedTenantId));
	}
	_showPage("pgTenants");
}

function _highlightSelectedTenant(jQSelectedTenant) {
	$(".agent-systray-tenant-li .agent-systray-list-group-item-clicked").removeClass('agent-systray-list-group-item-clicked');
	jQSelectedTenant.addClass('agent-systray-list-group-item-clicked');
}

/**
* Callback called when selecting a tenant in tenant list
*/
function _onClickTenant(ev) {
	ev.preventDefault();//to cancel default action when clicking on a 'a' tag, so as not to lose popup methods when clicking on a 'a' tag in mode IEHost=false
	_selectedTenantId = this.id;
	var selectedTenant = _findObjectInArrayById(_tenantList, _selectedTenantId, "id");
	_selectedTenantName = selectedTenant.name;
	_selectedTenantUrl = selectedTenant.url;
	$("#btTenantRestart_modal .modal-body").text(_editParameterInLabel(GLOBAL.labels.systray.switchTenantText, _selectedTenantName));
	$("#btTenantDelete_modal .modal-body").text(_editParameterInLabel(GLOBAL.labels.systray.deleteTenantText,_selectedTenantName));
	if (!selectedTenant.active) {
		$("#btTenantRestart").prop('disabled', false);
		$("#btTenantDelete").prop('disabled', false);
	} else {
		$("#btTenantRestart").prop('disabled', true);
		$("#btTenantDelete").prop('disabled', true);
	}
	$("#btTenantEdit").prop('disabled', false);
	_highlightSelectedTenant($(this));
}

function _onAddTenant() {
	POPUPS.Systray.alertTenantAddEditInfo.update({ visible: false });
	$("#btTenantSave").unbind('click');
	$("#btTenantSave").click(_onAddTenantSave);
	POPUPS.Systray.itemTenantAddEditTitle.set(_noTenantFile ? GLOBAL.labels.systray.desktopAgentTenantRegistration : GLOBAL.labels.systray.addTenant);
	POPUPS.Systray.tenantName.set('');
	POPUPS.Systray.tenantDomain.set('');
	_removeValidationFailureOutlineIfAny();
}

function _onEditTenant() {
	POPUPS.Systray.alertTenantAddEditInfo.update({ visible: false });
	$("#btTenantSave").unbind('click');
	POPUPS.Systray.tenantName.set(_selectedTenantName);
	POPUPS.Systray.tenantDomain.set(_selectedTenantUrl);
	$("#btTenantSave").click(_onEditTenantSave);
	POPUPS.Systray.itemTenantAddEditTitle.set(GLOBAL.labels.systray.editTenant);
	_removeValidationFailureOutlineIfAny();
}

function _onDeleteTenant() {
	sendEventToSDK("REMOVE_TENANT", {
		tenantId: _selectedTenantId
	});
	_tenantList = _tenantList.filter(function (tenant) { return tenant.id !== _selectedTenantId });
	updateTenantList(_tenantList);
	$("#btTenantEdit").prop('disabled', true);
	$("#btTenantDelete").prop('disabled', true);

}

function _onAddTenantSave() {
	if (_validateTenantSaveForm()) {
		sendEventToSDK("ADD_EDIT_TENANT", {
			tenantId: POPUPS.Systray.tenantName.get().replace(/\s/g, ""),
			tenantName: POPUPS.Systray.tenantName.get(),
			tenantUrl: POPUPS.Systray.tenantDomain.get(),
			isTenantToAdd: true,
			firstTenantRegistration: _noTenantFile
		});
		POPUPS.Systray.alertTenantAddEditInfo.set(GLOBAL.labels.systray.tenantValidationInProgress);
		POPUPS.Systray.alertTenantAddEditInfo.update({ visible: true });
	}
}

function _onEditTenantSave() {
	if (_validateTenantSaveForm()) {
		sendEventToSDK("ADD_EDIT_TENANT", {
			tenantId: _selectedTenantId,
			tenantName: POPUPS.Systray.tenantName.get(),
			tenantUrl: POPUPS.Systray.tenantDomain.get(),
			isTenantToAdd: false,
			firstTenantRegistration: false
		});
		POPUPS.Systray.alertTenantAddEditInfo.set(GLOBAL.labels.systray.tenantValidationInProgress);
		POPUPS.Systray.alertTenantAddEditInfo.update({ visible: true });
	}
}

/**
* Called when SDK signals that the tenant to add/edit is valid
*/
function onSuccessAddEditTenant(sTenantId, sTenantName, sTenantUrl) {
	if (_noTenantFile) {
		sendEventToSDK("RESTART_ON_TENANT", {
			tenantId: sTenantId,
			firstTenantRegistration: true //do not restart agent
		});
	}
	var foundTenant = _findObjectInArrayById(_tenantList, sTenantId, "id");
	if (!foundTenant) {
		_tenantList.push({
			id: sTenantId,
			name: sTenantName,
			url: sTenantUrl,
			active: _noTenantFile ? true : false
		});
	} else {
		_editObjectInArrayById(_tenantList, sTenantId, {
			id: sTenantId,
			name: sTenantName,
			url: sTenantUrl,
			active: foundTenant.active
		});
		if (foundTenant.active) {
			sendEventToSDK("RESTART_ON_TENANT", {
				tenantId: sTenantId,
				firstTenantRegistration: false
			});
		}
	}
	_tenantList.sort(function (a, b) {
		var nameA = a.name.toUpperCase();
		var nameB = b.name.toUpperCase();
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return 0;
	});
	_updateTenantListAndLeaveTenantSaveForm();
}

/**
* Called when SDK signals that the tenant to add/edit is not valid
*/
function onFailureAddEditTenant(sErrorLabel) {
	POPUPS.Systray.alertTenantAddEditInfo.update({ visible: true });
	POPUPS.Systray.alertTenantAddEditInfo.set(sErrorLabel);
}

function _validateTenantSaveForm() {
	var bTenantNameValid = _validateInputNotEmpty("tenantName");
	var bTenantDomainValid = _validateInputNotEmpty("tenantDomain");
	return bTenantNameValid && bTenantDomainValid;
}

function _updateTenantListAndLeaveTenantSaveForm() {
	POPUPS.Systray.alertTenantAddEditInfo.update({ visible: false });
	updateTenantList(_tenantList);
	_showPage("pgTenants", true);
	$("#btTenantSave").unbind('click');
	$("#btTenantEdit").prop('disabled', true);
	$("#btTenantDelete").prop('disabled', true);
	if (_noTenantFile) {
		_noTenantFile = false;
		POPUPS.Systray.btTenantCancel.show();
		$("#itemTenantAddEditTitle").removeClass('agent-systray-h5-wrap').addClass('agent-systray-h5');
		POPUPS.Systray.itemNoTenantFileAddTenant.show(false);
		POPUPS.Systray.btCancel_NoTenantFile.show(false);
	}
}

function _removeValidationFailureOutlineIfAny() {
	$("#tenantName_content").removeClass("has-error");
	$("#tenantName_content .help-block").remove();
	$("#tenantDomain_content").removeClass("has-error");
	$("#tenantDomain_content .help-block").remove();
}

function _onRestartTenant() {
	sendEventToSDK("RESTART_ON_TENANT", {
		tenantId: _selectedTenantId
	});
}

function _onBtTenantBack() {
	$("#btTenantRestart").prop('disabled', true);
	$("#btTenantEdit").prop('disabled', true);
	$("#btTenantDelete").prop('disabled', true);
	_toMainPage();
}

//--------------------------------Desktop Agent Tenant Registration methods
function onNoSelectTenantFile() {
	if (!_noTenantFile) {
		_noTenantFile = true;
		_onAddTenant();
		POPUPS.Systray.btTenantCancel.show(false);
		$("#itemTenantAddEditTitle").removeClass('agent-systray-h5').addClass('agent-systray-h5-wrap');
		POPUPS.Systray.itemNoTenantFileAddTenant.show();
		POPUPS.Systray.btCancel_NoTenantFile.show();
		_showPage('pgTenantAddEdit');
	}
}

//--------------------------------Job Progress Page Methods
function _onClickTableJobProgressRow() {
	var job = _oJobListMap[this.id];
	_showPage("pgJobProgressDetails");
	POPUPS.Systray.tableJobDetails.set([
		[GLOBAL.labels.systray.jobProject + ":", job.project],
		[GLOBAL.labels.systray.jobCreationDate + ":", job.ts],
		[GLOBAL.labels.systray.jobExecutionDate + ":", job.tsRun],
		[GLOBAL.labels.systray.jobDuration + ":", job.duration],
		[GLOBAL.labels.systray.jobStatusLabel + ":", job.status],
		[GLOBAL.labels.systray.jobCode + ":", job.code],
		[GLOBAL.labels.systray.jobName + ":", job.name || (job.appliName ? job.appliName + '.' + job.scenario : job.scenario)],
		[GLOBAL.labels.systray.jobLabel + ":", job.label]
	]);
}

//--------------------------------Settings Page Event Handlers
/**
* Callback when click on 'save settings' in settings page
*/
function _onSaveSettings() {
	var passwordWindowsUIValue = '';
	var bWaitErrorToLeavePage = false;
	for (var key in _oSettingsMap) {
		var setting = _oSettingsMap[key];
		var oDataToSendToSDK = {};
		if (_isSettingHasChanged(setting)) {
			if (!$("#rdRemoveWindowsPassword").prop('checked') && setting.settingID === 'itemPasswordRestartAgent') {
				passwordWindowsUIValue = _getUISettingValue(setting);
			} else if (!$("#rdRemoveWindowsPassword").prop('checked') && setting.settingID === 'rdPutPassword') {
				//nothing
			} else {
				setting.settingValue = _getUISettingValue(setting);
			}			
			if (setting.waitNoError) {
				bWaitErrorToLeavePage = $("#rdRemoveWindowsPassword").prop('checked') && setting.settingID === 'itemPasswordRestartAgent' ? false : true;				
			}
		}
		if ('undefined' !== typeof setting.settingValue) {
			if (setting.sdkEventDataName) {
				if (setting.sdkEventDataName === 'windowsPassword') {
					oDataToSendToSDK['windowsPassword'] = !$("#rdRemoveWindowsPassword").prop('checked') ? passwordWindowsUIValue : '-1';
				} else {
					oDataToSendToSDK[setting.sdkEventDataName] = setting.settingValue;
				}				
				sendEventToSDK(setting.sdkEventName, oDataToSendToSDK);
			}
		}
	}	
	if ($("#chItemcheckBoxProxy").prop('checked')) {
		var oDataToSendToSDK = {};
		oDataToSendToSDK['proxyPassword'] = $("#itemProxyPassword").val();
		oDataToSendToSDK['proxyUser'] = $("#itemProxyUserName").val();
		sendEventToSDK('SET_PROXY', oDataToSendToSDK);
	}
	if(!bWaitErrorToLeavePage && !POPUPS.Systray.alertBadPassword.visible)
	{
		_leaveSettingsPage();
	}
		
}

/**
* Callback called when there is a change on one of the settings
* If there is a change in the Settings page, add a confirmation dialog box to the "Back" button
*/
function _onChangeInSettingsPage() {
	_EnableOrDisableOnChangedSetting();
	var bIsSettingsHaveChanged = _isSettingsHaveChanged();
	$("#btSettingsSave").prop('disabled', !bIsSettingsHaveChanged);
	if (!_isAlreadyChangeInSettingsPage) {
		$("#btSettingsBack").unbind('click');
		_addDialogBoxOnButton("btSettingsBack", GLOBAL.labels.systray.unsavedDataLoss, GLOBAL.labels.buttons.ok, GLOBAL.labels.systray.cancel, _onClickSettingsBackDialogBoxOKButton);
		_isAlreadyChangeInSettingsPage = true;
	}
	if (!bIsSettingsHaveChanged) {
		POPUPS.Systray.alertSettingsChange.update({ visible: false });
		_removeDialogBoxOnButton("btSettingsBack");
		$("#btSettingsBack").click(_toMainPage);
		_isAlreadyChangeInSettingsPage = false;
	}
}

/**
* Callback when click on 'OK' in the "Going back will result in the loss of unsaved data" confirmation
* dialog box in Settings page
*/
function _onClickSettingsBackDialogBoxOKButton() {
	_resetSettings();
	_leaveSettingsPage();
}

/**
* Remove confirmation dialog box linked to the "Back" button, Disable "Save settings" button, etc.
*/
function _leaveSettingsPage() {
	$("#btSettingsSave").prop('disabled', true);
	POPUPS.Systray.alertSettingsChange.update({ visible: false });
	POPUPS.Systray.alertBadPassword.update({ visible: false });

	_removeDialogBoxOnButton("btSettingsBack");
	$("#btSettingsBack").click(_toMainPage);
	_isAlreadyChangeInSettingsPage = false;
	_toMainPage();
	$(".modal-backdrop").remove();
}

function _isSettingsHaveChanged() {
	var bIsSettingsHaveChanged = false;
	for (var key in _oSettingsMap) {
		var setting = _oSettingsMap[key];
		bIsSettingsHaveChanged = _isSettingHasChanged(setting);
		if (bIsSettingsHaveChanged) break;
	}
	return bIsSettingsHaveChanged;
}

function _EnableOrDisableOnChangedSetting() {
	
	for (var key in _oSettingsMap) {
		var oSetting = _oSettingsMap[key];
		switch (oSetting.settingType) {
			case settingTypes.RADIO:
			case settingTypes.CHECKBOX:
				var isChecked = $("#" + oSetting.settingID).prop('checked');
				var listIdToGreyOut = oSetting.listIdToGreyOut?oSetting.listIdToGreyOut:[];
				listIdToGreyOut.forEach(function(element){ 
					$("#" + element).prop('disabled',!isChecked); });
				//handle specific case when autoRestart is unchecked and rdPutPassword is checked
				if (!$("#chAutoRestart").prop('checked') && $("#rdPutPassword").prop('checked'))
					$("#itemPasswordRestartAgent").prop('disabled', true);
				const listIdToPutNotVisible = oSetting.listIdToPutNotVisible?oSetting.listIdToPutNotVisible:[];
				listIdToPutNotVisible.forEach(function(element){ 
					$("#" + element).prop('disabled',!isChecked);
					if(isChecked)
						$("#" + element + "_content").show();
					else
						$("#" + element + "_content").hide();
				});
				break;
	
		}
	}
}

function _isSettingHasChanged(oSetting) {
	return oSetting.settingValue !== _getUISettingValue(oSetting) && (oSetting.settingInStudioModeOnly ? _isStudioMode : true);
}

function _getUISettingValue(oSetting) {
	switch (oSetting.settingType) {
		case settingTypes.COMBOBOX:
			return POPUPS.Systray[oSetting.settingID].get();
		case settingTypes.CHECKBOX:
			return $("#" + oSetting.settingID).prop('checked');
		case settingTypes.RADIO:
			return $("#" + oSetting.settingID).prop('checked');
		case settingTypes.PASSWORD:
		case settingTypes.INPUT:
			return $("#" + oSetting.settingID).val();
	}
}

function _resetSettings() {
	for (var key in _oSettingsMap) {
		var setting = _oSettingsMap[key];
		switch (setting.settingType) {
			case settingTypes.COMBOBOX:
				POPUPS.Systray[setting.settingID].set(setting.settingValue);
				break;
			case settingTypes.CHECKBOX:
				$("#" + setting.settingID).prop('checked', setting.settingValue);
				//SAPMLIPA-18514 : special case for proxy password and username input displaying
				if (setting.settingID === 'chItemcheckBoxProxy' && $("#" + setting.settingID).prop('checked')) {
					POPUPS.Systray.itemProxyUserName.show(true);
					$("#itemProxyUserName").prop('disabled', false);
					POPUPS.Systray.itemProxyPassword.show(true);
					$("#itemProxyPassword").prop('disabled', false);
				}
				break;
			case settingTypes.PASSWORD:
			case settingTypes.INPUT:
			    $("#" + setting.settingID).val(setting.settingValue);
				break;
			case settingTypes.RADIO:
				if (setting.settingID === 'rdPutPassword') {
					$("#rdPutPassword").prop('checked', setting.settingValue);
					$("#rdRemoveWindowsPassword").prop('checked', !setting.settingValue);
					$("#itemPasswordRestartAgent").prop("disabled", !setting.settingValue);
				}
				break;
		}
	}
}

function _onCheckProxyCheckbox() {
	if ($("#chItemcheckBoxProxy").prop('checked') === false) {
		$("#itemProxyUserName").val('');
		$("#itemProxyPassword").val('');
	}
}

function _onChangeProxyUsername() {
	if (!_proxyUsernameHasChanged) {
		_proxyUsernameHasChanged = true;
		$("#itemProxyPassword").val('');
	}	
}

//--------------------------------Shutdown/Restart Methods
function _onRestartAgentButton() {
	sendEventToSDK("RESTART_AGENT", {});
	_displayLoadingSpinner();
}

function _onShutdownAgentButton() {
	sendEventToSDK("SHUTDOWN_AGENT", {});
	_displayLoadingSpinner();
}



//--------------------------------SDK Integration
/**
* To update menu list based on an array
* @param {Array} aMenuList Array containing the menus of a project
*/
function updateMainMenu(aMenuList) {
	if (!Array.isArray(aMenuList)) return;
	_initialMenuList = aMenuList;
	if (_isStudioMode) {
		//SAPMLIPA-9742 - In Studio mode: append " - Test Mode" to systray title (only "About", "Projects", "Main" screens)
		POPUPS.Systray.itemMainTitle.set(GLOBAL.labels.systray.desktopAgent + " - " + GLOBAL.labels.systray.testMode);
	} else {
		POPUPS.Systray.itemMainTitle.set(GLOBAL.labels.systray.desktopAgent);
	}
	$("#btMainBack").unbind('click');
	$("#btMainBack").hide();
	_showMenuList(_initialMenuList, _isStudioMode, _isDefaultMode);
}

/**
* To update project list based on an array
* @param {Array} aInputProjectList Projects Array
* @param {string} sCurrentProjectUid PackageVersionUid of current project; if undefined, then default mode
* @param {string} sCurrentEnvironmentUid EnvironmentUid of current project
*/
function updateProjectList(aInputProjectList, sCurrentProjectUid, sCurrentEnvironmentUid) {
	if (!Array.isArray(aInputProjectList)) return;
	_projectList = aInputProjectList;
	_currentProjectUid = sCurrentProjectUid;
	_currentEnvironmenttUid = sCurrentEnvironmentUid;
	POPUPS.Systray.projectList.update({ items: null });
	$("#projectList").show();
	$("#itemEmptyProjectListLabel").hide();
	var aProjectArray = [];
	var inputProjectListLength = aInputProjectList.length;
	if (inputProjectListLength > 0) {
		for (let i = 0; i < inputProjectListLength; i++) {
			var bIsProjectActive = aInputProjectList[i].packageVersionUid === sCurrentProjectUid;
			_projectList[i].packageUniqueId = aInputProjectList[i].packageVersionUid + '_' + aInputProjectList[i].environmentUid;
			aProjectArray.push({
				id: _projectList[i].packageUniqueId,
				value: "<b>" + _truncateTextIfOverLength(aInputProjectList[i].name, MAX_PROJECT_LIST_ITEM_STRING_LENTH) + "</b><br/>" + _truncateTextIfOverLength(aInputProjectList[i].environmentName + ' (' + aInputProjectList[i].environmentClassifier + ')' + ' - ' + aInputProjectList[i].version, MAX_PROJECT_LIST_ITEM_STRING_LENTH),
				myClass: bIsProjectActive ? 'agent-systray-list-group-item-clicked' : '',
				badge: bIsProjectActive ? GLOBAL.labels.systray.active : null
			});
		}
		POPUPS.Systray.projectList.update({ items: aProjectArray });
		$("#projectList a").click(_onClickProject);
		$("#projectList a").removeAttr('href');
		_addButtonsOnProjectListGroupItems();
	} else {
		$("#projectList").hide();
		$("#itemEmptyProjectListLabel").show();
	}
	//Initialize project page based on AutoSwitch value
	_initializeProjectPage(_currentSwitchAutoProjectValue);
}

/**
* To update "Environment List" combobox setting (only displayed in studio mode)
* @param {Array} aInputEnvironmentList Environments Array
* @param {string} sCurrentEnvUid environmentUid of current environment
*/
function updateEnvironmentList(aInputEnvironmentList, sCurrentEnvUid) {
	if (!Array.isArray(aInputEnvironmentList)) return;
	_environmentList = aInputEnvironmentList;
	_oSettingsMap.environment.settingValue = sCurrentEnvUid;
	$("#envList option").remove();
	var envListLength = aInputEnvironmentList.length;
	if (envListLength > 0) {
		for (let i = 0; i < envListLength; i++) {
			var envNameWithClassifier = aInputEnvironmentList[i].classifier? aInputEnvironmentList[i].name + ' - ' +aInputEnvironmentList[i].classifier : aInputEnvironmentList[i].name;
			$("#envList").append('<option value="' + aInputEnvironmentList[i].environmentUid + '">' + envNameWithClassifier+ '</option>');
		}
		POPUPS.Systray.envList.set(_oSettingsMap.environment.settingValue);
	}
}

/**
* To update tenant list based on an array
* @param {Array} aInputTenantList Tenants Array
*/
function updateTenantList(aInputTenantList) {
	if (!Array.isArray(aInputTenantList)) return;
	_tenantList = aInputTenantList;
	POPUPS.Systray.tenantList.update({ items: null });
	var aTenantArray = [];
	var inputTenantListLength = aInputTenantList.length;
	if (inputTenantListLength > 0) {
		for (let i = 0; i < inputTenantListLength; i++) {
			aTenantArray.push({
				id: aInputTenantList[i].id,
				value: "<b>" + _truncateTextIfOverLength(aInputTenantList[i].name, MAX_TENANT_LIST_ITEM_STRING_LENTH) + "</b><br/>" + _truncateTextIfOverLength(aInputTenantList[i].url, MAX_TENANT_LIST_ITEM_STRING_LENTH),
				myClass: aInputTenantList[i].active ? 'agent-systray-list-group-item-clicked' : '',
				badge: aInputTenantList[i].active ? GLOBAL.labels.systray.active : null
			});
		}
	}
	POPUPS.Systray.tenantList.update({ items: aTenantArray });
	$("#tenantList a").click(_onClickTenant);
	$("#tenantList a").removeAttr('href');
}

/**
* To update "about" page based on an array
* @param {Array} aAboutList About List Array
*/
function updateAbout(aAboutList) {
	if (!Array.isArray(aAboutList)) return;
	_aboutList = [];
	for (let i = 0; i < aAboutList.length; i++) {
		if (aAboutList[i].labelValuePair) {
			_aboutList.push(aAboutList[i].labelValuePair);
			_aboutTableIds[i] = aAboutList[i].id;
			if (aAboutList[i].isProjectSpecific) {
				_aAboutListProjectSpecificLines.push(i);
			}
		}
	}
	POPUPS.Systray.tableAbout.set(_aboutList);
	//Add an ID to value column cells
	var aboutTableValueColumnCells = $("#tableAbout tr td.text-default");
	aboutTableValueColumnCells.each(function(j) {aboutTableValueColumnCells[j].id = _aboutTableIds[j]});
	//Add Renderer field
	$("#tableAbout #renderer").text((window.chrome && window.chrome.webview ? 'Chromium-Edge' : 'IE11'));
}

/**
* To update agent status in "about" page 
* @param {string} status agent status
* @param {string} label label to add under status
* @param {string} description detailed description of label to add in help button
*/
function updateAgentStatus(status, label, description) {
	if (Object.keys(e.agentStatus).includes(status)) {
		_agentStatus = status;
		_agentStatusLocalized = GLOBAL.labels.systray.agentStatus[_agentStatus];
		_agentStatusLabel = label;
		_agentStatusDescription = description;
		if (_agentStatusDescription) {
			$("#btHelpAboutStatus").attr('data-content', _agentStatusDescription);
			$("#btHelpAboutStatus").show();
		} else {
			$("#btHelpAboutStatus").hide();
		}
		POPUPS.Systray.aboutImage.update({ src: "icons/" + _agentStatus + ".png" });
		POPUPS.Systray.aboutStatus.set("<b>" + _agentStatusLocalized + "</b><br/>" + _agentStatusLabel);
		//Modify About button based on status
		$("#btAbout>i").remove();
		$("#btAbout>span").remove();
		$("#btAbout").append('<span class="' + AGENT_STATUS_ICON_MAP[_agentStatus] + '"></span>');
	}
}

/**
* To update "language" select dropdown in Settings page based on a json
* @param {Array} aLanguageList Language List Array
*/
function updateLanguageList(aLanguageList) {
	if (!Array.isArray(aLanguageList)) return;
	_languageList = aLanguageList;
	$("#language option").remove();
	var languageListLength = aLanguageList.length;
	if (languageListLength > 0) {
		for (let i = 0; i < languageListLength; i++) {
			$("#language").append('<option value="' + aLanguageList[i].id + '">' + aLanguageList[i].value + '</option>');
		}
	}
}

/** 
 *  Call from SDK to know if SET_WINDOWSPASSWORD is failed or not
*/
function setPasswordFailed(hasFailed) {
	if(hasFailed)
	{
		POPUPS.Systray.alertSettingsChange.update({ visible: false });
		POPUPS.Systray.alertBadPassword.update({ visible: true });
	}
	else{
		_oSettingsMap.radioWindowsPassword.settingValue = _getUISettingValue(_oSettingsMap.radioWindowsPassword);
		_oSettingsMap.windowsPassword.settingValue = _getUISettingValue(_oSettingsMap.windowsPassword);
		_leaveSettingsPage();
	}
	
}

/**
* Enable windows password
*/
function enableWindowsPassword(enable, fullUserName) {
	POPUPS.Systray.itemPasswordRestartAgent.show(enable);	
	POPUPS.Systray.itemRadioButtonWindowsPassword.show(enable);
	POPUPS.Systray.itemUserNameRestartAgent.show(enable);

	//put username
	$("#itemUserNameRestartAgent").prop('disabled', true);
	$("#itemUserNameRestartAgent").val(fullUserName);
}

/**
* Enable proxy password
*/
function enableProxyPassword(enable, hasProxy, userName) {
	POPUPS.Systray.itemProxyUserName.show(enable);	
	POPUPS.Systray.itemcheckBoxProxy.show(enable);
	POPUPS.Systray.itemProxyPassword.show(enable);
	$("#itemcheckBoxProxy").prop('disabled', false);

	checkEnableProxy(hasProxy,userName);
}

/**
* To add a job to the job list in "Job Progress" page
* If the "Job Progress" table row count exceeds MAX_JOB_PROGRESS_TABLE_ROW_NUMBER, the first job added is removed from the list.
* @param {ctx.jobClass} job Job List JSON
*/
function addToJobList(job) {
	var key = job.id;
	var bJobFailed = job.code && job.code !== "OK";
	var bJobSuccessful = job.code && job.code === "OK";
	var tableRowHtmlContent = '<td style class="text-default ' + (bJobFailed ? 'agent-systray-job-progress-failed-row' : '') + (bJobSuccessful ? 'agent-systray-job-progress-success-row' : '') + '">' + job.status + '</td><td style class="text-default">' + (job.tsRun ? job.tsRun.substring(job.tsRun.indexOf(' ') + 1) : '') + '</td><td style class="text-default">' + (job.name || job.scenario) + '</td>';
	if (_oJobListMap[key]) {
		$("#tableJobProgress > tbody > tr#" + key + "").html(tableRowHtmlContent);
	} else {
		$("#tableJobProgress > tbody").prepend('<tr id="' + key + '">' + tableRowHtmlContent + '</tr>');
		$("#tableJobProgress > tbody > tr#" + key + "").click(_onClickTableJobProgressRow);
	}
	_oJobListMap[key] = job;
	if (Object.keys(_oJobListMap).length > MAX_JOB_PROGRESS_TABLE_ROW_NUMBER) {
		var jobListMapKeyToRemove = Object.keys(_oJobListMap)[0];
		$("#tableJobProgress > tbody > tr#" + jobListMapKeyToRemove + "").remove();
		delete _oJobListMap[jobListMapKeyToRemove];
	}
}

/**
* To set variable _isStudioMode in popup
* @param {boolean} isStudioMode
*/
function setIsStudioMode(isStudioMode) {
	_isStudioMode = isStudioMode;
}

/**
* To set variable _planMode to 2 if is FreeMode in popup
* Show Free Mode ribbon in try2buy Mode or tial mode
* @param {number} 0 for default, 1 for trial mode, 2 for try2buy mode
*/
function setPlanMode(planMode) {
		_planMode = planMode;
		_initPlanModeAlert();

	POPUPS.Systray.alertTrialMode.show(_planMode!==0);
}

/**
* To set variable _currentLanguage in popup
* @param {string} currentLanguage
*/
function setCurrentLanguage(currentLanguage) {
	_oSettingsMap.language.settingValue = currentLanguage;
}

/**
* To set variable _isAutoRestartEnabled in popup
* Checks the "Automatically start at Windows logon" checkbox accordingly
* @param {boolean} isAutoRestartEnabled
*/
function setIsAutoRestartEnabled(isAutoRestartEnabled) {
	_oSettingsMap.autoRestart.settingValue = isAutoRestartEnabled;
	$("#chAutoRestart").prop('checked', _oSettingsMap.autoRestart.settingValue);
}

/**
* To set variable _currentSwitchAutoProjectValue in popup
* @param {boolean} isAutoSwitchEnabled
*/
function setIsAutoSwitchEnabled(isAutoSwitchEnabled) {
	_currentSwitchAutoProjectValue = isAutoSwitchEnabled;
}

/**
* To set variable _isAnonymous in popup
* @param {boolean} isAnonymous
*/
function setIsAnonymous(isAnonymous) {
	_isAnonymous = isAnonymous;
}


/**
* To set variable _hasProxy in popup
* @param {boolean} hasProxy
*/
function setHasProxySetting(hasProxy) {
	_oSettingsMap.itemcheckBoxProxy.settingValue = hasProxy;
	$("#chItemcheckBoxProxy").prop('checked', _oSettingsMap.itemcheckBoxProxy.settingValue);
}


/** SAPMLIPA-18361 : Display full anonymized username and machinename in tooltip on about page */
function setUserNameAnonymized(username) {
	_userNameAnonymous = username;
}

function setMachineNameAnonymized(machinename) {
	_machineNameAnonymous = machinename;
}

/**
 * To update UI elements based on variable values
 * To be called after variables have been set and after all dynamic elements have been updated
 */
function postUpdate() {
	// in Studio mode: disable "Restart" + show Environment combobox in Settings
	$("#btQuit_modal_restart").prop('disabled', _isStudioMode);
	POPUPS.Systray.envList.show(_isStudioMode);
	//Sets _currentLanguage in the "Language" combobox
	POPUPS.Systray.language.set(_oSettingsMap.language.settingValue);
	//In Studio mode: hide 'project switching mode' combobox
	POPUPS.Systray.btHelpProjectMode.show(!_isStudioMode);
	POPUPS.Systray.projectModeSelect.show(!_isStudioMode);
	//SAPMLIPA-9742 - In Studio mode: append " - Test Mode" to systray title (only "About", "Projects", "Main" screens)
	if (_isStudioMode) {		
		POPUPS.Systray.itemAboutTitle.set(GLOBAL.labels.systray.about + " - " + GLOBAL.labels.systray.testMode);
		POPUPS.Systray.itemProjectsTitle.set(GLOBAL.labels.systray.projects + " - " + GLOBAL.labels.systray.testMode);
	}
	//SAPMLIPA-18075 : Display anonymized username and computername
	if (_isAnonymous) {
		_addHelpButtonOnAboutTableRow("userName", GLOBAL.labels.systray.anonymousField + '<br><a>' + GLOBAL.labels.systray.fullAnonymousUserName + '</a>');
		_addHelpButtonOnAboutTableRow("machineName", GLOBAL.labels.systray.anonymousField + '<br><a>' + GLOBAL.labels.systray.fullAnonymousMachineName + '</a>');
		//SAPMLIPA-18361: Dialog box in anonymized user/machine name popover
		_createConfirmationDialogBox('anonymizedUsername', _userNameAnonymous, GLOBAL.labels.buttons.ok, '', function() {$("#anonymizedUsername_modal").modal('hide');}, jQueryInsertTypes.APPEND, "containerAbout");
		$("#anonymizedUsername_modal .modal-body").css('word-break', 'break-all');
		$("#userName_infoBtn").click( function () {
			$(".popover a").css('cursor', 'pointer');
			$(".popover a").click(function(ev) {
				ev.preventDefault();
				$("#anonymizedUsername_modal").modal('show');
			});
		});
		_createConfirmationDialogBox('anonymizedMachineName', _machineNameAnonymous, GLOBAL.labels.buttons.ok, '', function() {$("#anonymizedMachineName_modal").modal('hide');}, jQueryInsertTypes.APPEND, "containerAbout");
		$("#anonymizedMachineName_modal .modal-body").css('word-break', 'break-all');
		$("#machineName_infoBtn").click( function () {
			$(".popover a").css('cursor', 'pointer');
			$(".popover a").click(function(ev) {
				ev.preventDefault();
				$("#anonymizedMachineName_modal").modal('show');
			});
		});	
	}
}

function setIsDefaultModeAndUpdateUI(bDefaultMode) {
	_isDefaultMode = bDefaultMode;
	//Update main menu page
	_showMenuList(_initialMenuList, _isStudioMode, _isDefaultMode);
	//Update "About" table
	_hideProjectSpecificLinesAboutTable(_isDefaultMode);
}

/**
* To send event to SDK
* @param {string} command Name of command to send to SDK
* @param {*} data Data to send to SDK
*/
function sendEventToSDK(command, data) {
	ctx.notify('Ctx_Systray', 'evSystray', {
		name: command,
		value: data
	});
}

/**
* Enables/disables a menu item in the main menu
* @param {string} sMenuId Menu ID
* @param {boolean} bEnable
*/
function enableMenu(sMenuId, bEnable) {
	var menuItem = _findMenuItemInMenuArrayById(_initialMenuList, sMenuId);
	menuItem.disabled = !bEnable;
	_showMenu(_initialMenuList, _currentMenuId);
}

/**
* Deletes a menu item in the main menu
* @param {string} sMenuId Menu ID
*/
function deleteMenu(sMenuId) {
	_initialMenuList = _deleteMenuItemInMenuArrayById(_initialMenuList, sMenuId);
	_showMenu(_initialMenuList, _currentMenuId);
}

/**
* Updates a menu item in the main menu with new item and new icon
* @param {string} sMenuId Menu ID
* @param {string} sNewTextValue
* @param {string} sNewIconId Icon ID of previously loaded 16x16 icon
*/
function updateMenu(sMenuId, sNewTextValue, sNewIconId) {
	var menuItem = _findMenuItemInMenuArrayById(_initialMenuList, sMenuId);
	menuItem.name = sNewTextValue;
	if (sNewIconId) {
		menuItem.icon = sNewIconId;
	} else {
		delete menuItem.icon;
	}
	_showMenu(_initialMenuList, _currentMenuId);
}

/**
* Loads an image in map to be re-used later
* @param {string} sIconId Icon ID to assign to image
* @param {string} sIconFilename Image filepath
*/
function loadImage(sIconId, sIconFilename) {
	if (sIconId && sIconFilename) {
		_iconMap[sIconId] = sIconFilename.replace(/\\/g, "/");
	}
}

/**
* Checks/unchecks a menu item in the main menu
* @param {string} sMenuId Menu ID
* @param {boolean} bChecked
*/
function check(sMenuId, bChecked) {
	var menuItem = _findMenuItemInMenuArrayById(_initialMenuList, sMenuId);
	menuItem.checked = bChecked;
	_showMenu(_initialMenuList, _currentMenuId);
}

function injectGlobalLabelsIntoSystray(globalLabels) {
	GLOBAL.labels.set(globalLabels);
}

/*
 * Call from SDK side at start to know if the windows password has already be set or not
 */
function checkEnablePassword(enable) {
	if(enable) {
		_oSettingsMap.windowsPassword.settingValue = 'SAP-1-1-1-1-1-1';
		_oSettingsMap.radioWindowsPassword.settingValue = true;
		$("#rdPutPassword").prop('checked', true);
		$("#itemPasswordRestartAgent").val('SAP-1-1-1-1-1-1'); //SET FAKE PASSWORD IF IT IS ALREADY SET
	} else {
		_oSettingsMap.windowsPassword.settingValue = '';
		_oSettingsMap.radioWindowsPassword.settingValue = false;
		$("#rdRemoveWindowsPassword").prop('checked', true);
		$("#itemPasswordRestartAgent").prop("disabled",true);
	}
}

function checkEnableProxy(enable, userName) {
	$("#chItemcheckBoxProxy").prop('disabled', false);
	if (enable) {
		$("#chItemcheckBoxProxy").prop('checked', true);
		
		$("#itemProxyPassword_content").show(); 
		$("#itemProxyUserName_content").show();
	if(userName)
		{
			$("#itemProxyPassword").val('SAP-1-1-1-1-1-1'); //SET FAKE PASSWORD IF IT IS ALREADY SET
			$("#itemProxyUserName").val(userName);
		}
		else
		{
			
			//No Value
			$("#itemProxyPassword").val(); 
			$("#itemProxyUserName").val();
		}
	}
	else {
		//$("#chItemcheckBoxProxy").prop('checked', false);
		$("#itemProxyPassword_content").hide(); 
		$("#itemProxyUserName_content").hide();
	}
}


function disableOrEnableAllMenu(enable) {
	if(enable)
	{
		$("#projectMenuList a").prop('disabled',false);
		$("#projectMenuList a").css('color','');		
	}
	else
	{
		$("#projectMenuList a").prop('disabled',true);
		$("#projectMenuList a").css('color','#ddd'); //temporary
	}
}