import { Route, Routes } from "react-router-dom"
import SolanaWallet from "./copmonents/SolanaWallet"
import EthereumWallet from "./copmonents/EthereumWallet"
import Home from "./copmonents/Home"
import Header from "./copmonents/Header"
import CreateWallet from "./copmonents/CreateWallet"
import CreateWalletFirstPage from "./copmonents/CreateWalletFirstPage"
import Dapp from "./copmonents/Dapp"
import TokenLaunchPad from "./copmonents/TokenLaunchPad"

function App() {

  return (
    <div className="min-h-[100dvh] bg-[#0f0f0f] text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createWallet" element={<CreateWallet />}>
          <Route index element={<CreateWalletFirstPage />}/>
          <Route path="solana" element={<SolanaWallet />}/>
          <Route path="ethereum" element={<EthereumWallet />}/>
        </Route>
        <Route path="dapp" element={<Dapp />} />
        <Route path="tokenlaunchpad" element={<TokenLaunchPad />} />

      </Routes>
    </div>
  )
}

export default App
