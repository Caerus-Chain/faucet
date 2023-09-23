const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Faucet = await hre.ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy();

  await faucet.deployed();

  console.log("Faucet contract deployed to:", faucet.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// Deploying contracts with the account: 0xa40aa030A3ba4f42FDCd2B7bC33d5B03770290ea
// Faucet contract deployed to: 0xF647E71bb4704De8E413166ebcA875c4ea0f2480