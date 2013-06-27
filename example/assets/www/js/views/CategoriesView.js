define(["jquery", "underscore", "parse", "handlebars", "views/AdListItemView", "text!templates/cat-list.html"],
    function ($, _, Parse, Handlebars, AdListItemView, template) {

        var CategoriesView = Parse.View.extend({

            tagName: "ul",
            id: "list",

            template: Handlebars.compile(template)
        });

        return CategoriesView;

    });
/**
 * Created with JetBrains WebStorm.
 * User: Gabriele
 * Date: 25/06/13
 * Time: 15.48
 * To change this template use File | Settings | File Templates.
 */
