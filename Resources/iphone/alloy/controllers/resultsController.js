function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "resultsController";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var questions = arguments[0] || {};
    var results = [];
    for (var i = 0; questions.length > i; i++) results[i] = false === questions[i].result ? {
        info: {
            text: questions[i].text
        },
        pic: {
            image: "icons-false.png"
        }
    } : {
        info: {
            text: questions[i].text
        },
        pic: {
            image: "icons-true.png"
        }
    };
    var win = Ti.UI.createWindow({
        backgroundColor: "white"
    });
    var myTemplate = {
        childTemplates: [ {
            type: "Ti.UI.ImageView",
            bindId: "pic",
            properties: {
                left: 3,
                height: 50,
                width: 50
            }
        }, {
            type: "Ti.UI.Label",
            bindId: "info",
            properties: {
                color: "black",
                font: {
                    fontFamily: "Arial",
                    fontWeight: "bold"
                },
                left: "60dp",
                height: 100
            }
        } ]
    };
    var listView = Ti.UI.createListView({
        top: 55,
        color: "white",
        templates: {
            template: myTemplate
        },
        defaultItemTemplate: "template"
    });
    var sections = [];
    var result = Ti.UI.createListSection({
        headerTitle: "Tableau des scores"
    });
    result.setItems(results);
    sections.push(result);
    listView.setSections(sections);
    win.add(listView);
    var topMenu = Titanium.UI.createView({
        backgroundColor: "#07D1FF",
        top: 0,
        width: 320,
        height: 55
    });
    win.add(topMenu);
    var buttonMenu1 = Ti.UI.createButton({
        title: "Rejouer",
        top: 20,
        height: 20,
        right: 8,
        color: "white"
    });
    buttonMenu1.addEventListener("click", function() {
        Alloy.createController("questionController", {});
    });
    topMenu.add(buttonMenu1);
    var buttonMenu2 = Titanium.UI.createButton({
        title: "Revenir au menu",
        top: 20,
        height: 20,
        left: 8,
        color: "white"
    });
    buttonMenu2.addEventListener("click", function() {
        Alloy.createController("index", {});
    });
    topMenu.add(buttonMenu2);
    win.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;