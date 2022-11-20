import { Card, Typography } from '@mui/material'
import React from 'react'

const Header = (props) => {
  const {title} = props
    return (
    <div>
    <Card>
      <Typography sx={{display:'grid', placeItems:'center',fontSize:22, fontWeight:700}}>{title}</Typography>
    </Card>
    </div>
  )
}

export default Header
