define(["jquery", "underscore", "parse"],
  function ($, _, Parse) {
    var Ad = Parse.Object.extend("Ad", {
      defaults: {
        title: undefined,
        figure: new Image(),
        hour: undefined,
        day: undefined,
        isSaturday: function () {
            if (this.day = Saturday)
            return true;
            else
            return false
        }
      }
      });
    return Ad;
  });