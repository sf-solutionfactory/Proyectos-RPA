// Desktop Studio
// Auto-generated declaration file : do not modify !



var POPUPS = POPUPS || ctx.addApplication('POPUPS');



var MicrosoftExcel = ctx.addApplication('MicrosoftExcel', {"nature":"UIAUTOMATION","path":"C:\\Program Files (x86)\\Microsoft Office\\Office12\\EXCEL.EXE"});

MicrosoftExcel.pWindowMicrosoftEx = MicrosoftExcel.addPage('pWindowMicrosoftEx', {"comment":"Window - Microsoft Excel - ReporteENCO.xlsm"});
MicrosoftExcel.pWindowMicrosoftEx.btMacros = MicrosoftExcel.pWindowMicrosoftEx.addItem('btMacros');

MicrosoftExcel.pWindowMacro = MicrosoftExcel.addPage('pWindowMacro', {"comment":"Window - Macro"});
MicrosoftExcel.pWindowMacro.oCrearObjetoTabla = MicrosoftExcel.pWindowMacro.addItem('oCrearObjetoTabla');
MicrosoftExcel.pWindowMacro.oReporteDetallado = MicrosoftExcel.pWindowMacro.addItem('oReporteDetallado');
MicrosoftExcel.pWindowMacro.oReporteSap = MicrosoftExcel.pWindowMacro.addItem('oReporteSap');

MicrosoftExcel.pWindowReporteador = MicrosoftExcel.addPage('pWindowReporteador', {"comment":"Window - Reporteador"});
MicrosoftExcel.pWindowReporteador.edFechaF = MicrosoftExcel.pWindowReporteador.addItem('edFechaF');
MicrosoftExcel.pWindowReporteador.edFechaI = MicrosoftExcel.pWindowReporteador.addItem('edFechaI');
MicrosoftExcel.pWindowReporteador.btAceptar = MicrosoftExcel.pWindowReporteador.addItem('btAceptar');
MicrosoftExcel.pWindowReporteador.btCancelar = MicrosoftExcel.pWindowReporteador.addItem('btCancelar');

MicrosoftExcel.pWindowMessage = MicrosoftExcel.addPage('pWindowMessage', {"comment":"Window - Microsoft Excel"});
MicrosoftExcel.pWindowMessage.btAceptar = MicrosoftExcel.pWindowMessage.addItem('btAceptar');


var SAPLogon760 = ctx.addApplication('SAPLogon760', {"nature":"UIAUTOMATION","path":"C:\\Program Files (x86)\\SAP\\FrontEnd\\SapGui\\saplogon.exe"});

SAPLogon760.pWindowSAPLogon76 = SAPLogon760.addPage('pWindowSAPLogon76', {"comment":"Window - SAP Logon 760"});
SAPLogon760.pWindowSAPLogon76.btAccederAlSistema = SAPLogon760.pWindowSAPLogon76.addItem('btAccederAlSistema');
SAPLogon760.pWindowSAPLogon76.stARTHAQAS = SAPLogon760.pWindowSAPLogon76.addItem('stARTHAQAS');

SAPLogon760.pSAPLogin = SAPLogon760.addPage('pSAPLogin', {"comment":"GuiMainWindow - SAP","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon760.pSAPLogin.edMandante = SAPLogon760.pSAPLogin.addItem('edMandante', {"customType":"GuiTextField"});
SAPLogon760.pSAPLogin.edUsuarios = SAPLogon760.pSAPLogin.addItem('edUsuarios', {"customType":"GuiTextField"});
SAPLogon760.pSAPLogin.oClvAcc = SAPLogon760.pSAPLogin.addItem('oClvAcc', {"customType":"GuiPasswordField"});
SAPLogon760.pSAPLogin.edIdioma = SAPLogon760.pSAPLogin.addItem('edIdioma', {"customType":"GuiTextField"});

SAPLogon760.pSAPEasyAccess = SAPLogon760.addPage('pSAPEasyAccess', {"comment":"GuiMainWindow - SAP Easy Access","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon760.pSAPEasyAccess.oGuiOkCodeField = SAPLogon760.pSAPEasyAccess.addItem('oGuiOkCodeField', {"customType":"GuiOkCodeField"});
SAPLogon760.pSAPEasyAccess.btIFinalizar = SAPLogon760.pSAPEasyAccess.addItem('btIFinalizar', {"customType":"GuiButton"});

SAPLogon760.pVentasYFacturasMas = SAPLogon760.addPage('pVentasYFacturasMas', {"comment":"GuiMainWindow - Ventas y Facturas masiva","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon760.pVentasYFacturasMas.edFichero = SAPLogon760.pVentasYFacturasMas.addItem('edFichero', {"customType":"GuiCTextField"});
SAPLogon760.pVentasYFacturasMas.btEjecutar = SAPLogon760.pVentasYFacturasMas.addItem('btEjecutar', {"customType":"GuiButton"});
SAPLogon760.pVentasYFacturasMas.btIFinalizar = SAPLogon760.pVentasYFacturasMas.addItem('btIFinalizar', {"customType":"GuiButton"});
SAPLogon760.pVentasYFacturasMas.oVentaPorLínea = SAPLogon760.pVentasYFacturasMas.addItem('oVentaPorLínea', {"customType":"GuiCheckBox"});

SAPLogon760.pPosDocumVisualiza = SAPLogon760.addPage('pPosDocumVisualiza', {"comment":"GuiModalWindow - Pos.docum.: Visualizar mensajes","nature":"SAPGUI","customType":"GuiModalWindow"});
SAPLogon760.pPosDocumVisualiza.oTabla = SAPLogon760.pPosDocumVisualiza.addItem('oTabla', {"occurs":1,"customType":"GuiLabel"});
SAPLogon760.pPosDocumVisualiza.btAceptar = SAPLogon760.pPosDocumVisualiza.addItem('btAceptar', {"customType":"GuiButton"});
SAPLogon760.pPosDocumVisualiza.btCancelar = SAPLogon760.pPosDocumVisualiza.addItem('btCancelar', {"customType":"GuiButton"});

SAPLogon760.pSalirDelSistema = SAPLogon760.addPage('pSalirDelSistema', {"comment":"GuiModalWindow - Salir del sistema","nature":"SAPGUI","customType":"GuiModalWindow"});
SAPLogon760.pSalirDelSistema.btSí = SAPLogon760.pSalirDelSistema.addItem('btSí', {"customType":"GuiButton"});
SAPLogon760.pSalirDelSistema.btNo = SAPLogon760.pSalirDelSistema.addItem('btNo', {"customType":"GuiButton"});

GLOBAL.events.START.on(function(ev) { 
    GLOBAL.createExtendedConnector(e.extendedConnector.UIAutomation, '', '', '');
});
