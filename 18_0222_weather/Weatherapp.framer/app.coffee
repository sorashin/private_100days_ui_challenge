
# notificationBar.superLayer = notificationBG
notificationBar.props =
	x: 0
	y: 250
notificationBar.draggable.enabled = true

 
# Set dragging constraints 
notificationBar.draggable.constraints =
	x: 0
	y: 250
	width: 411
	height: 92
Framer.Device.background.image = "images/wallpaper.png"
background.states.add
	on:
		opacity:1
	off:
		opacity:0
	animationOptions:
		time:.5
		curve: "ease-out"
background.stateSwitch "off"
background.states.switch "on"

notificationBar.states.add
	on:
		opacity:1
		y: notificationBar.y
	off:
		opacity:0
		y: notificationBar.y+30
	animationOptions:
		time:.5
		curve: "ease-out"
notificationBar.stateSwitch "off"
notificationBar.states.switch "on"