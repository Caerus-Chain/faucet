const hre = require("hardhat");

const faucetAddress = require("../config/contractAddrs.json").faucet;

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    // Create an instance of the Faucet contract
    const Faucet = await hre.ethers.getContractFactory("Faucet");
    const faucet = Faucet.attach(faucetAddress);

    // Send a specified amount of Ether to the Faucet contract
    const amount = hre.ethers.utils.parseEther("1000");
    const tx = await deployer.sendTransaction({
        to: faucet.address,
        value: amount
    });

    console.log(`Funding transaction hash: ${tx.hash}`);

    await tx.wait();  // Confirm the transaction

    console.log(`Faucet is funded with ${await hre.ethers.utils.formatEther(amount)} Ether`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
// Funding transaction hash: 0xa5d75d63e6fbbbe565d4a3db5c7103dd648fc8a55c23b95a96ecd175c0c7cdfc
// Faucet is funded with 1000.0 Ether