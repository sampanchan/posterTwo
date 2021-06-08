console.log('Hello World from main.js!');

let lineAnimation = function() {
	gsap.to('.rectangle', {
		duration: 0.05,
		y: "10%",
		repeat: 1,
		yoyo: true,
		stagger: {
			//   grid: [7,15],
			from: "random",
			amount: 1.2
		},
		ease: "none",
		onComplete: lineAnimation
	});
}

lineAnimation()

gsap.to(".half-circle-one", {
	duration: 15,
	rotation: "360_cw",
	repeat: -1,
	// yoyo: true,
	ease: 'none',
	transformOrigin: "bottom center"
})
  
gsap.to(".half-circle-two", {
	duration: 15,
	rotation: "360_ccw",
	repeat: -1,
	// yoyo: true,
	ease: 'none',
	transformOrigin: "bottom center"
})
gsap.to(".circle-one",{
		duration: 1,
		x: "15%",
		repeat: -1,
		yoyo: true,
		delay:2,
		
})
gsap.to(".circle-three",{
	duration: 1,
	x: "-35%",
	repeat: -1,
	yoyo: true,
	delay:4,
	
	
})
gsap.to(".circle-four",{
	duration: 1,
	y: "-30%",
	repeat: -1,
	yoyo: true,
	delay:4,
	
})