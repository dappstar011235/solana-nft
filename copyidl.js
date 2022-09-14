// copyIdl.js
const fs = require('fs');
const idl = require('./target/idl/nft_minting_contract.json');

fs.writeFileSync('./app/src/idl.json', JSON.stringify(idl));