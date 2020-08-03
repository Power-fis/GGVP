let vm = new Vue({
	el:'#app',
	data:{
		b:1, c:2
	},
	methods:{
		Dis: function () {
			return this.b*this.b-4*this.c;
		}
	},
	computed:{
		D: function(){
			return this.Dis();
		},
		solve: function () {
			let d = this.Dis();
			if(d<0)
				return 'Решения нет';
			if(d==0)
				return 'x =' + (-this.b/2);
			let x1 = + ((-this.b - Math.sqrt(d))/2).toFixed(3);
			let x2 = + ((-this.b + Math.sqrt(d))/2).toFixed(3);
			return 'x1 = ' + x1 + ' x2 = ' + x2;
		}
	}
});

vm.$watch(function () {return[this.b, this.c]},function(){
	if ((this.c !== '') && (this.b !== '')){
		let formul = 'x^2+'+this.b+'x+'+this.c;
		functionPlot({
			target: '#plot',
			data:[{fn:formul}],
			grid:true
		});
	}
});

		});