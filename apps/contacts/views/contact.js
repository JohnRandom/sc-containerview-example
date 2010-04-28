// ==========================================================================
// Project:   Contacts.AccountInfoView
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Contacts */

/** @class

  Renders a table of the Contact.  Since we need to render a bunch of 
  information about the content object, a simple custom view like this is 
  simpler than trying to layout a bunch of label views in the page design.
  
  Both approaches would work.  This approach is just easier.

  @extends SC.View
*/
Contacts.contactView = SC.View.extend(SC.Control,
/** @scope Contacts.contactView.prototype */ {

	contentBinding: 'Contacts.contactController.content',
	childViews: 'firstNameLabel firstNameTextField lastNameLabel lastNameTextField streetLabel streetTextField zipLabel zipTextField cityLabel cityTextField toggleButton'.w(),
	
	firstNameLabel: SC.LabelView.extend({
	  layout: { left: 0, top: 0, width: 85, height: 24 },
	  textAlign: SC.ALIGN_RIGHT,
	  value: "First Name:"
	}),
	
	firstNameTextField: SC.LabelView.extend({
		layout: { left: 90, top: 0, width: 160, height: 24 },
		valueBinding: '.parentView*content.firstName'
	}),
	
	lastNameLabel: SC.LabelView.extend({
	  layout: { left: 0, top: 30, height: 24, width: 85 },
	  textAlign: SC.ALIGN_RIGHT,
	  value: "Last Name:"
	}),
	
	lastNameTextField: SC.LabelView.extend({
		layout: { left: 90, top: 30, height: 24, width: 160 },
		valueBinding: '.parentView*content.lastName'
	}),
	
	streetLabel: SC.LabelView.extend({
	  layout: { left: 0, top: 60, height: 24, width: 85 },
	  textAlign: SC.ALIGN_RIGHT,
	  value: "Street:"
	}),
	
	streetTextField: SC.LabelView.extend({
		layout: { left: 90, top: 60, height: 24, width: 160 },
		valueBinding: '.parentView*content.street'
	}),
	
	zipLabel: SC.LabelView.extend({
	  layout: { left: 0, top: 90, height: 24, width: 85 },
	  textAlign: SC.ALIGN_RIGHT,
	  value: "ZIP:"
	}),
	
	zipTextField: SC.LabelView.extend({
		layout: { left: 90, top: 90, height: 24, width: 160 },
		valueBinding: '.parentView*content.zip'
	}),
	
	cityLabel: SC.LabelView.extend({
	  layout: { left: 0, top: 120, height: 24, width: 85 },
	  textAlign: SC.ALIGN_RIGHT,
	  value: "City:"
	}),
	
	cityTextField: SC.LabelView.extend({
		layout: { left: 90, top: 120, height: 24, width: 160 },
		valueBinding: '.parentView*content.city'
	}),
	
	toggleButton: SC.ButtonView.design({
		layout: { bottom: 0, left: 0, width: 90, height: 24 },
		title: "Edit",
		isDefault: YES,
		action: "toggleViews"
	})
});

