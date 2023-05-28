export function trackDirection(value) {
typeof(value) !== "object" && (value = {onUpdate: value});
let prevTime = 0,
	prevReversed = false,
	anim = value.eventCallback ? value : value.animation,
	onUpdate = value.onUpdate,
	onToggle = value.onToggle;
return anim ? anim.eventCallback("onUpdate", trackDirection({onUpdate: onUpdate, onToggle: onToggle})) : function() {
	let time = this.totalTime(),
		reversed = time < prevTime;
	this.direction = reversed ? -1 : 1;
	if (reversed !== prevReversed) {
		onToggle && onToggle.call(this, this.direction);
		prevReversed = reversed;
	}
	prevTime = time;
	onUpdate && onUpdate.call(this, this.direction);
};
}