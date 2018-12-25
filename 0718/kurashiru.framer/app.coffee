# Import file "kurashil" (sizes and positions are scaled 1:2)
i = Framer.Importer.load("imported/kurashil@2x")

scroll = new ScrollComponent
	width:Screen.width
	height:Screen.height
	scrollHorizontal: false
	backgroundColor: "#f1f1f1"
	
i.header.superLayer = i.block1.superLayer = i.block2.superLayer = i.block3.superLayer = i.block4.superLayer = i.block5.superLayer = scroll.content

scroll.states.add
	on:
		y: 0
		opacity:1
	off: 
		y:Screen.height
		opacity:0
scroll.stateSwitch "on"

fav = new Layer
	superLayer: i.block1
	width: 56*2
	height: 56*2
	borderRadius: 56
	x: 750-56*2-16*2
	y: 802
	backgroundColor: "#fff"
	
	shadowY: 8
	shadowSpread: 0
	shadowColor: "rgba(1,1,1,0.24)"
	shadowBlur: 8
favShadow = new Layer
	superLayer: fav
	width: 56*2
	height: 56*2
	borderRadius: 56
	backgroundColor: null
	shadowSpread: 1
	shadowColor: "rgba(0,0,0,0.12)"
	shadowBlur: 4
favicon = new Layer
	superLayer: fav
	width: 26*2
	height: 24*2
	x: Align.center
	y: Align.center
	image: "images/heart.svg"
		
nullLayer = new Layer
	height: 1334
	width: 750
	backgroundColor: null
	x: 0
	y: 0
	image: "images/bg.png"
nullLayer.placeBehind(scroll)
	
# scroll.draggable.enabled = true
# scroll.draggable.constraints =
#     x: 0
#     y: 0

video = new VideoLayer
	y: 130
	width: 750
	height: 748
	video: "images/madrane.mov"
video.states.add
	off:
# 		superLayer : null
		width:250
		height:250
		x: 500
		y: 1084
		
	on:
# 		superLayer: i.video
		x:0
		y:0
		width:Screen.width
		height:Screen.width
	init:
		x:0
		y:130
		width:750
		header:750
video.stateSwitch("init")
		

createVideoPlayer = ()->
	prog = new Layer
		superLayer: video
		y: Align.bottom
		width: Screen.width
		height: 2
		backgroundColor: "rgba(0,0,0,.56)"
	currentProg = new Layer
		superLayer: video
		y: Align.bottom
		width: 0
		height: 2
		backgroundColor: "#C6B363"
	currentPoint = new Layer
		superLayer: currentProg
		width: 30
		height: 30
		y: Align.center
		x: 0
		borderRadius: 15
		backgroundColor: "#C6B363"
	currentPoint.draggable.enabled = true
	currentPoint.draggable.vertical = false
	currentPoint.draggable.constraints =
		x: 0
		width: Screen.width
	pointAnimaton = new Animation currentPoint,
		x: Screen.width
		options:
			time: 40
			curve: Bezier.linear
	pointAnimaton.start()
	progAnimation = new Animation currentProg,
		width: Screen.width
		options:
			time: 40
			curve: Bezier.linear
	progAnimation.start()
	video.player.play()
	Events.wrap(video.player).on "pause", ->
		video.player.play() # 途中で止まっても再開する
i.closeBtn.onClick ->
	video.children[0].destroy()
	video.children[0].destroy()
	video.superLayer = null
	scroll.animate("off")
	video.animate("off")
		
		
createVideoPlayer()

scroll.onMove ->
# 	if scroll.scrollY= 240
# 		print 
	if scroll.scrollY < 130
		video.superLayer = i.video
		video.y = 0
	else if scroll.scrollY >= 130 && scroll.scrollY < 240
		video.superLayer = null
	else if scroll.scrollY >= 240
		fav.superLayer = video
		fav.midY = 750

