
//---------------------------------------------------
// Data Structures
//---------------------------------------------------
// ----------- rootData -------------------
ctx.dataManager({
	rootData :
	{
		ExcelData : 
		{
			TableName : ''
		}
		, txtFile : 
		{
			Line : []
		}
		, SAPHelpPortalData : 
		{
			pSAPHelpPortalData : 
			{
				oSearchKeywords : ''
			}
			, pSearchResultsSAPData : 
			{
				btSearchName : ''
			}
		}
		, searchResult : 
		{
			searchName : []
		}
	}
});
var rootData = ctx.dataManagers.rootData.create() ;

// ----------- rootData_ExcelData -------------------
ctx.dataManager({
	rootData_ExcelData :
	{
		TableName : ''
	}
});
var rootData_ExcelData = ctx.dataManagers.rootData_ExcelData.create() ;

// ----------- rootData_txtFile -------------------
ctx.dataManager({
	rootData_txtFile :
	{
		Line : []
	}
});
var rootData_txtFile = ctx.dataManagers.rootData_txtFile.create() ;

// ----------- rootData_SAPHelpPortalData -------------------
ctx.dataManager({
	rootData_SAPHelpPortalData :
	{
		pSAPHelpPortalData : 
		{
			oSearchKeywords : ''
		}
		, pSearchResultsSAPData : 
		{
			btSearchName : ''
		}
	}
});
var rootData_SAPHelpPortalData = ctx.dataManagers.rootData_SAPHelpPortalData.create() ;

// ----------- rootData_SAPHelpPortalData_pSAPHelpPortalData -------------------
ctx.dataManager({
	rootData_SAPHelpPortalData_pSAPHelpPortalData :
	{
		oSearchKeywords : ''
	}
});
var rootData_SAPHelpPortalData_pSAPHelpPortalData = ctx.dataManagers.rootData_SAPHelpPortalData_pSAPHelpPortalData.create() ;

// ----------- rootData_SAPHelpPortalData_pSearchResultsSAPData -------------------
ctx.dataManager({
	rootData_SAPHelpPortalData_pSearchResultsSAPData :
	{
		btSearchName : ''
	}
});
var rootData_SAPHelpPortalData_pSearchResultsSAPData = ctx.dataManagers.rootData_SAPHelpPortalData_pSearchResultsSAPData.create() ;

// ----------- rootData_searchResult -------------------
ctx.dataManager({
	rootData_searchResult :
	{
		searchName : []
	}
});
var rootData_searchResult = ctx.dataManagers.rootData_searchResult.create() ;


//---------------------------------------------------
// Settings Structure
//---------------------------------------------------

//---------------------------------------------------
// Functional Events Declaration
//---------------------------------------------------

//---------------------------------------------------
// 
//---------------------------------------------------
