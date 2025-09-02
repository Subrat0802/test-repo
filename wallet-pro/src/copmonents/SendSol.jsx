import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import React, { useState } from 'react'

const SendSol = () => {
    const [amount, setAmount] = useState("");
    const [address, setAddress] = useState("");

    const wallet = useWallet();
    const {connection} = useConnection();

    const handleClick = async () => {
        try{
            const transaction = new Transaction();
            transaction.add(SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey:new PublicKey(address),
                lamports: amount * LAMPORTS_PER_SOL
            }))

            const trans = await wallet.sendTransaction(transaction, connection);
            console.log("trans", trans);
            if(trans){
                alert("Amount sent", amount)
                console.log(trans);
            }
            else{
                alert("Error while sending sol")
            }
        }catch(error){
            console.log(error);
        }
    }
  return (
    <div>
      <p className="text-2xl underline underline-offset-8">Send Solana</p>
      <div className="flex gap-3 items-center w-fit  justify-center mt-5">
        <input
          onChange={(e) => setAddress(e.target.value)}
          className="bg-gray-700 p-2 rounded-lg mt-5 focus:outline-0 focus:ring-1"
          placeholder="Send to (public address)"
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          className="bg-gray-700 p-2 rounded-lg mt-5 focus:outline-0 focus:ring-1"
          placeholder="Amount"
        />
        <button
          onClick={handleClick}
          className="bg-violet-500 p-2 rounded-lg mt-4 hover:bg-violet-700 transition-all duration-200"
        >
          Send Sol
        </button>
      </div>
    </div>
  )
}

export default SendSol