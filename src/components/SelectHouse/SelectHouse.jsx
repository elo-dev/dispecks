import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import {
  setHouseAction,
  setSelectHouseIdAction,
  setSelectHouseNumAction,
} from '../../redux/actions/houseAction'
import { getApiData } from '../../api/getApiData'

const SelectHouse = () => {
  const dispatch = useDispatch()
  const { house, selectHouseId } = useSelector((state) => state.house)
  const { selectStreetId } = useSelector((state) => state.street)

  useEffect(() => {
    dispatch(setHouseAction([]))
    dispatch(setSelectHouseIdAction(''))

    if (selectStreetId) {
      getApiData('/Request/houses/', selectStreetId?.id).then((house) => {
        dispatch(setHouseAction(house))
      })
    }
  }, [selectStreetId])

  const handleChange = (numHouse) => {
    dispatch(setSelectHouseIdAction(numHouse.target.value))
    house.forEach((num) => {
      if (num.id === numHouse.target.value) {
        dispatch(setSelectHouseNumAction(num.name))
      }
    })
  }

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>Дом</InputLabel>
      <Select value={selectHouseId} label="Кв./офис" onChange={handleChange}>
        {house.map((num) => (
          <MenuItem key={num.id} value={num.id}>
            {num.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectHouse
