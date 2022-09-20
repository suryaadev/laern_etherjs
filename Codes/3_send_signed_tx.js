const {ethers} = require('ethers')

const INFURA_ID = '9f9ec6ada8e14f76b3ef00581098e0a7'

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)

const acc1 = '0xC22728628Fc71088A9E246405A39b53b9263d890'
const acc2 = '0xBa5931ce7775FfB6630C9984759Cae931B7912e0'

const pri1 = '94564032d67f3527efa6e06c89eb06c881372edef3c57782348112436bce918e'
const pri2 = '49c777e4bb73bc090048d2929bc80c93aec9ea1a2b223fe8f1d5965ebc0bfa84'

const wallet = new ethers.Wallet(pri1, provider)
const main = async() =>{
    
    // show ac1 balance before tx

    const senderBalB = await provider.getBalance(acc1)
    const reciverBalB = await provider.getBalance(acc2)
    console.log(`Before Sender balance : ${senderBalB}\n Before Reciever balance : ${reciverBalB}\n `)

    // send actal transaction
    const tx = await  wallet.sendTransaction({
        to : acc2,
        value : ethers.utils.parseEther("0.1")
    })
// wait for block to mine
    await tx.wait()
    // print block info
    console.log(tx)

    // after ac balance
    const senderBalA = await provider.getBalance(acc1)
    const reciverBalA = await provider.getBalance(acc2)
    console.log(`After Sender balance : ${senderBalA}\n After Reciever balance : ${reciverBalA}\n `)
    
}

main()