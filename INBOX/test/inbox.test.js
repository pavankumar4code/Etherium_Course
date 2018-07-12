const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

/* Example test scripts */
/*
let car;

class Car{
	park() {
		return 'stopped';
	}

	drive(){
		return 'vroom';
	}
}


beforeEach( () => { 
	car = new Car();
});

describe('Car Class test', () =>{
	it('Should Park return a string', () => { 
		assert.equal(car.park(), 'stopped');
	});	
	it('It can drive', () => { 
		assert.equal(car.drive(), 'vroom');
	});	
});*/



