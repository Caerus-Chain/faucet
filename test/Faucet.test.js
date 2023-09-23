const { ethers, waffle } = require("hardhat");
const { expect } = require("chai");

describe("Faucet contract", function () {
  let faucet;
  let owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    
    const Faucet = await ethers.getContractFactory("Faucet");

    // Deploy the Faucet contract
    faucet = await Faucet.deploy();
    await faucet.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await faucet.owner()).to.equal(owner.address);
    });

    it("Should have zero balance initially", async function () {
      expect(await faucet.getBalance()).to.equal(0);
    });
  });

  describe("Funding and Withdrawing", function () {
    it("Should accept ether from anyone", async function () {
      await addr1.sendTransaction({
        to: faucet.address,
        value: ethers.utils.parseEther("1.0"),
      });
      expect(await faucet.getBalance()).to.equal(ethers.utils.parseEther("1.0"));
    });

    it("Should allow the owner to withdraw", async function () {
      await addr1.sendTransaction({
        to: faucet.address,
        value: ethers.utils.parseEther("1.0"),
      });
      await faucet.connect(owner).withdraw(ethers.utils.parseEther("0.5"));
      expect(await faucet.getBalance()).to.equal(ethers.utils.parseEther("0.5"));
    });
  });

  describe("Get Test Ether", function () {
    it("Should send test ether", async function () {
      await addr1.sendTransaction({
        to: faucet.address,
        value: ethers.utils.parseEther("1.0"),
      });
  
      const initialBalance = await ethers.provider.getBalance(addr2.address);
      await faucet.connect(addr2).getTestEther();
      const finalBalance = await ethers.provider.getBalance(addr2.address);
  
      const difference = finalBalance.sub(initialBalance);
      expect(difference).to.be.closeTo(ethers.utils.parseEther("0.5"), ethers.utils.parseEther("0.01"));
    });
  });
});
