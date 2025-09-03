import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { TokenLaunchpadform } from "./TokenLaunchPadForm";

const TokenLaunchPad = () => {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="flex w-full justify-between pt-10 px-20">
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>
          <TokenLaunchpadform />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default TokenLaunchPad;
