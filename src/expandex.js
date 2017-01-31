(function( $ ) {
 
    $.fn.expandex = function(options) {

      // Set default options
      var settings = $.extend({
          // These are the defaults.
          moreText: "Read more &plus;",
          lessText: "Read less &mdash;",
          firstState: "closed"
      }, options );

      // Set vars
      var exp = $( this );
      var tgl = this.children('.expandex-toggle');
      var bag = this.children('.expandex-bag');

      // Set active and default display state classes
      exp.addClass('is-' + settings.firstState).addClass('expandex-active');
 
        tgl.click(function(event) {

            // Stop prop
            event.preventDefault();

            // Check state
            if (exp.hasClass('is-closed')) {
              bag.slideDown(function() {
                exp.removeClass('is-closed').addClass('is-open');
                tgl.html(settings.lessText);
              });
            } else if (exp.hasClass('is-open')) {
              bag.slideUp(function() {
                exp.removeClass('is-open').addClass('is-closed');
                tgl.html(settings.moreText);
              });
            }

        });
 
        return this;
 
    };
 
}( jQuery ));