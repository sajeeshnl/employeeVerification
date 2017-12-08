pragma solidity ^0.4.0;

contract EmployeeVerification {

    struct Employee {
        uint age;
        string fName;
        string lName;
        string role;
        string experience;
        string comments;
    }

    mapping (bytes32 => Employee) employeeData;
    bytes32[] public candidateList;

    function dataAboutEmployee(bytes32 employeeID) view public returns (uint, string, string) {
        return (employeeData[employeeID].age, employeeData[employeeID].fName, employeeData[employeeID].lName);
    }

    function inputEmployeeData(bytes32 employeeID, uint age, string fName, string lName, string role, string experience, string comments) public {
        var newEmployee = Employee(age, fName, lName, role, experience, comments);
        employeeData[employeeID] = (newEmployee);
    }


    function inputEmployeeId(bytes32 employeeID) public returns (bool) {
        if(isNewEntry(employeeID)) {
          candidateList.push(employeeID);
          return true;
        }
        return false;
    }

    function isNewEntry(bytes32 candidate) view public returns (bool) {
        for(uint i = 0; i < candidateList.length; i++) {
            if (candidateList[i] == candidate) {
                return false;
            }
        }
        return true;
    }

    function getCandidateList() constant public returns (bytes32[]) {
        return candidateList;
    }
}
