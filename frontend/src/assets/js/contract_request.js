async function store_contract(_contract, _account, _num) {
    console.log("-- [request] store");
    let response = await _contract.methods.store(_num).send({ from: _account });
    console.log("-- [response] store :", response);
    return response;
}

async function retrieve_contract(_contract, _account) {
    console.log("-- [request] retrieve");
    let response = await _contract.methods.retrieve().call({ from: _account });
    console.log("-- [response] retrieve :", response);
    return response;
}

export { store_contract, retrieve_contract }