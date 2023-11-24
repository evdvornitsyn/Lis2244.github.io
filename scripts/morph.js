

setTimeout(function(){
	var leftHeadTween = KUTE.fromTo('#hammer_animation', { path: '#hammer_animation', attr: {fill: '#FFF7F7', stroke: '#FFF7F7'}}, { path: '#left_head_animation', attr: {fill: '#1C1C1C', stroke: '#fefe22'}}, {easing: 'easingCubicOut'}).start();
}, 1200);

setTimeout(function(){
	var rightHeadTween = KUTE.fromTo('#anvil_animation', { path: '#anvil_animation', attr: {fill: '#FFF7F7', stroke: '#FFF7F7'}}, { path: '#right_head_animation', attr: {fill: '#1C1C1C', stroke: '#fefe22'}}, {easing: 'easingCubicOut'}).start();
}, 2300);
