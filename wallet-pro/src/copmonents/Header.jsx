import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='max-w-7xl font-thin flex justify-between items-center mx-auto  h-12'>
        <Link to={"/"}><p className='font-bold text-3xl  bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent '>BlockchainEX</p></Link>
        <ul className='flex gap-8'>
            <NavLink to={"/createWallet"}><li className=' hover:bg-gradient-to-r transition-all duration-200 cursor-pointer hover:from-pink-500 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent'>Create Wallet</li></NavLink>
            <NavLink to={"/tokenlaunchpad"}><li className=' hover:bg-gradient-to-r transition-all duration-200 cursor-pointer hover:from-pink-500 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent'>Token launchpad</li></NavLink>
            <NavLink to={"/dapp"}><li className=' hover:bg-gradient-to-r transition-all duration-200 cursor-pointer hover:from-pink-500 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent'>Dapp</li></NavLink>
            <li className=' hover:bg-gradient-to-r transition-all duration-200 cursor-pointer hover:from-pink-500 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent'>Solana Faucet</li>
        </ul>
        <div>
            <p>Dark mode</p>
        </div>
    </div>
  )
}

export default Header