import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

const ShowBalance = () => {
  const [balance, setBalance] = useState("");
  const wallet = useWallet();
  const { connection } = useConnection();

  const handleClick = async () => {
    const solbalance = await connection.getBalance(wallet.publicKey);
    console.log("BALANCE", solbalance);
    setBalance(solbalance);
  };

  return (
    <div>
      <p className="text-2xl underline underline-offset-8">Show Balance</p>
      <div className="flex gap-3 items-center w-fit  justify-center mt-5">
        <p className="mt-5 border p-2 rounded-lg ">blance: {balance / LAMPORTS_PER_SOL}</p>
        <button
          onClick={handleClick}
          className="bg-violet-500 p-2 rounded-lg mt-4 hover:bg-violet-700 transition-all duration-200"
        >
          Show balance
        </button>
      </div>
    </div>
  );
};

export default ShowBalance;
