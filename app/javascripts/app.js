// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

import employee_artifacts from '../../build/contracts/EmployeeVerification.json'

var Employee = contract(employee_artifacts);
var candidates = {};
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8500"));
var k = JSON.stringify(employee_artifacts.abi);

var l=JSON.parse(k)
var employeeContract = web3.eth.contract(l);
var employeeContractInstance = employeeContract.at("0x37a1a9d0824f7d57d469803cbcbaa0b8a588534b");
window.addNewEmployee = function(candidate) {
  var candidateName = $("#addCandidate").val();
  var employeeId ='e'+$("#employeeId").val();
  var age = $("#age").val();
  var fName = $("#employeeFirstName").val();
  var lName = $("#employeeLastName").val();
  var experience = $("#employeeExperience").val();
  var comments =$("#comments").val();
  var role =$("#employeeRole").val();
  console.log("saju",role,comments,experience,lName,fName,age,employeeId);
  Employee.setProvider(web3.currentProvider);
  try {
    $("#msg").html("Employee has been entered. The change will be reflected as soon it is recorded in the blockchain. Please wait.")
    $("#candidate").val("");
    console.log("hey : ", employeeId);
      var isNew = employeeContractInstance.isNewEntry(employeeId);
      console.log("can i put the records : ", isNew);
        if(isNew){
          Employee.deployed().then(function(contractInstance) {
            console.log("bef:"+employeeId);
          return contractInstance.inputEmployeeId(employeeId, {gas: 4712388, from: web3.eth.accounts[0]})
          .then(function(){
            return contractInstance.inputEmployeeData(employeeId, age, fName, lName,role,experience,comments, {gas: 4712388, from: web3.eth.accounts[0]}).then(function() {
              var markup = "<tr><td>" + employeeId.slice(1) + "</td><td>"+ age + "</td><td>" + fName + "</td><td>" + lName + "</td><td></tr>"
              $("table tbody").append(markup);
            });

        })
      });
    }
  } catch (error) {
    console.log(error);
  }
}

$( document ).ready(function() {
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source like Metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8500"));
  }
  var employeeList = employeeContractInstance.getCandidateList();
  console.log("saju:",employeeList);
  Employee.setProvider(web3.currentProvider);
  for (var i = 0; i < employeeList.length; i++) {
    let nameString = web3.toUtf8(employeeList[i]);
    getEmployeeDetails(nameString);
    console.log("nameString:"+nameString);
  }


  function getEmployeeDetails(employeeId) {
    Employee.deployed().then(function(contractInstance) {
      contractInstance.dataAboutEmployee.call(employeeId).then(function(v) {
        var markup = "<tr><td>" + employeeId.slice(1) + "</td><td>"+ v[0].toString() + "</td><td>" + v[1] + "</td><td>" + v[2] + "</td></tr>";
        $("table tbody").append(markup);
      });
    })
  }
});
