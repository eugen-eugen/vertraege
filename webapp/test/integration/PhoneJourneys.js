jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"interseroh/vertraege/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"interseroh/vertraege/test/integration/pages/App",
	"interseroh/vertraege/test/integration/pages/Browser",
	"interseroh/vertraege/test/integration/pages/Master",
	"interseroh/vertraege/test/integration/pages/Detail",
	"interseroh/vertraege/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "interseroh.vertraege.view."
	});

	sap.ui.require([
		"interseroh/vertraege/test/integration/NavigationJourneyPhone",
		"interseroh/vertraege/test/integration/NotFoundJourneyPhone",
		"interseroh/vertraege/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});