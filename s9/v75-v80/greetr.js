(function (global, $) {
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  Greetr.init = function (firstName, lastName, language) {
    var self = this;
    firstName = firstName || "";
    lastName = lastName || "";
    language = language || "en";
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
