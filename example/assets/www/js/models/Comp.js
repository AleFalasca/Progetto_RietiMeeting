define(["jquery", "underscore", "parse"],
  function ($, _, Parse) {
    var Comp = Parse.Object.extend("Comp", {
      defaults: {
        title: undefined,
        figure: undefined,
        hour: undefined,
        day: undefined,
        nameForTable: undefined,
        nameforStartList: undefined,
        table: undefined,
        startList: undefined
        }
      });
    return Comp;
  });