$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("#logohome", 1, 
				{marginTop: -300, ease: Back.easeOut},
				{marginTop: 240, ease: Back.easeOut, delay: 0.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#home", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("#welcome", 0.5, 
				{marginTop: -400, ease: Back.easeOut},
				{marginTop: 60, ease: Back.easeOut}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#trauen-sich", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("#bubble-endlich", 0.2, 
				{scale: 0, ease: Back.easeOut},
				{scale: 1, ease: Back.easeOut, delay: 1.8}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#trauen-sich", triggerHook: 0.4})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("#bubble-gehtdoch", 0.5, 
				{scale: 0, ease: Back.easeOut},
				{scale: 1, ease: Back.easeOut, delay: 0.8}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#trauen-sich", triggerHook: 0.4})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#bubble-das-brautpaar", 0.5, 
				{marginTop: -250, ease: Back.easeOut, rotation: 0},
				{marginTop: 50, ease: Back.easeOut, rotation: 350}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-brautpaar", triggerHook: 0.4})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#caro", 0.5, 
				{marginLeft: -2000, rotation: -360, ease: Back.easeOut},
				{marginLeft: 0, rotation: 0, ease: Back.easeOut, delay: 0.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-brautpaar", triggerHook: 0.4})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("#carotxt", 0.5, 
				{opacity: 0},
				{opacity: 1, delay: 0.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-brautpaar", triggerHook: 0.4})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#johannes", 0.5, 
				{marginLeft: 2000, rotation: 0, ease: Back.easeOut},
				{marginLeft: 0, rotation: -360, ease: Back.easeOut, delay: 1.2}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-brautpaar", triggerHook: 0.4})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("#jotxt", 0.5, 
				{opacity: 0},
				{opacity: 1, delay: 1.2}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-brautpaar", triggerHook: 0.4})
					.setTween(tween)
					.addTo(controller);
});

$(document).ready(function($) {
	// build tween
	var tween = TweenLite.from("div#abtGrm",0.5,{autoAlpha:0,x:-200});

	// build scene
	var scene = new ScrollScene({triggerElement: "section#about", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});

$(document).ready(function($) {
	// build tween
	var tween = TweenLite.from("div#abtBrd", 0.5, {autoAlpha:0,x:200,delay:0.3});

	// build scene
	var scene = new ScrollScene({triggerElement: "section#about", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});


$(document).ready(function($) {
	// build tween
	var tween = TweenLite.from("div#abtGCon",.8,{autoAlpha:0,delay:1}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#about", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});


$(document).ready(function($) {
	// build tween
	var tween = TweenLite.from("div#abtBCon",.8,{autoAlpha:0,delay:1.2}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#about", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});

$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#manasas", 0.5, 
				{scale: 0, rotation: 100, ease: Back.easeOut},
				{scale: 1, rotation: 0, ease: Back.easeOut, delay: 0.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#about", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});

$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#harshas", 0.5, 
				{scale: 0, rotation: 100, ease: Back.easeOut},
				{scale: 1, rotation: 0, ease: Back.easeOut, delay: 0.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#about", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});

$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#feelsStory", 0.5, 
				{marginTop: -120, ease: Back.easeOut},
				{marginTop: 50, ease: Back.easeOut}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#feels", triggerHook: 0.7})
					.setTween(tween)
					.addTo(controller);
});


$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#manasaTP", 1, 
				{marginLeft: -2000, rotation: -360, ease: Back.easeOut},
				{marginLeft: 0, rotation: -5, ease: Back.easeOut}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#feels", triggerHook: 0.2})
					.setTween(tween)
					.addTo(controller);
});


$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#harshaTP", 1, 
				{marginLeft: 2000, rotation: 0, ease: Back.easeOut},
				{marginLeft: 0, rotation: -360, ease: Back.easeOut, delay: 0.8}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#feels", triggerHook: 0.2})
					.setTween(tween)
					.addTo(controller);
});


$(document).ready(function($) {
	// build tween
	var tween = TweenLite.from("img#Mthoughts",.8,{autoAlpha:0}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#feels", triggerHook: 0})
					.setTween(tween)
					.addTo(controller);
});


$(document).ready(function($) {
	// build tween
	var tween = TweenLite.from("img#Hthoughts",.8,{autoAlpha:0,delay:1}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#feels", triggerHook: 0})
					.setTween(tween)
					.addTo(controller);
});

$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#bubble-fakten", 0.5, 
				{marginTop: -120, ease: Back.easeOut},
				{marginTop: 50, ease: Back.easeOut}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#zusammensein", triggerHook: 0.7})
					.setTween(tween)
					.addTo(controller);
});

$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("div#counter1", 0.5, 
				{marginLeft: "-200%", width: "100%"},
				{marginLeft: 0}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#zusammensein", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("div#duesseldorf", 0.3, 
				{scale: 0, ease: Back.easeOut},
				{scale: 1, ease: Back.easeOut, delay: 0.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#zusammensein", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("div#counter2", 0.5, 
				{marginLeft: "300%", width: "100%"},
				{marginLeft: 0, delay: 1}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#zusammensein", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("div#malediven", 0.3, 
				{scale: 0, ease: Back.easeOut},
				{scale: 1, ease: Back.easeOut, delay: 1.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#zusammensein", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#lichterkette", 0.5, 
				{marginTop: "-40%", ease: Back.easeOut},
				{marginTop: "-10%", ease: Back.easeOut, delay: 2.6}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-fest-img", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#bubble-das-fest", 0.5, 
				{marginTop: -150, ease: Back.easeOut},
				{marginTop: "5%", ease: Back.easeOut }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-fest-img", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#location-arrow", 0.3, 
				{scale: 0, ease: Back.easeOut, marginTop: 300},
				{scale: 1, ease: Back.easeOut, marginTop:100, delay: 1.5 }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-fest-img", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#location-arrow-2", 0.3, 
				{scale: 0, ease: Back.easeOut, marginTop: -300, marginRight: -300},
				{scale: 1, ease: Back.easeOut, marginTop: 50,  marginRight: 0, delay: 1.8 }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-fest-img", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#location-arrow-3", 0.3, 
				{scale: 0, ease: Back.easeOut, marginTop: -300, marginRight: 300},
				{scale: 1, ease: Back.easeOut, marginTop: 50,  marginRight: 0, delay: 2.1 }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-fest-img", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#party1", 0.3, 
				{scale: 0, ease: Back.easeOut, rotation:0},
				{scale: 1, ease: Back.easeOut, rotation:350, delay: 3 }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-fest-img", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#party2", 0.3, 
				{scale: 0, ease: Back.easeOut, rotation:0},
				{scale: 1, ease: Back.easeOut, rotation:380, delay: 3.3 }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-fest-img", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});

$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#haende", 0.5, 
				{marginTop: -650, ease: Bounce},
				{marginTop: 0, ease: Bounce, delay: 0.7}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#die-trauung", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#bubble-trauung", 0.5, 
				{marginTop: -250, ease: Back.easeOut},
				{marginTop: "1.5%", ease: Back.easeOut }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#die-trauung", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});

$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#location", 0.8, 
				{scale: 0, rotation: 100, ease: Back.easeOut},
				{scale: 1, rotation: 0, ease: Back.easeOut, delay: 0.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#mop", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});


$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#meetParents", 0.5, 
				{scale: 0, rotation: 100, ease: Back.easeOut},
				{scale: 1.15, marginTop: 10, rotation: -20, ease: Back.easeOut}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#parents", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});


$(document).ready(function($) {
	// build tween
	var tween = TweenLite.from("div#parentsMsg", 0.5, {autoAlpha:0,delay:0.3});

	// build scene
	var scene = new ScrollScene({triggerElement: "section#parents", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
	
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("div#kavuris", 0.5, 
				{scale: 0, rotation: 100, ease: Back.easeOut},
				{scale: 1, rotation: 0, ease: Back.easeOut, delay: 0.9}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#parents", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});

$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("div#madhurakavis", 0.5, 
				{scale: 0, rotation: 100, ease: Back.easeOut},
				{scale: 1, rotation: 0, ease: Back.easeOut, delay: 1.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#parents", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});


$(document).ready(function($) {
	// build tween
	var tween = TweenLite.from("div#HparentsMsg", 0.5, {autoAlpha:0,delay:2.1});

	// build scene
	var scene = new ScrollScene({triggerElement: "section#parents", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});

$(document).ready(function($) {
	// build tween
	var tween = TweenLite.from("div#MparentsMsg", 0.5, {autoAlpha:0,delay:2.3});

	// build scene
	var scene = new ScrollScene({triggerElement: "section#parents", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});