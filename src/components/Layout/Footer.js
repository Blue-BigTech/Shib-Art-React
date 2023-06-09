import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Button, Link } from "@mui/material"

import footerLogo from '../../assets/images/home/footer-logo.png'
import twitterIcon from '../../assets/images/home/twitter.png'
import discordIcon from '../../assets/images/home/discord.png'

const footers = {
  shibart: [
    { name: "Buy $ART", url: '#buy$ART' },
    { name: "Whitepaper", url: 'https://docs.google.com/document/d/1RbQczVVOjoHFzwivRfQSpK66b3dofENvHcSQF9WW7fQ/edit' },
  ],
  info: [
    { name: "FAQ", url: '/FAQ' },
    { name: "Roadmap", url: '#Roadmap' },
    { name: "Airdrop", url: '#Airdrop' },
  ],
  social: [
    { name: 'Twitter', icon: twitterIcon, url: 'https://twitter.com/ShibartAI' },
    { name: 'Discord', icon: discordIcon, url: 'https://discord.gg/QSrHBRgr7h' },
  ]
}

export const Footer = () => {
  const [ cookiStatus, setCookiStatus ] = useState(false)
  const navigate = useNavigate();

  return (
    <Box pt={{ sm: 20, xs: 10 }} sx={{
      maxWidth: '1440px',
      margin: 'auto',
    }}>
      <Grid container spacing={2} pb={10} px={{ sm: 20, xs: 4 }}>
        <Grid item sm={6} xs={12}>
          <Box component={'img'} src={footerLogo} alt='' 
            onClick={()=>navigate('/')}
            sx={{
              width: '200px',
              height: '50px',
              cursor: 'pointer'
            }} 
          />
          <Typography mt={4} variant="h4" sx={{
            fontSize: 18,
            color: '#686A6C',
          }}>
            ShibArt - Generate To Earn
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12} mt={{ sm: 0, xs: 4 }}
          display={'flex'}
          justifyContent={'space-between'}
        >
          {
            Object.keys(footers).map((key, i) => {
              const items= footers[key]
              return (
                <Box key={i} gap={{ sm: 6, xs: 4 }}
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={{ sm: 'initial', xs: 'center'}}
                >
                  <Typography variant="h5" sx={{
                    display: key==='social' && { sm: 'block', xs: 'none' },
                    color: '#fe6768 !important',
                    textTransform: 'uppercase',
                  }}>
                    {key}
                  </Typography>
                  {
                    items.map((item, j) => (
                      <Box key={j}>
                        {
                          item.name === 'FAQ' ?
                          <Typography variant="h5"
                            onClick={()=> navigate('/FAQ')}
                            sx={{ 
                              cursor: 'pointer',
                              color: '#686A6C!important',
                            }}
                          >FAQ</Typography>
                          :
                          <Link
                            href={item.url} 
                            target={ item.name === 'Whitepaper' ? '_blank' : '_self' }
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              cursor: 'pointer',
                              textDecoration: 'none',
                            }}
                          >
                            {
                              item.icon && 
                              <Box component={'img'} src={item.icon} alt='' sx={{
                                width: '20px',
                                height: '20px',
                              }} />
                            }
                            <Typography variant="h5" sx={{
                              display: item.icon && { sm: 'block', xs: 'none' },
                              fontSize: 14,
                              fontWeight: 500,
                              color: '#686A6C !important',
                            }}>{item.name}</Typography>
                          </Link>
                        }
                      </Box>
                    ))
                  }
                </Box>
              )
            })
          }
        </Grid>
      </Grid>
      { cookiStatus === false &&
        <Box px={{ sm: 20, xs: 4 }} py={{ sm: 6, xs: 4 }}
          display={'flex'}
          flexDirection={{ sm: 'row', xs: 'column' }}
          justifyContent={'space-between'}
          alignItems={{ sm: 'center', xs: 'initial'}}
          sx={{
            borderTop: '1px solid #E1E2E2',
          }}
        >
          <Typography variant="h5" sx={{
            color: '#A6AEAD !important',
            fontSize: 14,
          }}>
            Copyright © 2023 ShibArt
          </Typography>
          <Box display={'flex'} alignItems={'center'} gap={{ sm: 8, xs: 2}} mt={{ sm: 0, xs: 4 }}>
            <Typography variant="h5" sx={{
              color: '#A6AEAD !important',
              fontSize: 14
            }}>
              We use cookies for better service.
            </Typography>
            <Button variant='h5'
              onClick={()=> setCookiStatus(true)}
              sx={{
                border: '2px solid #3C2C2D',
                borderRadius: '4px',
                padding: { sm: '8px 20px', xs: '4px 16px'},
                color: '#3C2C2D !important',
                fontWeight: 700,
                fontSize: { sm: 14, xs: 12 },
                '&:hover': {
                  background: '#3C2C2D',
                  color: 'white !important',
                }
              }}
            >ACCEPT</Button>
          </Box>
        </Box>
      }
    </Box>
  )
}