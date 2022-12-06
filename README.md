# Real Estate NFT DApp

## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)

## Requirements For Initial Setup

- Install [NodeJS](https://nodejs.org/en/)

## Setting Up

### 1. Clone/Download the Repository

### 2. Install Dependencies:

`$ npm install`

### 3. Run tests

`$ npx hardhat test`

### 4. Start Hardhat node

`$ npx hardhat node`

### 5. Run deployment script

In a separate terminal execute:
`$ npx hardhat compile`
`$ npx hardhat run scripts/deploy.js --network localhost`

### 7. Start frontend

`$ npm run start`

### Guideline
1. You have to import 4 different accounts with given nemonics by imorting through private keys, buyer, seller, inspector, lender
2. First buyer Acc#1 then inspector Acc#3  then lender Acc#4 and finally the seller Acc#2  will sale.
3. If any error then reset your wallet account 

