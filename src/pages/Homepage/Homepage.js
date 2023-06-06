import { useEffect, useContext } from "react"

import { Box } from "@mui/material"
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3';

import { Cryptocurrency, ShibartGenerate, Gallery, Roadmap, TokenAirdrop } from '../Homepage'
import { addressSet } from "../../constant/addressSet";
import { testnetABI as ABI } from '../../constant/contractABI';
import { tokenContractABI as TokenABI } from '../../constant/contractABI';
import { Context } from "../../context/AppContext";

export const Homepage = () => {
  const { account } = useWeb3React()
  const { 
    setPoints, 
    setTokenBalance, 
    setCurrentPrice, 
    setTimerValue,
    setNextPrice,
    setContract,
    contract,
    currentChainId,
    setTokenContract,
    cryptoType, 
    setRaiseValue,
  } = useContext(Context)

  
  const loadToeknContract = async () => {
    const tokenContractAddress = addressSet.WETH;
    if(window.web3) {
      return await new window.web3.eth.Contract(TokenABI, tokenContractAddress);
    }
  }
  
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      // window.ethereum.enable();
    }
  }

  useEffect(() => {
    const effect = async () => {
      const loadContract = async () => {
        const raiserContracts = addressSet.filter(( item ) => item.raiser === true );
        raiserContracts.map( async (item, i) => {
          const web3 = new Web3(item.rpcUrl)
          const oneRaiserContract = new web3.eth.Contract(item.abi, item.testnet);
          await oneRaiserContract?.methods.raiseLocal().call()
          .then(res=>{
            setRaiseValue(rs => rs + Number(window.web3.utils.fromWei(res.toString(),'ether')))
          })
          .catch(err=>{
            console.log(err);
          })
        })
      }
      loadContract();
    }
    if(window.web3) {
      effect();
    }
  }, [setRaiseValue]);

  useEffect(() => {
    const effect = async () => {
      const getBalance = async () => {
        var accounts = await window.web3.eth.getAccounts();
        if(accounts.length > 0) {
          let balance = await window.web3.eth.getBalance(accounts[0])
          const balanceValue = window.web3.utils.fromWei(balance, 'ether')
          setTokenBalance(balanceValue) 
        }
      }
      await loadWeb3();
      await getBalance();
    }
    if (window.web3) {
      effect();
    }
  }, [setTokenBalance, currentChainId, account]);

  useEffect(() => {
    const effect = async () => {
      const loadContract = async () => {
        if (window.web3) {
          const currentContractAddress = addressSet.find(( item ) => item.cryptoType === cryptoType )
          const currentABI = ABI.find(( item ) => item.cryptoType === cryptoType )
          return await new window.web3.eth.Contract(currentABI.abi, currentContractAddress.testnet);
        }
      }
      let _contract = await loadContract();
      let _tokenContract = await loadToeknContract();
      setContract(_contract)
      setTokenContract(_tokenContract)
    }
    effect();
  }, [account, currentChainId, setContract, setTokenContract, cryptoType]);

  useEffect(() => {
    const effect = async () => {
      if(account) {
        await contract?.methods.pointsGained(account).call()
        .then(res=>{
          setPoints(res)
        })
        .catch(err=>{
          console.log(err);
        })
      } 
      await contract?.methods.currentPrice().call()
      .then(res=>{
        setCurrentPrice(window.web3.utils.fromWei(res.toString(),'ether'))
      })
      .catch(err=>{
        console.log(err);
      })
      await contract?.methods.currentPrice().call()
      .then(res=>{
        setNextPrice(window.web3.utils.fromWei(res.toString(),'ether'))
      })
      .catch(err=>{
        console.log(err);
      })
    }
    if (window.web3) {
      effect()
    }
  }, [contract, currentChainId, account, setCurrentPrice, setNextPrice, setPoints])

  useEffect(() => {
    const interval = setInterval(  async () => {
      await contract?.methods.launchAt().call()
      .then(res=>{
        const currentTimestamp = new Date().getTime();
        const duration = (currentTimestamp/1000 - res) / 24 / 60 / 60
        setTimerValue(20 - duration.toFixed(5))
      })
      .catch(err=>{
        console.log(err);
      })
    }, 1000);
    return () => clearInterval(interval);
  }, [contract, currentChainId, account, setTimerValue]);

  return (
    <Box mt={2}>
      <Cryptocurrency />
      <ShibartGenerate />
      <Gallery />
      <Roadmap />
      <TokenAirdrop />
    </Box>
  )
}