
//---------------------------------------------------
// Data Structures
//---------------------------------------------------
// ----------- rootData -------------------
ctx.dataManager({
	rootData :
	{
		length : ''
		, datetime : ''
		, Items : 
		{
			FKDAT : []
			, XBLNR : []
			, FKART : []
			, VKORG : []
		}
		, fechaActual : ''
		, texto : ''
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
			}
		}
		, filename : ''
		, sapgui : 
		{
			uname : ''
			, pass : ''
		}
		, Lines : ''
	}
});
var rootData = ctx.dataManagers.rootData.create() ;

// ----------- rootData_Items -------------------
ctx.dataManager({
	rootData_Items :
	{
		FKDAT : []
		, XBLNR : []
		, FKART : []
		, VKORG : []
	}
});
var rootData_Items = ctx.dataManagers.rootData_Items.create() ;

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
