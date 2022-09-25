async function getRToken_contract(_contract, _account, _address) {
    console.log("-- [request] getRToken");
    let response = await _contract.methods.getRToken(_address).call({ from: _account });
    console.log("-- [response] getRToken :", response);
    return response;
}

async function createRToken_contract(_contract, _account, _symbol) {
    console.log("-- [request] createRToken");
    let response = await _contract.methods.createRToken(_symbol).send({ from: _account });
    console.log("-- [response] createRToken :", response);
    return response;
}

async function approve_contract(_contract, _account, _RTokenAddress, _amount) {
    console.log("-- [request] approve");
    let response = await _contract.methods.approve(_RTokenAddress, _amount).send({ from: _account });
    console.log("-- [response] approve :", response);
    return response;
}

async function allowance_contract(_contract, _account, _RTokenAddress) {
    console.log("-- [request] allowance");
    let response = await _contract.methods.allowance(_account, _RTokenAddress).call({ from: _account });
    console.log("-- [response] allowance :", response);
    return response;
}

async function totalSupply_contract(_contract, _account) {
    console.log("-- [request] totalSupply");
    console.log(_contract);
    let response = await _contract.methods.totalSupply().call({ from: _account });
    console.log("-- [response] totalSupply :", response);
    return response;
}

async function userInfo_contract(_contract, _account) {
    console.log("-- [request] userInfo");
    let response = await _contract.methods.userInfo(_account).call({ from: _account });
    console.log("-- [response] userInfo :", response);
    return response;
}

async function pendingToken_contract(_contract, _account) {
    console.log("-- [request] pendingToken");
    let response = await _contract.methods.pendingToken(_account).call({ from: _account });
    console.log("-- [response] pendingToken :", response);
    return response;
}

async function deposit_contract(_contract, _account, _amount) {
    console.log("-- [request] deposit");
    let response = await _contract.methods.deposit(_amount, _account).send({ from: _account });
    console.log("-- [response] deposit :", response);
    return response;
}

async function withdraw_contract(_contract, _account, _amount) {
    console.log("-- [request] withdraw");
    let response = await _contract.methods.withdraw(_amount, _account).send({ from: _account });
    console.log("-- [response] withdraw :", response);
    return response;
}

async function harvest_contract(_contract, _account) {
    console.log("-- [request] harvest");
    let response = await _contract.methods.harvest(_account).send({ from: _account });
    console.log("-- [response] harvest :", response);
    return response;
}
export { getRToken_contract, createRToken_contract, approve_contract, allowance_contract, totalSupply_contract, userInfo_contract, pendingToken_contract, deposit_contract, withdraw_contract, harvest_contract }