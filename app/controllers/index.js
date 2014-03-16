var win = Ti.UI.createWindow({
		backgroundColor: 'white',
		layout: 'vertical',
		title: 'Index',
		exitOnClose: true
	});

		
	// LABEL TITLE

var title = Ti.UI.createLabel({
	text : "CineQuizz",
  color:'black',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  top: 60,
  font: { fontSize:62 },
  width:'auto', height: 'auto'
});

win.add(title);

	// LABEL DESCRIPTION

var description = Ti.UI.createLabel({
  color: 'black',
  font: { fontSize:16 },
  text: "Bonjour et bienvenue dans notre quiz dedié au cinema. Une serie de question "+
  "vous sera posé, repondez y en cliquant sur la reponse en bas de page. Un extrait du "+
  "film sur lequel porte la question vous sera proposé, il pourra vous etre utile.",
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 40,
  width: 300
});

win.add(description);


	// BUTTON PLAY
	
 var buttonMenu1= Ti.UI.createButton({
	top : 50,
   	height : 20,
   	borderRadius:10,
   	backgroundColor : 'white',
   	color : '#07D1FF',
   	align : 'center',
	title   : 'Jouer',
	borderColor : '#07D1FF',
	borderRadius : '10',
	borderWidth : '3',
	font: { fontSize:50 },
  	width:'300', height: '75'	
});
	
buttonMenu1.addEventListener('click',function(e)
{
   	Alloy.createController( 'questionController', {} );
});

win.add(buttonMenu1);
win.open();