function Controller() {
    function displayQuestion(count) {
        var questionToDisplay = questions[count], win = Ti.UI.createWindow({
            backgroundColor: "white",
            layout: "vertical",
            title: "Questions"
        });
        var topMenu = Titanium.UI.createView({
            backgroundColor: "#07D1FF",
            top: 0,
            width: 320,
            height: 50
        });
        win.add(topMenu);
        var buttonMenu2 = Titanium.UI.createButton({
            title: "Revenir au menu",
            top: 20,
            height: 20,
            left: 8,
            color: "white"
        });
        buttonMenu2.addEventListener("click", function() {
            win.close(videoPlayer);
            Alloy.createController("index", {});
        });
        topMenu.add(buttonMenu2);
        win.open();
        tmpcount = count + 1;
        Ti.UI.createLabel({
            color: "blue",
            text: "Question " + tmpcount + "/" + totalCount,
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            top: 30,
            width: 300,
            height: 30
        });
        var videoPlayer = Titanium.Media.createVideoPlayer({
            top: 20,
            autoplay: true,
            backgroundColor: "white",
            height: 170,
            width: 300,
            mediaControlStyle: Titanium.Media.VIDEO_CONTROL_DEFAULT,
            scalingMode: Titanium.Media.VIDEO_SCALING_ASPECT_FIT
        });
        videoPlayer.url = questionToDisplay.video;
        win.add(videoPlayer);
        var question = Ti.UI.createLabel({
            color: "black",
            font: {
                fontSize: 22
            },
            text: questionToDisplay.text,
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            top: 20,
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE
        });
        win.add(question);
        var buttonResponse1 = Titanium.UI.createButton({
            title: questionToDisplay.answer1,
            top: 20,
            height: 20
        });
        buttonResponse1.addEventListener("click", function() {
            win.close(videoPlayer);
            response(questionToDisplay.answer1);
        });
        win.add(buttonResponse1);
        var buttonResponse2 = Titanium.UI.createButton({
            title: questionToDisplay.answer2,
            top: 20,
            height: 20
        });
        buttonResponse2.addEventListener("click", function() {
            win.close(videoPlayer);
            response(questionToDisplay.answer2);
        });
        win.add(buttonResponse2);
        var buttonResponse3 = Titanium.UI.createButton({
            title: questionToDisplay.answer3,
            top: 20,
            height: 20
        });
        buttonResponse3.addEventListener("click", function() {
            win.close(videoPlayer);
            response(questionToDisplay.answer3);
        });
        win.add(buttonResponse3);
    }
    function response(userResponse) {
        userResponse === questions[count].goodAnswer && (questions[count].result = true);
        count++;
        count != totalCount && displayQuestion(count);
        count == totalCount && Alloy.createController("resultsController", questions);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "questionController";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var count = 0, questions = [ {
        text: "Qui est cet acteur ?",
        answer1: "Vincent Cassel",
        answer2: "Robert De Niro",
        answer3: "Nicolas Sarkozy",
        video: "question1.mp4",
        goodAnswer: "Vincent Cassel",
        result: false
    }, {
        text: "Qui est mister brown ?",
        answer1: "Edward Bunker",
        answer2: "Steve Buscemi",
        answer3: "Quentin Tarantino",
        video: "question2.mp4",
        goodAnswer: "Quentin Tarantino",
        result: false
    }, {
        text: "Juste avant cette scene, que demande le messager perse a Leonidas ?",
        answer1: "De la terre et de l'eau",
        answer2: "De l'or et des troupes",
        answer3: "Un refuge pour la nuit",
        video: "question3.mp4",
        goodAnswer: "De la terre et de l'eau",
        result: false
    }, {
        text: "Que pousse Jack Torrance a essayer d'assasiner sa femme ?",
        answer1: "Sa femme est infidele",
        answer2: "Jack a perdu la raison",
        answer3: "Cette scene est un reve du fils de Jack",
        video: "question4.mp4",
        goodAnswer: "Jack a perdu la raison",
        result: false
    }, {
        text: "Quel est le terme designant les breves apparitions d'Alfred Hitchcock dans ses films ?",
        answer1: "De la figuration",
        answer2: "Un cliffhanger",
        answer3: "Un cameo",
        video: "question5.mp4",
        goodAnswer: "Un cameo",
        result: false
    }, {
        text: "Quel est le nom de l'acteur interpretant le role de Thorin le chef des nains ?",
        answer1: "Richard Armitage",
        answer2: "Martin Freeman",
        answer3: "Ian McKellen ",
        video: "question6.mp4",
        goodAnswer: "Richard Armitage",
        result: false
    }, {
        text: "Dans quel pays est nee Arnold Schwarzenegger ?",
        answer1: "Slovenie",
        answer2: "Autriche",
        answer3: "Hongrie",
        video: "question7.mp4",
        goodAnswer: "Autriche",
        result: false
    }, {
        text: "Qu'est ce que cette scene a d'inhabituel ?",
        answer1: "L'acteur tape vraiment ce qui s'affiche",
        answer2: "Cette scene a ete improvisée",
        answer3: "Un sosie joue pour Samuel L. Jackson",
        video: "question8.mp4",
        goodAnswer: "L'acteur tape vraiment ce qui s'affiche",
        result: false
    }, {
        text: "Qui est le realisateur des Tontons flingueurs ?",
        answer1: "Albert Simonin",
        answer2: "Francis Blanche",
        answer3: "Georges Lautner",
        video: "question9.mp4",
        goodAnswer: "Georges Lautner",
        result: false
    } ];
    var totalCount = questions.length;
    displayQuestion(count);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;