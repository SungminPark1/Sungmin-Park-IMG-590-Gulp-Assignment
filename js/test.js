let myTest = {
	a: '1',
	b: 2,
	c( arg='testing' ){
		// back ticks `
		console.log(`a=${this.a} and b=${this.b} and arg=${arg}`);
	}
}

myTest.c();
myTest.c('blargh');