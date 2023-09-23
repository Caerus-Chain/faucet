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
