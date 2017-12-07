var Employee = artifacts.require("./EmployeeVerification.sol");
module.exports = function(deployer) {
  deployer.deploy(Employee,{gas: 670000});
};
