// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenAirdrop is Ownable {
    event Airdrop(address indexed token, uint256 amount, uint256 recipients);

    function airdrop(address tokenAddress, address[] memory recipients, uint256 amount) external onlyOwner {
        require(recipients.length > 0, "No recipients specified");
        require(amount > 0, "Invalid amount");

        IERC20 token = IERC20(tokenAddress);
        uint256 totalAmount = amount * recipients.length;

        require(token.balanceOf(address(this)) >= totalAmount, "Insufficient balance in contract");

        for (uint256 i = 0; i < recipients.length; i++) {
            token.transfer(recipients[i], amount);
        }

        emit Airdrop(tokenAddress, amount, recipients.length);
    }

    function updateAirdropAmount(address tokenAddress, uint256 newAmount) external onlyOwner {
        require(newAmount > 0, "Invalid amount");

        emit AirdropAmountUpdated(tokenAddress, newAmount);
    }
}
