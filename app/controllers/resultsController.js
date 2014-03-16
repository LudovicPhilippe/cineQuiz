var questions = arguments[0] || {};
var results = [];
for(var i = 0; i < questions.length; i++){
	if(questions[i].result === false){
		results[i] = {info: {text: questions[i].text},
		 pic: {image: 'icons-false.png'}};
	}
	else{
		results[i] = {info: {text: questions[i].text},
		 pic: {image: 'icons-true.png'}};
	}
}


var win = Ti.UI.createWindow({backgroundColor: 'white'});
// Create a custom template that displays an image on the left, 
// then a title next to it with a subtitle below it.
var myTemplate = {
    childTemplates: [
        {                            // Image justified left
            type: 'Ti.UI.ImageView', // Use an image view for the image
            bindId: 'pic',           // Maps to a custom pic property of the item data
            properties: {            // Sets the image view  properties
                left: 3, height : 50, width :50
            }
        },
        {                            // Title 
            type: 'Ti.UI.Label',     // Use a label for the title 
            bindId: 'info',          // Maps to a custom info property of the item data
            properties: {            // Sets the label properties
                color: 'black',
                font: { fontFamily:'Arial', fontWeight:'bold' },
                left: '60dp', height : 100
            }
        }
    ]
};

var listView = Ti.UI.createListView({
	top : 55,
	color : 'white',
    // Maps myTemplate dictionary to 'template' string
    templates: { 'template': myTemplate },
    // Use 'template', that is, the myTemplate dict created earlier
    // for all items as long as the template property is not defined for an item.
    defaultItemTemplate: 'template'
});
var sections = [];

var result = Ti.UI.createListSection({
	headerTitle: 'Tableau des scores'});
	
result.setItems(results);
sections.push(result);

listView.setSections(sections);
win.add(listView);



var topMenu = Titanium.UI.createView({
   backgroundColor:'#07D1FF',
   top : 0,
   width:320,
   height:55
});

win.add(topMenu);

//BUTTONS
 var buttonMenu1= Ti.UI.createButton({
	title: "Rejouer",
   	top : 20,
   	height : 20,
   	right : 8,
   	color : 'white'
});

buttonMenu1.addEventListener('click',function(e)
{
   	Alloy.createController( 'questionController', {} );
});

topMenu.add(buttonMenu1);

var buttonMenu2 = Titanium.UI.createButton({
   title: "Revenir au menu",
   top : 20,
   height : 20,
   left : 8,
   color : 'white'
});

buttonMenu2.addEventListener('click',function(e)
{
    //leave the app
    	Alloy.createController( 'index', {} );
});

topMenu.add(buttonMenu2);

	
win.open();