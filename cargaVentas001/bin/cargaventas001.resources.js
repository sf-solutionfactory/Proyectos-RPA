// Desktop Studio
// Auto-generated declaration file : do not modify !



var POPUPS = POPUPS || ctx.addApplication('POPUPS');



var SAPLogon750 = ctx.addApplication('SAPLogon750', {"nature":"UIAUTOMATION","path":"C:\\Program Files (x86)\\SAP\\FrontEnd\\SapGui\\saplogon.exe"});

SAPLogon750.pWindowSAPLogon75 = SAPLogon750.addPage('pWindowSAPLogon75', {"comment":"Window - SAP Logon 750"});
SAPLogon750.pWindowSAPLogon75.stQAS = SAPLogon750.pWindowSAPLogon75.addItem('stQAS');
SAPLogon750.pWindowSAPLogon75.stPRD = SAPLogon750.pWindowSAPLogon75.addItem('stPRD');
SAPLogon750.pWindowSAPLogon75.btAccederAlSistema = SAPLogon750.pWindowSAPLogon75.addItem('btAccederAlSistema');

SAPLogon750.pSAPLogin = SAPLogon750.addPage('pSAPLogin', {"comment":"GuiMainWindow - SAP","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon750.pSAPLogin.edMandante = SAPLogon750.pSAPLogin.addItem('edMandante', {"customType":"GuiTextField"});
SAPLogon750.pSAPLogin.edUsuarios = SAPLogon750.pSAPLogin.addItem('edUsuarios', {"customType":"GuiTextField"});
SAPLogon750.pSAPLogin.oClvAcc = SAPLogon750.pSAPLogin.addItem('oClvAcc', {"customType":"GuiPasswordField"});
SAPLogon750.pSAPLogin.edIdioma = SAPLogon750.pSAPLogin.addItem('edIdioma', {"customType":"GuiTextField"});

SAPLogon750.pSAPEasyAccess = SAPLogon750.addPage('pSAPEasyAccess', {"comment":"GuiMainWindow - SAP Easy Access","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon750.pSAPEasyAccess.oGuiOkCodeField = SAPLogon750.pSAPEasyAccess.addItem('oGuiOkCodeField', {"customType":"GuiOkCodeField"});
SAPLogon750.pSAPEasyAccess.btIFinalizar = SAPLogon750.pSAPEasyAccess.addItem('btIFinalizar', {"customType":"GuiButton"});

SAPLogon750.pVentasYFacturasMas = SAPLogon750.addPage('pVentasYFacturasMas', {"comment":"GuiMainWindow - Ventas y Facturas masiva","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon750.pVentasYFacturasMas.edFichero = SAPLogon750.pVentasYFacturasMas.addItem('edFichero', {"customType":"GuiCTextField"});
SAPLogon750.pVentasYFacturasMas.oSoloCarga = SAPLogon750.pVentasYFacturasMas.addItem('oSoloCarga', {"customType":"GuiCTextField"});
SAPLogon750.pVentasYFacturasMas.oVentaPorLínea = SAPLogon750.pVentasYFacturasMas.addItem('oVentaPorLínea', {"customType":"GuiCheckBox"});
SAPLogon750.pVentasYFacturasMas.btIFinalizar = SAPLogon750.pVentasYFacturasMas.addItem('btIFinalizar', {"customType":"GuiButton"});
SAPLogon750.pVentasYFacturasMas.btEjecutar = SAPLogon750.pVentasYFacturasMas.addItem('btEjecutar', {"customType":"GuiButton"});

SAPLogon750.pPosDocumVisualiza = SAPLogon750.addPage('pPosDocumVisualiza', {"comment":"GuiModalWindow - Pos.docum.: Visualizar mensajes","nature":"SAPGUI","customType":"GuiModalWindow"});
SAPLogon750.pPosDocumVisualiza.btAceptar = SAPLogon750.pPosDocumVisualiza.addItem('btAceptar', {"customType":"GuiButton"});
SAPLogon750.pPosDocumVisualiza.btCancelar = SAPLogon750.pPosDocumVisualiza.addItem('btCancelar', {"customType":"GuiButton"});
SAPLogon750.pPosDocumVisualiza.oTable = SAPLogon750.pPosDocumVisualiza.addItem('oTable', {"occurs":1,"customType":"GuiLabel"});

SAPLogon750.pSalirDelSistema = SAPLogon750.addPage('pSalirDelSistema', {"comment":"GuiModalWindow - Salir del sistema","nature":"SAPGUI","customType":"GuiModalWindow"});
SAPLogon750.pSalirDelSistema.btSí = SAPLogon750.pSalirDelSistema.addItem('btSí', {"customType":"GuiButton"});
SAPLogon750.pSalirDelSistema.btNo = SAPLogon750.pSalirDelSistema.addItem('btNo', {"customType":"GuiButton"});

GLOBAL.events.START.on(function(ev) { 
    GLOBAL.createExtendedConnector(e.extendedConnector.UIAutomation, '', '', '');
});
