// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token1 is ERC20 {
    constructor(uint256 initialSupply) ERC20("Token1", "TK1") {
        _mint(msg.sender, initialSupply * (10 ** uint256(decimals())));
    }
}
