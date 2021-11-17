
//---------------------------------------------------
// Data Structures
//---------------------------------------------------
// ----------- rootData -------------------
ctx.dataManager({
	rootData :
	{
		credencial : 
		{
			uname : ''
			, password : ''
		}
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
			}
			, pPosDocumVisualizaData : 
			{
				oTabla : ''
			}
			, Item : []
		}
	}
});
var rootData = ctx.dataManagers.rootData.create() ;

// ----------- rootData_credencial -------------------
ctx.dataManager({
	rootData_credencial :
	{
		uname : ''
		, password : ''
	}
});
var rootData_credencial = ctx.dataManagers.rootData_credencial.create() ;

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
		}
		, pPosDocumVisualizaData : 
		{
			oTabla : ''
		}
		, Item : []
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
	}
});
var rootData_SAPLogon760Data_pVentasYFacturasMasData = ctx.dataManagers.rootData_SAPLogon760Data_pVentasYFacturasMasData.create() ;

// ----------- rootData_SAPLogon760Data_pPosDocumVisualizaData -------------------
ctx.dataManager({
	rootData_SAPLogon760Data_pPosDocumVisualizaData :
	{
		oTabla : ''
	}
});
var rootData_SAPLogon760Data_pPosDocumVisualizaData = ctx.dataManagers.rootData_SAPLogon760Data_pPosDocumVisualizaData.create() ;

// ----------- rootData_SAPLogon760Data_Item -------------------
ctx.dataManager({
	rootData_SAPLogon760Data_Item :
	{
		Valule : []
	}
});
var rootData_SAPLogon760Data_Item = ctx.dataManagers.rootData_SAPLogon760Data_Item.create() ;


//---------------------------------------------------
// Settings Structure
//---------------------------------------------------

//---------------------------------------------------
// Functional Events Declaration
//---------------------------------------------------

//---------------------------------------------------
// 
//---------------------------------------------------
