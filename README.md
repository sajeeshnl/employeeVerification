
This DApp alows you to join a network of firms sharing their employee data between themselves.
We make use of blockchain to ensure that each transaction is recorded in the network.
The data is stored in a secure and distributed manner.
This DApp is built as a POC.

# Employee Verification
![Alt text](/app/assets/Dapp_image.png?raw=true "employee verification")
You can add an employee to the network.


![Alt text](/app/assets/Dapp_image1.png?raw=true "enter the data here")
You can view all the existing employees within the network.


![Alt text](/app/assets/Dapp_image2.png?raw=true "you can view the data here")

## Steps to get this project running

# Prerequisites

1.  Install geth using the following commmands

	```
	sudo apt-get install software-properties-common
	sudo add-apt-repository -y ppa:ethereum/ethereum
	sudo apt-get update
	sudo apt-get install ethereum
	```

2.  Install truffle using the following command

	```npm install -g truffle```

# To connect to the network

1.  Create ethereum private network and init the genesis block using following command  

	```geth --datadir "employeeVerificationServer" init "Genesis File/CustomGenesis.json"```

2.  Start the private network using the following command

	```
	geth --datadir employeeVerificationServer --networkid 1234 --rpcport 8500 --rpcaddr 127.0.0.1 --port 30303 --rpc --			    
	rpcapi="db,eth,net,web3,personal,web3"  --maxpeers 3 --nat=any --nodiscover --rpccorsdomain "*"  console
	```

# To get the node up and running 

1. The Above command initiated a geth console. In the console execute the following commands
   
	1. `personal.newAccount("password")`   = > creates new account

	2. `personal.unlockAccount(eth.accounts[0], "password", 100000)` = > unlocks the account

	3. `miner.start()`    = > starts the mining in the node
	
2.  In a seperate terminal under the same directory execute `npm install`


3. Open the *"build/contracts/EmployeeVerification.json"* file and copy the address provided. Enter the address in            *"app/javascripts/app.js"* file

	`var employeeContractInstance = employeeContract.at("replace with contract address"); in line no. 16`
   
4. Execute `npm run dev`

5. open [local host](http://localhost:8080/)   

	
 

	
