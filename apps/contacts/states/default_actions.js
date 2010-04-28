// ==========================================================================
// Project:   Contacts.DEFAULTACTIONS
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Contacts */

/** @class

	(Document Your State Here)

	@extends SC.Responder
	@version 0.1
*/
Contacts.DEFAULTACTIONS = SC.Responder.create(
/** @scope Contacts.DEFAULTACTIONS.prototype */ {

	/**
	The next state to check if this state does not implement the action.
	*/
	nextResponder: null,

	didBecomeFirstResponder: function() {
	// Called when this state becomes first responder
	},

	willLoseFirstResponder: function() {
	// Called when this state loses first responder
	},

	// ..........................................................
	// EVENTS
	//
	
	toggleViews: function(view) {
		// get the container view from the helper method
		var containerView = this._getContainerViewFor(view);
		
		// if there is a container view proceed
		if (containerView) {
		
			// first, store the alternate
			var alternateView = containerView.get('alternateView');
			// then swap the views
			containerView.set( 'alternateView', containerView.get('contentView') );
			// and show the alternate view
			containerView.set('nowShowing', alternateView);
		}
	},

	_getContainerViewFor: function(view) {
		if (!view) return;
	
		var containerView = view.get('parentView');		
		while (!containerView.get('isContainerView')) { 
			containerView = containerView.get('parentView');
			if (containerView.get('isMainPane')) { return containerView = null; }
		}

		return containerView;
	},
  
}) ;
