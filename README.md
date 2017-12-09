# Employee Verification
Makes use of the block chain to hold the employee data securely and in a distributed manner.

## Steps to get this project running :  

# Prerequisites : 

1.  Install geth using the following commmands

	```
	sudo apt-get install software-properties-common
	sudo add-apt-repository -y ppa:ethereum/ethereum
	sudo apt-get update
	sudo apt-get install ethereum
	```

2.  Install truffle using the following command

	```npm install -g truffle```

# To connect to the network : 

1.  Create ethereum private network and init the genesis block using following command  

	```geth --datadir "employeeVerificationServer" init "Genesis File/CustomGenesis.json"```

2.  Start the private network using the following command

	```geth --datadir employeeVerificationServer --networkid 1234 --rpcport 8500 --rpcaddr 127.0.0.1 --port 30303 --rpc --			    
	rpcapi="db,eth,net,web3,personal,web3"  --maxpeers 3 --nat=any --nodiscover --rpccorsdomain "*"  console```

# To get the node up and running : 

1. The Above command initiated a geth console. In the console execute the following commands
   
..  ```personal.newAccount("password")```   = > this command will create new account

.. ```personal.unlockAccount(eth.accounts[0], "password", 100000)``` = > this command unlocks the account

..  ```miner.start()```    = > this command starts the mining in the node
	
2.  In a seperate terninal under the same directory execute `npm install`


3. Open the *build/contracts/EmployeeVerification.json* file and copy the address provided. Enter the address in app.js

	`var employeeContractInstance = employeeContract.at("replace with contract address"); in line no. 16`
   
4. Execute `npm run dev`

5. open http://localhost:8080/   

	
 

	
