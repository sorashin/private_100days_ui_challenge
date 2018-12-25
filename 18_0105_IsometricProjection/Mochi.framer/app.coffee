# Set on creation 
layerA = new VideoLayer
	superLayer: bg
	video: "hello.mp4"
 
# Enable auto play 
layerA.player.autoplay = true
 
# Play the video 
layerA.player.play()