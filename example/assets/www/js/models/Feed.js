define(["jquery", "underscore", "parse"],
  function ($, _, Parse) {
    var Ad = Parse.Object.extend("Ad", {
      defaults: {
      	title: undefined,
      	desc: undefined,
        link: undefined,
        fblink: undefined,
        twlink: undefined
      }

      });

    return Ad;

  });