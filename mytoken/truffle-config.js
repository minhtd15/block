module.exports = {
  networks: {
    node1: {
      host: "127.0.0.1",
      port: 8545,           // Cổng node 1
      network_id: "12345",
      gas: 8000000,
      gasPrice: 20000000000
    },
    node2: {
      host: "127.0.0.1",
      port: 8546,           // Cổng node 2
      network_id: "12345",
      gas: 8000000,
      gasPrice: 20000000000
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },
};
