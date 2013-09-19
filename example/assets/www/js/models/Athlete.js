define(["jquery", "underscore", "parse"],
    function ($, _, Parse) {
        var Athlete = Parse.Object.extend("Athlete", {
            defaults: {
                 name: undefined,
                 birthDate: undefined,
                 nationality: undefined,
                 desc: undefined
            }
        });
        return Athlete;
    });