import { useState, useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material"
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

import { palette } from "../../themes";

import roadmapImage from '../../assets/images/home/roadmap.png'
import pointIcon from '../../assets/images/home/placeholder.png'

const roadmaps = {
  alreadyDone: [
    { text: 'AI art generator - operational and connected to external GPUs' },
    { text: 'Working platform' },
    { text: 'User profiles' },
    { text: 'Gallery' },
    { text: 'Rating system' },
    { text: 'Comments, direct messaging, and comments system' },
  ],
  Q3: [
    { text: 'TGE' },
    { text: 'CEX listings (Aiming for Binance)' },
    { text: 'Chatbot Integrations' },
    { text: 'Staking platform live' },
    { text: 'Platform launch' },
    { text: 'Mint NFT Collections' },
    { text: 'Continue to scale infrastructure' },
  ],
  Q4: [
    { text: 'Client-side software to harness distributed GPU power' },
    { text: 'Third party wallet for Miners' },
    { text: '50,000 holders' },
    { text: 'New roadmap announced' },
  ]
}

export const Roadmap = () => {
  const [open, setOpen] = useState({})

  useEffect(() => {
    const keys = Object.keys(roadmaps)
    setOpen(keys.reduce((a, v) => ({ ...a, [v]: true }), {}))
  }, [])

  return (
    <Box id='Roadmap' sx={{
      maxWidth: '1440px',
      margin: 'auto',
    }}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12} sx={{
          position: 'relative', 
          background: '#F8CAA0',
          paddingTop: { sm: '120px !important', xs: '40px !important' },
        }}>
          <Typography variant="h1" px={{ sm: 20, xs: 4 }} mb={{ sm: 6, xs: 4}} sx={{
            fontSize: {md: 72, sm: 56, xs: 40},
            lineHeight: { md: '96px', sm: '68px', xs: '48px'},
          }}>
            Roadmap
          </Typography>
          <Button sx={{
            width: { sm: '192px', xs: '120px'},
            height: { sm: '72px', xs: '45px'},            
            background: '#FE6768',
            borderRadius: { sm: '48px', xs: '30px'},
            marginLeft: { sm: '80px', xs: '16px'},
            '&:hover': {
              background: '#e03738',
            }
          }}>
            <TrendingFlatOutlinedIcon sx={{
              fontSize: { sm: 80, xs: 60 },
              color: palette.common.black,
            }}/>
          </Button>
          <Box display={'flex'} justifyContent={'end'}>
            <Box component={'img'} src={roadmapImage} alt='' sx={{
              width: { sm: '80%', xs: '70%' },
            }} />
          </Box>
        </Grid>
        <Grid item md={6} xs={12} sx={{
          background: '#F1F4F4',
          padding: { sm: '32px !important', xs: '0px 24px !important' },
        }}>
          {
            Object.keys(roadmaps).map((key, i) => {
              const items= roadmaps[key]
              return (
                <Box key={i} gap={{ sm: 9, xs: 6 }} py={{ sm: 6, xs: 10 }}
                  display={'flex'}
                  flexDirection={'column'}
                  sx={{
                    borderBottom: i ===1 && '1px solid #E1E2E2',
                    borderTop: i===1 && '1px solid #E1E2E2',
                  }}
                >
                  <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant="h2">
                      { key==='alreadyDone' ? 'Already Done' : key==='Q3' ? 'Q3, 2023' : 'Q4, 2024' }
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
                    items.map((item, j) => (
                      <Box key={j} display={'flex'} alignItems={'center'} gap={4}>
                        <Box component={'img'} src={pointIcon} alt='' sx={{
                          width: { sm: '24px', xs: '20px' },
                          height: { sm: '24px', xs: '20px' },
                        }} />
                        <Typography variant="h4" sx={{
                          fontSize: { sm: 18, xs: 16 },
                          color: '#686A6C',
                        }}>{item.text}</Typography>
                      </Box>
                    ))
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