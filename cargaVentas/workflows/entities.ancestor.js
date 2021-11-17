
//---------------------------------------------------
// Data Structures
//---------------------------------------------------
// ----------- rootData -------------------
ctx.dataManager({
	rootData :
	{
		lines : ''
		, archivoTXT : ''
		, SAPLogon760Data : 
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
				edFichero : ''
				, oVentaPorLínea : ''
				, oSoloCarga : ''
			}
		}
		, sapgui : 
		{
			uname : ''
			, pass : ''
		}
		, datetime : ''
		, fechaActual : ''
		, length : ''
	}
});
var rootData = ctx.dataManagers.rootData.create() ;

// ----------- rootData_SAPLogon760Data -------------------
ctx.dataManager({
	rootData_SAPLogon760Data :
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
			edFichero : ''
			, oVentaPorLínea : ''
			, oSoloCarga : ''
		}
	}
});
var rootData_SAPLogon760Data = ctx.dataManagers.rootData_SAPLogon760Data.create() ;

// ----------- rootData_SAPLogon760Data_pSAPLoginData -------------------
ctx.dataManager({
	rootData_SAPLogon760Data_pSAPLoginData :
	{
		edMandante : ''
		, edUsuarios : ''
		, oClvAcc : ''
		, edIdioma : ''
	}
});
var rootData_SAPLogon760Data_pSAPLoginData = ctx.dataManagers.rootData_SAPLogon760Data_pSAPLoginData.create() ;

// ----------- rootData_SAPLogon760Data_pSAPEasyAccessData -------------------
ctx.dataManager({
	rootData_SAPLogon760Data_pSAPEasyAccessData :
	{
		oGuiOkCodeField : ''
	}
});
var rootData_SAPLogon760Data_pSAPEasyAccessData = ctx.dataManagers.rootData_SAPLogon760Data_pSAPEasyAccessData.create() ;

// ----------- rootData_SAPLogon760Data_pVentasYFacturasMasData -------------------
ctx.dataManager({
	rootData_SAPLogon760Data_pVentasYFacturasMasData :
	{
		edFichero : ''
		, oVentaPorLínea : ''
		, oSoloCarga : ''
	}
});
var rootData_SAPLogon760Data_pVentasYFacturasMasData = ctx.dataManagers.rootData_SAPLogon760Data_pVentasYFacturasMasData.create() ;

// ----------- rootData_sapgui -------------------
ctx.dataManager({
	rootData_sapgui :
	{
		uname : ''
		, pass : ''
	}
});
var rootData_sapgui = ctx.dataManagers.rootData_sapgui.create() ;


//---------------------------------------------------
// Settings Structure
//---------------------------------------------------

//---------------------------------------------------
// Functional Events Declaration
//---------------------------------------------------

//---------------------------------------------------
// 
//---------------------------------------------------
