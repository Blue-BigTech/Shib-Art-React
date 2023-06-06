import { Button, Typography } from "@mui/material"

export const CustomButton = ({ title, styles, showMore, handleClick }) => {
  return (
    <Button variant='h5'
      onClick={handleClick}
      sx={{
        background: '#3C2C2D',
        borderRadius: '4px',
        padding: '12px 32px',
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: 12,
        lineHeight: '24px',
        letterSpacing: '0.17em',
        color: '#F7FBFA',
        '&:hover': {
          background: '#2c2325',
        },
        ...styles
      }}
    >
      {title}
      {
        title === 'EXPLORER MORE' && showMore !== 0 &&
        <Typography ml={2} variant="h5" sx={{
          display: { sm: 'none', xs: 'block' },
          background: '#E1E2E2',
          borderRadius: '12px',
          padding: '2px 8px',
          color: '#3C2C2D',
        }}>{showMore}</Typography>
      }
    </Button>
  )
}