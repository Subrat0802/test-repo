import { NavLink } from "react-router-dom";

const CreateWalletFirstPage = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center gap-4">
      <p className="text-3xl mb-10">Create Wallet</p>
      <div className="flex gap-10">
        <NavLink to={"/createWallet/solana"}>
          <button className="p-2 px-4 border rounded-lg ml-2">
            Solana Wallet
          </button>
        </NavLink>
        <NavLink to={"/createWallet/ethereum"}><button className="p-2 px-4 border rounded-lg ml-2">
          Ethereum Wallet
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CreateWalletFirstPage;
