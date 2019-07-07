navigator.serviceWorker.register('./js/sw.js').then(function(reg) {
  	console.log('Registration Successful');
}).catch(function(error) {
	console.log('Registration failed');
});