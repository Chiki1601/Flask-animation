TweenMax.set("svg", {visibility:"visible"})

TweenMax.staggerTo('#bubble-group circle', 4, {
  attr: {
    cy: 200
  },
  ease:Power2.easeIn,
  repeat: -1
}, 0.6)

var speed = 3.5;
var tlFront1 = new TimelineMax({repeat:-1});
tlFront1.to("#front-1", speed, {morphSVG:"#front-2", ease: Power0.easeNone})
  .to("#front-1", speed, {morphSVG:"#front-1", ease: Power0.easeNone});

var tlFront2 = new TimelineMax({repeat:-1});
tlFront2.to("#front-3", speed, {morphSVG:"#front-4", ease: Power0.easeNone})
  .to("#front-3", speed, {morphSVG:"#front-3", ease: Power0.easeNone});

var tlFront3 = new TimelineMax({repeat:-1});
tlFront3.to("#front-5", speed, {morphSVG:"#front-6", ease: Power0.easeNone})
  .to("#front-5", speed, {morphSVG:"#front-5", ease: Power0.easeNone});

var tlBack = new TimelineMax({repeat:-1});
tlBack.to("#back-1", speed, {morphSVG:"#back-2", ease: Power0.easeNone})
  .to("#back-1", speed, {morphSVG:"#back-1", ease: Power0.easeNone});

var bubbles = document.getElementsByClassName("steam-bubble");
var tlSteam = new TimelineMax({ repeat: -1 });
function animateBubbles() {
  for (var i = 0; i < bubbles.length; i++) {
    var b = bubbles[i];
    var tl = new TimelineMax({ repeat: -1 });
    tl
      .to(b, 1, {
        attr: {
          r: "+=7"
        },
        ease: Linear.easeNone
      })
      .to(b, 1, {
        attr: {
          r: "-=7"
        },
        ease: Linear.easeNone
      });
    tlSteam.add(tl, i/2);
  }
}
animateBubbles();