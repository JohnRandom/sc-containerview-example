// ==========================================================================
// Project:   Contacts - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Contacts */
sc_require('views/show_contact');
sc_require('views/edit_contact');

// This page describes the main user interface for your application.  
Contacts.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    
	  defaultResponder: Contacts,
      childViews: 'contactsView contactContainer topView bottomView'.w(),
      isMainPane: YES,
    
      topView: SC.ToolbarView.design({
        layout: { top: 0, left: 0, right: 0, height: 36 },
        anchorLocation: SC.ANCHOR_TOP,
        childViews: 'labelView'.w(),
      
          labelView: SC.LabelView.design({
            layout: { centerY: 0, height: 24, left: 8, width: 200 },
            controlSize: SC.LARGE_CONTROL_SIZE,
            fontWeigth: SC.BOLD_WEIGHT,
            value: 'Your Contacts'
          })
      }),
    
      contactsView: SC.ScrollView.design({
        hasHorizontalScroller: NO,
        layout: { top: 36, bottom: 32, left: 0, width: 150 },
        backgroundColor: 'grey',
        contentView: SC.ListView.design({
          contentBinding: 'Contacts.contactsController.arrangedObjects',
          selectionBinding: 'Contacts.contactsController.selection',
          contentValueKey: 'fullName',
          rowHeight: 21
        })
      }),
    
      contactContainer: SC.ContainerView.design({
      	isContainerView: YES,
        layout: { top: 36, bottom: 32, left: 150, right: 0 },
        contentView: Contacts.contactView.design({
        	layout: { centerX: 0, centerY: 0, width: 250, height: 250 }
        }),
        alternateView: Contacts.editContactView.create({
        	layout: { centerX: 0, centerY: 0, width: 250, height: 250 }
        })
      }),
      
      bottomView: SC.ToolbarView.design({
        layout: { bottom: 0, left: 0, right: 0, height: 32 },
        childViews: 'summaryView'.w(),
        anchorLocation: SC.ANCHOR_BOTTOM,
      
          summaryView: SC.LabelView.design({
            layout: { centerY:0, height: 18, left: 20, right: 20 },
            textAlign: SC.ALIGN_CENTER,
            valueBinding: "Contacts.contactsController.summary"
          })
      })
    
  })//mainPane

});
