// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.3;

import "./Ownable.sol";

contract Casino is Mortal {
    uint256 minBet;
    uint256 houseEdge; //in %
    //true+amount or false+0
    event Won(bool _status, uint256 _amount);

    constructor(uint256 _minBet, uint256 _houseEdge) payable {
        require(_minBet > 0, "minimun bet should be at least > 0");
        require(_houseEdge <= 100, "house edge should be <= 100");
        minBet = _minBet;
        houseEdge = _houseEdge;
    }

    function bet(uint256 _number) public payable {
        require(_number > 0 && _number <= 10, "bet out of range");
        require(
            msg.value >= minBet,
            "your bet should be larger than minimun bet price"
        );
        uint256 winningNumber = (block.number % 10) + 1;
        if (_number == winningNumber) {
            uint256 amountWon = (msg.value * (100 - houseEdge)) / 10;
            if (!payable(msg.sender).send(amountWon)) revert();
            emit Won(true, amountWon);
        } else {
            emit Won(false, 0);
        }
    }

    function checkContractBalance() public view Owned returns (uint256) {
        return address(this).balance;
    }

    function checkMinBet() public view Owned returns (uint256) {
        return minBet;
    }

    receive() external payable {}

    fallback() external {
        //fallback
        revert();
    }
}
