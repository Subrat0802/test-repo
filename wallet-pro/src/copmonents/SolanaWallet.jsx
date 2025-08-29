import { Keypair } from '@solana/web3.js';
import { generateMnemonic, mnemonicToSeed } from 'bip39';
import { derivePath } from 'ed25519-hd-key';
import { useState } from 'react';
import nacl from 'tweetnacl';

const SolanaWallet = () => {
  const [secrets, setSecrets] = useState([]);
  const mnemonics = generateMnemonic(128); // 12 words

  const handleClick = async () => {
    const seed = await mnemonicToSeed(mnemonics); // ✅ wait for seed
    const index = secrets.length; // derive next account each time
    const path = `m/44'/501'/${index}'/0'`;

    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

    const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58();

    setSecrets((prev) => [...prev, publicKey]); // ✅ update state correctly
    console.log(publicKey);
  };

  return (
    <div>
      <h2>Solana Wallet</h2>
      <p><b>Mnemonics:</b> {mnemonics}</p>
      <button onClick={handleClick}>Create Keys</button>
      {secrets.length > 0 && (
        <div>
          <h3>Derived Accounts:</h3>
          {secrets.map((el, idx) => (
            <div key={idx}>{el}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SolanaWallet;
