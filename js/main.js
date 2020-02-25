function init() {
	TweenMax.set([ viewport, border ], { alpha: 1 })
	addEventListeners();
	frameOne();
}

function frameOne() {
	TweenMax.set([
		image1_1,
		text1_1,
		text1_2,
		text1_1_container,
		text1_2_container,
		image1_1_container,
		text1_2_clip
	], {opacity:1})

	TweenMax.from([image1_1], 4, {scale: 1.1, x: 10})

	frameOneTL = new TimelineMax();
	frameOneTL
		.from([text1_1_container], .6, {y: -300})
		.from([text1_2_container], .6, {x: -300}, "-=.4")
		.to([text1_1_container, text1_2_clip], .7, {delay: 1.8, x: -390}, "sync")
		.to([image1_1_container], .7, {delay: 1.8, x: -683}, "sync")
		.to([image1_1], .7, {delay: 1.8, x: 122}, "sync")

	TweenMax.delayedCall(2.6, frameTwo);
}

function frameTwo() {
	TweenMax.set([
		text2_1,
		text2_2,
		text3_1,
		image2_1,
		text2_1_container,
		text2_2_container,
		image2_1_container,
	], {opacity:1})

	TweenMax.from([image2_1], 4, {scale:1.9, x: -20})
	frameTwoTL = new TimelineMax();
	frameTwoTL
		.from([text2_1_container, image2_1_container], .6, {x: 800})
		.from([text2_2_container], .6, { y: -150}, "-=.1")
		.to([text2_1_container, text2_2_container], .4, {delay: 2.2, x: -49}, "sync1")
		.to([text2_2_container], .3, {delay: 2.3, x: -75}, "sync1")
		.to([image2_1_container], .5, {delay: 2.2, x: -256}, "sync1")
		.to([image2_1], .5, {delay: 2.2, x: 35, scale: 1}, "sync1")

	TweenMax.delayedCall(2.7, frameThree);
}

function frameThree() {
	TweenMax.set([
		image3_1,
		text3_1,
		text3_2,
		text3_1_container,
		text3_2_container,
		image3_1_container,
	], {opacity: 1})

	TweenMax.from([image3_1], 5, {scale: 1.15})
	frameThreeTL = new TimelineMax();
	frameThreeTL
		.from([text3_1_container], .6, {delay: .6, y: -200}, "sync")
		.from([text3_2_container], .6, {delay: .6, y: -200}, "sync+=.15")

	TweenMax.delayedCall(3.3, frameFour)
}

function frameFour() {
	TweenMax.set([
		cta,
		logo,
		sheen,
		text4_1,
		text4_2,
		image4_1,
		text4_1_container,
		text4_2_container,
		image4_1_container
	], {opacity: 1})

	TweenMax.from([image4_1_container], 4, {scale: 1.1})
	TweenMax.set([sheen], {x: -35})
	frameFourTL = new TimelineMax();
	frameFourTL
		.from([text4_1_container], .6, {x: -252})
		.from([text4_2_container], .8, {x: -388}, "-=.6")
		.from([image4_1_container], 1.4, {delay: .2, x: -729}, "-=1")
		.from([cta], .8, {y: 200}, "sync-=.8")
		.from([logo], .8, {y: -200, opacity: 0}, "sync-=.8")
		.to([sheen], 1.9, {delay: .0, opacity: 0.3, x: 170}, "-=.5")
}


function addEventListeners() {
	clickable.addEventListener('mouseover', mouseover)
	mouseover()
}
function mouseover() {
	TweenMax.fromTo(sheen, 1.9, {opacity: 1, x: -35}, {opacity: .5, x: 170})
}