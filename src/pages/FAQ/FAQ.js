import { useState, useEffect } from 'react'

import { Box, Grid, Typography, Button } from "@mui/material"
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

import { palette } from "../../themes";

import FAQ_icon from '../../assets/images/FAQ/FAQ_DOG.png'

const FAQs = {
  1: { text: '$ART is an ERC20 token that serves as the fuel for the SHIBART protocol, which is an image and video generation network. It is used to pay for generated images and can be earned by contributing GPU power to the network.' },
  2: { text: 'The AI image generator uses sophisticated machine learning algorithms and Stable Diffusion to create unique images (and soon videos) based on user input. The team creates proprietary, cutting edge art models that allow users to create many different styles of content.' },
  3: { text: 'You can earn $ART by dedicating some of your computers GPU power to the network; as users generate images using your GPU power, you will earn $ART. You can also earn $ART by staking your $ART as liquidity. We will release a guide on staking at a later date.' },
  4: { text: 'Yes, you can buy $ART during the fair launch token sale. After the sale is over, you can buy $ART directly on any decentralized exchange and, soon, top CEXes such as Kucoin and Binance.' },
  5: { text: 'The suitability of your computer primarily depends on the power of your GPU. High-performance GPUs are more likely to generate $ART at a faster rate. Low-power GPUs may be blocked from contributing to the network at all.' },
  6: { text: 'The amount of $ART you can earn depends on a number of factors, including the power of your GPU and the time you dedicate to the network. More powerful GPUs and longer participation periods result in more $ART earnings.' },
  7: { text: 'After acquiring and staking your $ART, you may spend your staked amount to generate images on our platform. The total cost should be roughly $0.01 to $0.02 per image. Simply connect your wallet, provide your specifications for the image you want to generate, and pay with $ART.' },
  8: { text: 'Our platform uses state-of-the-art security measures to protect user data and ensure the safety of transactions. Our userbase is anonymous and accounts are only made through wallet connections–we never collect personally identifying information about you.' },
  9: { text: 'The cost of generating is pegged to $0.01 to $0.02 per image depending on the settings used, but is paid in $ART. This means the cost of generating an image costs varying amounts of $ART depending on market price. The exact cost will be shown before generating an image.' },
  10: { text: 'We provide a comprehensive support system for our users on Discord, please make a ticket there if you need assistance.' },
}

export const FAQ = () => {
  const [open, setOpen] = useState({})

  useEffect(() => {
    const keys = Object.keys(FAQs)
    setOpen(keys.reduce((a, v) => ({ ...a, [v]: false }), {}))
  }, [])

  return (
    <Box sx={{
      maxWidth: '1440px',
      margin: 'auto',
    }}>
      <Grid container>
        <Grid item sm={6} xs={12} sx={{
          background: '#F8CAA0',
          position: 'relative',
          height: { sm: 'initial', xs: '550px' }
        }}>
          <Box p={{ md: 20, sm: 10, xs: 4 }}>
            <Typography variant="h1" sx={{
              fontSize: {md: 72, sm: 56, xs: 48},
              lineHeight: { sm: '96px', xs: '48px'},
            }}>FAQ</Typography>
            <Button sx={{
              width: { sm: '192px', xs: '120px'},
              height: { sm: '72px', xs: '35px'},            
              background: '#FE6768',
              borderRadius: { sm: '48px', xs: '30px'},
              marginTop: { sm: '20px', xs: '12px'},
              '&:hover': {
                background: '#e03738',
              }
            }}>
              <TrendingFlatOutlinedIcon sx={{
                fontSize: { sm: 80, xs: 60 },
                color: palette.common.black,
              }}/>
            </Button>
          </Box>
          <Box component={'img'} alt='' src={FAQ_icon} sx={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            right: 0,
          }} />
        </Grid>
        <Grid item sm={6} xs={12} p={{ sm: 10, xs: 4 }}>
          {
            Object.keys(FAQs).map((key, i) => {
              const item= FAQs[key]
              return (
                <Box key={i} gap={{ sm: 6, xs: 4 }} py={{ sm: 6, xs: 10 }}
                  display={'flex'}
                  flexDirection={'column'}
                  sx={{
                    borderBottom: '1px solid #E1E2E2',
                  }}
                >
                  <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant="h2" sx={{
                      fontSize: { md: 32, xs: 24 },
                      lineHeight: { md: '40px', xs: '32px' },
                    }}>
                      { 
                        key==='1' ? 'What is $ART?' : 
                        key==='2' ? 'How does the AI image generator work?' : 
                        key==='3' ? 'How can I earn $ART?' : 
                        key==='4' ? 'Can I buy $ART directly?' : 
                        key==='5' ? 'Is my computer suitable for contributing to the network?' : 
                        key==='6' ? 'How much $ART can I earn?' : 
                        key==='7' ? 'How do I use $ART to generate images?' : 
                        key==='8' ? 'How secure is the network?' : 
                        key==='9' ? 'What is the cost of generating an image?' : 
                        key==='10' ? 'What if I have a problem or need support?' : ''
                      }
                    </Typography>
                    { open[key] ?
                        <RemoveCircleOutlineOutlinedIcon 
                          onClick={()=> {
                            setOpen({...open, [key]: !open[key]})
                          }}
                          sx={{
                            fontSize: 28,
                            color: '#686A6C',
                            cursor: 'pointer',
                          }}  
                        />
                      :
                        <ControlPointOutlinedIcon 
                          onClick={()=> {
                            setOpen({...open, [key]: !open[key]})
                          }}
                          sx={{
                            fontSize: 28,
                            color: '#686A6C',
                            cursor: 'pointer',
                          }}  
                        />
                    }
                  </Box>
                  { open[key] &&
                    <Typography variant="h4" sx={{
                      fontSize: { sm: 18, xs: 16 },
                      lineHeight: '32px',
                      color: '#686A6C',
                    }}>{item.text}</Typography>
                  }
                </Box>
              )
            })
          }
        </Grid>
      </Grid>
    </Box>
  )
}