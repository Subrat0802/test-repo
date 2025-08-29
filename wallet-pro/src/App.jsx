import './App.css'
import EthereumWallet from './copmonents/EthereumWallet'
import SolanaWallet from './copmonents/SolanaWallet'

function App() {

  return (
    <>
      <p>Wallet Solana/Ethereum</p>
      {/* <div>
        <button>Solana Wallet</button>
        <button>Ethereum Wallet</button>
      </div> */}
      <div >
        <SolanaWallet />
        <EthereumWallet />
      </div>
    </>
  )
}

export default App
