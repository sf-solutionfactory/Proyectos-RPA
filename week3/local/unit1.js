
// ----------------------------------------------------------------
//   Test menu for scenario unit1 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'unit1', 'Test unit1', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			rootData.index = 0;
			rootData.noIterations = 12;
			rootData.totalGain = 0.
			
			// Initialize your data here.
			GLOBAL.scenarios.unit1.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario unit1 Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: unit1
// ----------------------------------------------------------------
GLOBAL.scenario({ unit1: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.sStep1, GLOBAL.steps.stStep2);
	sc.step(GLOBAL.steps.stStep2, GLOBAL.steps.stStep5, 'Output5');
	sc.step(GLOBAL.steps.stStep2, GLOBAL.steps.stStep3);
	sc.step(GLOBAL.steps.stStep3, GLOBAL.steps.stStep2, 'Output2');
	sc.step(GLOBAL.steps.stStep3, GLOBAL.steps.stStep4);
	sc.step(GLOBAL.steps.stStep5, GLOBAL.steps.stEndScenario);
	sc.step(GLOBAL.steps.stStep4, GLOBAL.steps.stEndScenario);
	sc.step(GLOBAL.steps.stEndScenario, null);
	
}}, ctx.dataManagers.rootData).setId('285fdded-fe99-41f7-9363-d0ec3f351bbb') ;

// ----------------------------------------------------------------
//   Step: ssStep1
// ----------------------------------------------------------------
GLOBAL.step({ sStep1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('unit1', 'edba5d66-1705-4439-9bbb-e356429137df') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // end Scenario
	return;
}});


/** Description */
GLOBAL.step({ stStep2: function(ev, sc, st) {
	var data = sc.data;
	
	data.rand = Math.floor(Math.random() * 11);
	data.totalGain = data.totalGain + (10-data.rand);
	
	ctx.log('|__________in step 2');
	ctx.log('|__________Iteraciones:'+ data.index);
	ctx.log('|__________Total Gain: $'+ data.totalGain);
	ctx.log('|--------------|');
	
	if(data.rand > 9){
		ctx.wait(function(ev){
			sc.endStep('Output5');
		}, data.rand*1000);
	}else{
		ctx.wait(function(ev){
			sc.endStep();
		}, data.rand*1000);
	}
	
	return;
}});

/** Description */
GLOBAL.step({ stStep3: function(ev, sc, st) {
	var data = sc.data;
	
	ctx.log('|__________in step 3');
	ctx.log('|__________Iteraciones:'+ data.index);
	ctx.log('|__________Total Gain: $'+ data.totalGain);
	ctx.log('|--------------|');
	
	if(data.index < data.noIterations){
		data.index = data.index + 1;
		sc.endStep('Output2');
	}else{
		sc.endStep();
	}
	
	return;
}});

/** Description */
GLOBAL.step({ stStep4: function(ev, sc, st) {
	var data = sc.data;
	
	ctx.log('|__________in step 4');
	ctx.log('|__________Iteraciones:'+ data.index);
	ctx.log('|__________Total Gain: $'+ data.totalGain);
	ctx.log('|--------------|');
	
	sc.endStep();
	return;
}});

/** Description */
GLOBAL.step({ stStep5: function(ev, sc, st) {
	var data = sc.data;
	
	ctx.log('|__________in step 5');
	ctx.log('|__________Iteraciones:'+ data.index);
	ctx.log('|__________Total Gain: $'+ data.totalGain);
	ctx.log('|--------------|');
	
	data.totalGain = 0;
	sc.endStep();
	return;
}});

/** Description */
GLOBAL.step({ stEndScenario: function(ev, sc, st) {
	var data = sc.data;
	
	ctx.log('|__________in step end scenario');
	ctx.log('|__________Iteraciones:'+ data.index);
	ctx.log('|__________Total Gain: $'+ data.totalGain);
	ctx.log('|--------------|');
	
	sc.endStep();
	return;
}});

