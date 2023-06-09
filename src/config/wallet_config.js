import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import metamaskIcon from '../assets/images/home/wallet icon/metamask icon.png'
import walletIcon from '../assets/images/home/wallet icon/wallet icon.png'
import coinbasekIcon from '../assets/images/home/wallet icon/coinbase icon.png'
// import mywalletIcon from '../assets/images/home/wallet icon/mywallet icon.png'

import eth from '../assets/images/home/ETH.png'
import a_eth from '../assets/images/home/a_eth.png'
import wbtc from '../assets/images/home/WETH.png'
import a_wbtc from '../assets/images/home/a_bitcoin.png'
import usdc from '../assets/images/home/USDC.png'
import a_usdc from '../assets/images/home/a_usdc.png'
import usdt from '../assets/images/home/usdt.png'
import a_usdt from '../assets/images/home/a_usdt.png'
import bnb from '../assets/images/home/bnb.png'
import a_bnb from '../assets/images/home/a_bnb.png'
import busd from '../assets/images/home/busd.png'
import a_busd from '../assets/images/home/a_binance.png'

export function resetWalletConnector(connector) {
  if (connector && connector instanceof WalletConnectConnector) {
    connector.walletConnectProvider = undefined;
  }
}

const SUPPORTED_CHAIN_IDS = [
  1, 4, 3, 42, 5, 56, 97, 137, 80001, 56, 97, 1337, 250, 11155111,
];

const RPC_URLS = {
  1: 'https://mainnet.infura.io/v3/a346366462c84f2c8f4a984e4bfd02e6',
  47:"https://bsc-dataseed1.binance.org/",
  137: 'https://polygon-mainnet.infura.io/v3/cb69790f7bcf4870bed74530bdf4c7aa',
};

  //metamask
export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
});

export const walletconnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/cb69790f7bcf4870bed74530bdf4c7aa`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  // pollingInterval: 15000,
});

export const walletlink = new WalletLinkConnector({ // coinbase wallet
  url: RPC_URLS[137],
  appName: '',
  supportedChainIds: [1, 4, 80001, 250],
});

export const walletLists = [
    {
        icon: metamaskIcon,
        name: 'MetaMask',
        provider: injected
    },
    {
        icon: walletIcon,
        name: 'WalletConnect',
        provider: walletconnect
    },
    {
        icon: coinbasekIcon,
        name: 'Coinbase wallet',
        provider: walletlink
    },
];

export const cryptoTypes = [
  { networkType: 'sepolia', type: 's_Raiser', typeName: 'Raiser', name: 'ETH', token: '', symbol: eth, symbol1: a_eth, chainId: '0xaa36a7' },
  { networkType: 'sepolia', type: 's_WETH', typeName: 'WETH', name: 'WETH', token: 'ERC20', symbol: eth, symbol1: a_eth , chainId: '0xaa36a7' },
  { networkType: 'sepolia', type: 's_WBTC', typeName: 'WBTC', name: 'WBTC', token: 'ERC20', symbol: wbtc, symbol1: a_wbtc, chainId: '0xaa36a7' },
  { networkType: 'sepolia', type: 's_USDC', typeName: 'USDC', name: 'USDC', token: 'ERC20', symbol: usdc, symbol1: a_usdc, chainId: '0xaa36a7' },
  { networkType: 'sepolia', type: 's_USDT', typeName: 'USDT', name: 'USDT', token: 'ERC20', symbol: usdt, symbol1: a_usdt, chainId: '0xaa36a7' },
  { networkType: 'bsc', type: 'b_Raiser', typeName: 'Raiser', name: 'BNB', token: '', symbol: bnb, symbol1: a_bnb, chainId: '0x38' },
  { networkType: 'bsc', type: 'b_USDT', typeName: 'USDT', name: 'USDT', token: 'BEP20', symbol: usdt, symbol1: a_usdt, chainId: '0x38' },
  { networkType: 'bsc', type: 'b_BUSD', typeName: 'BUSD', name: 'BUSD', token: 'BEP20', symbol: busd, symbol1: a_busd, chainId: '0x38' },
]

export const networks = {
  // bnb: {
  //   chainId: `0x${Number(56).toString(16)}`,
  //   chainName: "Binance Smart Chain Mainnet",
  //   nativeCurrency: {
  //     name: "Binance Chain Native Token",
  //     symbol: "BNB",
  //     decimals: 18
  //   },
  //   rpcUrls: [
  //     "https://bsc-dataseed1.binance.org",
  //     "https://bsc-dataseed2.binance.org",
  //     "https://bsc-dataseed3.binance.org",
  //     "https://bsc-dataseed4.binance.org",
  //     "https://bsc-dataseed1.defibit.io",
  //     "https://bsc-dataseed2.defibit.io",
  //     "https://bsc-dataseed3.defibit.io",
  //     "https://bsc-dataseed4.defibit.io",
  //     "https://bsc-dataseed1.ninicoin.io",
  //     "https://bsc-dataseed2.ninicoin.io",
  //     "https://bsc-dataseed3.ninicoin.io",
  //     "https://bsc-dataseed4.ninicoin.io",
  //     "wss://bsc-ws-node.nariox.org"
  //   ],
  //   blockExplorerUrls: ["https://bscscan.com"]
  // },
  bsc: {
    chainId: `0x${Number(97).toString(16)}`
  },
  ethereum: {
    chainId: `0x${Number(1).toString(16)}`
  },
  sepolia: {
    chainId: `0x${Number(11155111).toString(16)}`
  },
};

export const rpcs = {
  '0xaa36a7': 'https://rpc2.sepolia.org',
  '0x61': 'https://data-seed-prebsc-1-s1.binance.org:8545',
  '0x66eed': 'https://endpoints.omniatech.io/v1/arbitrum/goerli/public'
}