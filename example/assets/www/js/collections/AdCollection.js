define(["jquery", "underscore", "parse", "models/Ad"],
    function ($, _, Parse, Ad) {
        var AdCollection = Parse.Collection.extend({
            model: Ad,
            byDay: function(day) {
                filtered = this.filter(function(Ad) {
                    return Ad.get("day") === day;
                });
                return new AdCollection(filtered);
            }
        });
        return AdCollection;
    });