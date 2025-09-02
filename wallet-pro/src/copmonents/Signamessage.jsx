import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react"
import {ed25519} from "@noble/curves/ed25519";
import bs58 from "bs58";

const Signamessage = () => {
    const [message, setMessage] = useState("");
    const {publicKey, signMessage} = useWallet();
    const handleClick = async () => {
        try{
            if(!publicKey) throw Error("Wallet is not connected");
            if(!signMessage) throw Error("Wallet does not support signing message");

            const encodeMsg = new TextEncoder().encode(message);
            // console.log("encodeMsg", encodeMsg)
            const signature = await signMessage(encodeMsg);

            if(!ed25519.verify(signature, encodeMsg, publicKey.toBytes())) throw Error("message signature invalid");
            alert('success', `Message signature: ${bs58.encode(signature)}`)
            console.log('success', `Message signature: `, bs58.encode(signature));
        }catch(error){
            console.log(error);
        }
    }
  return (
    <div>
      <p className="text-2xl underline underline-offset-8">Sign message</p>
      <div className="flex gap-3 items-center w-fit  justify-center mt-5">
        <input
          onChange={(e) => setMessage(e.target.value)}
          className="bg-gray-700 p-2 rounded-lg mt-5 focus:outline-0 focus:ring-1"
          placeholder="Write message"
        />
        <button
          onClick={handleClick}
          className="bg-violet-500 p-2 rounded-lg mt-4 hover:bg-violet-700 transition-all duration-200"
        >
          Sign a message
        </button>
      </div>
    </div>
  )
}

export default Signamessage