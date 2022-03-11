
//---------------------------------------------------
// Data Structures
//---------------------------------------------------
// ----------- rootData -------------------
ctx.dataManager({
	rootData :
	{
		lines : ''
		, archivoTXT : ''
		, sapgui : 
		{
			uname : ''
			, pass : ''
		}
		, datetime : ''
		, fechaActual : ''
		, tipoCarga : ''
		, Manual : 
		{
			fechaIni : ''
			, fechaFin : ''
			, soloCarga : ''
			, idCentro : ''
		}
		, datetimeIni : ''
		, tipoConsulta : ''
		, filename : ''
		, filenameO : ''
		, SAPLogon750Data : 
		{
			pSAPLoginData : 
			{
				edMandante : ''
				, edUsuarios : ''
				, oClvAcc : ''
				, edIdioma : ''
			}
			, pSAPEasyAccessData : 
			{
				oGuiOkCodeField : ''
			}
			, pVentasYFacturasMasData : 
			{
				oSoloCarga : ''
				, edFichero : ''
				, oVentaPorLínea : ''
			}
		}
		, environmentType : ''
	}
});
var rootData = ctx.dataManagers.rootData.create() ;

// ----------- rootData_sapgui -------------------
ctx.dataManager({
	rootData_sapgui :
	{
		uname : ''
		, pass : ''
	}
});
var rootData_sapgui = ctx.dataManagers.rootData_sapgui.create() ;

// ----------- rootData_Manual -------------------
ctx.dataManager({
	rootData_Manual :
	{
		fechaIni : ''
		, fechaFin : ''
		, soloCarga : ''
		, idCentro : ''
	}
});
var rootData_Manual = ctx.dataManagers.rootData_Manual.create() ;

// ----------- rootData_SAPLogon750Data -------------------
ctx.dataManager({
	rootData_SAPLogon750Data :
	{
		pSAPLoginData : 
		{
			edMandante : ''
			, edUsuarios : ''
			, oClvAcc : ''
			, edIdioma : ''
		}
		, pSAPEasyAccessData : 
		{
			oGuiOkCodeField : ''
		}
		, pVentasYFacturasMasData : 
		{
			oSoloCarga : ''
			, edFichero : ''
			, oVentaPorLínea : ''
		}
	}
});
var rootData_SAPLogon750Data = ctx.dataManagers.rootData_SAPLogon750Data.create() ;

// ----------- rootData_SAPLogon750Data_pSAPLoginData -------------------
ctx.dataManager({
	rootData_SAPLogon750Data_pSAPLoginData :
	{
		edMandante : ''
		, edUsuarios : ''
		, oClvAcc : ''
		, edIdioma : ''
	}
});
var rootData_SAPLogon750Data_pSAPLoginData = ctx.dataManagers.rootData_SAPLogon750Data_pSAPLoginData.create() ;

// ----------- rootData_SAPLogon750Data_pSAPEasyAccessData -------------------
ctx.dataManager({
	rootData_SAPLogon750Data_pSAPEasyAccessData :
	{
		oGuiOkCodeField : ''
	}
});
var rootData_SAPLogon750Data_pSAPEasyAccessData = ctx.dataManagers.rootData_SAPLogon750Data_pSAPEasyAccessData.create() ;

// ----------- rootData_SAPLogon750Data_pVentasYFacturasMasData -------------------
ctx.dataManager({
	rootData_SAPLogon750Data_pVentasYFacturasMasData :
	{
		oSoloCarga : ''
		, edFichero : ''
		, oVentaPorLínea : ''
	}
});
var rootData_SAPLogon750Data_pVentasYFacturasMasData = ctx.dataManagers.rootData_SAPLogon750Data_pVentasYFacturasMasData.create() ;


//---------------------------------------------------
// Settings Structure
//---------------------------------------------------

//---------------------------------------------------
// Functional Events Declaration
//---------------------------------------------------

//---------------------------------------------------
// 
//---------------------------------------------------
