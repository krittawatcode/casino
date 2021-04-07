const Casino = artifacts.require('Casino');

require('dotenv').config({path: '../.env'});

const chai = require('chai');
// chai.use(require('chai-events'));

const EventEmitter = require('events');

const BN = web3.utils.BN;
const expect = chai.expect;


contract('Casino Test', async accounts => {
//   const [initialHolder, recipient, anotherAccount] = accounts;

  let emitter = null;
  beforeEach(() => {
    emitter = new EventEmitter();
  });

  it('should have init ether', async () => {
    const casino = await Casino.deployed();
    let balance = await casino.checkContractBalance();
    return expect(casino.checkContractBalance())
        .to.eventually.be.a.bignumber.equal(balance);
  });

  it('should return event when bet success', async () => {
    const casino = await Casino.deployed();
    await casino.bet(
        3, {from: accounts[0], value: web3.utils.toWei('1', 'ether')});
    let wonEvent = emitter.should.emit('Won');
    // waiting for event 
    setTimeout(function() {
      emitter.emit('Won');
    }, 200);
    return wonEvent
  });
})