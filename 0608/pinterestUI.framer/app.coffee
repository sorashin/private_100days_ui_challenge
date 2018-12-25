gutter = 20
itemArray = []
itemNum = 10
pressedNumber = 3

scroll = new ScrollComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal:false

initItem = ()->
	for i in [0...itemNum]
		row = Math.floor(i/2)
		odd = i%2
		item = new Layer
			name: "#{i}"
			id: "#{i}"
			html: "item#{i}"
			width: (Screen.width-gutter*3)/2
			height: (Screen.width-gutter*3)/2
			x: odd*(Screen.width-gutter*3)/2+gutter*odd + gutter
			y: row*(Screen.width-gutter*3)/2+gutter*row + gutter
			superLayer: scroll.content
		item.onClick ->
			pressedNumber = "#{@.name}"
# 			pressedNumber = pressedNumber+1
			print pressedNumber
			insertItem()
			resetItem()
			for i in [0...itemArray.length]
				itemArray[i].index = i
				itemArray[i].name = i
		itemArray.push(item)
		
# 	allGridArray.splice(num+1, 0, new GridLayer(num:num+1), new GridLayer(num:num+2))

insertItem = ()->
	item = new Layer
		name: "inserted"
		id: "inserted"
		html: "inserted"
		width: (Screen.width-gutter*3)/2
		height: (Screen.width-gutter*3)/2
# 		x: odd*(Screen.width-gutter*3)/2+gutter*odd + gutter
# 		y: row*(Screen.width-gutter*3)/2+gutter*row + gutter
		superLayer: scroll.content
	itemArray.splice(pressedNumber+1,0,item)
	item.onClick ->
		pressedNumber = "#{@.name}"
		print pressedNumber
		insertItem()
		resetItem()
		for i in [0...itemArray.length]
			itemArray[i].index = i
			itemArray[i].name = i
resetItem = ()->
	for i in [0...itemArray.length]
		row = Math.floor(i/2)
		odd = i%2
		itemArray[i].animate
			x : odd*(Screen.width-gutter*3)/2+gutter*odd + gutter
			y : row*(Screen.width-gutter*3)/2+gutter*row + gutter
	scroll.updateContent()

initItem()

# for i in [0...itemArray.length]
# 	itemArray[i].onClick ->
# 		print "hof"
# 		print @.name
# 		insertItem()
# 		resetItem()
# 		for i in [0...itemArray.length]
# 			itemArray[i].index = i
# 			itemArray[i].name = i