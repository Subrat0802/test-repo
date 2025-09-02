import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {WalletModalProvider, WalletDisconnectButton, WalletMultiButton,} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import RequestAirdrop from "./RequestAirdrop";
import ShowBalance from "./ShowBalance";
import Signamessage from "./Signamessage";
import SendSol from "./SendSol";


const Dapp = () => {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
            <div className="flex w-full justify-between pt-10 px-20">
                <WalletMultiButton />
                <WalletDisconnectButton />
            </div>
            <div className="w-full pt-10 px-20">
                <RequestAirdrop />
            </div>
            <div className="w-full pt-10 px-20">
                <ShowBalance />
            </div>
            <div className="w-full pt-10 px-20">
                <Signamessage />
            </div>
            <div className="w-full pt-10 px-20">
                <SendSol />
            </div>
            
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};


export default Dapp;
