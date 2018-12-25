
Framer.Device.background.backgroundColor = "##DEE7E4"

for i in [0...5]
	nav = new Layer
		superLayer: gnav
		width: gnav.width/5
		x: gnav.width/5*i
		backgroundColor: null
scroll = new ScrollComponent
	superLayer: bg
	width:Screen.width
	height: Screen.height-49
	scrollHorizontal: false
	backgroundColor: "rgb(250,250,250)"
scroll.placeBehind(gnav)

	
for i in [0...10]
	thumb = new Layer
		width: (Screen.width-5*3)/2
		height: (Screen.width-5*3)/2
		y: ((Screen.width-5*3)/2+5)*Math.floor(i/2)
		image: "images/img#{i+1}.jpg"
		shadowSpread: 0
		shadowColor: "rgba(0,0,0,0.12)"
		shadowBlur: 4
	thumbShadow = new Layer
		superLayer: thumb
		width: (Screen.width-5*3)/2
		height: (Screen.width-5*3)/2
		backgroundColor: null
		shadowSpread: 0
		shadowColor: "rgba(0,0,0,0.24)"
		shadowBlur: 4
		shadowY: 4
	if i%2==0
		thumb.x= 5
	else if i%2 == 1
		thumb.x= (Screen.width-5*3)/2+10
	thumb.superLayer = scroll.content
	thumb.states.add
		off:
			opacity:0
			y: ((Screen.width-5*3)/2+5)*Math.floor(i/2)+20
			
		on:
			opacity:1
			y: ((Screen.width-5*3)/2+5)*Math.floor(i/2)
			animationOptions:
				delay: 0.2*i
	thumb.stateSwitch "off"
	thumb.animate("on")
	watch = new Layer
		superLayer: thumb
		image: "images/watch_off.svg"
		width: 24
		height: 24
		maxX: (Screen.width-5*3)/2-12
		maxY: (Screen.width-5*3)/2-12
	watch.onClick ->
		createLayer(@)
		watchAnimation(@)
watchAnimation = (@this) ->
	@this.image = "images/watch_on.svg"
	animationA = new Animation @this,
		scale: .8
		options:
			curve: Bezier.easeInOut
			time:.1
			
	animationB = new Animation @this,
		scale: 1
		options:
			curve: Spring(daming: .5)
			time:.1
	animationA.start()
	@this.onAnimationEnd ->
		animationB.start()
animateIcon = () ->
	animationA = new Animation myIcon,
		scale: 1.2
		options:
			curve: Bezier.easeInOut
			time:.1
	animationB = new Animation myIcon,
		scale: 1
		options:
			curve: Spring(daming: .5)
			time:.1
	animationA.start()
	myIcon.onAnimationEnd ->
		animationB.start()
createLayer = (@this) ->
	wthumb = new Layer
		superLayer: bg
		width: 50
		height: 50
		x:Align.center
		maxY: Screen.height-60
		image: @this.parent.image
		shadowSpread: 0
		shadowColor: "rgba(0,0,0,0.12)"
		shadowBlur: 4
	wthumbShadow = new Layer
		superLayer: wthumb
		width: 50
		height: 50
		shadowSpread: 0
		shadowColor: "rgba(0,0,0,0.24)"
		shadowBlur: 4
		shadowY: 4

	wthumb.placeBehind(gnav)
	wthumb.states.add
		on:
			opacity:1
			maxY: Screen.height-60
			scale:1
			animationOptions:
				curve:Spring(damping: .5)
		off:
			opacity:0
			maxY: Screen.height-60
			scale:.8
			
		in:
			opacity:0
			maxY: Screen.height
			scale:0.7
			animationOptions:
				curve:Spring(damping: .5)
	wthumb.stateSwitch "off"
	wthumb.animate("on")
	Utils.delay 1, ->
		wthumb.animate("in")
		Utils.delay .15, ->
			animateIcon()
			wthumb.destroy()
	

	