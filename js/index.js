var vm = new Vue({
	el: "#main",
	data() {
	  return {
		msg:''
	  };
	},
	methods: {
		init(){
			
		}
	},
	beforeCreate() {
	  document.addEventListener("plusready", function(){
		  
	  }, false);
	},
	beforeRouteLeave(to, from, next) {
	    console.log('离开页面时执行')
	    next();
	},
	beforeRouteEnter (to, from, next) {
		console.log('进入页面时执行')
	    next(vm => {
	      vm.init();
	    })
	},
	created() {
		
	},
	mounted() {
	  
	}
})