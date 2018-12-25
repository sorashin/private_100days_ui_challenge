{BodymovinLayer} = require 'BodymovinLayer'
data = JSON.parse Utils.domLoadDataSync "modules/transaction.json"
discriptionText=["■商品詳細DANIEL WELLINGTON ダニエルウェリントン「Classic Black」シリーズ DW00100151 CornWall36mm シルバー国内正規品ですので、説明書、保証書は日本語です。","輸入雑貨の閉店セールでまとめて新品購入しました。新品状態でキレイです。表と裏の赤いラインは保護のビニールです。品番は00100036DWです。画像の物が全てです。電池はいつ切れるかわかりませんので電池が切れて到着の可能性もありますのでご了承ください。以上の事をご理解の上入札お願いします。いろんな時計が好きで沢山コレクションしていますが断捨離の為に使わない時計などは出品します。ノークレーム・ノーリターンでお願いします","ダニエルウェリントンは、2011年に創設されたスウェーデンの時計メーカー。時代に捕われず、時や場所を選ばない洗練されたデザインで、男性にも女性にも人気です。尾錠タイプのストラップですので、プレゼント用にお求め頂いてもすぐにご利用頂けます。","ブランド：Daniel Wellington(ダニエルウェリントン)駆動方式：クオーツ 防水機能：日常生活用防水 ケース：ステンレススチール ケース径：32mm 専用BOX、取扱説明書付き"]

isSearch = false
# Basic usage
InputModule = require "input"
# bg.opacity =0
input = new InputModule.Input
  setup: false # Change to true when positioning the input so you can see it
  y: 170 # y position
  x: 0  # x position
  width: Screen.width
  height: 70/2
  placeholder: "商品名" # Text visible before the user type
  placeholderColor: "#000000" # Color of the placeholder text
input.style = 
  fontSize: "14px"
  lineHeight: "28px"
  padding: "10px 20px 10px 50px"
  color: "rgba(0,0,0,.84)"
  fontWeight:"bold"


# keyboardとheadを作成
keyboard = new Layer
	width: Screen.width
	height: 432/2+50
	x: Align.center
	y: Screen.height
	backgroundColor: "#eee"
keyboard.states.add
	on:
		y:Screen.height-keyboard.height
		animationOptions:
			curve: Spring(damping: 0.8)
	off:
		y:Screen.height+50
		animationOptions:
			curve: Spring(damping: 0.8)
keyboard.stateSwitch "off"
keyboardBG = new Layer
	superLayer: keyboard
	width: Screen.width
	height: 432/2
	y: 50
	backgroundColor: "#eee"
	image: "images/keyboard.png"
returnKey = new Layer
	superLayer: keyboardBG
	width: 175/2
	height: 84/2
	maxX: Screen.width-3
	maxY: 432/2-4
	borderRadius: 10/2
	backgroundColor: "#007aff"
returnText = new TextLayer
	superLayer: returnKey
	text: "Search"
	color: "#fff"
	x: Align.center
	Y: Align.center
	height: 84/2
	lineHeight: 2.7
	fontSize: 30/2

loadingAnim = new BodymovinLayer
	superLayer: keyboard
	name: "loadingAnim"
	path: "modules/material_loader.json"
	autoplay: true
	loop: true
	speed: 1
	direction: 1
	width:50
	height:50
	x:Align.center
	y: Align.center
loadingAnim.placeBehind(keyboardBG)

# searchBtnを作成
searchBtn = new Layer
	superLayer: keyboard
	x: 5
	y: 5
	width: 40
	height: 40
	borderRadius: 25 
	backgroundColor: "#fff"
	shadowSpread: 0
	shadowColor: "rgba(0,0,0,0.24)"
	shadowBlur: 2
	shadowY: 1
searchBtn.states.add
	on:
		width:Screen.width-10
		borderRadius:2
		animationOptions:
			curve: Spring(damping: 0.9)
	off:
		width:40
		borderRadius:25
		animationOptions:
			curve: Spring(damping: 0.9)
searchBtn.stateSwitch "off"

# searchCloseBtnを作成
searchCloseBtn = new Layer
	superLayer: keyboard
	width: 10
	height: 10
	maxX: Screen.width-15
	y: 20
	image: "images/closeBtn.png"
searchIcon.superLayer = searchBtn
searchIcon.x = Align.center
searchIcon.y = Align.center

searchCloseBtn.states.add
	on:
		opacity:1
	off:
		opacity:0
searchCloseBtn.stateSwitch "off"

# searchInputを作成
searchInput = new InputModule.Input
	superLayer:searchBtn
	setup: false # Change to true when positioning the input so you can see it
	y: 0 # y position
	x: 40  # x position
	width: Screen.width-100
	height: 14
	placeholder: "カテゴリを入力して落札されている商品を検索" # Text visible before the user type
	placeholderColor: "#ddd" # Cor of the placeholder text
searchInput.style = 
	fontSize: "14px"
	lineHeight: "14px"
	padding: "14px 0px 0px 0px"
	color: "rgba(0,0,0,.84)"
searchInput.states.add
	on:
		opacity:1
	off:
		opacity:0
searchInput.stateSwitch "off"

page = new PageComponent
	superLayer: keyboard
	y: Align.bottom
	x:0
	width: Screen.width
	height: 432/2
page.placeBehind(keyboardBG)
for i in [0...10]
	thumb = new Layer
		superLayer: page.content
		width: 250
		height: 180
		borderRadius: 5
		x: 250*i+10*(i+1)
		y: 10
		backgroundColor: "#fff"
		shadowSpread: 0
		shadowColor: "rgba(0,0,0,0.24)"
		shadowBlur: 2
		shadowY: 1
	thumb.states.add
		on:
			opacity:1
			y: 10
			animationOptions:
				delay: 0.1*i
		off:
			opacity:0
			y: 50
			animationOptions:
				delay: 0.1*i
	thumb.stateSwitch "off"
	title = new TextLayer
		superLayer: thumb
		text: data.auctions[i].title
		x: 10
		y: 10
		fontSize: 10
		width: 150
		fontWeight: "bold"
	photo = new Layer
		superLayer: thumb
		width: 80
		height: 80
		x: Align.right
		y: Align.top
		image: data.auctions[i].images[0].url
	priceArea = new Layer
		superLayer: thumb
		width: 250
		height: 40
		x: 0
		y: 65
		backgroundColor: null
	startPrice = new TextLayer
		superLayer: priceArea
		text: data.auctions[i].start_price + "円"
		fontSize: 16
		x: 10
		y: 10
		fontWeight: "bold"
		color: "#000"
	startPriceDisc = new TextLayer
		superLayer: priceArea
		text: "開始価格"
		fontSize: 8
		x: 10
		y: 0
		color: "#000"
	centerArrow = new Layer
		superLayer: priceArea
		width: 10
		height: 10
		image: "images/arrow.png"
		x: priceArea.width*1/3
		y: Align.center
		
	endPrice = new TextLayer
		superLayer: priceArea
		text: data.auctions[i].price + "円"
		fontSize: 16
		x: priceArea.width*1/3+20
		y: 10
		fontWeight: "bold"
		color: "#000"
	endPriceDisc = new TextLayer
		superLayer: priceArea
		text: "落札価格"
		fontSize: 8
		x: priceArea.width*1/3+20
		y: 0
		color: "#000"
	discription = new TextLayer
		superLayer: thumb
		width: 250
		height: 55
		y: 130
		text: discriptionText[i]
		backgroundColor: null
		fontSize: 10
		truncate: true
		padding: 
			left: 10
			right: 10
			bottom: 10
	otherInfoArea = new Layer
		superLayer: thumb
		width: 250
		height: 20
		y: 105
		backgroundColor: null
	for i in [0..1]
	# 中古　送料負担　配送方法
		split = new Layer
			superLayer: otherInfoArea
			width: 1
			height: 20
			backgroundColor: "#ddd"
			x:thumb.width/3*(i+1)
	for i in [0..2]
		otherInfoChild = new Layer
			name: "otherInfoChild#{i}"
			superLayer: otherInfoArea
			width: 250/3
			height: 20
			backgroundColor: null
			x: 250/3*i
		otherInfoText = new TextLayer
			superLayer: otherInfoChild
			width: 250/3
			height: 20
			x: Align.center
			y: Align.center
			fontSize: 12
			textAlign: "center"
		if i == 0
			otherInfoText.text= "中古"
		else if i == 1
			otherInfoText.text= "落札者負担"
		else if i == 2
			otherInfoText.text="ゆうパック"
	
			
returnKey.onClick ->
	keyboardBG.opacity = 0
	loadingAnim.play()
	Utils.delay 3, ->
		loadingAnim.stop()
		for i in [0...10]
			page.content.children[i].animate("on")
		

searchBtn.onClick ->
	if !isSearch
		searchBtn.animate("on")
		searchCloseBtn.stateSwitch "on"
		searchInput.stateSwitch "on"
		searchInput.input.focus()
		isSearch=true
searchCloseBtn.onClick ->
	if isSearch
		searchBtn.animate("off")
		searchCloseBtn.stateSwitch "off"
		searchInput.stateSwitch "off"
		isSearch = false
input.onFocus ->
	keyboard.animate("on")

