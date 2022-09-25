/*
 * Declarations
 */
import { CONTRACT_ABI, CONTRACT_ADDR, REPU_CONTRACT_ADDR, REPU_CONTRACT_ABI, RTOKEN_CONTRACT_ABI } from "./contract.js"
import { getRToken_contract, createRToken_contract, totalSupply_contract, approve_contract, userInfo_contract, pendingToken_contract, deposit_contract, withdraw_contract, harvest_contract } from "./contract_request.js"
let account = '';
let contract = '';
let contract_repu = '';
let contract_rtoken = '';

let address_rtoken = '';

/* 
 * Initialize functions
 */
async function connectMetamask() {
  // metamask installed
  if (typeof window.ethereum !== 'undefined') {
    // set global variables (contract, account)
    window.web3 = new Web3(window.ethereum);
    contract = await new window.web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDR);
    contract_repu = await new window.web3.eth.Contract(REPU_CONTRACT_ABI, REPU_CONTRACT_ADDR);
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

function getRTokenContract() {
  return contract_rtoken;
}

/* 
 * Test Contract functions
 */

async function getMyRTokenContractAddr() {
  if (getContract() === '' || getAccount() === '') return;
  let response = await getRToken_contract(contract, account);
  return response;
}

async function createRToken(symbol) {
  if (getContract() === '' || getAccount() === '') return;
  let response = await createRToken_contract(contract, account, symbol);
  return response;
}

async function connectRTokenContract(contractAddr) {
  address_rtoken = contractAddr;
  contract_rtoken = await new window.web3.eth.Contract(RTOKEN_CONTRACT_ABI, contractAddr);
  console.log("RToken Connected!", contractAddr);
}

async function approve(amount) {
  if (address_rtoken === '' || contract_repu === '' || getAccount() === '') return 0;
  let response = await approve_contract(contract_repu, account, address_rtoken, 99999999);
  return response;
}

async function getRTokenTotalSupply() {
  if (getRTokenContract() === '' || getAccount() === '') return 0;
  let response = await totalSupply_contract(contract_rtoken, account);
  return response;
}

async function getDepositedRToken() {
  if (getRTokenContract() === '' || getAccount() === '') return;
  let response = await userInfo_contract(contract_rtoken, account);
  return response.amount;
}

async function getClaimableRToken() {
  if (getRTokenContract() === '' || getAccount() === '') return;
  let response = await pendingToken_contract(contract_rtoken, account);
  return response;
}

async function depositRToken(amount) {
  if (getRTokenContract() === '' || getAccount() === '') return;
  let response = await deposit_contract(contract_rtoken, account, amount);
  return response;
}

async function withdrawRToken(amount) {
  if (getRTokenContract() === '' || getAccount() === '') return;
  let response = await withdraw_contract(contract_rtoken, account, amount);
  return response;
}

async function claimRToken() {
  if (getRTokenContract() === '' || getAccount() === '') return;
  let response = await harvest_contract(contract_rtoken, account);
  return response;
}

export { connectMetamask, getAccount, getContract, getRTokenContract, getMyRTokenContractAddr, createRToken, connectRTokenContract, getRTokenTotalSupply, getDepositedRToken, getClaimableRToken, depositRToken, withdrawRToken, claimRToken, approve }