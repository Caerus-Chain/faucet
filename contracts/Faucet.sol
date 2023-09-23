// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Faucet is Ownable {
    // Receive function to accept incoming ether from anyone
    receive() external payable {}

    // Check the contract's balance
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // Function to get test ether
    function getTestEther() public {
        require(
            address(this).balance >= 0.5 ether,
            "Faucet::getTestEther: Insufficient balance in faucet"
        );
        payable(msg.sender).transfer(0.5 ether);
    }

    // Function for the contract owner to withdraw ether
    function withdraw(uint256 amount) public onlyOwner {
        require(
            address(this).balance >= amount,
            "Faucet::withdraw: Insufficient balance"
        );
        payable(owner()).transfer(amount);
    }
}
