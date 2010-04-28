// ==========================================================================
// Project:   Contacts.ContactView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Contacts */
sc_require('views/contact');

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Contacts.showContactView = SC.View.extend(
/** @scope Contacts.ContactView.prototype */ {

	childViews: 'contactView'.w(),

	contactView: Contacts.contactView.design({
		layout: { top: 0, bottom: 24, left: 0, right: 0 },
		contentBinding: "Contacts.contactController"
	})
	
});
