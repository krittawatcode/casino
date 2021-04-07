const Casino = artifacts.require("Casino");

module.exports = async (deployer, accounts) => {
    console.log(accounts);
    await deployer.deploy(Casino, 100000, 10);
    let casinoInstance = await Casino.deployed();
    await casinoInstance.send(web3.utils.toWei('20', "ether"))
}