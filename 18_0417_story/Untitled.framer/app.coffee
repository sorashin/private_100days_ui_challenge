{LottieLayer} = require 'LottieLayer'

for i in [0..14]
	contents.children[i].states.add
		off:
			opacity:0
			y: contents.children[i].y+30
		on:
			opacity:1
			y: contents.children[i].y
			animationOptions:
				delay: .1*i
	contents.children[i].stateSwitch("off")

for i in [0..14]
	contents.children[i].animate "on"
	
customAnim_1 = new LottieLayer
	name: "customAnim_1"
	path: "images/icon.json"
	width: 110
	height: 110
	superLayer: thumb_1
	x: Align.center
	y: Align.center
	speed: .5

customAnim_2 = new LottieLayer
	name: "customAnim_2"
	path: "images/icon.json"
	width: 110
	height: 110
	superLayer: thumb_2
	x: Align.center
	y: Align.center
	speed: .5
	
customAnim_3 = new LottieLayer
	name: "customAnim_3"
	path: "images/icon.json"
	width: 110
	height: 110
	superLayer: thumb_3
	x: Align.center
	y: Align.center
	speed: .5