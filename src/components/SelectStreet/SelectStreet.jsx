import React, { useEffect } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import {
  setSelectStreetAction,
  setStreetAction,
} from '../../redux/actions/streetAction'
import { getApiData } from '../../api/getApiData'

const SelectStreet = () => {
  const dispatch = useDispatch()
  const { street, selectStreet } = useSelector((state) => state.street)

  useEffect(() => {
    getApiData('/Request/streets').then((street) => {
      dispatch(setStreetAction(street))
    })
  }, [])

  const handleChange = (event, street) => {
    dispatch(setSelectStreetAction(street))
  }

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      getOptionLabel={(street) => `${street.name}`}
      options={street}
      sx={{ m: 1, minWidth: 200 }}
      renderInput={(params) => <TextField {...params} label="Улица" />}
      value={selectStreet}
      onChange={handleChange}
    />
  )
}

export default SelectStreet
