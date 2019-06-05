jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 VertragSet in the list
// * All 3 VertragSet have at least one VertraspositionSet

sap.ui.require([
	"sap/ui/test/Opa5",
	"interseroh/vertraege/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"interseroh/vertraege/test/integration/pages/App",
	"interseroh/vertraege/test/integration/pages/Browser",
	"interseroh/vertraege/test/integration/pages/Master",
	"interseroh/vertraege/test/integration/pages/Detail",
	"interseroh/vertraege/test/integration/pages/Create",
	"interseroh/vertraege/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "interseroh.vertraege.view."
	});

	sap.ui.require([
		"interseroh/vertraege/test/integration/MasterJourney",
		"interseroh/vertraege/test/integration/NavigationJourney",
		"interseroh/vertraege/test/integration/NotFoundJourney",
		"interseroh/vertraege/test/integration/BusyJourney",
		"interseroh/vertraege/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});