const hre = require("hardhat");

const faucetAddress = require("../config/contractAddrs.json").faucet;

async function main() {
    // Retrieve the first and second accounts from Hardhat
    const [user] = await hre.ethers.getSigners();

    // Create an instance of the Faucet contract
    const Faucet = await hre.ethers.getContractFactory("Faucet");
    const faucet = Faucet.attach(faucetAddress);

    // Retrieve user's initial balance
    const initialBalance = await user.getBalance();

    console.log(`User's initial balance: ${hre.ethers.utils.formatEther(initialBalance)} Ether`);

    // Call getTestEther from user's account
    const tx = await faucet.connect(user).getTestEther();

    console.log(`getTestEther transaction hash: ${tx.hash}`);

    // Wait for the transaction to be confirmed
    await tx.wait();

    // Retrieve user's final balance
    const finalBalance = await user.getBalance();

    console.log(`User's final balance: ${hre.ethers.utils.formatEther(finalBalance)} Ether`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
// User's initial balance: 8999.999999999990949735 Ether
// getTestEther transaction hash: 0x6043c20e18420002612ed0567359bb56316a204effbbba0d484c02183d232290
// User's final balance: 9000.499999999990752461 Ether