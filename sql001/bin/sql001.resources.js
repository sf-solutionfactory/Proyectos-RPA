// Desktop Studio
// Auto-generated declaration file : do not modify !



var POPUPS = POPUPS || ctx.addApplication('POPUPS');



var MicrosoftSQLServer = ctx.addApplication('MicrosoftSQLServer', {"nature":"UIAUTOMATION","path":"C:\\Program Files (x86)\\Microsoft SQL Server\\110\\Tools\\Binn\\ManagementStudio\\Ssms.exe"});

MicrosoftSQLServer.pWindowConnectToS = MicrosoftSQLServer.addPage('pWindowConnectToS', {"comment":"Window - Connect to Server"});
MicrosoftSQLServer.pWindowConnectToS.btConnect = MicrosoftSQLServer.pWindowConnectToS.addItem('btConnect');


var CWindowsCMD = ctx.addApplication('CWindowsCMD', {"nature":"UIAUTOMATION","path":"C:\\Windows\\SysWOW64\\cmd.exe"});

CWindowsCMD.pWindowCMD = CWindowsCMD.addPage('pWindowCMD', {"comment":"Window - C:\\Windows\\SysWOW64\\cmd.exe"});
CWindowsCMD.pWindowCMD.oTextArea = CWindowsCMD.pWindowCMD.addItem('oTextArea');

GLOBAL.events.START.on(function(ev) { 
    GLOBAL.createExtendedConnector(e.extendedConnector.UIAutomation, '', '', '');
});
