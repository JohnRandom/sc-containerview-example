// ==========================================================================
// Project:   Contacts.contactController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Contacts */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Contacts.contactController = SC.ObjectController.create(
/** @scope Contacts.contactController.prototype */ {

    contentBinding: SC.Binding.single('Contacts.contactsController.selection'),
    
});
