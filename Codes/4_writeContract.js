// import ethers
const {ethers} = require('ethers')

const INFURA_ID = '9f9ec6ada8e14f76b3ef00581098e0a7'
// RPC
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)
// contract where we have to update function
const contractAddress = '0x288aB5BF18558646C1BBE3E72BeADAD2337AB3bd'
// contract abi
const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_number",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addPerson",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_favNumber",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "favNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "nameToNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "p1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "peoples",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "restore",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
// private key to make wallet to sign the contract 

/**
 * for creating wallet we need two parameters privateKey and provider 
 * wallet (private key , provider)
 * privider --> JsonRpcProvider('RPC network link')
 */

const pri1 = '94564032d67f3527efa6e06c89eb06c881372edef3c57782348112436bce918e'
const wallet = new ethers.Wallet(pri1, provider)

/**
 * for creating any contract in ethers we need 3 params
 * contract(address, abi, signer/wallet)
 */
const contract = new ethers.Contract(contractAddress, abi, wallet)

const main = async() =>{
    
    // reading from contract
    const num = await contract.favNumber()
    console.log(`fav number : ${num}`)
    console.log("updating.....")
    
    // writing on contract
    const update = await contract.store("10")
    await update.wait()
    console.log("fetching....")
    
    // again reading 
    const newNum = await contract.restore()
    console.log(`updated fav Number : ${newNum}`)
}

main()