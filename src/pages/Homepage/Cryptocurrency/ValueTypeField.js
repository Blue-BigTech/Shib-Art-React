import React, { useContext, useEffect } from "react"
import { Box, Grid, Typography } from "@mui/material"

import { InputField } from '../../../components/InputField'
import { Context } from "../../../context/AppContext"

import { addressSet } from "../../../constant/addressSet"
import shibartIcon from '../../../assets/images/home/shibartIcon.png'

export const ValueTypeField = ({
  selectedTokenIcon, 
  tokenBalance,
  buyValue,
  setBuyValue,
  pointsValue,
  setPointsValue,
  currentChainId
}) => {
  const { contract } = useContext(Context)

  useEffect(()=> {
    setBuyValue(0)
    setPointsValue(0)
  }, [currentChainId, setBuyValue, setPointsValue])

  const handleMaxValue = async () => {
    setBuyValue(tokenBalance)
    let value = window.web3.utils.toWei(tokenBalance.toString(), 'ether');
    const currentContractAddress = addressSet.find(( item ) => item.chainId === currentChainId && item.estimate === true )
    await contract?.methods.estimate(currentContractAddress.testnet, value).call()
    .then(res=>{
      setPointsValue(res)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  const handleBuyChange = async (e) => {
    if(tokenBalance < e.target.value) {
      alert("Your amount is too much")
      return
    }
    setBuyValue(e.target.value)
    if(e.target.value !== '') {
      let value = window.web3.utils.toWei(e.target.value.toString(), 'ether');
      const currentContractAddress = addressSet.find(( item ) => item.chainId === currentChainId && item.estimate === true )
      await contract?.methods.estimate(currentContractAddress.testnet, value).call()
      .then(res=>{
        setPointsValue(res)
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }

  const handlePointsChange = (e) => {
    setPointsValue(e.target.value)
  }

  return (
    <Grid mt={4} container spacing={4}>
      <Grid item sm={6} xs={12}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography mb={2} variant="h5" sx={{
            color: '#555555 !important',
            fontSize: 14,
          }}>You pay</Typography>
          <Typography 
            onClick={() => handleMaxValue()}
            sx={{
              fontSize: 18,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Max
          </Typography>
        </Box>
        <InputField 
          icon={selectedTokenIcon}
          handleChange={handleBuyChange}
          inputValue={buyValue}
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <Typography mb={2} variant="h5" sx={{
          color: '#555555 !important',
          fontSize: 14,
        }}>Points your receive</Typography>
        <InputField 
          icon = {shibartIcon}
          handleChange={handlePointsChange}
          inputValue={pointsValue}
        />
      </Grid>
    </Grid>
  )
}