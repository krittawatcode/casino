// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.3;

contract Ownable {
    address payable owner;

    constructor() {
        //Set owner to who creates the contract
        owner = payable(msg.sender);
    }

    //Access modifier
    modifier Owned {
        require(msg.sender == owner);
        _;
    }
}

contract Mortal is Ownable {
    //Our access modifier is present, only the contract creator can      use this function
    function kill() public Owned {
        selfdestruct(owner);
    }
}
