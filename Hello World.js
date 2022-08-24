
//Called when application is started.
function OnStart()
{
	//Create full screen layout with controls vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )

	//Add an image 20% of screen width.
	img = app.AddImage( lay, "Img/Hello World.png", 0.2 )
	
	//Add some text, with a top margin and set the font size.
	txt = app.AddText( lay, "Hello World!" )
	txt.SetMargins( 0, 0.05, 0, 0 )
	txt.SetTextSize( 22 )
	
	//Add layout to app.	
	app.AddLayout( lay )
}

