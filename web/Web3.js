addressContrat = "0x134A2064BF8311B58a7e14bB0EDfd6B4ef9859B2";
const webconnect = new Web3(window.ethereum);
const MyToken = new webconnect.eth.Contract(Tokenabi.abi, addressContrat);
//await MyToken.methods.Click().Call();
const getData = async() => {
    const signer = await webconnect.getSigner();
    console.log(signer);
}
await MyToken.methods.balanceOf(signer).call();

const getAddr = async() => {
    const useraddr = await webconnect.getAddress();
    console.log(useraddr);
}
await MyToken.methods.balanceOf(useraddr).call();