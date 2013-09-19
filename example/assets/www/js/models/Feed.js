define(["jquery", "underscore", "parse"],
  function ($, _, Parse) {
    var Ad = Parse.Object.extend("Ad", {
      defaults: {
      	title: undefined,
      	desc: undefined,
        img: undefined
      }

      });

    return Ad;

  });