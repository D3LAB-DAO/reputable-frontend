/*
 * Declarations
 */
import { CONTRACT_ABI, CONTRACT_ADDR, REPU_CONTRACT_ADDR, REPU_CONTRACT_ABI, RTOKEN_CONTRACT_ABI } from "./contract.js"
import { getRToken_contract, createRToken_contract, totalSupply_contract, approve_contract, allowance_contract, userInfo_contract, pendingToken_contract, deposit_contract, withdraw_contract, harvest_contract } from "./contract_request.js"
let account = '';
let contract = '';
let contract_repu = '';

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

/* 
 * Test Contract functions
 */

async function getRTokenContractAddr(addr) {
  if (getContract() === '' || getAccount() === '') return;
  let response = await getRToken_contract(contract, account, addr);
  return response;
}

async function createRToken(symbol) {
  if (getContract() === '' || getAccount() === '') return;
  let response = await createRToken_contract(contract, account, symbol);
  return response;
}

async function getRTokenContract(contractAddr) {
  return await new window.web3.eth.Contract(RTOKEN_CONTRACT_ABI, contractAddr);
}

async function getAllowance(address_rtoken) {
  if (contract_repu === '' || getAccount() === '') return 0;
  let response = await allowance_contract(contract_repu, account, address_rtoken);
  return response;
}

async function approve(address_rtoken, amount) {
  if (contract_repu === '' || getAccount() === '') return 0;
  let response = await approve_contract(contract_repu, account, address_rtoken, 99999999);
  return response;
}

async function getRTokenTotalSupply(contract_rtoken) {
  if (!contract_rtoken || getAccount() === '') return 0;
  let response = await totalSupply_contract(contract_rtoken, account);
  return response;
}

async function getDepositedRToken(contract_rtoken) {
  if (!contract_rtoken || getAccount() === '') return 0;
  let response = await userInfo_contract(contract_rtoken, account);
  return response.amount;
}

async function getClaimableRToken(contract_rtoken) {
  if (!contract_rtoken || getAccount() === '') return 0;
  let response = await pendingToken_contract(contract_rtoken, account);
  return response;
}

async function depositRToken(contract_rtoken, amount) {
  if (!contract_rtoken || getAccount() === '') return 0;
  let response = await deposit_contract(contract_rtoken, account, amount);
  return response;
}

async function withdrawRToken(contract_rtoken, amount) {
  if (!contract_rtoken || getAccount() === '') return 0;
  let response = await withdraw_contract(contract_rtoken, account, amount);
  return response;
}

async function claimRToken(contract_rtoken) {
  if (!contract_rtoken || getAccount() === '') return 0;
  let response = await harvest_contract(contract_rtoken, account);
  return response;
}

export { connectMetamask, getAccount, getContract, getRTokenContract, getRTokenContractAddr, createRToken, getRTokenTotalSupply, getDepositedRToken, getClaimableRToken, depositRToken, withdrawRToken, claimRToken, getAllowance, approve }