// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("Donut", "DNT") {
    _mint(msg.sender, 100000000000000000000000000000000);
    }
}

contract{
    
}