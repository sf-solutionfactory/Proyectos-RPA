
// ----------------------------------------------------------------
//   Test menu for scenario newWorkflow 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'newWorkflow', 'Test newWorkflow', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.newWorkflow.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario newWorkflow Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: newWorkflow
// ----------------------------------------------------------------
GLOBAL.scenario({ newWorkflow: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.pHome_management, GLOBAL.steps.pSAPLogin_management);
	sc.step(GLOBAL.steps.pSAPLogin_management, GLOBAL.steps.pSAPEasyAccess_manage);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage, null);
}}, ctx.dataManagers.rootData).setId('068ec593-95e0-492d-b73f-333784e20958') ;

// ----------------------------------------------------------------
//   Step: pHome_management
// ----------------------------------------------------------------
GLOBAL.step({ pHome_management: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWorkflow', 'dd62eede-7979-4a28-9ece-e1c4dc5c63ee') ;
	// Wait until the Page loads
	Saplogon.pHome.wait(function(ev) {
		Saplogon.pHome.oConnection.clickDouble();
		sc.endStep(); // pSAPLogin_management
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPLogin_management
// ----------------------------------------------------------------
GLOBAL.step({ pSAPLogin_management: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWorkflow', '56bebd08-75b1-4619-b0e7-1d103f459894') ;
	// Wait until the Page loads
	Saplogon.pSAPLogin.wait(function(ev) {
		Saplogon.pSAPLogin.edMandante.set("300");
		Saplogon.pSAPLogin.edUsuarios.set("FROJAS");
		Saplogon.pSAPLogin.oClvAcc.set("P455w0rd");
		Saplogon.pSAPLogin.edIdioma.set("ES");
		Saplogon.pSAPLogin.btGuiButton.click();
		sc.endStep(); // pSAPEasyAccess_manage
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage
// ----------------------------------------------------------------
GLOBAL.step({ pSAPEasyAccess_manage: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWorkflow', 'dbbe70e5-1de3-4a83-8529-8eedc5bcecc8') ;
	// Wait until the Page loads
	Saplogon.pSAPEasyAccess.wait(function(ev) {
		Saplogon.pSAPEasyAccess.oGuiOkCodeField.set("SE16N");
		Saplogon.pSAPEasyAccess.btGuiButton.click();
		sc.endStep(); // end Scenario
		return;
	});
}});
