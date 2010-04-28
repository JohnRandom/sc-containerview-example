// ==========================================================================
// Project:   Contacts.Contact
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Contacts */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Contacts.Contact = SC.Record.extend(
/** @scope Contacts.Contact.prototype */ {

  // TODO: Add your own code here.
  firstName: SC.Record.attr(String),
  lastName: SC.Record.attr(String),
  street: SC.Record.attr(String),
  zip: SC.Record.attr(String),
  city: SC.Record.attr(String),
  
  fullName: function() {
    return this.get('firstName') + " " + this.get('lastName');
  }.property('firstName', 'lastName').cacheable()
  
}) ;
