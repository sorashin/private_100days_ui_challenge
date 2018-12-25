
{BodymovinLayer} = require 'BodymovinLayer'

customAnim = new BodymovinLayer
	name: "customAnim"
	path: "images/bookmark.json"
	size: 500

customAnim.center()

# On tap, change direction of animation.
customAnim.onTap ->
	if customAnim.direction isnt 1
		customAnim.direction = 1
	else
		customAnim.direction = -1