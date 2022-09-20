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
]

const contract = new ethers.Contract(contractAddress,ERC20_DAI,provider)
const user = '0x18f8020f3bca2c20525ebbbade8f6446b5654d6b'

const main = async()=>{
    const name = await contract.name()
    const symbol = await contract.symbol()
    const totalSupply = await contract.totalSupply()
    const balanceOf = await contract.balanceOf(user)
    console.log(`\nname : ${name}\n Symbol : ${symbol} \n TotalSupply : ${ethers.utils.formatEther(totalSupply)} ${symbol}\n BalanceOf : ${user}  is ${ethers.utils.formatEther(balanceOf)} ${symbol} \n`)
}

main()