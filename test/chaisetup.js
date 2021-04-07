"use strict";
var chai = require("chai");
// chai.use(require("chai-events"));

const BN = web3.utils.BN;
const chaiBN = require('chai-bn')(BN);
chai.use(chaiBN);

var event = require("chai-events");
var chaiAsPromised = require("chai-as-promised");
const should = chai.should();
chai.use(event);
chai.use(chaiAsPromised);
module.exports = chai;
