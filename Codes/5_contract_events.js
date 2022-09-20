const {ethers} = require('ethers')

const INFURA_ID = '9f9ec6ada8e14f76b3ef00581098e0a7'

// any RPC network provider we can put here Infura/alchemy or anything 
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const contractAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'

const ERC20_DAI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
]

const contract = new ethers.Contract(contractAddress,ERC20_DAI,provider)

const main = async () => {
    const block = await provider.getBlockNumber()

    const transferEvents = await contract.queryFilter('Transfer', block - 1, block)
    console.log(transferEvents)
}

main()