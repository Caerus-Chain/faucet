# Faucet Smart Contract
This repository contains a Caerus smart contract that acts as a faucet, allowing users to request `0.5 Ether` for testing purposes. The contract uses Solidity and can be deployed using Hardhat.

### Methods:
1. **getTestEther()**
- Allows users to request `0.5 Ether` from the contract for testing purposes.
- No restrictions like cooldowns or user-specific limitations.
- Requires that the contract has sufficient funds to fulfill the request.

## Prerequisites
- **Node.js** v12+ LTS and npm (comes with Node)
- **Hardhat**

## Installation
Clone the repository:
```
git clone https://github.com/Caerus-Chain/faucet
```
Navigate to the project folder:
```
cd faucet
```
Install dependencies:
```
npm install
```

## Set Up Configuration:
1. Review the `.example.env` file.
2. Create a `.env` file based on the example and adjust the values as needed.

For Linux or macOS:
```
cp .example.env .env
```
For Windows:
```
copy .example.env .env
```

## Compilation
Compile the smart contracts using Hardhat:
```
npx hardhat compile
```

## Quick Start Guide
### 1. Testing
Run the following command to execute the contract tests. Make sure you've written the tests in your Hardhat project's `test` directory.
```
npx hardhat test
```

### 2. Deployment:
Run the following command to compile the contracts using the Solidity compiler and deploy the `Faucet` to your Caerus network.
```
npx hardhat run scripts/deploy.js --network caerus
```

### 3. Funding the Faucet
After deploying, you'll likely want to fund the `Faucet` contract. Run the following command to send Ether to the contract.
```
npx hardhat run scripts/fundFaucet.js --network caerus
```

### 4. Requesting Test Ether
To request test Ether from the `Faucet` contract, execute the following command. This will call the `getTestEther` method and transfer `0.5 Ether` to the caller's account.
```
npx hardhat run scripts/getTestEther.js --network caerus
```

## Conclusion
If you would like to contribute to the project, please fork the repository, make your changes, and then submit a pull request. We appreciate all contributions and feedback!