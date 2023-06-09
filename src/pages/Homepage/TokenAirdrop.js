import { Box, Grid, Typography, useMediaQuery } from "@mui/material"

import { CustomButton } from "../../components/CustomButton";

const items = [
  { title: 'Purchase $ART in presale', text: 'Purchasing any amount will generate a referral code.' },
  { title: 'Share your referral code', text: 'All sales made from your referral code are tracked.' },
  { title: 'Start earning $ART airdrop', text: 'Receive an airdrop on launch!' },
]

export const TokenAirdrop = () => {
  const matches = useMediaQuery('(min-width:426px)');

  return (
    <Box id='Airdrop'
      pt={{ sm: 20, xs: 10 }} 
      pb={{ sm: 12, xs: 10 }} 
      px={{ sm: 20, xs: 4 }}
      sx={{
        borderBottom: { sm: 'none', xs: '2px solid #e3e3e3' },
        maxWidth: '1440px',
        margin: 'auto',
      }}
    >
      <Typography px={{ sm: 4, xs: 0 }} mb={{ sm: 0, xs: 2 }} variant="h1" sx={{
        fontSize: {md: 72, sm: 56, xs: 48},
        lineHeight: { md: '96px', sm: '68px', xs: '48px'},
        textAlign: { sm: 'center', xs: 'left'} 
      }}>
        <span style={{ color: matches? '#F29B4C' : '#FE6768' }}>$ART</span> 50 billion token airdrop
      </Typography>
      <Typography px={{ sm: 4, xs: 0 }} variant="h4" sx={{
        textAlign: { sm: 'center', xs: 'left'},
        fontWeight: 400,
        color: '#686A6C !important',
        lineHeight: { lg: '32px', xs: '28px' },
        maxWidth: { md: '55%', sm: '80%', xs: '100%' },
        margin: 'auto',
      }}>
        Help us reach our presale target and receive a huge $ART airdrop! The reward will be based on your cumulative referral amount. Follow these steps to join:
      </Typography>

      <Grid container spacing={2} mt={8} gap={{ sm: 0, xs: 4 }}>
        {
          items.map((item, i) => (
            <Grid key={i} item md={4} xs={12}>
              <Box px={{ lg: 20, md: 12, xs: 6 }} pt={{ lg: 20, md: 12, xs: 6 }} pb={12} sx={{
                height: { lg: '300px', sm: '280px', xs: 'initial'},
                '&:hover': {
                  background: '#F7FBFA',
                  boxShadow: '0px 32px 48px -16px rgba(0, 0, 0, 0.1)',
                }
              }}>
                <Typography mt={2} variant="h2" sx={{
                  width: 'fit-content',
                  background: '#8C7662',
                  borderRadius: '4px',
                  padding: '5px 20px',
                  color: '#F7FBFA',
                  fontSize: { lg: 32, xs: 24 },
                }}>{i+1}</Typography>
                <Typography variant="h2" mt={10} sx={{
                  color: '#202025',
                  fontSize: { lg: 32, xs: 24 },
                  lineHeight: { lg: '40px', xs: '28px' },
                }}>{item.title}</Typography>
                <Typography variant="h4" mt={20} sx={{
                  fontWeight: 400,
                  color: '#686A6C',
                }}>{item.text}</Typography>
              </Box>
            </Grid>
          ))
        }
      </Grid>

      <Box display={'flex'} justifyContent={'center'} mt={12}>
        <CustomButton title="BUY $ART NOW" />
      </Box>
    </Box>
  )
}