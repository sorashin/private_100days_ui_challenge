flow = new FlowComponent
flow.showNext(fashion)

createBG =()->
	bg = new Layer
		width:10
		height:10
		backgroundColor:"#fff"
		superLayer: @
	bg.states.add
		on:
			width: 375
			height:50
			y: Screen.height-94
		off:
			width:10
			height:10

class Thumb extends Layer
	constructor: (options={}) ->
		thisButton = @

		@_y = options.y or 0
		
		super options
		
		@.props = 
			width: 375
			height: 375
			image: "images/thumb.png"
			name: "movingthumb"
			superLayer: fashion
		@.states.add
			on: 
				x:@.x
				y: @.y
				width:375
				height:375
			off:
				x: Screen.width/2-25
				y: Screen.height-100
				width:50
				height:50
				shadowY: 5
				shadowBlur: 10
				borderRadius: 5
			out:
				y: Screen.height+200
			open:
				y: Screen.height-200
			animationOptions:
				curve: "ease"
				time: 0.5
				delay:0.5
		@.stateSwitch "on"
# 		@.onClick ->
# 			print @.states.current.name
# 		print @.states.current.name
	minim:() ->
		@.states.switch "off"
	out:() ->
		@.states.switch "out"
	open:() ->
		@.states.switch "open"
		bg = new Layer
			width:375
			height:0
			x:0
			y: Screen.height-44
			backgroundColor: "#000"
			superLayer: fashion
		bg.placeBehind(@)
		bg.states.add
			on:
				width: 375
				height:50
				x: 0
				y: Screen.height-94
			off:
				width:375
				height:0
				x:0
				y: Screen.height-44
			animationOptions:
				curve: "ease"
				time: 0.5
		bg.stateSwitch(off)
		bg.states.switch "on"

movingthumb = new Thumb
movingthumb.superLayer = fashion
movingthumb.placeBefore(favBtn)
favBtn = new Layer
	width: 44
	height: 44
	backgroundColor: "#fff"
	borderRadius: 50
	shadowSpread: 1
	shadowColor: "rgba(0,0,0,0.12)"
	shadowBlur: 10
	x: 316
	y: 353
	
favBtn.onClick ->
	movingthumb.minim()
	setTimeout ->
		movingthumb.out()
		if movingthumb.states.current.name == "open"
			bg.states.switch "off"
			bg.destroy()
	, 5000
movingthumb.onClick ->
	if movingthumb.states.current.name == "off"
		movingthumb.open()
		