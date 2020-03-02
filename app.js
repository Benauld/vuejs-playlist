new Vue({
	el: '#app',
	data: {
		a: 0,
		b: 0,
		age: 20,
		available: false,
		nearby: false,
		x: 0,
		y: 0,
		name: '',
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

		logAge: function() {
			console.log('You entered your age');
		},
	},
	computed: {
		addToA: function() {
			return this.a + this.age;
		},
		addToB: function() {
			return this.b + this.age;
		},
		compClasses: function() {
			return {
				available: this.available,
				nearby: this.nearby,
			};
		},
	},
});
