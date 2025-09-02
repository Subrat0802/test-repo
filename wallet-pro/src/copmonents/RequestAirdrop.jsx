import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useState } from "react";

const RequestAirdrop = () => {
  const [amount, setAmount] = useState("");
  const wallet = useWallet();
  const { connection } = useConnection();
//   console.log(wallet.publicKey.toBase58(), connection, amount);

  const handleClick = async () => {
    try {
      const response = await connection.requestAirdrop(
        wallet.publicKey,
        amount * LAMPORTS_PER_SOL
      );
      console.log("RESPONSE", response);

      if(response){
        alert("Airdrop" + amount + "SOL to " + wallet.publicKey.toBase58());
      }
      else{
        alert("Error while sending data")
      }
    } catch (error) {
        console.log("Error cathc", error);
    }
  };

  return (
    <div>
      <p className="text-2xl underline underline-offset-8">Requset Airdrop</p>
      <div className="space-x-3">
        <input
          onChange={(e) => setAmount(e.target.value)}
          className="bg-gray-700 p-2 rounded-lg mt-5 focus:outline-0 focus:ring-1"
          placeholder="sol"
        />
        <button
          onClick={handleClick}
          className="bg-violet-500 p-2 rounded-lg hover:bg-violet-700 transition-all duration-200"
        >
          Send Sol
        </button>
      </div>
    </div>
  );
};

export default RequestAirdrop;
