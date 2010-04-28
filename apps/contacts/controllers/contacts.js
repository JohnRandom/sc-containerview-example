// ==========================================================================
// Project:   Contacts.contactsController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Contacts */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Contacts.contactsController = SC.ArrayController.create({
  
  allowsEmptySelection: YES,

  // TODO: Add your own code here.
  summary: function() {
    var len = this.get('length');
    var ret;
    
    if (len && len > 0) {
      ret = len === 1 ? "1 Contact" : "%@ Contacts".fmt(len);
    } else {
      ret = "No Contacts";
    }
    
    return ret;
  }.property('length').cacheable()
  
});