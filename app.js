new Vue({
	el: '#app',
	data: {
		age: 51,
		x: 0,
		y: 0,
		name: 'Ben',
		job: 'CTO',
		website: 'https://thenetninja.co.uk',
		websiteTag: '<a href="https://thenetninja.co.uk">The Net Ninja</a>',
	},
	methods: {
		add: function(inc) {
			this.age += inc;
		},
		subtract: function(dec) {
			this.age -= dec;
		},
		mouseMove: function(event) {
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
	},
});
