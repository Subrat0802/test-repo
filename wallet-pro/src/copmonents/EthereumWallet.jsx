import { generateMnemonic } from "bip39";
import { useState, useEffect } from "react";
import { HDNodeWallet, Mnemonic } from "ethers";

const EthereumWallet = () => {
  const [mnemonics, setMnemonics] = useState("");
  const [wallets, setWallets] = useState([]);
  const [showPrivate, setShowPrivate] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("eth-mnemonics");
    if (saved) {
      setMnemonics(saved);
    } else {
      const mn = generateMnemonic(128); 
      setMnemonics(mn);
      localStorage.setItem("eth-mnemonics", mn);
    }
  }, []);

  const handleCreate = () => {
    const index = wallets.length;
    const path = `m/44'/60'/0'/0/${index}`;
    const wallet = HDNodeWallet.fromMnemonic(
      Mnemonic.fromPhrase(mnemonics),
      path
    );

    setWallets((prev) => [
      ...prev,
      {
        index,
        address: wallet.address,
        privateKey: wallet.privateKey,
      },
    ]);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="max-w-7xl w-full pt-[5vh]">
      <div className="flex w-full justify-between">
        <h2 className="text-4xl font-bold">Ethereum Wallet</h2>
        <button className="border p-2 rounded-lg" onClick={handleCreate}>
          Create Keys
        </button>
      </div>

      <div className="flex px-4 border-white/20 rounded-lg items-center justify-center py-6 flex-wrap gap-3 text-center mt-6 border">
        <div className="flex justify-between w-full">
          <p className="text-2xl">Mnemonics</p>
          <button onClick={() => handleCopy(mnemonics)}>Copy</button>
        </div>
        <div className="flex justify-between flex-wrap gap-2 w-full">
          {mnemonics &&
            mnemonics.split(" ").map((el, idx) => (
              <p
                key={idx}
                className="text-sm rounded-lg border border-white/20 px-2 py-1 text-white/60"
              >
                {el}
              </p>
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        {wallets.map((w) => (
          <div
            key={w.index}
            className="border w-full p-4 rounded-lg border-white/20 text-sm"
          >
            <p><strong>Account #{w.index}</strong></p>
            <p><strong>Address:</strong> {w.address}</p>
            <p>
              <strong>Private Key:</strong>{" "}
              {showPrivate ? w.privateKey : "••••••••••••••••"}
            </p>
            <div className="flex gap-3 mt-2">
              <button
                className="border px-2 py-1 rounded"
                onClick={() => handleCopy(w.address)}
              >
                Copy Address
              </button>
              <button
                className="border px-2 py-1 rounded"
                onClick={() => handleCopy(w.privateKey)}
              >
                Copy Private
              </button>
              <button
                className="border px-2 py-1 rounded"
                onClick={() => setShowPrivate((prev) => !prev)}
              >
                {showPrivate ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EthereumWallet;
