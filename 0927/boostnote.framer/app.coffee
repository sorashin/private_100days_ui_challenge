{InputField} = require 'InputField'

# レイアウト調整
util.maxY = key.minY



switchArray = [0,0,0,0,0]
HEAD.children[0].image = "images/HEAD-#{switchArray[0]}.png"
LIST.children[0].image = "images/LIST-#{switchArray[1]}.png"
CODE.children[0].image = "images/CODE-#{switchArray[2]}.png"
BOLD.children[0].image = "images/BOLD-#{switchArray[3]}.png"
QUOTE.children[0].image = "images/QUOTE-#{switchArray[4]}.png"

class Input extends InputField
	constructor:  (@posY = 0) -> 
		super
			superLayer: textArea
			name: "colorInput"
			type: "text"
			width:  Screen.width
			height: 48
			y: @posY
			color: "#696969"
			indent:   12
			fontSize: 18
			fontWeight: 300
# 			fontFamily: "Georgia, serif"
			placeHolder: "Enter Hexadecimal Color"
# 			placeHolderColor: "silver"
			autoCapitalize: false
			autoComplete: false
			autoCorrect: false
			maxLength: 25
		bold: ->	fontWeight= 900
			
# 		@input.focus()
input = new Input 0
input2 = new Input 48

HEAD.onClick ->
	input.fontWeight = 900
	input.color = "blue"
	HEAD.children[0].image = "images/HEAD-1.png"

	