/***
 * Copyright (c) 2020
 * Licensed under the MIT License.
 *
 * Author: César Latorre
 * Version: 1.0
 * Requires: jQuery 1.12.4+
 * Web: https://github.com/ceslat/tinyStepBar
 */
(function($){
	var methods = {
		init : function( options ) {

			var defaults = {
				step: 5,
				stepComplete: 3,
				stepPercentage: [0, 25, 50, 75, 100],
				stepTitle: ['', '', '', '', '']
			}

			var options = $.extend(defaults, options);

			return this.each(function(silent) {
				var _this = $(this);
				if(_this.hasClass('progress')){
					console.log('The element (' + _this + ') was previously initialized.')
				}
				else{
					_this.addClass('progress');
					for(var index=0;index<defaults.step;index++){
						var done = '';
						var active = '';
						var number = index + 1;
						if(index < defaults.stepComplete - 1){
							done = ' done';
							number = '&#10003;'; 
						}
						if(index === defaults.stepComplete - 1){
							active = ' active'; 
						}
						_this.append('<div class="circle' + done + active + '" title="' + defaults.stepTitle[index] + '"><span class="label">' + number + '</span><span class="title">' + defaults.stepPercentage[index] + '%</span></div>');
						if(index < defaults.step - 1){
							_this.append('<span class="bar' + done + active + '"></span>');
						}
					}
				}
			});
		},
		destroy : function(silent) {
			return this.each(function() {
				if($(this).hasClass('progress')){
					$(this).empty();
					$(this).removeClass('progress');
				}
				else{
					console.log('The element (' + $(this) + ') was not previously initialized.')
				}
			});
		}
	};

	$.fn.tinyStepBar = function( method ) {
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		}
		else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		}
		else {
			$.error( 'This Method ' +  method + ' does not exit in jQuery.tinyStepBar' );
		}
	};
})(jQuery);
