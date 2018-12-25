RobotoSlab = Utils.loadWebFont("Roboto Slab")
isHover = false
indexAlign = ["Chapter1","Chapter2","Chapter3","Chapter4","Chapter5"]
textAlign = ["Once when I was six years old I saw a magnificent picture in a book, called
True Stories from Nature, about the primeval forest. It was a picture of a boa
constrictor in the act of swallowing an animal. Here is a copy of the drawing.
In the book it said: Boa constrictors swallow their prey whole, without chewing
it. After that they are not able to move, and they sleep through the six months
that they need for digestion.
I pondered deeply, then, over the adventures of the jungle. And after some
work with a colored pencil I succeeded in making my first drawing. My Drawing
Number One. It looked like this: I showed my masterpiece to the grown-ups, and asked them whether the
drawing frightened them.
But they answered: 'Frighten? Why should any one be frightened by a hat?'
My drawing was not a picture of a hat. It was a picture of a boa constrictor
digesting an elephant. But since the grown-ups were not able to understand it,
I made another drawing: I drew the inside of the boa constrictor, so that the
grown-ups could see it clearly. They always need to have things explained. My
Drawing Number Two looked like this: ","The grown-ups' response, this time, was to advise me to lay aside my
drawings of boa constrictors, whether from the inside or the outside, and
devote myself instead to geography, history, arithmetic and grammar. That is
why, at the age of six, I gave up what might have been a magnificent career as
a painter. I had been disheartened by the failure of my Drawing Number One
and my Drawing Number Two. Grown-ups never understand anything by
themselves, and it is tiresome for children to be always and forever explaining
things to them.
So then I chose another profession, and learned to pilot airplanes. I have flown
a little over all parts of the world; and it is true that geography has been very
useful to me. At a glance I can distinguish China from Arizona. If one gets lost
in the night, such knowledge is valuable.
In the course of this life I have had a great many encounters with a great many
people who have been concerned with matters of consequence. I have lived a
great deal among grown-ups. I have seen them intimately, close at hand. And
that hasn't much improved my opinion of them.
Whenever I met one of them who seemed to me at all clear-sighted, I tried the
experiment of showing him my Drawing Number One, which I have always
kept. I would try to find out, so, if this was a person of true understanding. But,
whoever it was, he, or she, would always say:
'That is a hat.'
Then I would never talk to that person about boa constrictors, or primeval
forests, or stars. I would bring myself down to his level. I would talk to him
about bridge, and golf, and politics, and neckties. And the grown-up would be
greatly pleased to have met such a sensible man.","So I lived my life alone, without anyone that I could really talk to, until I had an
accident with my plane in the Desert of Sahara, six years ago. Something
was broken in my engine. And as I had with me neither a mechanic nor any
passengers, I set myself to attempt the difficult repairs all alone. It was a
question of life or death for me: I had scarcely enough drinking water to last a
week.
The first night, then, I went to sleep on the sand, a thousand miles from any
human habitation. I was more isolated than a shipwrecked sailor on a raft in
the middle of the ocean. Thus you can imagine my amazement, at sunrise,
when I was awakened by an odd little voice. It said:
`If you please-- draw me a sheep!`
`What!`
`Draw me a sheep!`
I jumped to my feet, completely thunderstruck. I blinked my eyes hard. I
looked carefully all around me. And I saw a most extraordinary small person,
who stood there examining me with great seriousness. Here you may see the
best potrait that, later, I was able to make of him. But my drawing is certainly
very much less charming than its model. ","That, however, is not my fault. The grown-ups discouraged me in my painter's
career when I was six years old, and I never learned to draw anything, except
boas from the outside and boas from the inside.
Now I stared at this sudden apparition with my eyes fairly starting out of my
head in astonishment. Remember, I had crashed in the desert a thousand
miles from any inhabited region. And yet my little man seemed neither to be
straying uncertainly among the sands, nor to be fainting from fatigue or
hunger or thirst or fear. Nothing about him gave any suggestion of a child lost
in the middle of the desert, a thousand miles from any human habitation.
When at last I was able to speak, I said to him:
`But-- what are you doing here?`
And in answer he repeated, very slowly, as if he were speaking of a matter of
great consequence: `If you please-- draw me a sheep...`
When a mystery is too overpowering, one dare not disobey. Absurd as it
might seem to me, a thousand miles from any human habitation and in
danger of death, I took out of my pocket a sheet of paper and my fountain-pen.
But then I remembered how my studies had been concentrated on geography,
history, arithmetic, and grammar, and I told the little chap (a little crossly, too)
that I did not know how to draw. He answered me:
`That doesn't matter. Draw me a sheep...`","But I had never drawn a sheep. So I drew for him one of the two pictures I had
drawn so often. It was that of the boa constrictor from the outside. And I was
astounded to hear the little fellow greet it with,
`No, no, no! I do not want an elephant inside a boa constrictor. A boa
constrictor is a very dangerous creature, and an elephant is very
cumbersome. Where I live, everything is very small. What I need is a sheep.
Draw me a sheep.`
So then I made a drawing. He looked at it carefully, then he said:
`No. This sheep is already very sickly. Make me another.`
So I made another drawing.My friend smiled gently and indulgenty.
`You see yourself,` he said, `that this is not a sheep. This is a ram. It has
horns.`
So then I did my drawing over once more. But it was rejected too, just like the others. 
9
`This one is too old. I want a sheep that will live a long time.`
By this time my patience was exhausted, because I was in a hurry to start
taking my engine apart. So I tossed off this drawing"]
bg = new Layer
	width: 750
	height: 1334
	backgroundColor: "#fff"
page = new TextLayer
	width: Screen.width
	height: Screen.height-230
	text: textAlign[0]
	color: "333"
	backgroundColor: "#fff"
	fontSize: 30
	fontFamily: RobotoSlab
	lineHeight: 1.5
	truncate: true
	padding:
		top: 120
		left: 60
		right: 60
		bottom: 120
navBar = new Layer
	width: Screen.width
	height: 100
	maxY: Screen.height
rail = new Layer
	superLayer: navBar
	height: 2	
	width: 750-40*4
	x: Align.center
	y:Align.center
	backgroundColor: "#fff"
ball = new Layer
	superLayer: navBar
	width: 28*2
	height: 28*2
	x: 40*2
	y: Align.center
	backgroundColor: "#fff"
	borderRadius: 100
	borderWidth: 1
	borderColor: "agba(0,0,0,.1)"
	shadowBlur: 4
	shadowSpread: 0
	shadowColor: "rgba(0,0,0,0.1)"
	shadowY: 4
ball.draggable.enabled = true
ball.draggable.vertical = false
ball.draggable.overdrag = false
ball.draggable.constraints =
    x: 40*2
    y: 0
    width: Screen.width-40*4
    height: 200
indexWrap = new Layer
		width: Screen.width
		height: Screen.height-100
		backgroundColor: null
indexWrap.states.add
	on:
		opacity:1
		x:60
	off:
		opacity:0
		x: 0
	options:
		time:0.2
indexWrap.stateSwitch "off"
hover = new Layer
	width: Screen.width
	height: Screen.height
	backgroundColor: "rgba(255,255,255,.8)"
hover.placeBehind(navBar)
hover.states.add
	on:
		opacity:1
	off:
		opacity:0
	options:
		time:0.2
hover.stateSwitch "off"
for i in [0...5]
	indexChapter = new TextLayer
		superLayer: indexWrap
		text: indexAlign[i]
# 		x: 60
		y: indexWrap.midX+(i+2)*100
createHoverlayer = () ->
	hover.states.switch("on")
	indexWrap.states.switch("on")
	
destroyHoverLayer = () ->
	indexWrap.states.switch("off")
	hover.states.switch("off")
moveChapter = (@num) ->
	for i in [0...5]
		if i == @num
			indexWrap.children[i].animate
				color :"rgba(0,0,0,.8)"
				fontSize: 50
				y : indexWrap.midX+(i-@num+2)*100
				options: 
					time:.2
		else
			indexWrap.children[i].animate
				color :"rgba(0,0,0,.4)"
				fontSize:30
				y : indexWrap.midX+(i-@num+2)*100
				options: 
					time:.2
	
ball.onDrag ->
	for i in [0...textAlign.length]
		if ball.x%textAlign.length==i
			page.text = textAlign[i]
	if isHover
# 		print ball.x
# 		80-614 107ずつ
		if ball.x>=80 && ball.x<187
			moveChapter(0)
# 			indexWrap.content.children[0].color ="red"
		if ball.x>=187 && ball.x<294
			moveChapter(1)
		if ball.x>=294 && ball.x<401
			moveChapter(2)
		if ball.x>=401 && ball.x<508
			moveChapter(3)
		if ball.x>=508 && ball.x<615
			moveChapter(4)
ball.onDragStart ->
	if !isHover
		isHover = true
		createHoverlayer()
ball.onDragEnd ->
	if isHover
		destroyHoverLayer()
		isHover = false

