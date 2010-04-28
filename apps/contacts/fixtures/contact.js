// ==========================================================================
// Project:   Contacts.Contact Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Contacts */

sc_require('models/contact');

Contacts.Contact.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

   { guid: 1,
     firstName: "Heinrich",
     lastName: "Peters",
     street: "Main Street 113",
     zip: "12345",
     city: "Metropolis",
     description: "" },
  
   { guid: 2,
     firstName: "Bruce",
     lastName: "Wayne",
     street: "Hill Street 14-25",
     zip: "10010",
     city: "Gotham City",
     description: "" },
  
   { guid: 3,
     firstName: "Peter",
     lastName: "Parker",
     street: "Oxfrod Street",
     zip: "60234",
     city: "New York",
     description: "" }

];
