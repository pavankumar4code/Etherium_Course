const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

beforeEach(() => {
	//Get list of all accounts

	// Use one of those accounts to deploy the contract

	web3.eth.getAccounts()
});


