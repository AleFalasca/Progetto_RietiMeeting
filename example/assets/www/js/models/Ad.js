define(["jquery", "underscore", "parse"],
  function ($, _, Parse) {
    var Ad = Parse.Object.extend("Ad", {
      defaults: {
        title: undefined,
        figure: new Image(),
        hour: undefined,
        day: undefined,
        photofinish: new Image (),
        startingListUrl: undefined,
        resultsUrl: undefined
      }
      });
    return Ad;
  });