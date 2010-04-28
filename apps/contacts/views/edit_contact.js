// ==========================================================================
// Project:   Contacts.EditContactView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Contacts */
sc_require('views/contact');

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Contacts.editContactView = Contacts.contactView.extend(
/** @scope Contacts.editContactView.prototype */ {

	firstNameTextField: SC.TextFieldView.extend({
		layout: { left: 90, top: 0, width: 160, height: 24 },
		valueBinding: '.parentView*content.firstName'
	}),
	
	lastNameTextField: SC.TextFieldView.extend({
		layout: { left: 90, top: 30, height: 24, width: 160 },
		valueBinding: '.parentView*content.lastName'
	}),
	
	streetTextField: SC.TextFieldView.extend({
		layout: { left: 90, top: 60, height: 24, width: 160 },
		valueBinding: '.parentView*content.street'
	}),
	
	zipTextField: SC.TextFieldView.extend({
		layout: { left: 90, top: 90, height: 24, width: 160 },
		valueBinding: '.parentView*content.zip'
	}),
	
	cityTextField: SC.TextFieldView.extend({
		layout: { left: 90, top: 120, height: 24, width: 160 },
		valueBinding: '.parentView*content.city'
	}),
	
	toggleButton: SC.ButtonView.design({
		layout: { bottom: 0, left: 0, width: 90, height: 24 },
		title: "Done",
		isDefault: YES,
		action: "toggleViews"
	}),

});
