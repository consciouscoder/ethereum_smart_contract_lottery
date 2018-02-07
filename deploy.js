const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'silent move armed find pipe render lift below mean aware picture feel',
    'https://rinkeby.infura.io/BT5aNdzdatRBPJwy52wl'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0], gasLimit: '10000000' });

  console.log('Contract deployed to', result.options.address);
};
deploy();
