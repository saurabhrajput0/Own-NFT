async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT");
  
    
    const myNFT = await MyNFT.deploy();
    console.log("Contract deployed to address:", myNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
    //0xcF2E29e538b4943775E92Bf4Cf9De36A2551C5a9
 