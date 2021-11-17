
//---------------------------------------------------
// Data Structures
//---------------------------------------------------
// ----------- rootData -------------------
ctx.dataManager({
	rootData :
	{
		SAPHelpPortalData : 
		{
			pSAPHelpPortalData : 
			{
				oSearchKeywords : ''
			}
			, pSearchResultsSAPData : 
			{
				btSearchName : []
				, oSearchKeywords : ''
			}
			, pSearchResultsData : 
			{
				oSearchKeywords : ''
			}
		}
		, GoogleData : 
		{
			pGoogleData : 
			{
				oQ : ''
			}
			, pRPABuscarConGoogData : 
			{
				oQ : ''
			}
		}
		, SAPHelpPortalChromeData : 
		{
			pSearchResultsData : 
			{
				oSearchKeywords : ''
			}
			, pSearchResultsSAPData : 
			{
				oSearchKeywords : ''
			}
			, pLearningJourneyLaData : 
			{
				oMyInput : ''
			}
		}
		, MicrosoftSQLServerData : 
		{
			pWindowConnectToSData : 
			{
				edDESKTOP8E05UBG : ''
				, cbComboBoxAuthenticatio : ''
				, edPagos : ''
				, edPassword : ''
			}
		}
		, SearchResultsSAPData : 
		{
			pSearchResultsSAPData : 
			{
				oSearchKeywords : ''
				, btSearchName : ''
			}
		}
	}
});
var rootData = ctx.dataManagers.rootData.create() ;

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
			btSearchName : []
			, oSearchKeywords : ''
		}
		, pSearchResultsData : 
		{
			oSearchKeywords : ''
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
		btSearchName : []
		, oSearchKeywords : ''
	}
});
var rootData_SAPHelpPortalData_pSearchResultsSAPData = ctx.dataManagers.rootData_SAPHelpPortalData_pSearchResultsSAPData.create() ;

// ----------- rootData_SAPHelpPortalData_pSearchResultsData -------------------
ctx.dataManager({
	rootData_SAPHelpPortalData_pSearchResultsData :
	{
		oSearchKeywords : ''
	}
});
var rootData_SAPHelpPortalData_pSearchResultsData = ctx.dataManagers.rootData_SAPHelpPortalData_pSearchResultsData.create() ;

// ----------- rootData_GoogleData -------------------
ctx.dataManager({
	rootData_GoogleData :
	{
		pGoogleData : 
		{
			oQ : ''
		}
		, pRPABuscarConGoogData : 
		{
			oQ : ''
		}
	}
});
var rootData_GoogleData = ctx.dataManagers.rootData_GoogleData.create() ;

// ----------- rootData_GoogleData_pGoogleData -------------------
ctx.dataManager({
	rootData_GoogleData_pGoogleData :
	{
		oQ : ''
	}
});
var rootData_GoogleData_pGoogleData = ctx.dataManagers.rootData_GoogleData_pGoogleData.create() ;

// ----------- rootData_GoogleData_pRPABuscarConGoogData -------------------
ctx.dataManager({
	rootData_GoogleData_pRPABuscarConGoogData :
	{
		oQ : ''
	}
});
var rootData_GoogleData_pRPABuscarConGoogData = ctx.dataManagers.rootData_GoogleData_pRPABuscarConGoogData.create() ;

// ----------- rootData_SAPHelpPortalChromeData -------------------
ctx.dataManager({
	rootData_SAPHelpPortalChromeData :
	{
		pSearchResultsData : 
		{
			oSearchKeywords : ''
		}
		, pSearchResultsSAPData : 
		{
			oSearchKeywords : ''
		}
		, pLearningJourneyLaData : 
		{
			oMyInput : ''
		}
	}
});
var rootData_SAPHelpPortalChromeData = ctx.dataManagers.rootData_SAPHelpPortalChromeData.create() ;

// ----------- rootData_SAPHelpPortalChromeData_pSearchResultsData -------------------
ctx.dataManager({
	rootData_SAPHelpPortalChromeData_pSearchResultsData :
	{
		oSearchKeywords : ''
	}
});
var rootData_SAPHelpPortalChromeData_pSearchResultsData = ctx.dataManagers.rootData_SAPHelpPortalChromeData_pSearchResultsData.create() ;

// ----------- rootData_SAPHelpPortalChromeData_pSearchResultsSAPData -------------------
ctx.dataManager({
	rootData_SAPHelpPortalChromeData_pSearchResultsSAPData :
	{
		oSearchKeywords : ''
	}
});
var rootData_SAPHelpPortalChromeData_pSearchResultsSAPData = ctx.dataManagers.rootData_SAPHelpPortalChromeData_pSearchResultsSAPData.create() ;

// ----------- rootData_SAPHelpPortalChromeData_pLearningJourneyLaData -------------------
ctx.dataManager({
	rootData_SAPHelpPortalChromeData_pLearningJourneyLaData :
	{
		oMyInput : ''
	}
});
var rootData_SAPHelpPortalChromeData_pLearningJourneyLaData = ctx.dataManagers.rootData_SAPHelpPortalChromeData_pLearningJourneyLaData.create() ;

// ----------- rootData_MicrosoftSQLServerData -------------------
ctx.dataManager({
	rootData_MicrosoftSQLServerData :
	{
		pWindowConnectToSData : 
		{
			edDESKTOP8E05UBG : ''
			, cbComboBoxAuthenticatio : ''
			, edPagos : ''
			, edPassword : ''
		}
	}
});
var rootData_MicrosoftSQLServerData = ctx.dataManagers.rootData_MicrosoftSQLServerData.create() ;

// ----------- rootData_MicrosoftSQLServerData_pWindowConnectToSData -------------------
ctx.dataManager({
	rootData_MicrosoftSQLServerData_pWindowConnectToSData :
	{
		edDESKTOP8E05UBG : ''
		, cbComboBoxAuthenticatio : ''
		, edPagos : ''
		, edPassword : ''
	}
});
var rootData_MicrosoftSQLServerData_pWindowConnectToSData = ctx.dataManagers.rootData_MicrosoftSQLServerData_pWindowConnectToSData.create() ;

// ----------- rootData_SearchResultsSAPData -------------------
ctx.dataManager({
	rootData_SearchResultsSAPData :
	{
		pSearchResultsSAPData : 
		{
			oSearchKeywords : ''
			, btSearchName : ''
		}
	}
});
var rootData_SearchResultsSAPData = ctx.dataManagers.rootData_SearchResultsSAPData.create() ;

// ----------- rootData_SearchResultsSAPData_pSearchResultsSAPData -------------------
ctx.dataManager({
	rootData_SearchResultsSAPData_pSearchResultsSAPData :
	{
		oSearchKeywords : ''
		, btSearchName : ''
	}
});
var rootData_SearchResultsSAPData_pSearchResultsSAPData = ctx.dataManagers.rootData_SearchResultsSAPData_pSearchResultsSAPData.create() ;


//---------------------------------------------------
// Settings Structure
//---------------------------------------------------

//---------------------------------------------------
// Functional Events Declaration
//---------------------------------------------------

//---------------------------------------------------
// 
//---------------------------------------------------
