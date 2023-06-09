import { Box, Typography } from "@mui/material"
import Ticker from 'react-ticker'

import { CustomButton } from "../../components/CustomButton";

import image1 from '../../assets/images/home/sliders/image 2.png'
import image2 from '../../assets/images/home/sliders/image 3.png'
import image3 from '../../assets/images/home/sliders/image 4.png'
import image4 from '../../assets/images/home/sliders/image 5.png'
import image5 from '../../assets/images/home/sliders/image 6.png'
import image6 from '../../assets/images/home/sliders/image 7.png'
import image7 from '../../assets/images/home/sliders/image 8.png'
import image8 from '../../assets/images/home/sliders/image 9.png'
import image9 from '../../assets/images/home/sliders/image 10.png'
import image10 from '../../assets/images/home/sliders/image 11.png'
import image11 from '../../assets/images/home/sliders/image 12.png'
import image12 from '../../assets/images/home/sliders/image 13.png'
import image13 from '../../assets/images/home/sliders/image 14.png'
import image14 from '../../assets/images/home/sliders/image 15.png'
import image15 from '../../assets/images/home/sliders/image 16.png'
import image16 from '../../assets/images/home/sliders/image 17.png'
import image17 from '../../assets/images/home/sliders/image 18.png'
import image18 from '../../assets/images/home/sliders/image 19.png'

const carousels = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image6 },
  { image: image7 },
  { image: image8 },
  { image: image9 },
  { image: image10 },
  { image: image11 },
  { image: image12 },
  { image: image13 },
  { image: image14 },
  { image: image15 },
  { image: image16 },
  { image: image17 },
  { image: image18 },
]

export const ShibartGenerate = () => {

  return (
    <Box py={{ sm: 20, xs: 10 }} sx={{
      background: '#F1F4F4',
    }}>
      <Typography px={4} variant="h1" sx={{
        fontSize: {md: 72, sm: 56, xs: 48},
        lineHeight: { sm: '96px', xs: '48px'},
        textAlign: { sm: 'center', xs: 'left' } 
      }}>
        ShibArt - Generate To Earn
      </Typography>
      <Typography mt={{ sm: 2, xs: 4 }} px={4} variant="h4" sx={{
        textAlign: { sm: 'center', xs: 'left'},
        fontWeight: 400,
        color: '#686A6C !important', 
      }}>
        We are revolutionizing the world of digital art with the power of stable diffusion & blockchain 
      </Typography>

      <Box mt={8} px={{ sm: '', xs: '8px' }}>
          <Ticker move={true} direction={'toRight'}>
          { ({ index }) => (
            <Box display={'flex'} gap={{ sm: 6, xs: 4 }} mx={3}>
              { 
                carousels.map((item, i) => (
                  <Box key={i} component={'img'} src={item.image} alt="banner" sx={{
                    width: { lg: '280px !important', md: '280px !important', sm: '305px !important', xs: '280px !important' },
                    height: { md: '280px', xs: '280px' },
                    borderRadius: '20px',
                  }}/>
                ))
              }
            </Box>
          )}
        </Ticker>
        <Box mt={8} display={'flex'} justifyContent={'center'}>
          <CustomButton title='START CREATING' />
        </Box>
      </Box>
    </Box>
  )
}