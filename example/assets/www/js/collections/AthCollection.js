define(["jquery", "underscore", "parse", "models/Athlete"],
    function ($, _, Parse, Athlete) {

        var AthCollection = Parse.Collection.extend({
            model: Athlete
        });

        return AthCollection;

    });
