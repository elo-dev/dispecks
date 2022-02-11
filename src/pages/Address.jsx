import React from 'react'
import Box from '@mui/material/Box'

import SelectStreet from '../components/SelectStreet/SelectStreet'
import SelectHouse from '../components/SelectHouse/SelectHouse'
import SelectApartament from '../components/SelectApartament/SelectApartament'

const Address = () => {
  return (
    <Box flex={true} className="container" sx={{ minWidth: 120 }}>
      <SelectStreet />
      <SelectHouse />
      <SelectApartament />
    </Box>
  )
}

export default Address
