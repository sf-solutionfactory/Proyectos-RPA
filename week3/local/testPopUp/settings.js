﻿// This file is regenerated by Desktop Studio : modify it carefully !

popup = POPUPS.testPopUp = POPUPS.popup({ testPopUp: {
	template: e.popup.template.NoButton,
	url: "testPopUp\\popup.html",
	CX: 500,
	CY: 300,
	X: e.popup.position.Center,
	Y: e.popup.position.Center
}});

GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		systray.addMenu("", "TestPopup", "Test popups");
		systray.addMenu("TestPopup", "testPopUpOpen" , "Open testPopUp", "", function(ev) {
			POPUPS.testPopUp.open({ testMode: true });
		});
		systray.addMenu("TestPopup", "testPopUpClose" , "Close testPopUp", "", function(ev) {
			POPUPS.testPopUp.close();
		});
	}
});

POPUPS.testPopUp.onTest(function(popup) {	
	// TODO : add your tests here
});

popup.item({ container1: {
	type: e.item.type.container,
	fluid: true,
	auto: false
}});

popup.item({ select1: {
	type: e.item.type.select,
	iconSide: e.item.side.left,
	label: "Name:",
	icon: e.item.icon.playCircle,
	items: [
		{
			id: " ",
			value: "Select choice",
			myClass: "",
			myStyle: ""
		},
		{
			id: "sel1",
			value: "Choice 1",
			myClass: "",
			myStyle: ""
		},
		{
			id: "sel2",
			value: "Choice 2",
			myClass: "",
			myStyle: ""
		}
	],
	test: "",
	auto: true,
	iconStyle: e.item.style.None,
	inputStyle: e.item.inputStyle.None,
	size: e.item.size.Medium
}});

popup.item({ text2: {
	type: e.item.type.text,
	parent: "",
	icon: e.item.icon.user,
	iconStyle: e.item.style.None,
	iconSide: e.item.side.left,
	label: "Username:",
	placeholder: "Type username here",
	test: "",
	auto: true,
	inputStyle: e.item.inputStyle.None,
	feedbackIcon: e.item.icon.none,
	size: e.item.size.Medium
}});

popup.item({ password1: {
	type: e.item.type.password,
	parent: "",
	icon: e.item.icon.lock,
	iconSide: e.item.side.left,
	label: "Password:",
	placeholder: "Password",
	test: "",
	auto: true,
	iconStyle: e.item.style.None,
	inputStyle: e.item.inputStyle.None,
	feedbackIcon: e.item.icon.none,
	size: e.item.size.Medium
}});

popup.item({ row2: {
	type: e.item.type.row,
	parent: "",
	auto: false
}});

popup.item({ col3: {
	type: e.item.type.column,
	xs: 0,
	sm: 0,
	md: 0,
	lg: 4,
	parent: "row2",
	auto: false
}});

popup.item({ button1: {
	type: e.item.type.button,
	parent: "col3",
	value: "Close",
	style: e.item.style.Blue,
	auto: true,
	tooltip: "",
	icon: e.item.icon.none,
	iconSide: e.item.side.left,
	badge: "",
	badgeStyle: e.item.style.None,
	size: e.item.size.Medium,
	close: false,
	submit: false,
	disabled: false,
	right: false,
	justified: true,
	fa: "",
	animated: false,
	pulse: false,
	tooltipPlacement: e.item.side.none,
	iconStyle: e.item.style.None
}});

popup.item({ col4: {
	type: e.item.type.column,
	xs: 0,
	sm: 0,
	md: 0,
	lg: 4,
	parent: "row2",
	auto: false
}});

popup.item({ button2: {
	type: e.item.type.button,
	parent: "col4",
	icon: e.item.icon.plus,
	style: e.item.style.Green,
	tooltip: "Add",
	auto: true,
	value: "",
	iconSide: e.item.side.left,
	badge: "",
	badgeStyle: e.item.style.None,
	size: e.item.size.Medium,
	close: false,
	submit: false,
	disabled: false,
	right: false,
	justified: true,
	fa: "",
	animated: false,
	pulse: false,
	tooltipPlacement: e.item.side.none,
	iconStyle: e.item.style.None
}});

popup.item({ col5: {
	type: e.item.type.column,
	xs: 0,
	sm: 0,
	md: 0,
	lg: 4,
	parent: "row2",
	auto: false
}});

popup.item({ dropdown1: {
	type: e.item.type.dropdown,
	parent: "col5",
	value: "Tutorials",
	style: e.item.style.Green,
	auto: true,
	items: [
		{
			header: "Dropdown header 1"
		},
		{
			id: "html",
			value: "HTML"
		},
		{
			id: "css",
			value: "CSS"
		},
		{
			id: "js",
			value: "JavaScript"
		},
		{
			divider: true
		},
		{
			header: "Dropdown header 2"
		},
		{
			id: "about",
			value: "About Us"
		}
	]
}});

