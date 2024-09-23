// deploy.js
async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with the account:", deployer.address);

    // Get the contract factory
    const ERC404Example = await ethers.getContractFactory("ERC404Example");

    // Define constructor parameters
    const name = "DeathGod";
    const symbol = "DTG";
    const decimals = 18;
    const maxTotalSupplyERC721 = 1000;
    const initialOwner = deployer.address; // Setting deployer as the initial owner
    const initialMintRecipient = deployer.address; // Setting deployer as the mint recipient

    // Deploy the contract
    const contract = await ERC404Example.deploy(
        name,
        symbol,
        decimals,
        maxTotalSupplyERC721,
        initialOwner,
        initialMintRecipient
    );

    await contract.deployed();

    console.log("Contract deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

