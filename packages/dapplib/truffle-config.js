require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remind huge guess nation force tumble'; 
let testAccounts = [
"0x6fbcb87aaad7ecd5d615f642af0c7299d778cf9b4300620b0ed3d5f8486a225b",
"0xcb02a180d9e384946b15d633bbdb76b4a2519a235ae117b915e15b0b4f97a98c",
"0xede13f9d07e3a64a1b02b8fd7bcb59bcb7b5b2157f48d5c5ee319619c25c6658",
"0xe14f4ec4a35b22b0bd34d7d07fd6abf0f5709be3b4b7f88c0db8d5457a15353b",
"0xe9027460b4326e2135542e0303a49447336f8555fed04c1b5be82f2911f3686f",
"0x46a6c1bff810a40b4920192133edf8d404164e03ea287ef9dc343aad7f38f4d7",
"0x144fb387442455cfd62dc93994fccf9f5e4b23804fc788575abe7abfce18d55e",
"0x7a39bb0c6058453eabe0fba849475b719fef21dcc702c46be9986e14e18baf86",
"0xcc2e54cd9978e83a9dc19927866b91fa3d7c09e827d22868af410d459c1b5ba4",
"0x9776f4014c34a3f77c1868ce86586d5c724dfb7343f4a938be5816ba21906dce"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

