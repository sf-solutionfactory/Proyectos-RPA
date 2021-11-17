// Desktop Studio
// Auto-generated declaration file : do not modify !



var POPUPS = POPUPS || ctx.addApplication('POPUPS');



var Saplogon = ctx.addApplication('Saplogon', {"nature":"UIAUTOMATION","path":"C:\\Program Files (x86)\\SAP\\FrontEnd\\SapGui\\saplogon.exe"});

Saplogon.pHome = Saplogon.addPage('pHome', {"comment":"Window - SAP Logon 760"});
Saplogon.pHome.oConnection = Saplogon.pHome.addItem('oConnection', {"mustExist":true});

Saplogon.pSAPLogin = Saplogon.addPage('pSAPLogin', {"comment":"GuiMainWindow - SAP","nature":"SAPGUI","customType":"GuiMainWindow"});
Saplogon.pSAPLogin.edMandante = Saplogon.pSAPLogin.addItem('edMandante', {"customType":"GuiTextField"});
Saplogon.pSAPLogin.edUsuarios = Saplogon.pSAPLogin.addItem('edUsuarios', {"customType":"GuiTextField"});
Saplogon.pSAPLogin.oClvAcc = Saplogon.pSAPLogin.addItem('oClvAcc', {"customType":"GuiPasswordField"});
Saplogon.pSAPLogin.edIdioma = Saplogon.pSAPLogin.addItem('edIdioma', {"customType":"GuiTextField"});
Saplogon.pSAPLogin.btGuiButton = Saplogon.pSAPLogin.addItem('btGuiButton', {"customType":"GuiButton"});

Saplogon.pSAPEasyAccess = Saplogon.addPage('pSAPEasyAccess', {"comment":"GuiMainWindow - SAP Easy Access","nature":"SAPGUI","customType":"GuiMainWindow"});
Saplogon.pSAPEasyAccess.oGuiOkCodeField = Saplogon.pSAPEasyAccess.addItem('oGuiOkCodeField', {"customType":"GuiOkCodeField"});
Saplogon.pSAPEasyAccess.btGuiButton = Saplogon.pSAPEasyAccess.addItem('btGuiButton', {"customType":"GuiButton"});

GLOBAL.events.START.on(function(ev) { 
    GLOBAL.createExtendedConnector(e.extendedConnector.UIAutomation, '', '', '');
});
