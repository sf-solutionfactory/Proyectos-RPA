
//---------------------------------------------------
// Data Structures
//---------------------------------------------------
// ----------- rootData -------------------
ctx.dataManager({
	rootData :
	{
		SaplogonData : 
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
		}
	}
});
var rootData = ctx.dataManagers.rootData.create() ;

// ----------- rootData_SaplogonData -------------------
ctx.dataManager({
	rootData_SaplogonData :
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
	}
});
var rootData_SaplogonData = ctx.dataManagers.rootData_SaplogonData.create() ;

// ----------- rootData_SaplogonData_pSAPLoginData -------------------
ctx.dataManager({
	rootData_SaplogonData_pSAPLoginData :
	{
		edMandante : ''
		, edUsuarios : ''
		, oClvAcc : ''
		, edIdioma : ''
	}
});
var rootData_SaplogonData_pSAPLoginData = ctx.dataManagers.rootData_SaplogonData_pSAPLoginData.create() ;

// ----------- rootData_SaplogonData_pSAPEasyAccessData -------------------
ctx.dataManager({
	rootData_SaplogonData_pSAPEasyAccessData :
	{
		oGuiOkCodeField : ''
	}
});
var rootData_SaplogonData_pSAPEasyAccessData = ctx.dataManagers.rootData_SaplogonData_pSAPEasyAccessData.create() ;


//---------------------------------------------------
// Settings Structure
//---------------------------------------------------

//---------------------------------------------------
// Functional Events Declaration
//---------------------------------------------------

//---------------------------------------------------
// 
//---------------------------------------------------
