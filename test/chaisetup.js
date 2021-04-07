"use strict";
var chai = require("chai");

const BN = web3.utils.BN;

const chaiBN = require('chai-bn')(BN);
chai.use(chaiBN);

var event = require("chai-events");
chai.use(event);

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const should = chai.should();

module.exports = chai;
