// install ethers by using yarn or npm : yarn add ethers || npm i ethers
// import ethers
const {ethers} = require('ethers')

const INFURA_ID = '9f9ec6ada8e14f76b3ef00581098e0a7'

// any RPC network provider we can put here Infura/alchemy or anything 
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)

// address of the account we want to see balance
const address = '0xC22728628Fc71088A9E246405A39b53b9263d890'
// function is created as async function bcoz we need to wait for promise
const main = async () =>{
    // use provider inbuild methods
    const balance = await provider.getBalance(address)
    // ethers balance is actually 18 decimal so we just format it to see in good format
    console.log(`\n ETH balance of ${address} :::: ${ethers.utils.formatEther(balance)} ETH`)
}

main()



