# Import file "UI_export" (sizes and positions are scaled 1:2)
sketch = Framer.Importer.load("imported/UI_export@2x")
# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "中島　慎太郎"
	twitter: ""
	description: ""


textArea = new Layer
	x: 44
	y: 108
	width: 472
	height: 58
	backgroundColor: null
	parent: sketch.newpost

sketch.newpost.states.add
	close:
		scale: 0
		opacity: 0
	open:
		scale: 1
		opacity: 1
sketch.newpost.states.switchInstant "close"

sketch.newpostBtn.onClick (event, layer) ->
	sketch.newpost.states.switch("open", {curve:"spring(500,12,0)"})

sketch.closeBtn.onClick (event, layer) ->
	sketch.newpost.states.switch("close", {curve:"spring(500,12,0)"})


