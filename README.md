# employeeVerification
Makes use of the block chain to hold the employee data securely and in a distributed manner.


Installation 



1.  Install geth using following coommmands

	sudo apt-get install software-properties-common
	sudo add-apt-repository -y ppa:ethereum/ethereum
	sudo apt-get update
	sudo apt-get install ethereum

2.  Install truffle using following command

	npm install -g truffle

3.  Copy the genisis file "CustomGenesis.json" to any folder. For example /home folder

4.  Create ethereum private network and init the genesis block using following command  

	geth --datadir "firstserver" init "CustomGenesis.json" 

5.  Start the private network using following command

	geth --datadir firstserver --networkid 1234 --rpcport 8500 --rpcaddr 127.0.0.1 --port 30303 --rpc --			    
	rpcapi="db,eth,net,web3,personal,web3"  --maxpeers 3 --nat=any --nodiscover --rpccorsdomain "*"  console

6.  Above command will open a console. In that console
   
	i.   personal.newAccount()   will create new account

	ii.  miner.start()    account wiiil get enough gas to make transactions

7.  Clone this repo to your local machine using https://github.com/sajeeshnl/employeeVerification.git

	cd  employeeVerification

8.  run npm install

9.  deploy the contracts to network

	truffle migrate

10. Copy the contract address and update it in app.js

	var employeeContractInstance = employeeContract.at("replace with contract address"); in line no. 16
   
11. enter npm run dev	

12. open http://localhost:8080/   


	In this network, there is only one node. To create multiple nodes, use same genesis file and network id.

	
 

	
