import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import {
  setHouseAction,
  setSelectHouseAction,
} from '../../redux/actions/houseAction'
import { getApiData } from '../../api/getApiData'

const SelectHouse = () => {
  const dispatch = useDispatch()
  const { house, selectHouse } = useSelector((state) => state.house)
  const { selectStreet } = useSelector((state) => state.street)

  useEffect(() => {
    dispatch(setHouseAction([]))
    dispatch(setSelectHouseAction(''))
    
    if (selectStreet) {
      getApiData('/Request/houses/', selectStreet?.id).then((house) => {
        dispatch(setHouseAction(house))
      })
    }
  }, [selectStreet])

  const handleChange = (numHouse) => {
    dispatch(setSelectHouseAction(numHouse.target.value))
  }

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>Дом</InputLabel>
      <Select value={selectHouse} label="Кв./офис" onChange={handleChange}>
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
