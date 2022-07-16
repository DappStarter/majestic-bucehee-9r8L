require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remain exchange gloom clip bone skin'; 
let testAccounts = [
"0x449abdef47c17dc2cb9466d157a2181c1db10ddeafb34c1be10196c64bb8fab3",
"0xf7515d96e8b36cfc0b37a3505d1545db5d67a8d738d5b21ec8223602cc143430",
"0x42009bf5eb8b2fa159f81945a95d101d0dd1395192633d48faefc3ae88f1c72f",
"0x1c62e104f9b63fe6b79ced9bc4e6cfe7b6200a577e8cdccd387ade72b3f7826d",
"0x098398f67200b5a8e61c480b9e4549ff8d31e30022ac1d30e66a838d3c0050b7",
"0x35867abea6653229e6f2b0168492128d3ace21c209dd0630be5e210fec9c860d",
"0x3c7357614388bc1e8f530892cfd981cc2c5691814873306241202a6cec658e10",
"0x6c9756e22e495f93944978c14a8ee0e3bdabc60a7cc2116aae90fc036da9c47a",
"0xa008454bc40996d430670de55932f6e07f2741e0fea3fc1e33a58b6aab01880a",
"0x455262a7e9a1cd247ca16d6759a637183337984c12814a0dd03d53a5bc362ca2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

