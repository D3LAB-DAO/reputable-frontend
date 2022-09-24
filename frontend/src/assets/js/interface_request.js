/*
 * Declarations
 */
import { CONTRACT_ABI, CONTRACT_ADDR } from "./contract.js"
import { store_contract, retrieve_contract } from "./contract_request.js"
let account = '';
let contract = '';

/* 
 * Initialize functions
 */
async function connectMetamask() {
  // metamask installed
  if (typeof window.ethereum !== 'undefined') {
    // set global variables (contract, account)
    window.web3 = new Web3(window.ethereum);
    contract = await new window.web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDR);
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    account = accounts[0];
    return true;
  }

  // metamask not installed
  else {
    $('.connect-btn-text').html("Error!");
    $('.connect-btn-text-sm').html("ERR!");
    $('.connect-btn').attr('uk-tooltip', "Metamask required");
    console.log("metamask required");
    return false;
  }
}

function getAccount() {
  return account;
}

function getContract() {
  return contract;
}

/* 
 * Test Contract functions
 */
async function store(num) {
  if (getContract() === '' || getAccount() === '') return;
  let response = await store_contract(contract, account, num);
}

async function retrieve() {
  if (getContract() === '' || getAccount() === '') return;
  let num = await retrieve_contract(contract, account);
  return num;
}

export { connectMetamask, getAccount, getContract, store, retrieve }