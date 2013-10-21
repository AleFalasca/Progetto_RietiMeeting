define(["jquery", "underscore", "parse"],
  function ($, _, Parse) {
    var Ad = Parse.Object.extend("Ad", {
      defaults: {
      	title: undefined,
      	desc: undefined,
        link: undefined
      }

      });

    return Ad;

  });