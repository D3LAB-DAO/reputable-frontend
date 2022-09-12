/*
 * Declarations
 */
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
    //contract = await new window.web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDR);
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    account = accounts[0];
    return true;
  }

  // metamask not installed
  else {
    $('.connect-btn-text').html("Error!");
    $('.connect-btn-text-sm').html("ERR!");
    $('.connect-btn').attr('uk-tooltip', "Metamask required");
    return false;
  }
}