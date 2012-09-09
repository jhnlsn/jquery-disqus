/*! jQuery Disqus - v0.0.1 - 2012-09-09
* https://github.com/johnymonster/jquery-disqus
* Copyright (c) 2012 John; Licensed MIT, GPL */

(function($) {

  // Collection method.
  $.fn.awesome = function() {
    return this.each(function() {
      $(this).html('awesome');
    });
  };

  // Static method.
  $.awesome = function() {
    return 'awesome';
  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    return elem.textContent.indexOf('awesome') >= 0;
  };

}(jQuery));
