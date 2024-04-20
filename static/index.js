let account;
const connect = async () => {
  if (window.ethereum !== "undefined") {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    account = accounts[0];
    document.getElementById("contractArea").innerHTML = account;
  }

  const ABI =[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_copID",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "uID",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "_pH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_temp",
          "type": "uint256"
        }
      ],
      "name": "auditdetails",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "upc",
          "type": "bytes32"
        }
      ],
      "name": "Audited",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "upc",
          "type": "bytes32"
        }
      ],
      "name": "Bought",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "upc",
          "type": "bytes32"
        }
      ],
      "name": "Collected",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_unum",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_milkmanID",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_pH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_temp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_cattledetails",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_originlocat",
          "type": "string"
        }
      ],
      "name": "collectMilk",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "uID",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_customerID",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_pH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_temp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "CustomerDetails",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_milkID",
          "type": "bytes32"
        },
        {
          "internalType": "address payable",
          "name": "_receiver",
          "type": "address"
        }
      ],
      "name": "paytoretailer",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "unumber",
          "type": "uint256"
        }
      ],
      "name": "putUniquemilkID",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "unum",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_copID",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_pH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_temp",
          "type": "uint256"
        }
      ],
      "name": "recorddetails",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "upc",
          "type": "bytes32"
        }
      ],
      "name": "Recorded",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_copName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_copID",
          "type": "address"
        }
      ],
      "name": "registercop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_custName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_cusID",
          "type": "address"
        }
      ],
      "name": "registercustomer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_milkmanName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_milkmanID",
          "type": "address"
        }
      ],
      "name": "registerMilkman",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_retailerName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_retailerID",
          "type": "address"
        }
      ],
      "name": "registerretailer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "upc",
          "type": "bytes32"
        }
      ],
      "name": "Retailed",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "uID",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_retailerID",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_pH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_temp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "retailerDetails",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "madd",
          "type": "address"
        }
      ],
      "name": "Copexists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "madd",
          "type": "address"
        }
      ],
      "name": "customerexists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "bal",
          "type": "address"
        }
      ],
      "name": "getBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_copid",
          "type": "address"
        }
      ],
      "name": "getCopdetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_cusid",
          "type": "address"
        }
      ],
      "name": "getCusdetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "uID",
          "type": "bytes32"
        }
      ],
      "name": "getMilkDetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "_originlocation",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_cattledetails",
          "type": "string"
        },
        {
          "internalType": "uint256[5]",
          "name": "pH",
          "type": "uint256[5]"
        },
        {
          "internalType": "uint256[5]",
          "name": "temp",
          "type": "uint256[5]"
        },
        {
          "internalType": "uint256[4]",
          "name": "",
          "type": "uint256[4]"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_milkman",
          "type": "address"
        }
      ],
      "name": "getMilkmandetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_retailer",
          "type": "address"
        }
      ],
      "name": "getretailerdetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "uID",
          "type": "bytes32"
        }
      ],
      "name": "getSupplychaindetails",
      "outputs": [
        {
          "internalType": "address",
          "name": "_milkmanID",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_milkmanName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_copID",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_copName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_retailerID",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_retailerName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "state",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "unumber",
          "type": "uint256"
        }
      ],
      "name": "getUniquemilkID",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "add",
          "type": "address"
        }
      ],
      "name": "getUserType",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "madd",
          "type": "address"
        }
      ],
      "name": "milkmanexists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "madd",
          "type": "address"
        }
      ],
      "name": "retailerexists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  const address = "0x220F1C37b2dF9D4Cc06120cD6EC936c9f4E990F9";
  window.web3 = await new Web3(window.ethereum);
  window.contract = await new window.web3.eth.Contract(ABI, address);
  document.getElementById("contractStatus").innerHTML = "Sucessfully Connected";
};
